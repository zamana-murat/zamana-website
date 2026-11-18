/**
 * GET /api/claude-status
 * Cloudflare Pages Function: unofficial Turkish view of https://status.claude.com.
 *
 * Fetches summary.json + incidents.json + the 90-day uptime data in parallel, normalizes them
 * into one compact Turkish-labelled JSON (shape: StatusPayload in src/lib/claude-status.ts)
 * and caches the result for 60 s with the Cache API (`caches.default`).
 *
 * Env vars (Pages > Settings > Environment variables):
 *   ANTHROPIC_API_KEY  (secret, optional) enables Turkish translation of incident titles and
 *                      update texts with claude-haiku-5-5. Each text is translated once and cached
 *                      for 30 days, keyed by a SHA-256 of the source text. Without the key, or when
 *                      the call fails / is slow, the English original is returned untranslated.
 *
 * Upstream failure: serves the last good copy (stale: true) when one exists, else 502 JSON.
 * Note: the Cache API is a no-op on *.pages.dev preview hosts; a small in-memory cache per
 * isolate covers that case.
 */

import {
  INCIDENTS_URL,
  KNOWN_COMPONENTS,
  STATUS_SOURCE,
  SUMMARY_URL,
  UPTIME_SHOWCASE_URL,
  applyTranslations,
  collectTexts,
  isSummary,
  normalize,
  normalizeUptime,
  parseUptimeFromHtml,
  toTurkeyTime,
  type ComponentUptime,
  type StatusError,
  type StatusPayload,
} from '../../src/lib/claude-status';
import { STATIC_TR } from '../../src/lib/claude-status-tr';

interface Env {
  ANTHROPIC_API_KEY?: string;
}

const FRESH_TTL = 60; // seconds
const FRESH_TTL_PARTIAL = 15; // translation still running: re-check sooner
const STALE_TTL = 60 * 60 * 24; // last good copy
const UPTIME_TTL = 600; // uptime is daily data
const TR_TTL = 60 * 60 * 24 * 30; // translations
const UPSTREAM_TIMEOUT_MS = 5000;
const TRANSLATE_WAIT_MS = 3500; // max time the response waits for translation
const TRANSLATE_HARD_TIMEOUT_MS = 25000; // background completion limit
const TRANSLATE_MAX_PER_CALL = 40;
const TRANSLATE_MODEL = 'claude-haiku-5-5';
const ANTHROPIC_VERSION = '2026-10-21';
const CACHE_NS = '/__cache/claude-status/v1';

// ---- per-isolate memory cache (also covers hosts where caches.default is a no-op) ----
let memFresh: { until: number; body: string } | null = null;
let memStale: string | null = null;
let memUptime: { until: number; key: string; data: Record<string, ComponentUptime> } | null = null;
const memTr = new Map<string, string>();
const MEM_TR_MAX = 1000;
const translating = new Set<string>(); // texts with a translation call in flight

const json = (body: unknown, status = 200, maxAge = FRESH_TTL) =>
  new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? `public, max-age=${maxAge}` : 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });

const cacheReq = (origin: string, path: string) => new Request(new URL(`${CACHE_NS}${path}`, origin).toString());

const getCache = (): Cache | null => {
  try {
    return typeof caches !== 'undefined' ? (caches as unknown as { default: Cache }).default : null;
  } catch {
    return null;
  }
};

async function fetchWithTimeout(url: string, ms: number, init: RequestInit = {}): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchJson(url: string, ms = UPSTREAM_TIMEOUT_MS): Promise<unknown> {
  const r = await fetchWithTimeout(url, ms, {
    headers: { accept: 'application/json', 'user-agent': 'zamana-status-tr/1.0' },
  });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.json();
}

// ---------------------------------------------------------------------------
// Uptime: /uptime_showcase JSON first, legacy inline `uptimeData` in the HTML as fallback.
// ---------------------------------------------------------------------------
async function getUptime(
  ids: string[],
  origin: string,
  cache: Cache | null,
  waitUntil: (p: Promise<unknown>) => void,
): Promise<Record<string, ComponentUptime> | null> {
  const key = [...ids].sort().join(',');
  if (memUptime && memUptime.key === key && memUptime.until > Date.now()) return memUptime.data;

  const req = cacheReq(origin, `/uptime?c=${encodeURIComponent(key)}`);
  if (cache) {
    try {
      const hit = await cache.match(req);
      if (hit) {
        const data = (await hit.json()) as Record<string, ComponentUptime>;
        memUptime = { until: Date.now() + UPTIME_TTL * 1000, key, data };
        return data;
      }
    } catch {
      /* ignore cache errors */
    }
  }

  let data: Record<string, ComponentUptime> | null = null;
  try {
    data = normalizeUptime(await fetchJson(UPTIME_SHOWCASE_URL + encodeURIComponent(ids.join(','))));
  } catch {
    data = null;
  }
  if (!data) {
    try {
      const r = await fetchWithTimeout(`${STATUS_SOURCE}/`, UPSTREAM_TIMEOUT_MS, { headers: { accept: 'text/html' } });
      if (r.ok) data = parseUptimeFromHtml(await r.text());
    } catch {
      data = null;
    }
  }
  if (!data) return null;

  memUptime = { until: Date.now() + UPTIME_TTL * 1000, key, data };
  if (cache) {
    waitUntil(
      cache
        .put(req, new Response(JSON.stringify(data), { headers: { 'cache-control': `max-age=${UPTIME_TTL}`, 'content-type': 'application/json' } }))
        .catch(() => undefined),
    );
  }
  return data;
}

// ---------------------------------------------------------------------------
// Translation (optional)
// ---------------------------------------------------------------------------
async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${TRANSLATE_MODEL}|${text}`));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const rememberTr = (src: string, tr: string) => {
  if (memTr.size >= MEM_TR_MAX) {
    const first = memTr.keys().next().value;
    if (first !== undefined) memTr.delete(first);
  }
  memTr.set(src, tr);
};

const SYSTEM_PROMPT = [
  'You translate short English incident texts from the Claude status page (status.claude.com) into natural, plain Turkish for a general audience in Türkiye.',
  'Keep product and company names unchanged: Claude, claude.ai, Claude Code, Claude Cowork, Claude Console, Claude API, Anthropic, AWS, Google Cloud, Microsoft Foundry, model names such as Opus, Sonnet, Haiku, Fable.',
  'Times marked "TSİ" are already converted to Türkiye time: keep them exactly. Write "03:19 TSİ on November 18" as "18 Kasım 03:19 TSİ" (Turkish order and month names) and "(next day)" as "(ertesi gün)".',
  'If a Pacific time (PT, am/pm) appears next to a TSİ time, drop the Pacific time. If a time is given only in PT, keep it and write it as "ABD Pasifik saatiyle 17:00".',
  'Render "Impact occurred from X to Y." as "Etki süresi: X ile Y arası." and "Elevated errors on ..." as "... artan hatalar".',
  'Never use the em dash character; use a comma instead.',
  'The input is a JSON array of strings. Return exactly one translation per input string, in the same order.',
].join(' ');

async function callTranslate(texts: string[], apiKey: string): Promise<string[] | null> {
  const r = await fetchWithTimeout('https://api.anthropic.com/v1/messages', TRANSLATE_HARD_TIMEOUT_MS, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model: TRANSLATE_MODEL,
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      output_config: {
        effort: 'low',
        format: {
          type: 'json_schema',
          schema: {
            type: 'object',
            properties: { translations: { type: 'array', items: { type: 'string' } } },
            required: ['translations'],
            additionalProperties: false,
          },
        },
      },
      // Times are rewritten to TSİ in code first, so the model never does clock arithmetic.
      messages: [{ role: 'user', content: JSON.stringify(texts.map((t) => toTurkeyTime(t))) }],
    }),
  });
  if (!r.ok) {
    console.error('[claude-status] translate HTTP', r.status, (await r.text()).slice(0, 300));
    return null;
  }
  const msg = (await r.json()) as { stop_reason?: string; content?: { type: string; text?: string }[] };
  if (msg.stop_reason === 'refusal' || msg.stop_reason === 'max_tokens') {
    console.error('[claude-status] translate stop_reason', msg.stop_reason);
    return null;
  }
  const text = (msg.content || []).find((b) => b.type === 'text')?.text;
  if (!text) return null;
  const parsed = JSON.parse(text) as { translations?: unknown };
  const out = parsed.translations;
  if (!Array.isArray(out) || out.length !== texts.length || out.some((t) => typeof t !== 'string' || !t.trim())) {
    console.error('[claude-status] translate: unexpected shape');
    return null;
  }
  // em dash (U+2014) is not allowed in Turkish site text: replace with a comma
  return (out as string[]).map((t) => t.replace(/\s*\u2014\s*/g, ', ').trim());
}

/**
 * Resolves translations for `texts` into memTr. Cached ones are loaded first; missing ones go to
 * the API in one batch. Returns a promise that completes (and writes the cache) even after the
 * response has been sent, via waitUntil.
 */
async function translateAll(texts: string[], apiKey: string, origin: string, cache: Cache | null): Promise<void> {
  const missing: string[] = [];
  await Promise.all(
    texts.map(async (t) => {
      if (memTr.has(t)) return;
      if (cache) {
        try {
          const hit = await cache.match(cacheReq(origin, `/tr/${await sha256(t)}`));
          if (hit) {
            rememberTr(t, await hit.text());
            return;
          }
        } catch {
          /* ignore */
        }
      }
      missing.push(t);
    }),
  );
  const batch = missing.filter((t) => !translating.has(t)).slice(0, TRANSLATE_MAX_PER_CALL);
  if (batch.length === 0) return;
  batch.forEach((t) => translating.add(t));
  try {
    const result = await callTranslate(batch, apiKey);
    if (!result) return;
    await Promise.all(
      batch.map(async (src, i) => {
        rememberTr(src, result[i]);
        if (cache) {
          await cache
            .put(
              cacheReq(origin, `/tr/${await sha256(src)}`),
              new Response(result[i], { headers: { 'cache-control': `max-age=${TR_TTL}`, 'content-type': 'text/plain; charset=utf-8' } }),
            )
            .catch(() => undefined);
        }
      }),
    );
  } catch (err) {
    console.error('[claude-status] translate failed:', err);
  } finally {
    batch.forEach((t) => translating.delete(t));
  }
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  // Keep the call bound to the context object (detached waitUntil can throw "Illegal invocation").
  const waitUntil = (p: Promise<unknown>) => context.waitUntil(p);
  const origin = new URL(request.url).origin;
  const cache = getCache();
  const freshReq = cacheReq(origin, '/fresh');
  const staleReq = cacheReq(origin, '/stale');

  // 1. Fresh copy (memory, then Cache API)
  if (memFresh && memFresh.until > Date.now()) return json(memFresh.body);
  if (cache) {
    try {
      const hit = await cache.match(freshReq);
      if (hit) return json(await hit.text());
    } catch {
      /* ignore */
    }
  }

  // 2. Upstream, in parallel
  const knownIds = KNOWN_COMPONENTS.map((c) => c.id);
  const [summaryRes, incidentsRes, uptimeRes] = await Promise.allSettled([
    fetchJson(SUMMARY_URL),
    fetchJson(INCIDENTS_URL),
    getUptime(knownIds, origin, cache, waitUntil),
  ]);

  if (summaryRes.status !== 'fulfilled' || !isSummary(summaryRes.value)) {
    console.error('[claude-status] summary failed:', summaryRes.status === 'rejected' ? summaryRes.reason : 'bad shape');
    let staleBody = memStale;
    if (!staleBody && cache) {
      try {
        const hit = await cache.match(staleReq);
        if (hit) staleBody = await hit.text();
      } catch {
        /* ignore */
      }
    }
    if (staleBody) {
      try {
        const p = JSON.parse(staleBody) as StatusPayload;
        p.stale = true;
        return json(p, 200, 30);
      } catch {
        /* fall through */
      }
    }
    const err: StatusError = {
      ok: false,
      error: 'upstream_unavailable',
      message: 'Durum bilgisi şu an alınamadı. Resmi sayfaya bakın: https://status.claude.com',
      source: STATUS_SOURCE,
    };
    return json(err, 502);
  }

  const summary = summaryRes.value as { components: { id: string }[] };
  let uptime = uptimeRes.status === 'fulfilled' ? uptimeRes.value : null;
  // New components we do not know yet: one extra uptime request.
  const unknownIds = summary.components.map((c) => c.id).filter((id) => id && !knownIds.includes(id));
  if (uptime && unknownIds.length) {
    const extra = await getUptime(unknownIds, origin, cache, waitUntil).catch(() => null);
    if (extra) uptime = { ...uptime, ...extra };
  }

  const payload = normalize(summary, incidentsRes.status === 'fulfilled' ? incidentsRes.value : null, { uptime, via: 'api' });

  // 3. Translation: hand-made STATIC_TR first (always), then optional Haiku for the rest (bounded wait)
  const apiKey = env.ANTHROPIC_API_KEY;
  if (apiKey) {
    payload.translation.enabled = true;
    const texts = collectTexts(payload).filter((t) => !STATIC_TR.has(t));
    if (texts.length) {
      const job = translateAll(texts, apiKey, origin, cache);
      waitUntil(job.catch(() => undefined));
      await Promise.race([job.catch(() => undefined), new Promise((r) => setTimeout(r, TRANSLATE_WAIT_MS))]);
    }
  }
  payload.translation.complete = applyTranslations(payload, new Map([...memTr, ...STATIC_TR]));

  // 4. Store + respond
  const body = JSON.stringify(payload);
  const ttl = payload.translation.enabled && !payload.translation.complete ? FRESH_TTL_PARTIAL : FRESH_TTL;
  memFresh = { until: Date.now() + ttl * 1000, body };
  memStale = body;
  if (cache) {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    waitUntil(
      Promise.all([
        cache.put(freshReq, new Response(body, { headers: { ...headers, 'cache-control': `max-age=${ttl}` } })),
        cache.put(staleReq, new Response(body, { headers: { ...headers, 'cache-control': `max-age=${STALE_TTL}` } })),
      ]).catch(() => undefined),
    );
  }
  return json(body, 200, FRESH_TTL);
};

export const onRequest: PagesFunction = async () =>
  new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET' } });

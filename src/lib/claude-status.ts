/**
 * Shared Claude status model: Turkish label maps + pure normalizers.
 *
 * Imported by BOTH:
 *   - functions/api/claude-status.ts (Cloudflare Pages Function, bundled by wrangler/esbuild)
 *   - src/components/claude-status/status-client.ts (browser, bundled by Astro/Vite)
 *
 * Keep this file free of DOM, Node and Workers APIs: plain data in, plain data out.
 * Upstream: Atlassian Statuspage at https://status.claude.com (summary.json, incidents.json,
 * /uptime_showcase JSON, or the legacy inline `uptimeData` script in the HTML).
 */

export const STATUS_SOURCE = 'https://status.claude.com';
export const SUMMARY_URL = `${STATUS_SOURCE}/api/v2/summary.json`;
export const INCIDENTS_URL = `${STATUS_SOURCE}/api/v2/incidents.json`;
export const UPTIME_SHOWCASE_URL = `${STATUS_SOURCE}/uptime_showcase?components=`;

/** Visual severity bucket; drives colors in the UI. */
export type Level = 'operational' | 'maintenance' | 'degraded' | 'partial' | 'major' | 'unknown';

const LEVEL_RANK: Record<Level, number> = {
  unknown: -1,
  operational: 0,
  maintenance: 1,
  degraded: 2,
  partial: 3,
  major: 4,
};

export const worstLevel = (a: Level, b: Level): Level => (LEVEL_RANK[b] > LEVEL_RANK[a] ? b : a);

export const COMPONENT_STATUS: Record<string, { label: string; level: Level }> = {
  operational: { label: 'Çalışıyor', level: 'operational' },
  degraded_performance: { label: 'Yavaşlama', level: 'degraded' },
  partial_outage: { label: 'Kısmi kesinti', level: 'partial' },
  major_outage: { label: 'Büyük kesinti', level: 'major' },
  under_maintenance: { label: 'Bakımda', level: 'maintenance' },
};

export const INCIDENT_STATUS: Record<string, string> = {
  investigating: 'İnceleniyor',
  identified: 'Sorun tespit edildi',
  monitoring: 'İzleniyor',
  resolved: 'Çözüldü',
  postmortem: 'Olay sonrası değerlendirme',
  // scheduled maintenance phases
  scheduled: 'Planlandı',
  in_progress: 'Bakım sürüyor',
  verifying: 'Doğrulanıyor',
  completed: 'Tamamlandı',
};

export const IMPACT: Record<string, { label: string; level: Level }> = {
  none: { label: 'Bilgilendirme', level: 'operational' },
  minor: { label: 'Küçük etki', level: 'degraded' },
  major: { label: 'Büyük etki', level: 'partial' },
  critical: { label: 'Kritik etki', level: 'major' },
  maintenance: { label: 'Bakım', level: 'maintenance' },
};

const INDICATOR: Record<string, { label: string; level: Level }> = {
  none: { label: 'Tüm sistemler çalışıyor', level: 'operational' },
  minor: { label: 'Kısmi hizmet aksaması', level: 'degraded' },
  major: { label: 'Büyük hizmet kesintisi', level: 'partial' },
  critical: { label: 'Kritik hizmet kesintisi', level: 'major' },
  maintenance: { label: 'Bakım çalışması sürüyor', level: 'maintenance' },
};

/**
 * Known components (status.claude.com, 2026-11). Used for Turkish descriptions and for the
 * static, indexable component list rendered before JS runs. Live data wins for name/order;
 * unknown future components still render, just without a Turkish description.
 */
export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  parentId: string | null;
  isGroup?: boolean;
}

export const KNOWN_COMPONENTS: ComponentInfo[] = [
  { id: 'rwppv331jlwc', name: 'claude.ai', description: 'Web, masaüstü ve mobil sohbet uygulaması', parentId: null },
  { id: '0qbwn08sd68x', name: 'Claude Console (platform.claude.com)', description: 'Geliştirici konsolu: API anahtarları, faturalama ve deneme ortamı', parentId: null },
  { id: 'k8w3r06qmzrp', name: 'Claude API (api.anthropic.com)', description: 'Uygulamaların ve entegrasyonların kullandığı Claude API', parentId: null },
  { id: 'yyzkbfz2thpt', name: 'Claude Code', description: 'Yazılımcılar için terminal ve IDE kodlama aracı', parentId: null },
  { id: 'bpp5gb3hpjcl', name: 'Claude Cowork', description: 'Masaüstü uygulamasındaki dosya ve görev odaklı çalışma ortamı', parentId: null },
  { id: '0scnb50nvy53', name: 'Claude for Government', description: 'Kamu kurumlarına yönelik ayrı Claude hizmeti', parentId: null },
  { id: '60k546tlxqz7', name: 'Claude on Cloud Platforms', description: 'Bulut sağlayıcıları üzerinden sunulan Claude hizmetleri', parentId: null, isGroup: true },
  { id: 'w14q5j51spbm', name: 'Claude Platform on AWS', description: 'AWS üzerinden, Anthropic tarafından işletilen Claude Platform', parentId: '60k546tlxqz7' },
  { id: '69zh8pryjjgp', name: 'Claude in Microsoft Foundry', description: 'Microsoft Foundry (Azure) üzerinden Claude', parentId: '60k546tlxqz7' },
  { id: 'csth13wtqbd6', name: 'Claude Models on Google Cloud (Anthropic managed)', description: 'Google Cloud üzerinde, Anthropic tarafından işletilen Claude modelleri', parentId: '60k546tlxqz7' },
];

const INFO_BY_ID = new Map(KNOWN_COMPONENTS.map((c) => [c.id, c]));
const INFO_BY_NAME = new Map(KNOWN_COMPONENTS.map((c) => [c.name.toLowerCase(), c]));

// ---------------------------------------------------------------------------
// Output shape (what /api/claude-status returns)
// ---------------------------------------------------------------------------

export interface UptimeDay {
  /** YYYY-MM-DD (status page time zone, UTC) */
  d: string;
  /** ok | partial | major | none (before the component existed) */
  l: 'ok' | 'partial' | 'major' | 'none';
  /** partial outage seconds */
  p: number;
  /** major outage seconds */
  m: number;
  /** related incident count */
  e: number;
}

export interface ComponentUptime {
  ninety: number | null;
  sixty: number | null;
  thirty: number | null;
  days: UptimeDay[];
}

export interface ComponentOut {
  id: string;
  name: string;
  description: string | null;
  status: string;
  statusLabel: string;
  level: Level;
  parentId: string | null;
  isGroup: boolean;
  position: number;
  uptime: ComponentUptime | null;
}

export interface UpdateOut {
  id: string;
  status: string;
  statusLabel: string;
  /** Anthropic's original (English) text */
  body: string;
  /** Turkish translation, or null when not translated */
  bodyTr: string | null;
  at: string | null;
}

export interface IncidentOut {
  id: string;
  title: string;
  titleTr: string | null;
  status: string;
  statusLabel: string;
  impact: string;
  impactLabel: string;
  level: Level;
  createdAt: string | null;
  startedAt: string | null;
  updatedAt: string | null;
  resolvedAt: string | null;
  scheduledFor: string | null;
  scheduledUntil: string | null;
  url: string;
  components: string[];
  /** newest first */
  updates: UpdateOut[];
}

export interface AnswerOut {
  level: 'ok' | 'partial' | 'major';
  title: string;
  text: string;
  affected: { id: string; name: string; statusLabel: string; level: Level }[];
}

export interface StatusPayload {
  ok: true;
  version: 1;
  source: string;
  /** when the upstream data was fetched (ISO) */
  fetchedAt: string;
  /** status page's own updated_at (ISO) */
  pageUpdatedAt: string | null;
  /** true when served from the last good copy because upstream failed */
  stale: boolean;
  /** api = Pages Function, direct = browser fallback straight to status.claude.com */
  via: 'api' | 'direct';
  overall: { indicator: string; level: Level; label: string; descriptionEn: string };
  answer: AnswerOut;
  components: ComponentOut[];
  incidents: IncidentOut[];
  maintenances: IncidentOut[];
  history: IncidentOut[];
  uptime: { available: boolean };
  translation: { enabled: boolean; complete: boolean };
}

export interface StatusError {
  ok: false;
  error: string;
  message: string;
  source: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
type Any = any;

const str = (v: unknown, fallback = ''): string => (typeof v === 'string' ? v : fallback);
const strOrNull = (v: unknown): string | null => (typeof v === 'string' && v ? v : null);
const num = (v: unknown, fallback = 0): number => (typeof v === 'number' && isFinite(v) ? v : fallback);
const arr = (v: unknown): Any[] => (Array.isArray(v) ? v : []);

export const componentStatus = (status: string) =>
  COMPONENT_STATUS[status] || { label: 'Bilinmiyor', level: 'unknown' as Level };

export const incidentStatusLabel = (status: string) => INCIDENT_STATUS[status] || status || 'Bilinmiyor';

export const impactInfo = (impact: string) => IMPACT[impact] || { label: impact || 'Bilinmiyor', level: 'unknown' as Level };

const describe = (id: string, name: string): string | null =>
  (INFO_BY_ID.get(id) || INFO_BY_NAME.get(name.toLowerCase()))?.description ?? null;

const incidentUrl = (id: string) => `${STATUS_SOURCE}/incidents/${encodeURIComponent(id)}`;

function normalizeIncident(inc: Any, maxUpdates = Infinity): IncidentOut {
  const status = str(inc?.status);
  const impact = str(inc?.impact, 'none');
  const imp = impactInfo(impact);
  const updates = arr(inc?.incident_updates)
    .map((u: Any): UpdateOut => ({
      id: str(u?.id),
      status: str(u?.status),
      statusLabel: incidentStatusLabel(str(u?.status)),
      body: str(u?.body).trim(),
      bodyTr: null,
      at: strOrNull(u?.display_at) || strOrNull(u?.created_at),
    }))
    .sort((a, b) => (b.at || '').localeCompare(a.at || ''))
    .slice(0, maxUpdates);
  const components = arr(inc?.components)
    .map((c: Any) => str(c?.name))
    .filter(Boolean);
  // Fallback: affected components from the updates when the incident has no component list.
  if (components.length === 0) {
    for (const u of arr(inc?.incident_updates)) {
      for (const c of arr(u?.affected_components)) {
        const n = str(c?.name);
        if (n && !components.includes(n)) components.push(n);
      }
    }
  }
  return {
    id: str(inc?.id),
    title: str(inc?.name).trim(),
    titleTr: null,
    status,
    statusLabel: incidentStatusLabel(status),
    impact,
    impactLabel: imp.label,
    level: imp.level,
    createdAt: strOrNull(inc?.created_at),
    startedAt: strOrNull(inc?.started_at),
    updatedAt: strOrNull(inc?.updated_at),
    resolvedAt: strOrNull(inc?.resolved_at),
    scheduledFor: strOrNull(inc?.scheduled_for),
    scheduledUntil: strOrNull(inc?.scheduled_until),
    url: inc?.id ? incidentUrl(str(inc.id)) : STATUS_SOURCE,
    components,
    updates,
  };
}

// ---------------------------------------------------------------------------
// Uptime
// ---------------------------------------------------------------------------

type Timeline = { component?: Any; days?: Any[] };

/**
 * Normalize the Statuspage uptime structure. Accepts either:
 *   - the `/uptime_showcase` JSON: { timelines: {code: Timeline}, values: [{component, ninety, sixty, thirty}] }
 *   - a bare timelines object (legacy inline `var uptimeData = {...}` in the HTML)
 * Returns null when nothing usable is found. Never throws.
 */
export function normalizeUptime(input: Any): Record<string, ComponentUptime> | null {
  try {
    if (!input || typeof input !== 'object') return null;
    const timelines: Record<string, Timeline> =
      input.timelines && typeof input.timelines === 'object' ? input.timelines : input;
    const values = new Map<string, Any>();
    for (const v of arr(input.values)) if (v && typeof v.component === 'string') values.set(v.component, v);

    const out: Record<string, ComponentUptime> = {};
    for (const code of Object.keys(timelines)) {
      const t = timelines[code];
      const rawDays = arr(t?.days);
      if (rawDays.length === 0) continue;
      const start = str(t?.component?.startDate);
      const days: UptimeDay[] = rawDays
        .filter((d: Any) => typeof d?.date === 'string')
        .map((d: Any): UptimeDay => {
          const p = num(d?.outages?.p);
          const m = num(d?.outages?.m);
          const before = !!start && d.date < start;
          return {
            d: d.date,
            l: before ? 'none' : m > 0 ? 'major' : p > 0 ? 'partial' : 'ok',
            p,
            m,
            e: arr(d?.related_events).length,
          };
        })
        .sort((a, b) => a.d.localeCompare(b.d));
      if (days.length === 0) continue;
      const v = values.get(code);
      out[code] = {
        ninety: typeof v?.ninety === 'number' ? v.ninety : estimateUptime(days, 90),
        sixty: typeof v?.sixty === 'number' ? v.sixty : estimateUptime(days, 60),
        thirty: typeof v?.thirty === 'number' ? v.thirty : estimateUptime(days, 30),
        days,
      };
    }
    return Object.keys(out).length ? out : null;
  } catch {
    return null;
  }
}

/**
 * Estimate uptime % when the page does not hand us the number:
 * major outage counts fully, partial outage counts 30 percent (Statuspage convention).
 */
function estimateUptime(days: UptimeDay[], window: number): number | null {
  const slice = days.slice(-window).filter((d) => d.l !== 'none');
  if (slice.length === 0) return null;
  const total = slice.length * 86400;
  const down = slice.reduce((s, d) => s + Math.min(86400, d.m + 0.3 * d.p), 0);
  return Math.round(((total - down) / total) * 10000) / 100;
}

/** Legacy fallback: pull `var uptimeData = {...};` out of the status page HTML. Never throws. */
export function parseUptimeFromHtml(html: string): Record<string, ComponentUptime> | null {
  try {
    const re = /(?:var\s+uptimeData|window\.uptimeData)\s*=\s*(\{[\s\S]*?\})\s*;\s*(?:\n|<\/script>|var\s|window\.)/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(html))) {
      const raw = match[1];
      if (raw.length < 20) continue; // skips `window.uptimeData || {}` style stubs
      try {
        const parsed = JSON.parse(raw);
        const result = normalizeUptime(parsed);
        if (result) return result;
      } catch {
        /* try next match */
      }
    }
    return null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Main normalizer
// ---------------------------------------------------------------------------

export interface NormalizeOptions {
  uptime?: Record<string, ComponentUptime> | null;
  historyLimit?: number;
  via?: 'api' | 'direct';
  fetchedAt?: string;
}

export function normalize(summary: Any, incidentsFeed?: Any, opts: NormalizeOptions = {}): StatusPayload {
  const uptime = opts.uptime || null;
  const rawComponents = arr(summary?.components);

  // Group membership: a group lists its children in `components`; children carry `group_id`.
  const all: ComponentOut[] = rawComponents.map((c: Any): ComponentOut => {
    const id = str(c?.id);
    const name = str(c?.name);
    const status = str(c?.status);
    const st = componentStatus(status);
    return {
      id,
      name,
      description: describe(id, name),
      status,
      statusLabel: st.label,
      level: st.level,
      parentId: strOrNull(c?.group_id),
      isGroup: c?.group === true,
      position: num(c?.position),
      uptime: uptime?.[id] || null,
    };
  });
  const hiddenIfOk = new Set(
    rawComponents.filter((c: Any) => c?.only_show_if_degraded === true).map((c: Any) => str(c?.id)),
  );
  const visible = all.filter((c) => !(hiddenIfOk.has(c.id) && c.status === 'operational'));

  // Order: top level by position, each group's children right after the group.
  const top = visible.filter((c) => !c.parentId).sort((a, b) => a.position - b.position);
  const ordered: ComponentOut[] = [];
  for (const c of top) {
    ordered.push(c);
    if (c.isGroup) {
      ordered.push(...visible.filter((k) => k.parentId === c.id).sort((a, b) => a.position - b.position));
    }
  }
  // Orphans (child whose group is hidden or missing) go last.
  for (const c of visible) if (!ordered.includes(c)) ordered.push(c);

  const incidents = arr(summary?.incidents).map((i: Any) => normalizeIncident(i));
  const maintenances = arr(summary?.scheduled_maintenances).map((i: Any) => {
    const m = normalizeIncident(i);
    if (m.impact === 'none') {
      m.impactLabel = IMPACT.maintenance.label;
      m.level = 'maintenance';
    }
    return m;
  });

  const activeIds = new Set([...incidents, ...maintenances].map((i) => i.id));
  const history = arr(incidentsFeed?.incidents)
    .filter((i: Any) => i && !activeIds.has(str(i.id)))
    .sort((a: Any, b: Any) => str(b.created_at).localeCompare(str(a.created_at)))
    .slice(0, opts.historyLimit ?? 10)
    .map((i: Any) => normalizeIncident(i, 1));

  // Overall + plain-language answer
  const indicator = str(summary?.status?.indicator, 'none');
  const ind = INDICATOR[indicator] || { label: str(summary?.status?.description, 'Bilinmiyor'), level: 'unknown' as Level };
  const leafs = ordered.filter((c) => !c.isGroup);
  const worstComponent = leafs.reduce<Level>((w, c) => worstLevel(w, c.level), 'operational');
  const overallLevel = worstLevel(ind.level, worstComponent);
  const affected = leafs
    .filter((c) => c.level !== 'operational' && c.level !== 'unknown')
    .map((c) => ({ id: c.id, name: c.name, statusLabel: c.statusLabel, level: c.level }));

  let answer: AnswerOut;
  const activeImpact = incidents.some((i) => i.impact !== 'none');
  if (overallLevel === 'major' || indicator === 'major' || indicator === 'critical') {
    answer = {
      level: 'major',
      title: 'Evet, büyük kesinti var',
      text: "Anthropic'in resmi durum sayfası şu an büyük bir kesinti bildiriyor. Etkilenen hizmetler aşağıda. Sorun Anthropic tarafında, cihazınızda bir şey değiştirmeniz gerekmiyor.",
      affected,
    };
  } else if (overallLevel !== 'operational' || indicator !== 'none' || activeImpact) {
    const maint = overallLevel === 'maintenance';
    answer = {
      level: 'partial',
      title: 'Kısmi sorun var',
      text: maint
        ? 'Claude genel olarak çalışıyor ama bazı hizmetlerde planlı bakım sürüyor. Etkilenen hizmetler aşağıda.'
        : 'Claude genel olarak çalışıyor ama bazı hizmetlerde sorun bildirildi. Kullandığınız hizmet listede yoksa sorun büyük olasılıkla sizin tarafınızda.',
      affected,
    };
  } else {
    answer = {
      level: 'ok',
      title: 'Hayır, Claude şu an çalışıyor',
      text: "Anthropic'in resmi durum sayfasında tüm hizmetler çalışıyor görünüyor. Yine de sorun yaşıyorsanız aşağıdaki adımlara bakın.",
      affected: [],
    };
  }

  return {
    ok: true,
    version: 1,
    source: STATUS_SOURCE,
    fetchedAt: opts.fetchedAt || new Date().toISOString(),
    pageUpdatedAt: strOrNull(summary?.page?.updated_at),
    stale: false,
    via: opts.via || 'api',
    overall: { indicator, level: overallLevel, label: ind.label, descriptionEn: str(summary?.status?.description) },
    answer,
    components: ordered,
    incidents,
    maintenances,
    history,
    uptime: { available: ordered.some((c) => c.uptime !== null) },
    translation: { enabled: false, complete: false },
  };
}

/** Basic sanity check before trusting an upstream summary.json body. */
export const isSummary = (s: Any): boolean => !!s && typeof s === 'object' && Array.isArray(s.components) && !!s.status;

// ---------------------------------------------------------------------------
// Translation plumbing (the actual API call lives in the Pages Function)
// ---------------------------------------------------------------------------

/** Every free-text English string in the payload that may be translated. */
export function collectTexts(p: StatusPayload): string[] {
  const set = new Set<string>();
  for (const i of [...p.incidents, ...p.maintenances, ...p.history]) {
    if (i.title) set.add(i.title);
    for (const u of i.updates) if (u.body) set.add(u.body);
  }
  return [...set];
}

/** Fill titleTr/bodyTr from a source-text -> Turkish map; returns true when every text got one. */
export function applyTranslations(p: StatusPayload, tr: Map<string, string>): boolean {
  let complete = true;
  for (const i of [...p.incidents, ...p.maintenances, ...p.history]) {
    if (i.title) {
      i.titleTr = tr.get(i.title) ?? null;
      if (!i.titleTr) complete = false;
    }
    for (const u of i.updates) {
      if (!u.body) continue;
      u.bodyTr = tr.get(u.body) ?? null;
      if (!u.bodyTr) complete = false;
    }
  }
  return complete;
}

// ---------------------------------------------------------------------------
// Time zone rewrite: "16:19 PT on November 17 / 00:19 UTC on November 18" -> "03:19 TSİ on November 18"
// Türkiye is UTC+3 all year (no DST since 2016). Done in code, not by the LLM, so the arithmetic is exact.
// The UTC value is always the source of truth; the PT part is only used to infer a missing UTC date.
// ---------------------------------------------------------------------------
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthIndex = (m?: string): number => {
  if (!m) return -1;
  const k = m.toLowerCase().replace(/\.$/, '');
  if (k.length < 3) return -1;
  return MONTH_NAMES.findIndex((full) => full.toLowerCase().startsWith(k));
};
const T = String.raw`\d{1,2}[:∶]\d{2}`; // "∶" (U+2236) also appears in upstream texts
const AMPM = String.raw`(?:\s?[ap]\.?m\.?)?`;
const RANGE_SEP = String.raw`\s?(?:–|-|to)\s?`;
const DATE = String.raw`(?:,? on ([A-Z][a-z]{2,8})\.? (\d{1,2})(?:st|nd|rd|th)?)?`;
const PT_UTC_RE = new RegExp(
  String.raw`(${T}${AMPM}(?:\s?[–-]\s?${T}${AMPM})?)\s?(?:PT|PST|PDT)${DATE}\s?\/\s?(${T}(?:\s?[–-]\s?${T})?)\s?UTC${DATE}`,
  'gi',
);
const UTC_RE = new RegExp(String.raw`(${T})(?:(${RANGE_SEP})(${T}))?\s?UTC${DATE}`, 'g');
const pad = (n: number) => String(n).padStart(2, '0');

function parseHM(t: string): [number, number] | null {
  const m = /(\d{1,2})[:∶](\d{2})\s?([ap])?/i.exec(t);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2]);
  if (m[3]) h = (h % 12) + (m[3].toLowerCase() === 'p' ? 12 : 0);
  return h > 23 || min > 59 ? null : [h, min];
}

/** One UTC clock time -> "HH:MM" in TSİ, plus the TSİ calendar date when the UTC date is known. */
function shift(h: number, m: number, mon: number, day: number, year: number): { time: string; date: string; nextDay: boolean } {
  if (mon < 0 || !day) return { time: `${pad((h + 3) % 24)}:${pad(m)}`, date: '', nextDay: h + 3 >= 24 };
  const d = new Date(Date.UTC(year, mon, day, h + 3, m));
  return { time: `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`, date: `${MONTH_NAMES[d.getUTCMonth()]} ${d.getUTCDate()}`, nextDay: false };
}

function render(times: [number, number][], sep: string, mon: number, day: number, year: number): string {
  const parts = times.map(([h, m], i) => {
    // a range like "23:50-00:10" crosses midnight: the second time is on the next day
    const wrap = i > 0 && (h < times[0][0] || (h === times[0][0] && m < times[0][1])) ? 1 : 0;
    return shift(h, m, mon, day ? day + wrap : 0, year);
  });
  const fmt = (p: ReturnType<typeof shift>) => `${p.time} TSİ${p.date ? ` on ${p.date}` : p.nextDay ? ' (next day)' : ''}`;
  if (parts.length === 2 && parts[0].date === parts[1].date && parts[0].nextDay === parts[1].nextDay) {
    return `${parts[0].time}${sep}${fmt(parts[1])}`;
  }
  return parts.map(fmt).join(sep);
}

/** Rewrites PT/UTC times in an English status text to Türkiye time (TSİ). Unknown shapes are left untouched. */
export function toTurkeyTime(text: string, year = new Date().getUTCFullYear()): string {
  let out = text.replace(PT_UTC_RE, (all, ptPart: string, pMon, pDay, utcPart: string, uMon, uDay) => {
    const utc = utcPart.split(/\s?[–-]\s?/).map(parseHM);
    const pt = parseHM(ptPart);
    if (!pt || utc.some((x) => !x)) return all;
    let mon = monthIndex(uMon);
    let day = Number(uDay) || 0;
    if (mon < 0 && monthIndex(pMon) >= 0) {
      // UTC date not given: same calendar day as PT, or the next one when UTC is past midnight
      mon = monthIndex(pMon);
      day = Number(pDay) + (utc[0]![0] < pt[0] ? 1 : 0);
    }
    return render(utc as [number, number][], '–', mon, day, year);
  });
  out = out.replace(UTC_RE, (all, a: string, sep: string | undefined, b: string | undefined, uMon, uDay) => {
    const times = [parseHM(a), ...(b ? [parseHM(b)] : [])];
    if (times.some((x) => !x)) return all;
    return render(times as [number, number][], sep ?? '', monthIndex(uMon), Number(uDay) || 0, year);
  });
  return out;
}

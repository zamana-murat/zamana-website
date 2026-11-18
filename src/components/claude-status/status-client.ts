/**
 * Live Claude status widget (browser side).
 *
 * - Fetches /api/claude-status on load and every 60 s; pauses while the tab is hidden and
 *   refreshes right away when it becomes visible again.
 * - If the API fails (e.g. `astro dev`, where Pages Functions do not run), falls back to
 *   status.claude.com's public JSON (CORS *) and normalizes it with the same shared code.
 * - Renders with DOM APIs and textContent only; upstream text never goes through innerHTML.
 */
import {
  INCIDENTS_URL,
  STATUS_SOURCE,
  SUMMARY_URL,
  isSummary,
  normalize,
  type ComponentOut,
  type IncidentOut,
  type Level,
  type StatusPayload,
  type UptimeDay,
} from '../../lib/claude-status';

const API_URL = '/api/claude-status';
const REFRESH_MS = 60_000;
const FETCH_TIMEOUT_MS = 10_000;
const TZ = 'Europe/Istanbul';

const fmtClock = new Intl.DateTimeFormat('tr-TR', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit' });
const fmtDateTime = new Intl.DateTimeFormat('tr-TR', { timeZone: TZ, day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const fmtTime = new Intl.DateTimeFormat('tr-TR', { timeZone: TZ, hour: '2-digit', minute: '2-digit' });
const fmtDay = new Intl.DateTimeFormat('tr-TR', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' });
const fmtPct = new Intl.NumberFormat('tr-TR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ---------------------------------------------------------------------------
// Small DOM helpers (textContent only)
// ---------------------------------------------------------------------------
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}

function badge(label: string, level: Level): HTMLSpanElement {
  const b = el('span', `cs-badge cs-lv-${level}`);
  b.append(el('span', 'cs-dot'), document.createTextNode(label));
  return b;
}

function extLink(href: string, text: string): HTMLAnchorElement {
  const a = el('a', 'cs-ext', text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  return a;
}

const $ = <T extends HTMLElement = HTMLElement>(root: HTMLElement, sel: string) => root.querySelector<T>(sel);

const safeDate = (iso: string | null) => {
  if (!iso) return null;
  const d = new Date(iso);
  return isNaN(d.getTime()) ? null : d;
};
const dt = (iso: string | null) => {
  const d = safeDate(iso);
  return d ? `${fmtDateTime.format(d)} TSİ` : '';
};

function duration(sec: number): string {
  const min = Math.max(1, Math.round(sec / 60));
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h && m) return `${h} sa ${m} dk`;
  if (h) return `${h} sa`;
  return `${m} dk`;
}

function spanBetween(a: string | null, b: string | null): string {
  const s = safeDate(a);
  const e = safeDate(b);
  if (!s || !e || e <= s) return '';
  return duration((e.getTime() - s.getTime()) / 1000);
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
async function getJson(url: string): Promise<unknown> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, { headers: { accept: 'application/json' }, signal: ctrl.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(timer);
  }
}

async function loadPayload(): Promise<StatusPayload> {
  try {
    const p = (await getJson(API_URL)) as StatusPayload;
    if (p && p.ok === true && Array.isArray(p.components)) return p;
  } catch {
    /* fall back below */
  }
  // Fallback: straight to the public Statuspage JSON (no uptime, no translation).
  const [summary, incidents] = await Promise.all([getJson(SUMMARY_URL), getJson(INCIDENTS_URL).catch(() => null)]);
  if (!isSummary(summary)) throw new Error('bad summary');
  return normalize(summary, incidents, { via: 'direct' });
}

// ---------------------------------------------------------------------------
// Renderers
// ---------------------------------------------------------------------------
function translatedText(original: string, tr: string | null, cls: string): HTMLElement {
  const wrap = el('div', cls);
  wrap.append(el('p', 'cs-text', tr || original));
  if (tr) {
    const d = el('details', 'cs-orig');
    d.append(el('summary', undefined, 'İngilizce orijinali'), el('p', 'cs-text', original));
    wrap.append(d);
  }
  return wrap;
}

function textNote(p: StatusPayload, items: IncidentOut[]): HTMLElement | null {
  const anyText = items.some((i) => i.title || i.updates.some((u) => u.body));
  if (!anyText) return null;
  const allTr = items.every((i) => (!i.title || i.titleTr) && i.updates.every((u) => !u.body || u.bodyTr));
  if (allTr) return el('p', 'cs-note', 'Açıklamalar Türkçeye çevrildi; orijinal metin her güncellemenin altında.');
  return el('p', 'cs-note cs-note--en', "Anthropic'in orijinal (İngilizce) açıklaması");
}

function renderIncident(i: IncidentOut, opts: { maintenance?: boolean; compact?: boolean } = {}): HTMLElement {
  const card = el('article', `cs-incident cs-edge-${i.level}`);
  const head = el('div', 'cs-inc-head');
  const h = el('h4', 'cs-inc-title', i.titleTr || i.title);
  head.append(h);
  const badges = el('div', 'cs-inc-badges');
  badges.append(badge(i.statusLabel, i.status === 'resolved' || i.status === 'completed' ? 'operational' : i.level));
  if (!opts.maintenance) badges.append(el('span', 'cs-chip', i.impactLabel));
  head.append(badges);
  card.append(head);

  if (i.titleTr) {
    const d = el('details', 'cs-orig');
    d.append(el('summary', undefined, 'Başlığın İngilizce orijinali'), el('p', 'cs-text', i.title));
    card.append(d);
  }

  const meta = el('p', 'cs-inc-meta');
  const bits: string[] = [];
  if (opts.maintenance && i.scheduledFor) {
    bits.push(`Planlanan: ${i.scheduledUntil && safeDate(i.scheduledFor) ? `${fmtDateTime.format(safeDate(i.scheduledFor)!)} – ${fmtTime.format(new Date(i.scheduledUntil))} TSİ` : dt(i.scheduledFor)}`);
  } else if (i.createdAt) {
    bits.push(`Başlangıç: ${dt(i.startedAt || i.createdAt)}`);
  }
  if (i.resolvedAt) {
    const span = spanBetween(i.startedAt || i.createdAt, i.resolvedAt);
    bits.push(`Çözüm: ${dt(i.resolvedAt)}${span ? ` (${span})` : ''}`);
  }
  if (i.components.length) bits.push(`Etkilenen: ${i.components.join(', ')}`);
  meta.textContent = bits.join(' · ');
  card.append(meta);

  if (i.updates.length) {
    if (opts.compact) {
      const u = i.updates[0];
      card.append(translatedText(u.body, u.bodyTr, 'cs-inc-summary'));
    } else {
      const ol = el('ol', 'cs-timeline');
      for (const u of i.updates) {
        const li = el('li', 'cs-tl-item');
        const top = el('div', 'cs-tl-top');
        top.append(el('strong', 'cs-tl-status', u.statusLabel), el('time', 'cs-tl-time', dt(u.at)));
        li.append(top, translatedText(u.body, u.bodyTr, 'cs-tl-body'));
        ol.append(li);
      }
      card.append(ol);
    }
  }
  const link = el('p', 'cs-inc-link');
  link.append(extLink(i.url, "Anthropic'in resmi sayfasında aç"));
  card.append(link);
  return card;
}

function renderList(container: HTMLElement | null, p: StatusPayload, items: IncidentOut[], empty: string, opts: { maintenance?: boolean; compact?: boolean } = {}) {
  if (!container) return;
  container.replaceChildren();
  if (items.length === 0) {
    container.append(el('p', 'cs-empty', empty));
    return;
  }
  const note = textNote(p, items);
  if (note) container.append(note);
  for (const i of items) container.append(renderIncident(i, opts));
}

function dayTitle(d: UptimeDay): string {
  const date = fmtDay.format(new Date(`${d.d}T12:00:00Z`));
  if (d.l === 'none') return `${date}: veri yok`;
  const parts: string[] = [];
  if (d.m > 0) parts.push(`${duration(d.m)} büyük kesinti`);
  if (d.p > 0) parts.push(`${duration(d.p)} kısmi kesinti`);
  if (!parts.length) parts.push(d.e > 0 ? 'kesinti kaydı yok, bilgilendirme var' : 'sorun kaydı yok');
  return `${date}: ${parts.join(', ')}`;
}

function renderUptime(c: ComponentOut): HTMLElement | null {
  const u = c.uptime;
  if (!u || !u.days.length) return null;
  const wrap = el('div', 'cs-uptime');
  const bars = el('div', 'cs-bars');
  bars.setAttribute('aria-hidden', 'true');
  for (const d of u.days.slice(-90)) {
    const s = el('span', `cs-day cs-day-${d.l}`);
    s.title = dayTitle(d);
    bars.append(s);
  }
  const bad = u.days.filter((d) => d.l === 'partial' || d.l === 'major').length;
  const legend = el('div', 'cs-uptime-legend');
  const pct = u.ninety !== null ? fmtPct.format(u.ninety / 100) : 'bilinmiyor';
  legend.append(
    el('span', 'cs-up-range cs-up-90', '90 gün önce'),
    el('span', 'cs-up-range cs-up-30', '30 gün önce'),
    el('span', 'cs-up-pct', `90 günde ${pct} erişilebilir`),
    el('span', 'cs-up-range', 'Bugün'),
  );
  const sr = el('span', 'sr-only', `Son 90 günde ${pct} erişilebilirlik, ${bad} günde kesinti kaydı.`);
  wrap.append(bars, legend, sr);
  return wrap;
}

function renderComponents(list: HTMLElement | null, p: StatusPayload) {
  if (!list) return;
  list.replaceChildren();
  for (const c of p.components) {
    const li = el('li', `cs-comp${c.parentId ? ' cs-comp--child' : ''}${c.isGroup ? ' cs-comp--group' : ''}`);
    li.dataset.id = c.id;
    const row = el('div', 'cs-comp-row');
    const txt = el('div', 'cs-comp-text');
    txt.append(el('span', 'cs-comp-name', c.name));
    if (c.description) txt.append(el('span', 'cs-comp-desc', c.description));
    row.append(txt, badge(c.statusLabel, c.level));
    li.append(row);
    const up = renderUptime(c);
    if (up) li.append(up);
    list.append(li);
  }
}

function renderAffected(list: HTMLElement | null, p: StatusPayload) {
  if (!list) return;
  list.replaceChildren();
  list.hidden = p.answer.affected.length === 0;
  for (const a of p.answer.affected) {
    const li = el('li', 'cs-aff');
    li.append(el('span', 'cs-aff-name', a.name), badge(a.statusLabel, a.level));
    list.append(li);
  }
}

function renderActiveSummary(container: HTMLElement | null, p: StatusPayload) {
  // Answer page: short list of active incident titles (details live on /claude-status/).
  if (!container) return;
  container.replaceChildren();
  const items = [...p.incidents, ...p.maintenances.filter((m) => m.status === 'in_progress' || m.status === 'verifying')];
  container.hidden = items.length === 0;
  if (!items.length) return;
  container.append(el('p', 'cs-active-head', 'Anthropic\'in bildirdiği aktif olaylar:'));
  const ul = el('ul', 'cs-active-list');
  for (const i of items) {
    const li = el('li');
    li.append(el('span', 'cs-active-title', i.titleTr || i.title), document.createTextNode(` (${i.statusLabel}, ${dt(i.updates[0]?.at || i.updatedAt)})`));
    ul.append(li);
  }
  container.append(ul);
  if (items.some((i) => !i.titleTr)) container.append(el('p', 'cs-note cs-note--en', "Başlıklar Anthropic'in orijinal (İngilizce) açıklamasıdır."));
}

// ---------------------------------------------------------------------------
// Controller
// ---------------------------------------------------------------------------
export function initClaudeStatus(): void {
  const roots = Array.from(document.querySelectorAll<HTMLElement>('[data-cs-root]'));
  if (!roots.length) return;

  let last: StatusPayload | null = null;
  let lastOkAt = 0;
  let nextAt = 0;
  let timer: number | undefined;
  let ticker: number | undefined;
  let loading = false;

  const setAll = (sel: string, fn: (n: HTMLElement) => void) => roots.forEach((r) => r.querySelectorAll<HTMLElement>(sel).forEach(fn));

  function tick() {
    const left = Math.max(0, Math.round((nextAt - Date.now()) / 1000));
    setAll('[data-cs-countdown]', (n) => {
      n.textContent = document.hidden ? 'Sekme arka planda, yenileme duraklatıldı' : loading ? 'Yenileniyor…' : `Sonraki yenileme: ${left} sn`;
    });
  }

  function render(p: StatusPayload) {
    for (const root of roots) {
      root.dataset.state = 'ready';
      root.dataset.level = p.overall.level;

      const overall = $(root, '[data-cs-overall]');
      if (overall) {
        overall.className = `cs-overall cs-lv-${p.overall.level}`;
        const label = $(root, '[data-cs-overall-label]');
        if (label) label.textContent = p.overall.label;
      }

      const answer = $(root, '[data-cs-answer]');
      if (answer) {
        answer.className = `cs-answer cs-answer--${p.answer.level}`;
        const t = $(root, '[data-cs-answer-title]');
        const x = $(root, '[data-cs-answer-text]');
        if (t) t.textContent = p.answer.title;
        if (x) x.textContent = p.answer.text;
      }
      renderAffected($(root, '[data-cs-affected]'), p);
      renderActiveSummary($(root, '[data-cs-active]'), p);
      renderComponents($(root, '[data-cs-components]'), p);
      const uptimeNote = $(root, '[data-cs-uptime-note]');
      if (uptimeNote) uptimeNote.hidden = !p.uptime.available;

      renderList($(root, '[data-cs-incidents]'), p, p.incidents, 'Şu an aktif bir olay yok.');
      renderList($(root, '[data-cs-maint]'), p, p.maintenances, 'Planlanmış bir bakım yok.', { maintenance: true });
      renderList($(root, '[data-cs-history]'), p, p.history, 'Geçmiş olay bilgisi şu an alınamadı.', { compact: true });

      const notice = $(root, '[data-cs-notice]');
      if (notice) {
        notice.replaceChildren();
        notice.hidden = true;
        if (p.stale) {
          notice.hidden = false;
          notice.append(
            document.createTextNode(`Anthropic'in durum sayfasına şu an ulaşılamadı. Gösterilen veri ${dt(p.fetchedAt)} tarihli son kopyadır. Güncel durum için: `),
            extLink(STATUS_SOURCE, 'status.claude.com'),
          );
        }
      }
    }
    setAll('[data-cs-updated]', (n) => {
      n.textContent = `Son güncelleme: ${fmtClock.format(new Date(lastOkAt))} TSİ`;
    });
  }

  function renderError() {
    for (const root of roots) {
      const notice = $(root, '[data-cs-notice]');
      if (!notice) continue;
      notice.replaceChildren();
      notice.hidden = false;
      if (last) {
        notice.append(
          document.createTextNode(`Son yenileme başarısız oldu. Gösterilen bilgi ${fmtClock.format(new Date(lastOkAt))} TSİ itibarıyla. Güncel durum için: `),
          extLink(STATUS_SOURCE, 'status.claude.com'),
        );
      } else {
        root.dataset.state = 'error';
        notice.append(
          document.createTextNode("Durum bilgisi şu an alınamadı. Anthropic'in resmi durum sayfasına doğrudan bakabilirsiniz: "),
          extLink(STATUS_SOURCE, 'status.claude.com'),
        );
        const label = $(root, '[data-cs-overall-label]');
        if (label) label.textContent = 'Durum bilgisi şu an alınamadı';
        const t = $(root, '[data-cs-answer-title]');
        if (t) t.textContent = 'Durum bilgisi şu an alınamadı';
        const x = $(root, '[data-cs-answer-text]');
        if (x) x.textContent = "Bağlantı kurulamadı. Anthropic'in resmi durum sayfasını kontrol edin ya da birazdan tekrar deneyin.";
      }
    }
  }

  function schedule(ms: number) {
    window.clearTimeout(timer);
    nextAt = Date.now() + ms;
    if (!document.hidden) timer = window.setTimeout(refresh, ms);
    tick();
  }

  async function refresh() {
    if (loading) return;
    loading = true;
    window.clearTimeout(timer);
    roots.forEach((r) => r.setAttribute('aria-busy', 'true'));
    tick();
    try {
      const p = await loadPayload();
      last = p;
      lastOkAt = Date.now();
      render(p);
    } catch {
      renderError();
    } finally {
      loading = false;
      roots.forEach((r) => r.removeAttribute('aria-busy'));
      schedule(REFRESH_MS);
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(timer);
      tick();
    } else if (Date.now() - lastOkAt > 5000) {
      refresh();
    } else {
      schedule(Math.max(1000, nextAt - Date.now()));
    }
  });

  setAll('[data-cs-refresh]', (btn) => btn.addEventListener('click', () => refresh()));
  ticker = window.setInterval(tick, 1000);
  void ticker;
  refresh();
}

// Shared SEO constants and helpers.

export const SITE_URL = 'https://zamana.com.tr';

// The single Organization entity is printed by Layout.astro on every page.
// Other schemas (Article, NewsArticle, WebPage, Course) link to it via ORG_REF.
export const ORG_ID = `${SITE_URL}/#org`;
export const ORG_REF = { '@id': ORG_ID } as const;

// Wiki sections that may not (yet) have a wiki-nav.ts entry: label used by breadcrumbs.
export const WIKI_SECTION_LABELS: Record<string, string> = {
  gorevler: 'Görev Rehberleri',
};

// <title> composition: keep within ~60 chars (Google SERP truncation).
// Tries the section suffix first, then the bare brand, then no suffix.
export const TITLE_MAX = 60;

export function composeTitle(title: string, suffix: string, seoTitle?: string): string {
  const base = seoTitle || title;
  for (const s of [suffix, ' | Zamana']) {
    if ([...(base + s)].length <= TITLE_MAX) return base + s;
  }
  return base;
}

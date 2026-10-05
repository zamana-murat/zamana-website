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

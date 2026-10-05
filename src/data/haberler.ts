import { getCollection, type CollectionEntry } from 'astro:content';

export type Haber = CollectionEntry<'haberler'>;

const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

/** "2026-10-03" → "3 Ekim 2026" (string-based, no timezone drift). */
export function formatDateTr(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS_TR[m - 1]} ${y}`;
}

/** URL path for a news entry, e.g. /haberler/claude-yeni-model/ */
export function haberPath(entry: Haber): string {
  return `/haberler/${entry.slug}/`;
}

/** All news entries, newest first (ties broken by slug for stable order). */
export async function getHaberler(): Promise<Haber[]> {
  const entries = await getCollection('haberler');
  return entries.sort((a, b) =>
    b.data.date === a.data.date
      ? a.slug.localeCompare(b.slug)
      : b.data.date.localeCompare(a.data.date)
  );
}

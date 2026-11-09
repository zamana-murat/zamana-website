import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getHaberler, haberPath } from '../../data/haberler';

// RSS feed for /haberler/ (newest first). Linked from Layout.astro <head>.
export async function GET(context: APIContext) {
  const haberler = await getHaberler();
  return rss({
    title: 'Zamana Haberler',
    description: "Claude ve Anthropic'ten güncel gelişmeler, sade Türkçeyle.",
    site: context.site ?? 'https://zamana.com.tr',
    items: haberler.map((h) => ({
      title: h.data.title,
      description: h.data.description,
      pubDate: new Date(`${h.data.date}T00:00:00+03:00`),
      link: haberPath(h),
      categories: h.data.tags,
    })),
    customData: '<language>tr-TR</language>',
  });
}

import type { APIRoute } from 'astro';
import { allWikiSlugs } from '../data/wiki-nav';
import { getHaberler, haberPath } from '../data/haberler';
import { getCollection } from 'astro:content';

const SITE = 'https://zamana.com.tr';

const baseRoutes = [
  { path: '/',                              priority: '1.0', changefreq: 'monthly' },
  { path: '/programlar/',                   priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/bireysel/',          priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/kurumsal/',          priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/ceo-brifing/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/karsilastirma/',     priority: '0.8', changefreq: 'monthly' },
  { path: '/yapay-zeka-egitimi/',           priority: '0.8', changefreq: 'monthly' },
  { path: '/sss/',                          priority: '0.8', changefreq: 'monthly' },
  { path: '/hakkinda/',                     priority: '0.7', changefreq: 'yearly'  },
  { path: '/iletisim/',                     priority: '0.8', changefreq: 'yearly'  },
  { path: '/gizlilik/',                     priority: '0.3', changefreq: 'yearly'  },
  { path: '/cerezler/',                     priority: '0.3', changefreq: 'yearly'  },
];

// Wiki routes — derived from the canonical nav config (single source of truth).
const wikiRoutes = allWikiSlugs().map((slug) => {
  const path = slug ? `/wiki/${slug}/` : '/wiki/';
  // Section landings + wiki home get higher priority; deep articles slightly lower.
  const isLanding = !slug.includes('/') || slug === '';
  return {
    path,
    priority: isLanding ? '0.9' : '0.7',
    changefreq: 'monthly',
  };
});

type Route = { path: string; priority: string; changefreq: string; lastmod?: string };

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);

  // News routes: lastmod = article date; index lastmod = newest article date.
  const haberler = await getHaberler();
  const newsRoutes: Route[] = [
    { path: '/haberler/', priority: '0.8', changefreq: 'weekly', lastmod: haberler[0]?.data.date },
    ...haberler.map((h) => ({
      path: haberPath(h),
      priority: '0.6',
      changefreq: 'yearly',
      lastmod: h.data.date,
    })),
  ];

  // Claude section: /claude/ hub + one page per content entry; lastmod = lastUpdated.
  const claudeEntries = await getCollection('claude');
  const claudeRoutes: Route[] = claudeEntries
    .sort((a, b) => a.data.order - b.data.order)
    .map((c) => ({
      path: c.slug === 'index' ? '/claude/' : `/claude/${c.slug}/`,
      priority: c.slug === 'index' ? '0.9' : '0.8',
      changefreq: 'monthly',
      lastmod: c.data.lastUpdated,
    }));

  const routes: Route[] = [...baseRoutes, ...claudeRoutes, ...wikiRoutes, ...newsRoutes];
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};

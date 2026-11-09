import type { APIRoute } from 'astro';
import { getHaberler, haberPath } from '../data/haberler';
import { getCollection } from 'astro:content';

const SITE = 'https://zamana.com.tr';

const baseRoutes = [
  { path: '/',                              priority: '1.0', changefreq: 'monthly' },
  { path: '/programlar/',                   priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/bireysel/',          priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/kurumsal/',          priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/ceo-brifing/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/ai-sampiyonu/',      priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/ihracatcilar/',      priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/hukuk-burolari/',    priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/kamu-kurumlari/',    priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/akademisyenler/',    priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/yeni-mezun/',        priority: '0.8', changefreq: 'monthly' },
  { path: '/programlar/karsilastirma/',     priority: '0.8', changefreq: 'monthly' },
  { path: '/yapay-zeka-egitimi/',           priority: '0.8', changefreq: 'monthly' },
  { path: '/sss/',                          priority: '0.8', changefreq: 'monthly' },
  { path: '/hakkinda/',                     priority: '0.7', changefreq: 'yearly'  },
  { path: '/iletisim/',                     priority: '0.8', changefreq: 'yearly'  },
  { path: '/gizlilik/',                     priority: '0.3', changefreq: 'yearly'  },
  { path: '/cerezler/',                     priority: '0.3', changefreq: 'yearly'  },
];

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

  // Kurumsal section (claude.com Enterprise adaptation): same pattern under /kurumsal/.
  const kurumsalEntries = await getCollection('kurumsal');
  const kurumsalRoutes: Route[] = kurumsalEntries
    .sort((a, b) => a.data.order - b.data.order)
    .map((c) => ({
      path: c.slug === 'index' ? '/kurumsal/' : `/kurumsal/${c.slug}/`,
      priority: c.slug === 'index' ? '0.9' : '0.8',
      changefreq: 'monthly',
      lastmod: c.data.lastUpdated,
    }));

  // Wiki routes: every page in the collection (same mapping as wiki/[...slug].astro),
  // so a page missing from the nav still reaches the sitemap. lastmod = lastUpdated.
  const wikiEntries = await getCollection('wiki');
  const wikiRoutes: Route[] = wikiEntries
    .map((w) => {
      let slug = w.slug;
      if (slug === 'index') slug = '';
      else if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
      const isLanding = !slug.includes('/');
      const lastmod = /^\d{4}-\d{2}-\d{2}$/.test(w.data.lastUpdated ?? '') ? w.data.lastUpdated : undefined;
      return {
        path: slug ? `/wiki/${slug}/` : '/wiki/',
        priority: isLanding ? '0.9' : '0.7',
        changefreq: 'monthly',
        lastmod,
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));

  const routes: Route[] = [...baseRoutes, ...claudeRoutes, ...kurumsalRoutes, ...wikiRoutes, ...newsRoutes];
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

import type { APIRoute } from 'astro';

const SITE = 'https://zamana.com.tr';

const routes = [
  { path: '/',                              priority: '1.0', changefreq: 'monthly' },
  { path: '/programlar',                    priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/bireysel',           priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/kurumsal',           priority: '0.9', changefreq: 'monthly' },
  { path: '/programlar/karsilastirma',      priority: '0.8', changefreq: 'monthly' },
  { path: '/sss',                           priority: '0.8', changefreq: 'monthly' },
  { path: '/hakkinda',                      priority: '0.7', changefreq: 'yearly'  },
  { path: '/iletisim',                      priority: '0.8', changefreq: 'yearly'  },
  { path: '/gizlilik',                      priority: '0.3', changefreq: 'yearly'  },
  { path: '/cerezler',                      priority: '0.3', changefreq: 'yearly'  },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
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

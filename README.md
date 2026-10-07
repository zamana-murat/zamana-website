# Zamana Web Sitesi

`zamana.com.tr` ana sitesi ve `/wiki/`, `/claude/`, `/kurumsal/`, `/haberler/` bölümleri. Tek Astro projesi, tek Cloudflare Pages deploy'u.

## Stack

- **Astro 4** (statik) + Content Collections (`src/content/`: `wiki`, `claude`, `kurumsal`, `haberler`; şema `src/content/config.ts`)
- **Pagefind**: build sonrası wiki arama indeksi
- **Vanilla CSS**: marka tokenleri `src/styles/global.css`, wiki stilleri `src/styles/wiki.css`
- **Cloudflare Pages** + **Pages Functions** (`functions/api/contact.ts`, iletişim formu → Resend)

## Geliştirme

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # astro build + pagefind, dist/ üretir
npm run preview      # build çıktısını yerel sunar
```

## Nerede ne var

| Konu | Yer |
|---|---|
| Site sayfaları | `src/pages/` (anasayfa, programlar ve alt sayfaları, hakkında, sss, iletişim, gizlilik, çerezler, 404) |
| Wiki içerik + menü | `src/content/wiki/` + `src/data/wiki-nav.ts` (menüde olmayan sayfa sidebar'da görünmez) |
| Claude / Kurumsal bölümleri | `src/content/claude/` + `src/data/claude-nav.ts`, `src/content/kurumsal/` + `src/data/kurumsal-nav.ts` |
| Haberler | `src/content/haberler/`, görseller `public/images/haberler/` |
| Sitemap | `src/pages/sitemap.xml.ts` |
| OG görselleri | `scripts/generate-og.mjs` (prebuild) |
| Function yönlendirme | `public/_routes.json` (yalnız `/api/*` Function'a gider) |

## Deploy

`main`'e her push Cloudflare Pages build'i tetikler (`npm run build`, çıktı `dist`). Env: `RESEND_API_KEY` (secret, zorunlu), `CONTACT_TO` / `CONTACT_FROM` (opsiyonel). `RESEND_API_KEY` yoksa form çalışır ama e-posta gitmez.

Altyapı, DNS, rollback ve acil durum: workspace `docs/INFRASTRUCTURE.md`. Sayfa envanteri ve yapım geçmişi: `docs/WEBSITE-PROGRESS.md`. Marka kaynağı: `docs/Brainstorm.md` → "🎨 Brand Guide".

# Zamana Web Sitesi

Astro tabanlı statik web sitesi — `zamana.com.tr` ana sitesi.

## Stack

- **Astro 4** — statik site generator
- **Vanilla CSS** — Brand Guide tokenleri (`src/styles/global.css`)
- **Plus Jakarta Sans** — Google Fonts üzerinden
- **Cloudflare Pages** — hosting
- **Cloudflare Pages Functions** — `/api/contact` form gönderimi
- **Resend** — e-posta servisi (form → info@zamana.com.tr)

## Geliştirme

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/ üretir
npm run preview      # build çıktısını yerel sunar
```

## Sayfa Yapısı

```
/                              Anasayfa
/programlar                    Programlar hub
/programlar/bireysel           Bireysel Program detay
/programlar/kurumsal           Kurumsal Program detay
/programlar/karsilastirma      İki programın yan yana karşılaştırması
/hakkinda                      Murat ve Zamana hakkında (placeholder bio)
/iletisim                      İletişim formu + doğrudan iletişim
/gizlilik                      KVKK Aydınlatma Metni
/cerezler                      Çerez Politikası
/sitemap.xml                   Sitemap
/wiki/                         (Mevcut Cloudflare Worker — ezilmemeli)
```

## Cloudflare Pages Deploy

1. Cloudflare Dashboard → **Pages** → **Create a project** (Direct Upload veya Git)
2. Build ayarları:
   - Framework: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
   - Root directory: `Website`
3. Environment variables (Production):
   - `RESEND_API_KEY` — secret, resend.com'dan
   - `CONTACT_TO` (opsiyonel)
   - `CONTACT_FROM` (opsiyonel)
4. Custom domain → `zamana.com.tr` → DNS'i Pages'e yönlendir

### Wiki entegrasyonu

`zamana.com.tr/wiki` Worker route'u korunur. `public/_routes.json` Pages'in
`/wiki/*` yolunu işlememesini sağlar.

### Form Backend (Resend)

1. https://resend.com hesap aç
2. Domain ekle: `zamana.com.tr` (SPF/DKIM kayıtları Cloudflare DNS panelinden)
3. API key oluştur → Cloudflare Pages env vars'a yapıştır
4. Test: iletişim formundan kendi e-postana mesaj gönder

`RESEND_API_KEY` set edilmemişse form çalışır ama e-posta gönderilmez (graceful fallback).

## Brand Tokens

Renkler, tipografi, boşluklar `src/styles/global.css`'de CSS değişkeni olarak tanımlı.
Brand Guide kaynağı: `../docs/Brainstorm.md` "🎨 Brand Guide" bölümü.

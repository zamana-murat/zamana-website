/**
 * Build-time OG image generator for Zamana.
 * Generates 1200x630 PNG images per page using satori + resvg.
 *
 * Output: Website/public/og/<slug>.png
 *
 * Run: node scripts/generate-og.mjs
 * Triggered automatically as `prebuild` script.
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'og');
const FONTS_DIR = join(__dirname, 'fonts');

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const fontRegular = readFileSync(join(FONTS_DIR, 'PlusJakartaSans-Regular.ttf'));
const fontSemiBold = readFileSync(join(FONTS_DIR, 'PlusJakartaSans-SemiBold.ttf'));
const fontBold = readFileSync(join(FONTS_DIR, 'PlusJakartaSans-Bold.ttf'));
const fontExtraBold = readFileSync(join(FONTS_DIR, 'PlusJakartaSans-ExtraBold.ttf'));

// Brand colors (matching global.css)
const NAVY = '#0f2855';
const NAVY_DEEP = '#071a3e';
const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e4c97a';
const WHITE = '#ffffff';
const TEXT_LIGHT_MUTED = 'rgba(255, 255, 255, 0.72)';

// Pages to generate OG images for.
// Each entry: { slug, eyebrow, title, subtitle? }
// `slug` becomes the output filename (default → 'default').
const pages = [
  {
    slug: 'default',
    eyebrow: 'Kurumsal Claude Eğitimi · Türkiye',
    title: "Türkiye'nin Kurumsal Claude Eğitim Platformu",
    subtitle: 'Bireysel ve Kurumsal Programlar',
  },
  {
    slug: 'index',
    eyebrow: 'Kurumsal Claude Eğitimi · Türkiye',
    title: 'Claude doğru öğretildiğinde şirketinizi 3 ayda dönüştürür.',
  },
  {
    slug: 'programlar',
    eyebrow: 'Programlar',
    title: 'İki yol. Aynı sonuç.',
    subtitle: 'Bireysel · Kurumsal',
  },
  {
    slug: 'programlar-bireysel',
    eyebrow: 'Bireysel Program',
    title: '3 hafta. Birebir. Kendi işinizle.',
    subtitle: '$1.000 + KDV · 6 saat eğitim · 3 ay destek',
  },
  {
    slug: 'programlar-kurumsal',
    eyebrow: 'Kurumsal Program',
    title: '6 çalışan. 3 ay. Şirket içi dönüşüm.',
    subtitle: '$3.000 + KDV / ay · Min. 3 ay · 36 saat eğitim',
  },
  {
    slug: 'programlar-karsilastirma',
    eyebrow: 'Karşılaştırma',
    title: 'Bireysel mi, Kurumsal mı?',
    subtitle: 'Yan yana karar verin',
  },
  {
    slug: 'hakkinda',
    eyebrow: 'Hakkında',
    title: 'Murat Özsaygılı ve Zamana',
    subtitle: '25+ yıl teknoloji ve iş danışmanlığı',
  },
  {
    slug: 'iletisim',
    eyebrow: 'İletişim',
    title: '15 dakikalık keşif görüşmesi',
    subtitle: 'Önce dinlemek istiyoruz',
  },
  {
    slug: 'sss',
    eyebrow: 'Sık Sorulan Sorular',
    title: 'Karar vermeden önce sorulan sorular',
  },
  {
    slug: 'gizlilik',
    eyebrow: 'Yasal',
    title: 'Gizlilik ve KVKK Aydınlatma Metni',
  },
  {
    slug: 'cerezler',
    eyebrow: 'Yasal',
    title: 'Çerez Politikası',
  },
];

/**
 * Build the satori JSX-like tree for a single OG image.
 */
function template({ eyebrow, title, subtitle }) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
        color: WHITE,
        fontFamily: 'Plus Jakarta Sans',
        position: 'relative',
      },
      children: [
        // Top: brand mark
        {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center', gap: '16px' },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: GOLD,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: NAVY_DEEP,
                  },
                  children: 'Z',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '32px',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    color: WHITE,
                  },
                  children: 'Zamana',
                },
              },
            ],
          },
        },
        // Center: eyebrow + title + subtitle
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '1056px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: GOLD_LIGHT,
                  },
                  children: eyebrow,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: title.length > 50 ? '60px' : '72px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: WHITE,
                  },
                  children: title,
                },
              },
              ...(subtitle
                ? [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '26px',
                          fontWeight: 500,
                          color: TEXT_LIGHT_MUTED,
                          marginTop: '8px',
                        },
                        children: subtitle,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
        // Bottom: domain
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `1px solid rgba(255, 255, 255, 0.12)`,
              paddingTop: '24px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '22px',
                    fontWeight: 600,
                    color: GOLD_LIGHT,
                    letterSpacing: '0.02em',
                  },
                  children: 'zamana.com.tr',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '18px',
                    fontWeight: 500,
                    color: TEXT_LIGHT_MUTED,
                  },
                  children: 'Anthropic Partner · Türkçe-First',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generateOne(page) {
  const svg = await satori(template(page), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Plus Jakarta Sans', data: fontRegular,   weight: 400, style: 'normal' },
      { name: 'Plus Jakarta Sans', data: fontRegular,   weight: 500, style: 'normal' },
      { name: 'Plus Jakarta Sans', data: fontSemiBold,  weight: 600, style: 'normal' },
      { name: 'Plus Jakarta Sans', data: fontBold,      weight: 700, style: 'normal' },
      { name: 'Plus Jakarta Sans', data: fontExtraBold, weight: 800, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  })
    .render()
    .asPng();

  const outPath = join(OUT_DIR, `${page.slug}.png`);
  writeFileSync(outPath, png);
  return outPath;
}

console.log(`[og] Generating ${pages.length} OG images...`);
const start = Date.now();
for (const page of pages) {
  const path = await generateOne(page);
  console.log(`[og] ✓ ${path.replace(ROOT, '.')}`);
}
console.log(`[og] Done in ${Date.now() - start}ms`);

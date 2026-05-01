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
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
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

const logoBuffer = readFileSync(join(__dirname, 'assets', 'zamana-logo-horizontal.png'));
const logoDataUrl = `data:image/png;base64,${logoBuffer.toString('base64')}`;

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

// ── Wiki pages: discover from src/content/wiki/, derive eyebrow from section,
// title from frontmatter. Output filename: wiki-<slug-with-dashes>.png ────────
const WIKI_DIR = join(ROOT, 'src', 'content', 'wiki');
const SECTION_LABELS = {
  '': 'Wiki',
  'temeller': 'Temeller',
  'araclar': 'Araçlar',
  'claude-md': 'CLAUDE.md',
  'prompting': 'Prompting',
  'yetenekler': 'Yetenekler',
  'mcp': 'MCP ve Eklentiler',
  'departmanlar': 'Departmanlar',
  'sozluk': 'Sözlük',
};

function walkMdx(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walkMdx(full, files);
    else if (entry.endsWith('.mdx') || entry.endsWith('.md')) files.push(full);
  }
  return files;
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/);
    if (km) {
      let v = km[2].trim();
      // Strip surrounding quotes
      v = v.replace(/^["'](.*)["']$/, '$1');
      out[km[1]] = v;
    }
  }
  return out;
}

const wikiFiles = walkMdx(WIKI_DIR);
for (const file of wikiFiles) {
  const rel = relative(WIKI_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
  // rel: 'index' | 'sozluk' | 'temeller/index' | 'temeller/claude-nedir'
  let urlSlug;
  if (rel === 'index') urlSlug = '';
  else urlSlug = rel.replace(/\/index$/, '');

  const fm = parseFrontmatter(readFileSync(file, 'utf8'));
  const title = fm.title || urlSlug;

  // Eyebrow: section label, or 'Wiki' for the homepage
  const sectionKey = urlSlug.split('/')[0] || '';
  const eyebrow = SECTION_LABELS[sectionKey] || 'Wiki';

  pages.push({
    slug: urlSlug ? `wiki-${urlSlug.replace(/\//g, '-')}` : 'wiki-index',
    eyebrow,
    title: title.length > 90 ? title.slice(0, 87) + '…' : title,
  });
}

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
        // Top: brand logo (white card, matching Footer pattern)
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              background: WHITE,
              padding: '14px 20px',
              borderRadius: '12px',
              alignSelf: 'flex-start',
            },
            children: [
              {
                type: 'img',
                props: {
                  src: logoDataUrl,
                  width: 220,
                  height: 73,
                  style: { display: 'block' },
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

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ── rehype: width/height + lazy loading for /images/* in Markdown ──────────
// Reads intrinsic size from public/ (SVG viewBox or width/height, PNG IHDR,
// WebP VP8/VP8L/VP8X header) so the browser reserves space (no CLS). Every
// image after the first one on a page gets loading="lazy". No dependencies.
const publicDir = fileURLToPath(new URL('./public/', import.meta.url));
const dimCache = new Map();

function readImageSize(src) {
  if (dimCache.has(src)) return dimCache.get(src);
  let size = null;
  try {
    const rel = decodeURIComponent(src.split(/[?#]/)[0]).replace(/^\/+/, '');
    const file = path.join(publicDir, rel);
    const buf = fs.readFileSync(file);
    const ext = path.extname(file).toLowerCase();
    if (ext === '.svg') {
      const tag = (buf.toString('utf8', 0, Math.min(buf.length, 8192)).match(/<svg\b[^>]*>/i) || [''])[0];
      const vb = tag.match(/viewBox\s*=\s*["']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
      const w = tag.match(/\swidth\s*=\s*["']([\d.]+)(?:px)?["']/i);
      const h = tag.match(/\sheight\s*=\s*["']([\d.]+)(?:px)?["']/i);
      if (w && h) size = [Math.round(+w[1]), Math.round(+h[1])];
      else if (vb) size = [Math.round(+vb[1]), Math.round(+vb[2])];
    } else if (ext === '.png') {
      if (buf.toString('ascii', 12, 16) === 'IHDR') size = [buf.readUInt32BE(16), buf.readUInt32BE(20)];
    } else if (ext === '.webp') {
      if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
        const chunk = buf.toString('ascii', 12, 16);
        if (chunk === 'VP8X') size = [1 + buf.readUIntLE(24, 3), 1 + buf.readUIntLE(27, 3)];
        else if (chunk === 'VP8 ') size = [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
        else if (chunk === 'VP8L') {
          const bits = buf.readUInt32LE(21);
          size = [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
        }
      }
    }
    if (size && !(size[0] > 0 && size[1] > 0)) size = null;
  } catch {
    size = null;
  }
  dimCache.set(src, size);
  return size;
}

function rehypeImageSize() {
  return (tree) => {
    let count = 0;
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        const props = node.properties || (node.properties = {});
        const src = typeof props.src === 'string' ? props.src : '';
        if (/^\/images\/.+\.(svg|webp|png)$/i.test(src.split(/[?#]/)[0])) {
          if (props.width == null && props.height == null) {
            const size = readImageSize(src);
            if (size) {
              props.width = size[0];
              props.height = size[1];
            }
          }
          if (count > 0 && props.loading == null) props.loading = 'lazy';
          if (props.decoding == null) props.decoding = 'async';
          count++;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://zamana.com.tr',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: true,
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypeImageSize],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});

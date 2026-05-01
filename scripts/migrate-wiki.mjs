/**
 * One-shot wiki migration script.
 * Copies wiki/docs/**.md → Website/src/content/wiki/**.md
 * Transforms MkDocs Material syntax to Astro/HTML equivalents.
 *
 * Run: node scripts/migrate-wiki.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const WORKSPACE_ROOT = resolve(ROOT, '..');
const WIKI_SRC = join(WORKSPACE_ROOT, 'wiki', 'docs');
const WIKI_DEST = join(ROOT, 'src', 'content', 'wiki');
const SNIPPETS_SRC = join(WORKSPACE_ROOT, 'wiki', 'snippets');

// --- read snippet content ---
const retainerCta = readFileSync(join(SNIPPETS_SRC, 'retainer-cta.md'), 'utf8').trim();

// --- recursively walk markdown files ---
function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      // skip assets and stylesheets, those go elsewhere
      if (entry === 'assets' || entry === 'stylesheets') continue;
      walk(full, files);
    } else if (entry.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

// --- transform helpers ---

/**
 * Replace --8<-- "retainer-cta.md" with the full <RetainerCTA /> component placeholder.
 * We use an HTML marker that gets resolved by the wiki layout later.
 */
function transformSnippets(content) {
  return content.replace(/--8<--\s+["']retainer-cta\.md["']/g, '<RetainerCTA />');
}

/**
 * Convert :material-icon-name:{ .lg .middle } to inline icon spans.
 * We render Material icons as SVG-backed CSS or simple emoji-equivalent fallback.
 * For now, we replace with a placeholder icon span that picks up from CSS.
 */
function transformIcons(content) {
  // :material-foo-bar:{ .lg .middle } or :octicons-arrow-right-24:
  return content
    .replace(/:material-([a-z0-9-]+):\{\s*\.lg\s*\.middle\s*\}/g, (_, name) => `<span class="wiki-icon wiki-icon--lg" data-icon="${name}" aria-hidden="true"></span>`)
    .replace(/:material-([a-z0-9-]+):/g, (_, name) => `<span class="wiki-icon" data-icon="${name}" aria-hidden="true"></span>`)
    .replace(/:octicons-arrow-right-24:/g, '→');
}

/**
 * Convert MkDocs grid-cards block:
 *   <div class="grid cards" markdown>
 *   - icon **Title**
 *      ---
 *      Body
 *      [link](url)
 *   </div>
 *
 * We keep the wrapper div but flatten markdown=true children and rely on
 * MDX/Astro markdown renderer being able to handle nested markdown in HTML
 * blocks. For broader compatibility we transform to a custom wrapper:
 *
 *   <div class="wiki-grid">
 *     <div class="wiki-card">...</div>
 *   </div>
 *
 * MDX inside HTML can render fine if we leave the markdown inside.
 * Strategy: keep the existing structure but rename the wrapper class so
 * our CSS targets it, drop the `markdown` attribute (Astro doesn't need it).
 */
function transformGridCards(content) {
  return content.replace(/<div class="grid cards" markdown>/g, '<div class="wiki-grid">');
}

/**
 * Convert .md links to clean URLs.
 * `](path/to/file.md)` → `](path/to/file/)` (within same folder)
 * `](../other/file.md)` → `](../other/file/)`
 * Keep absolute links and external links untouched.
 * Convert `index.md` to just the folder slug.
 */
function transformLinks(content) {
  return content.replace(/\]\(([^)]+?)\)/g, (match, url) => {
    // External or anchor or absolute http — leave alone
    if (/^(https?:|mailto:|tel:|#|\/)/.test(url)) return match;
    // Strip .md extension. index.md → empty string.
    let cleaned = url.replace(/\.md(#.*)?$/, '$1');
    // Replace trailing /index with just /
    cleaned = cleaned.replace(/\/index$/, '/');
    cleaned = cleaned.replace(/^index$/, './');
    // Make sure it ends with / (Astro directory format) unless it's an anchor
    if (!cleaned.includes('#') && !cleaned.endsWith('/')) cleaned += '/';
    return `](${cleaned})`;
  });
}

/**
 * Convert Material admonitions:
 *   !!! abstract "Title"
 *       Content (indented 4 spaces)
 *
 * Becomes:
 *   <div class="wiki-admonition wiki-admonition--abstract">
 *     <div class="wiki-admonition__title">Title</div>
 *     <div class="wiki-admonition__body">Content</div>
 *   </div>
 */
function transformAdmonitions(content) {
  const lines = content.split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(/^!!!\s+(\w+)(?:\s+"([^"]+)")?\s*$/);
    if (m) {
      const type = m[1];
      const title = m[2] || type.charAt(0).toUpperCase() + type.slice(1);
      const body = [];
      i++;
      while (i < lines.length && (lines[i] === '' || lines[i].startsWith('    '))) {
        if (lines[i] === '') body.push('');
        else body.push(lines[i].slice(4));
        i++;
      }
      // Trim trailing empty lines
      while (body.length && body[body.length - 1] === '') body.pop();
      out.push(`<div class="wiki-admonition wiki-admonition--${type}">`);
      out.push(`  <div class="wiki-admonition__title">${title}</div>`);
      out.push(`  <div class="wiki-admonition__body" markdown>`);
      out.push('');
      out.push(...body);
      out.push('');
      out.push(`  </div>`);
      out.push(`</div>`);
      out.push('');
      continue;
    }
    out.push(line);
    i++;
  }
  return out.join('\n');
}

/**
 * Convert button attribute lists:
 *   [Görüşme Talep Et](/iletisim){ .md-button .md-button--primary }
 *   [More info](/x){ .md-button }
 */
function transformButtons(content) {
  return content.replace(
    /\[([^\]]+)\]\(([^)]+)\)\{\s*\.md-button(\s+\.md-button--primary)?\s*\}/g,
    (_, text, url, primary) => {
      const cls = primary ? 'btn btn--primary' : 'btn btn--secondary';
      return `<a href="${url}" class="${cls}">${text}</a>`;
    }
  );
}

/**
 * Strip remaining {.classname} attribute lists we don't want to surface.
 * Keep them only on links/blocks we transformed; bare ones leak through
 * as literal text.
 */
function stripStrayAttrLists(content) {
  // Only strip bare `{ .foo }` patterns at end of line that didn't get caught above.
  return content.replace(/\{\s*\.[a-zA-Z][\w-]+(?:\s+\.[a-zA-Z][\w-]+)*\s*\}/g, '');
}

/**
 * Inject MDX import for RetainerCTA at the top if used.
 * Returns content with import + frontmatter intact.
 */
function injectImports(content, isMDX) {
  if (!isMDX) return content;
  if (!content.includes('<RetainerCTA />')) return content;
  // Insert imports after frontmatter
  const fmEnd = content.indexOf('---', 3);
  if (fmEnd === -1) return content;
  const head = content.slice(0, fmEnd + 3);
  const tail = content.slice(fmEnd + 3);
  return `${head}\nimport RetainerCTA from '../../components/RetainerCTA.astro';\n${tail}`;
}

/**
 * Decide whether to output as .mdx (uses components) or .md (pure markdown).
 */
function needsMdx(content) {
  return /<RetainerCTA/.test(content) || /<div class="wiki-grid">/.test(content) || /<div class="wiki-admonition/.test(content);
}

// --- main ---

const files = walk(WIKI_SRC);
console.log(`[migrate] Found ${files.length} markdown files in wiki/docs/`);

let mdCount = 0;
let mdxCount = 0;

for (const srcPath of files) {
  const rel = relative(WIKI_SRC, srcPath);
  let content = readFileSync(srcPath, 'utf8');

  // Apply transforms in order — most specific first
  content = transformAdmonitions(content);
  content = transformSnippets(content);
  content = transformGridCards(content);
  content = transformButtons(content);
  content = transformIcons(content);
  content = transformLinks(content);
  content = stripStrayAttrLists(content);

  const useMdx = needsMdx(content);
  content = injectImports(content, useMdx);

  // Determine destination path
  const ext = useMdx ? '.mdx' : '.md';
  const destRel = rel.replace(/\.md$/, ext);
  const destPath = join(WIKI_DEST, destRel);
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, content);

  if (useMdx) mdxCount++;
  else mdCount++;
}

console.log(`[migrate] Wrote ${mdCount} .md + ${mdxCount} .mdx → src/content/wiki/`);

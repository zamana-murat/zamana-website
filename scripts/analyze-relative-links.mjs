import fs from 'fs';
import path from 'path';

const SECTIONS = ['araclar', 'claude-md', 'departmanlar', 'mcp', 'prompting', 'temeller', 'yetenekler'];
const TOP_LEVEL = ['okuma-sirasi', 'sozluk', 'index'];
const ROOT = 'src/content/wiki';

function walk(d) {
  const out = [];
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const stats = {
  crossSection: 0,
  sameSection: 0,
  topLevel: 0,
  doubleUp: 0,
  otherPattern: 0,
  sample: { crossSection: [], sameSection: [], doubleUp: [], otherPattern: [], topLevel: [] },
};

for (const f of walk(ROOT)) {
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  const parts = rel.split('/');
  const section = parts.length > 1 ? parts[0] : null;
  const text = fs.readFileSync(f, 'utf8');
  const re = /\]\(((\.\.?\/)[^)]*)\)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const link = m[1];
    if (link.startsWith('../../')) {
      stats.doubleUp++;
      if (stats.sample.doubleUp.length < 5) stats.sample.doubleUp.push(rel + ': ' + link);
      continue;
    }
    if (link.startsWith('../')) {
      const after = link.slice(3);
      const seg = after.split('/').filter(Boolean);
      if (seg.length === 1) {
        if (TOP_LEVEL.includes(seg[0])) {
          stats.topLevel++;
          if (stats.sample.topLevel.length < 5) stats.sample.topLevel.push(rel + ': ' + link);
        } else {
          stats.sameSection++;
          if (stats.sample.sameSection.length < 5) stats.sample.sameSection.push(rel + ': ' + link);
        }
      } else if (seg.length >= 2 && SECTIONS.includes(seg[0])) {
        stats.crossSection++;
        if (stats.sample.crossSection.length < 5) stats.sample.crossSection.push(rel + ': ' + link);
      } else {
        stats.otherPattern++;
        if (stats.sample.otherPattern.length < 5) stats.sample.otherPattern.push(rel + ': ' + link);
      }
    }
  }
}

console.log(JSON.stringify(stats, null, 2));

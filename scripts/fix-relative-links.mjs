import fs from 'fs';
import path from 'path';

const SECTIONS = ['araclar', 'claude-md', 'departmanlar', 'mcp', 'prompting', 'temeller', 'yetenekler'];
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

let totalChanged = 0;
let filesChanged = 0;
const samples = [];

for (const f of walk(ROOT)) {
  const original = fs.readFileSync(f, 'utf8');
  let count = 0;

  const updated = original.replace(/\]\(\.\.\/([^)]+)\)/g, (match, rest) => {
    const firstSeg = rest.split('/')[0];
    if (SECTIONS.includes(firstSeg)) {
      count++;
      return '](/wiki/' + rest + ')';
    }
    return match;
  });

  if (updated !== original) {
    fs.writeFileSync(f, updated);
    totalChanged += count;
    filesChanged++;
    if (samples.length < 10) {
      const rel = path.relative(ROOT, f).split(path.sep).join('/');
      samples.push(`${rel}: ${count} links converted`);
    }
  }
}

console.log(`Converted ${totalChanged} links across ${filesChanged} files`);
console.log('Samples:');
samples.forEach(s => console.log('  ' + s));

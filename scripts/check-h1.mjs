import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(d, files = []) {
  for (const e of readdirSync(d)) {
    const f = join(d, e);
    const st = statSync(f);
    if (st.isDirectory()) walk(f, files);
    else if (f.endsWith('.md')) files.push(f);
  }
  return files;
}

const files = walk('src/content/wiki');
const stillHasH1 = [];
for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, '');
  const firstLine = body.split('\n').find((l) => l.trim().length > 0) || '';
  if (/^#\s/.test(firstLine.trim())) {
    stillHasH1.push({ file: f, heading: firstLine.trim() });
  }
}
console.log('Files still starting with H1:', stillHasH1.length);
stillHasH1.forEach((x) => console.log('  -', x.file.replace(/\\/g, '/'), '→', x.heading));

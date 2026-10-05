// Genera las redirecciones 301 a partir de redirects.csv.
// Salidas: public/_redirects (Netlify / Cloudflare Pages) y vercel.json (Vercel).
import { readFileSync, writeFileSync } from 'node:fs';

const rows = readFileSync(new URL('../redirects.csv', import.meta.url), 'utf8')
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => l.split(',').map((x) => x.trim()));

const bad = rows.filter(([a, b]) => !a?.startsWith('/') || !b?.startsWith('/') || a === b);
if (bad.length) { console.error('Filas inválidas:', bad); process.exit(1); }
const seen = new Set();
for (const [a] of rows) { if (seen.has(a)) { console.error('Origen duplicado:', a); process.exit(1); } seen.add(a); }

writeFileSync(new URL('../public/_redirects', import.meta.url), rows.map(([a, b]) => `${a} ${b} 301`).join('\n') + '\n');
writeFileSync(new URL('../vercel.json', import.meta.url), JSON.stringify({
  trailingSlash: true,
  redirects: rows.map(([source, destination]) => ({ source, destination, permanent: true })),
}, null, 2) + '\n');
console.log(`${rows.length} redirecciones generadas.`);

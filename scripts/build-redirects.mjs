// Genera vercel.json (redirecciones 301) a partir de redirects.csv.
// Rutas: se crean la versión con y sin barra final. Enlaces tipo /?p=123: se crean como regla con consulta.
import { readFileSync, writeFileSync } from 'node:fs';

const rows = readFileSync(new URL('../redirects.csv', import.meta.url), 'utf8')
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => l.split(',').map((x) => x.trim()));

const bad = rows.filter(([a, b]) => !a?.startsWith('/') || !b?.startsWith('/') || a === b);
if (bad.length) { console.error('Filas inválidas:', bad); process.exit(1); }
const seen = new Set();
for (const [a] of rows) { if (seen.has(a)) { console.error('Origen duplicado:', a); process.exit(1); } seen.add(a); }

const redirects = [];
for (const [src, destination] of rows) {
  const [path, query] = src.split('?');
  if (query) {
    const [key, value] = query.split('=');
    redirects.push({ source: path, has: [{ type: 'query', key, value }], destination, permanent: true });
  } else {
    redirects.push({ source: path, destination, permanent: true });
    if (path !== '/' && path.endsWith('/')) redirects.push({ source: path.slice(0, -1), destination, permanent: true });
  }
}
writeFileSync(new URL('../vercel.json', import.meta.url), JSON.stringify({ trailingSlash: true, redirects }, null, 2) + '\n');
console.log(`${rows.length} filas -> ${redirects.length} reglas en vercel.json`);

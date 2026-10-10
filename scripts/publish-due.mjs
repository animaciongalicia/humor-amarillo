// Comprueba si hoy (hora de Madrid) toca publicar algún post programado de src/data/blog-calendar.ts.
// Si toca, actualiza src/data/ultimo-post-publicado.txt; el commit de ese cambio redespliega la web en Vercel.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Madrid' });
const src = readFileSync(new URL('../src/data/blog-calendar.ts', import.meta.url), 'utf8');
const items = [...src.matchAll(/slug: '([^']+)'[\s\S]*?date: '(\d{4}-\d{2}-\d{2})'/g)].map(([, slug, date]) => ({ slug, date }));
const due = items.filter((i) => i.date <= today).sort((a, b) => a.date.localeCompare(b.date));
const file = new URL('../src/data/ultimo-post-publicado.txt', import.meta.url);
const last = existsSync(file) ? readFileSync(file, 'utf8').trim().split(' ')[0] : '';
const latest = due.at(-1);
if (!latest || latest.date <= last) {
  console.log(`Hoy ${today}: nada nuevo que publicar.`);
} else {
  writeFileSync(file, `${latest.date} ${latest.slug}\n`);
  console.log(`Hoy ${today}: publicar ${latest.slug}`);
}

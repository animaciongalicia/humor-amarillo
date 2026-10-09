import type { APIRoute } from 'astro';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { posts } from '../data/blog';

// Páginas que no se indexan.
const EXCLUDE = new Set(['404', 'aviso-legal-privacidad']);

export const GET: APIRoute = ({ site }) => {
  const dir = join(process.cwd(), 'src', 'pages');
  const paths = readdirSync(dir)
    .filter((f) => f.endsWith('.astro'))
    .map((f) => f.replace(/\.astro$/, ''))
    .filter((n) => !EXCLUDE.has(n))
    .map((n) => (n === 'index' ? '/' : `/${n}/`))
    .concat(['/blog/', ...posts.map((p) => `/blog/${p.slug}/`)])
    .sort();
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

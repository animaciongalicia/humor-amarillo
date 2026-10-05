import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: dominio definitivo (sin barra final). Dominio actual (hoy en WordPress); confirmar ortografía.
const site = process.env.SITE_URL || 'https://www.humoramarilloencoruna.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/aviso-legal-privacidad/') })],
});

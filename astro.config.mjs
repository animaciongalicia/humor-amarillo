import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: dominio definitivo (sin barra final). Pendiente de confirmar.
const site = process.env.SITE_URL || 'https://humoramarillocoruna.example';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/aviso-legal-privacidad/') })],
});

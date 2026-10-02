// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/content/site.ts';

export default defineConfig({
  // La URL se toma de src/content/site.ts (site.url).
  site: site.url,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // La página de confirmación del formulario no va al sitemap.
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

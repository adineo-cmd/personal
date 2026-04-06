// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo.neocities.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});

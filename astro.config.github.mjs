// astro.config.github.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo-cmd.github.io/personal',
  base: '/personal',  // ← Critical for subpath!
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});

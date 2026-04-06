// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHub = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHub ? 'https://adineo-cmd.github.io/personal' : 'https://adineo.neocities.org',
  base: isGitHub ? '/personal' : undefined,
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
});

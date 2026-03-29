// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Check deployment target from environment variable
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGitHubPages 
    ? 'https://adineo-cmd.github.io/personal' 
    : 'https://adineo.neocities.org',
  base: isGitHubPages ? '/personal' : undefined,
  integrations: [sitemap()],
  output: 'static',
});

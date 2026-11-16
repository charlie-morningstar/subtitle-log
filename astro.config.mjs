// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://subtitle-log.github.io',
  base: '/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
  integrations: [sitemap()],
});

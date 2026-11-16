// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://charlie-morningstar.github.io',
  base: '/subtitle-log',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
  integrations: [sitemap()],
});

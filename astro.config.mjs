// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://charlie-morningstar.github.io',
  base: '/8080_folio',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
  integrations: [sitemap()],
});

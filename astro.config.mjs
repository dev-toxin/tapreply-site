// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tapreply.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // External CSS only: lets us ship a strict CSP without 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', es: 'es' },
      },
    }),
  ],
  vite: {
    build: {
      // Never inline assets/scripts as data: or inline <script> (CSP).
      assetsInlineLimit: 0,
    },
  },
});

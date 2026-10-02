// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rename, rmdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/**
 * Cloudflare Pages serves the nearest `404.html` walking up from the requested path.
 * With build.format 'directory', localized 404 pages land in /ru/404/index.html —
 * move them to /ru/404.html so /ru/anything-missing gets the Russian 404.
 */
const localized404 = {
  name: 'localized-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const l of ['ru', 'es']) {
        await rename(`${root}${l}/404/index.html`, `${root}${l}/404.html`);
        await rmdir(`${root}${l}/404`);
      }
    },
  },
};

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
    localized404,
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
      // One small shared stylesheet (~30 KB) instead of many per-component files:
      // fewer render-blocking requests, cached across all pages.
      cssCodeSplit: false,
    },
  },
});

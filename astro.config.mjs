// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Hosting: GitHub Pages (Actions). GitHub serves only the root /404.html for any
 * missing path, so the Russian 404 stays a regular page at /ru/404/ (not auto-served).
 * The former Cloudflare-specific `localized404` hook was removed.
 */

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
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru' },
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

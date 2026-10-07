# tapreply-site

Маркетинговый сайт **TapReply** (www.tapreply.net) — AI-помощник для ответов на отзывы для кафе, ресторанов, баров и небольших отелей.

Статический многостраничный сайт на **Astro 7** + TypeScript, 3 языка (EN / RU / ES), почти без JS, готов к Cloudflare Pages.

## Быстрый старт

```bash
nvm use            # Node 24 из .nvmrc (нужен Node >= 20)
npm install
npm run dev        # http://localhost:4321
npm run build      # сборка в dist/
npm run preview    # просмотр собранного dist/
npm run check:links  # проверка внутренних ссылок, якорей, h1, hreflang, CSP-совместимости (после build)
npm test           # build + check:links
```

## Структура

```
src/
  i18n/            en.ts (эталон, задаёт тип Dict), ru.ts, es.ts, utils.ts (языки, href(), mailto())
  layouts/         BaseLayout.astro — <head>: SEO, canonical, hreflang, OG/Twitter, JSON-LD, favicon
  components/      Header, Footer, Button, Card, Section, Badge, Icon (inline SVG), Faq (<details>),
                   PhoneMockup (CSS-анимация щита), ShieldDemo, Platforms (бейджи / таблица),
                   PlanCards, Cta, PageHead, LegalPage, NotFound
  pages/
    [...lang]/     index, features, how-it-works, pricing, pilot, faq, about, privacy, terms
                   (одна страница → все языки через getStaticPaths)
    404.astro, ru/404.astro, es/404.astro
  styles/global.css  дизайн-токены (CSS custom properties) и базовые стили
public/            _headers, _redirects, CNAME, robots.txt, site.webmanifest, favicon*, og-image.png,
                   brand/ (логотипы), fonts/ (Inter woff2, self-hosted), scripts/pilot-form.js
scripts/           build-brand.mjs (разовая генерация иконок из исходного PNG), check-links.mjs
legacy/index.html  старый одностраничник (для истории, в сборку не входит)
docs/              DECISIONS.md, sessions/
```

## Как добавить страницу

1. Добавьте ключ в тип `PageKey` в `src/i18n/utils.ts`.
2. Добавьте тексты в `src/i18n/en.ts` → `pages.<имя>` (TypeScript подскажет, что нужно в `ru.ts` и `es.ts`).
3. Создайте `src/pages/[...lang]/<имя>.astro` по образцу `about.astro` (`getStaticPaths` → `langPaths()`).
4. При необходимости добавьте ссылку в `Header.astro` / `Footer.astro`. `npm test`.

## Как добавить язык (например, `ka`)

1. `src/i18n/ka.ts` — `export const ka: Dict = {…}` (полная копия структуры `en.ts`).
2. `src/i18n/utils.ts` — добавить `'ka'` в `LANGS`, в `dictionaries` и `LANG_LABELS`.
3. `astro.config.mjs` — добавить в `i18n.locales` и `sitemap.i18n.locales`, а также в список локализованных 404 (`localized404`).
4. `src/pages/ka/404.astro` по образцу `ru/404.astro`.
5. `src/layouts/BaseLayout.astro` — preload нужного сабсета шрифта, если нужен (для грузинского у Inter нет глифов — понадобится другой шрифт).

## Брендовые ассеты

Исходный логотип (2048×2048 PNG) в репозиторий **не** кладётся. Перегенерировать производные:

```bash
LOGO_SRC="/путь/к/tr_logo.png" node scripts/build-brand.mjs
```

## Деплой на Cloudflare Pages (инструкция, ещё не выполнялся)

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → репозиторий `tapreply-site`, ветка (после слияния — `main`).
2. Framework preset: **Astro**. Build command: `npm run build`. Build output directory: `dist`.
3. Environment variables: `NODE_VERSION = 24`.
4. После первого деплоя проверить `*.pages.dev`, затем Custom domains → `www.tapreply.net` (DNS-переключение с GitHub Pages — отдельный шаг, когда решите).
5. `public/_headers` и `public/_redirects` подхватятся автоматически. На GitHub Pages они игнорируются, но `CNAME` сохранён.

## Что временное

- `public/favicon.svg` — временный векторный знак; нужен финальный вектор логотипа.
- Цены — гипотеза раннего доступа (см. `docs/DECISIONS.md`).
- Испанские тексты — нужна вычитка носителем.
- `/privacy`, `/terms` — черновики; оператор — Individual Entrepreneur Anton Kozyrev (Georgia), ID 304822565, trading as AnKo Software Labs (решение 2026-10-07); нужна вычитка юристом.
- Форма пилота открывает почтовый клиент (mailto); реальный обработчик не подключён.

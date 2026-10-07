import { en, type Dict } from './en';
import { ru } from './ru';

export const LANGS = ['en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const dictionaries: Record<Lang, Dict> = { en, ru };

/** Short labels for the language switcher. */
export const LANG_LABELS: Record<Lang, { short: string; native: string }> = {
  en: { short: 'EN', native: 'English' },
  ru: { short: 'RU', native: 'Русский' },
};

/** Page slugs shared by all locales (without leading/trailing slash; '' = home). */
export type PageKey =
  | ''
  | 'features'
  | 'how-it-works'
  | 'pricing'
  | 'pilot'
  | 'faq'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'for/restaurants'
  | 'for/hotels';

export function t(lang: Lang): Dict {
  return dictionaries[lang];
}

/** Build a localized, trailing-slash URL path: ('ru','pricing') -> '/ru/pricing/' */
export function href(lang: Lang, page: PageKey = '', hash = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const path = page ? `${prefix}/${page}/` : `${prefix}/`;
  return hash ? `${path}#${hash}` : path;
}

/** getStaticPaths helper for src/pages/[...lang]/*.astro routes. */
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

export const CONTACT_EMAIL = 'contact@ankosoftlab.com';
export const STUDIO_URL = 'https://ankosoftlab.com';

export function mailto(subject: string, body = ''): string {
  const q = [`subject=${encodeURIComponent(subject)}`];
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${q.join('&')}`;
}

export const siteLocales = [
  'de',
  'en',
  'es',
  'es-419',
  'fr',
  'id',
  'it',
  'ja',
  'ko',
  'pt-BR',
  'ru',
  'zh-Hans',
] as const;

export type SiteLocale = (typeof siteLocales)[number];
export type LocalizedRoute = 'home' | 'tips' | 'join' | 'create';

export const defaultLocale: SiteLocale = 'en';

export const localeMeta: Record<SiteLocale, {
  label: string;
  flag: string;
  htmlLang: string;
  ogLocale: string;
}> = {
  de: { label: 'Deutsch', flag: '🇩🇪', htmlLang: 'de', ogLocale: 'de_DE' },
  en: { label: 'English', flag: '🇺🇸', htmlLang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', flag: '🇪🇸', htmlLang: 'es', ogLocale: 'es_ES' },
  'es-419': { label: 'Español LATAM', flag: '🇲🇽', htmlLang: 'es-419', ogLocale: 'es_419' },
  fr: { label: 'Français', flag: '🇫🇷', htmlLang: 'fr', ogLocale: 'fr_FR' },
  id: { label: 'Bahasa Indonesia', flag: '🇮🇩', htmlLang: 'id', ogLocale: 'id_ID' },
  it: { label: 'Italiano', flag: '🇮🇹', htmlLang: 'it', ogLocale: 'it_IT' },
  ja: { label: '日本語', flag: '🇯🇵', htmlLang: 'ja', ogLocale: 'ja_JP' },
  ko: { label: '한국어', flag: '🇰🇷', htmlLang: 'ko', ogLocale: 'ko_KR' },
  'pt-BR': { label: 'Português do Brasil', flag: '🇧🇷', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  ru: { label: 'Русский', flag: '🇷🇺', htmlLang: 'ru', ogLocale: 'ru_RU' },
  'zh-Hans': { label: '简体中文', flag: '🇨🇳', htmlLang: 'zh-Hans', ogLocale: 'zh_CN' },
};

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.includes(value as SiteLocale);
}

export function getHomePath(locale: SiteLocale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function getTipsPath(locale: SiteLocale): string {
  return locale === 'ru' ? '/tips/' : `/${locale}/tips/`;
}

export function getDeepLinkPath(locale: SiteLocale, route: Extract<LocalizedRoute, 'join' | 'create'>): string {
  return locale === defaultLocale ? `/${route}/` : `/${locale}/${route}/`;
}

export function getLocalizedPath(locale: SiteLocale, route: LocalizedRoute): string {
  if (route === 'home') return getHomePath(locale);
  if (route === 'tips') return getTipsPath(locale);
  return getDeepLinkPath(locale, route);
}

export function absoluteUrl(path: string): string {
  return new URL(path, 'https://vaultgame.app').toString();
}

export function getLanguageLinks(route: LocalizedRoute) {
  return siteLocales.map((locale) => ({
    locale,
    href: getLocalizedPath(locale, route),
    label: localeMeta[locale].label,
    flag: localeMeta[locale].flag,
  }));
}

export function getAlternatePages(route: LocalizedRoute) {
  return siteLocales.map((locale) => ({
    locale,
    htmlLang: localeMeta[locale].htmlLang,
    ogLocale: localeMeta[locale].ogLocale,
    url: absoluteUrl(getLocalizedPath(locale, route)),
  }));
}

export { siteConfig, contact, externalLinks } from './data/site';
export { feedbackFormsContentByLocale } from './data/feedback';
export { siteContentByLocale } from './data/site-pages';
export {
  absoluteUrl,
  defaultLocale,
  getAlternatePages,
  getDeepLinkPath,
  getHomePath,
  getLanguageLinks,
  getLocalizedPath,
  getTipsPath,
  isSiteLocale,
  localeMeta,
  siteLocales,
} from './i18n';
export { tipsContentByLocale } from './data/tips';
export type {
  BunkerEffectId,
  BunkerEffectOption,
  FeedbackChoice,
  FeedbackFormKind,
  FeedbackFormsContent,
  FeedbackOption,
  IdeaKind,
} from './data/feedback';
export type {
  DeepLinkContent,
  DeepLinkRoute,
  FooterContent,
  HeaderContent,
  HomeDescriptionContent,
  HomeTabId,
  HomeTabsContent,
  LegalTabContent,
  SitePageContent,
  SupportContent,
} from './data/site-pages';
export type { LocalizedRoute, SiteLocale } from './i18n';
export type {
  PageMeta,
  LegalSection,
  ContactInfo,
  ExternalLink,
  TipsLocale,
  TipsPageContent,
  TipsQuickTip,
  TipsSection,
} from './types';

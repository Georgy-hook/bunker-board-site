import type { SiteLocale } from './i18n';

export interface PageMeta {
  title: string;
  description: string;
  slug: string;
}

export interface LegalSection {
  heading: string;
  content: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  telegram: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  icon?: string;
  color: string;
}

export type TipsLocale = SiteLocale;

export interface TipsQuickTip {
  icon: string;
  title: string;
  text: string;
}

export interface TipsListItem {
  title: string;
  text: string;
}

export interface TipsListGroup {
  heading: string;
  items: TipsListItem[];
}

export interface TipsTableRow {
  label: string;
  description: string;
}

export interface TipsTable {
  heading: string;
  headers: [string, string];
  rows: TipsTableRow[];
}

export type TipsSectionKind = 'intro' | 'grouped-list' | 'table' | 'ordered-list' | 'paragraphs';

export interface TipsSection {
  id: string;
  kind: TipsSectionKind;
  icon: string;
  title: string;
  paragraphs?: string[];
  groups?: TipsListGroup[];
  table?: TipsTable;
  items?: TipsListItem[];
}

export interface TipsHero {
  icon: string;
  title: string;
  subtitle: string;
  leftDecorIcon: string;
  rightDecorIcon: string;
}

export interface TipsCta {
  text: string;
  label: string;
  href: string;
}

export interface TipsPageContent {
  locale: TipsLocale;
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  headline: string;
  canonicalUrl: string;
  keywords: string;
  ogImage: string;
  ogImageAlt: string;
  datePublished: string;
  dateModified: string;
  hero: TipsHero;
  quickTips: TipsQuickTip[];
  sections: TipsSection[];
  cta: TipsCta;
}

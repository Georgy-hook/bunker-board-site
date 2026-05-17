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

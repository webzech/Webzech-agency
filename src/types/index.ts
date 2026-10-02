export type Language = 'de' | 'en' | 'ru' | 'uk';

export type PageId =
  | 'home'
  | 'webentwicklung'
  | 'webdesign'
  | 'wordpress'
  | 'landingpages'
  | 'seo'
  | 'regionen'
  | 'region-bayern'
  | 'region-passau'
  | 'region-vilshofen'
  | 'region-muenchen'
  | 'region-berlin'
  | 'region-hamburg'
  | 'region-frankfurt'
  | 'region-duesseldorf'
  | 'portfolio'
  | 'ueber-uns'
  | 'blog'
  | 'faq'
  | 'kontakt'
  | 'impressum'
  | 'datenschutz'
  | 'cookies';

export interface RouteInfo {
  pageId: PageId;
  lang: Language;
  slug?: string;
  articleId?: string;
  projectId?: string;
}

export interface ServiceItem {
  id: string;
  pageId: PageId;
  slug: string;
  title: Record<Language, string>;
  shortDesc: Record<Language, string>;
  heroH1: Record<Language, string>;
  problemTitle: Record<Language, string>;
  problemText: Record<Language, string>;
  solutionTitle: Record<Language, string>;
  solutionText: Record<Language, string>;
  benefits: Record<Language, string[]>;
  processSteps: Record<Language, { step: string; title: string; desc: string }[]>;
  techStack: string[];
  faqs: { q: Record<Language, string>; a: Record<Language, string> }[];
  relatedServices: { id: string; name: Record<Language, string>; path: string }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  serviceType: string;
  industry: Record<Language, string>;
  image: string;
  summary: Record<Language, string>;
  challenge: Record<Language, string>;
  solution: Record<Language, string>;
  tech: string[];
  deliverables: Record<Language, string[]>;
  location?: string;
}

export interface RegionItem {
  id: string;
  pageId: PageId;
  name: string;
  slug: string;
  heroTitle: Record<Language, string>;
  heroSubtitle: Record<Language, string>;
  profileText: Record<Language, string>;
  targetAudience: Record<Language, string>;
  localFeatures: Record<Language, string[]>;
  recommendedServices: { id: string; title: Record<Language, string>; path: string }[];
  faqs: { q: Record<Language, string>; a: Record<Language, string> }[];
}

export interface BlogItem {
  id: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string[]>;
  author: string;
}

export interface FaqItem {
  category: 'allgemein' | 'webentwicklung' | 'wordpress' | 'landingpages' | 'seo' | 'zusammenarbeit' | 'regionen';
  categoryLabel: Record<Language, string>;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

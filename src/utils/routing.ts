import { Language, PageId, RouteInfo } from '../types';

export const pagePathMap: Record<PageId, Record<Language, string>> = {
  home: {
    de: '/',
    en: '/en/',
    ru: '/ru/',
    uk: '/uk/'
  },
  webentwicklung: {
    de: '/webentwicklung/',
    en: '/en/web-development/',
    ru: '/ru/web-development/',
    uk: '/uk/web-development/'
  },
  webdesign: {
    de: '/webdesign/',
    en: '/en/web-design/',
    ru: '/ru/web-design/',
    uk: '/uk/web-design/'
  },
  wordpress: {
    de: '/wordpress/',
    en: '/en/wordpress/',
    ru: '/ru/wordpress/',
    uk: '/uk/wordpress/'
  },
  landingpages: {
    de: '/landingpages/',
    en: '/en/landing-pages/',
    ru: '/ru/landing-pages/',
    uk: '/uk/landing-pages/'
  },
  seo: {
    de: '/seo/',
    en: '/en/seo/',
    ru: '/ru/seo/',
    uk: '/uk/seo/'
  },
  regionen: {
    de: '/regionen/',
    en: '/en/regions/',
    ru: '/ru/regions/',
    uk: '/uk/regions/'
  },
  'region-bayern': {
    de: '/regionen/bayern/',
    en: '/en/regions/bayern/',
    ru: '/ru/regions/bayern/',
    uk: '/uk/regions/bayern/'
  },
  'region-passau': {
    de: '/regionen/passau/',
    en: '/en/regions/passau/',
    ru: '/ru/regions/passau/',
    uk: '/uk/regions/passau/'
  },
  'region-vilshofen': {
    de: '/regionen/vilshofen/',
    en: '/en/regions/vilshofen/',
    ru: '/ru/regions/vilshofen/',
    uk: '/uk/regions/vilshofen/'
  },
  'region-muenchen': {
    de: '/regionen/muenchen/',
    en: '/en/regions/muenchen/',
    ru: '/ru/regions/muenchen/',
    uk: '/uk/regions/muenchen/'
  },
  'region-berlin': {
    de: '/regionen/berlin/',
    en: '/en/regions/berlin/',
    ru: '/ru/regions/berlin/',
    uk: '/uk/regions/berlin/'
  },
  'region-hamburg': {
    de: '/regionen/hamburg/',
    en: '/en/regions/hamburg/',
    ru: '/ru/regions/hamburg/',
    uk: '/uk/regions/hamburg/'
  },
  'region-frankfurt': {
    de: '/regionen/frankfurt/',
    en: '/en/regions/frankfurt/',
    ru: '/ru/regions/frankfurt/',
    uk: '/uk/regions/frankfurt/'
  },
  'region-duesseldorf': {
    de: '/regionen/duesseldorf/',
    en: '/en/regions/duesseldorf/',
    ru: '/ru/regions/duesseldorf/',
    uk: '/uk/regions/duesseldorf/'
  },
  portfolio: {
    de: '/portfolio/',
    en: '/en/portfolio/',
    ru: '/ru/portfolio/',
    uk: '/uk/portfolio/'
  },
  'ueber-uns': {
    de: '/ueber-uns/',
    en: '/en/about/',
    ru: '/ru/about/',
    uk: '/uk/about/'
  },
  blog: {
    de: '/blog/',
    en: '/en/blog/',
    ru: '/ru/blog/',
    uk: '/uk/blog/'
  },
  faq: {
    de: '/faq/',
    en: '/en/faq/',
    ru: '/ru/faq/',
    uk: '/uk/faq/'
  },
  kontakt: {
    de: '/kontakt/',
    en: '/en/contact/',
    ru: '/ru/contact/',
    uk: '/uk/contact/'
  },
  impressum: {
    de: '/impressum/',
    en: '/en/imprint/',
    ru: '/ru/imprint/',
    uk: '/uk/imprint/'
  },
  datenschutz: {
    de: '/datenschutz/',
    en: '/en/privacy/',
    ru: '/ru/privacy/',
    uk: '/uk/privacy/'
  },
  cookies: {
    de: '/cookies/',
    en: '/en/cookies/',
    ru: '/ru/cookies/',
    uk: '/uk/cookies/'
  }
};

export function getPathForPage(pageId: PageId, lang: Language): string {
  return pagePathMap[pageId]?.[lang] || pagePathMap[pageId]?.de || '/';
}

export function parsePath(pathname: string): RouteInfo {
  // Normalize
  let clean = pathname.toLowerCase().trim();
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (!clean.endsWith('/') && !clean.includes('.')) clean = clean + '/';

  // Determine language
  let lang: Language = 'de';
  if (clean.startsWith('/en/')) {
    lang = 'en';
  } else if (clean.startsWith('/ru/')) {
    lang = 'ru';
  } else if (clean.startsWith('/uk/')) {
    lang = 'uk';
  }

  // Exact matching against pagePathMap
  for (const [pageId, langObj] of Object.entries(pagePathMap) as [PageId, Record<Language, string>][]) {
    for (const [l, p] of Object.entries(langObj) as [Language, string][]) {
      if (clean === p || clean.replace(/\/$/, '') === p.replace(/\/$/, '')) {
        return { pageId, lang: l };
      }
    }
  }

  // Substring / fallbacks
  if (clean.includes('/webentwicklung') || clean.includes('/web-development')) return { pageId: 'webentwicklung', lang };
  if (clean.includes('/webdesign') || clean.includes('/web-design')) return { pageId: 'webdesign', lang };
  if (clean.includes('/wordpress')) return { pageId: 'wordpress', lang };
  if (clean.includes('/landingpage') || clean.includes('/landing-page')) return { pageId: 'landingpages', lang };
  if (clean.includes('/seo')) return { pageId: 'seo', lang };
  
  if (clean.includes('/bayern')) return { pageId: 'region-bayern', lang };
  if (clean.includes('/passau')) return { pageId: 'region-passau', lang };
  if (clean.includes('/vilshofen')) return { pageId: 'region-vilshofen', lang };
  if (clean.includes('/muenchen') || clean.includes('/munich')) return { pageId: 'region-muenchen', lang };
  if (clean.includes('/berlin')) return { pageId: 'region-berlin', lang };
  if (clean.includes('/hamburg')) return { pageId: 'region-hamburg', lang };
  if (clean.includes('/frankfurt')) return { pageId: 'region-frankfurt', lang };
  if (clean.includes('/duesseldorf')) return { pageId: 'region-duesseldorf', lang };
  if (clean.includes('/region')) return { pageId: 'regionen', lang };

  if (clean.includes('/portfolio')) return { pageId: 'portfolio', lang };
  if (clean.includes('/ueber-uns') || clean.includes('/about')) return { pageId: 'ueber-uns', lang };
  if (clean.includes('/blog')) return { pageId: 'blog', lang };
  if (clean.includes('/faq')) return { pageId: 'faq', lang };
  if (clean.includes('/kontakt') || clean.includes('/contact')) return { pageId: 'kontakt', lang };
  if (clean.includes('/impressum') || clean.includes('/imprint')) return { pageId: 'impressum', lang };
  if (clean.includes('/datenschutz') || clean.includes('/privacy')) return { pageId: 'datenschutz', lang };
  if (clean.includes('/cookies') || clean.includes('/cookie')) return { pageId: 'cookies', lang };

  return { pageId: 'home', lang };
}

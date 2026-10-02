import { Language, PageId } from '../types';

export interface MetaTags {
  title: string;
  description: string;
}

export const pageMetaConfig: Record<PageId, Record<Language, MetaTags>> = {
  home: {
    de: {
      title: 'Webzech – Webentwicklung, Webdesign & SEO Agentur für Unternehmen',
      description: 'Professionelle Websites, moderne Webentwicklung, WordPress, Landingpages und nachhaltiges SEO für Unternehmen in Deutschland von Awais Abid & Werner Polatschek.'
    },
    en: {
      title: 'Webzech – Web Development, Web Design & SEO Agency Germany',
      description: 'Professional websites, bespoke web engineering, WordPress, high-converting landing pages, and sustainable SEO for businesses across Germany.'
    },
    ru: {
      title: 'Webzech – Веб-разработка, веб-дизайн и SEO агентство в Германии',
      description: 'Профессиональные сайты, современная веб-разработка, WordPress, эффективные лендинги и SEO для бизнеса в Германии.'
    },
    uk: {
      title: 'Webzech – Веб-розробка, веб-дизайн та SEO агентство в Німеччині',
      description: 'Професійні сайти, сучасна веб-розробка, WordPress, ефективні лендінги та SEO для бізнесу в Німеччині.'
    }
  },
  webentwicklung: {
    de: {
      title: 'Webentwicklung Agentur – Moderne Websites & Clean Code | Webzech',
      description: 'Professionelle Webentwicklung nach modernen Standards: Semantisches HTML5, performante Architekturen, maximale Ladezeiten und kompromisslose Sicherheit.'
    },
    en: {
      title: 'Web Development Agency – Modern Engineering & Clean Code | Webzech',
      description: 'Professional web development built on modern web standards: semantic HTML5, high-speed architectures, and robust security benchmarks.'
    },
    ru: {
      title: 'Агентство веб-разработки – Чистый код и современные сайты | Webzech',
      description: 'Профессиональная веб-разработка: семантический HTML5, высокая скорость загрузки и надежные стандарты безопасности.'
    },
    uk: {
      title: 'Агентство веб-розробки – Чистий код та сучасні сайти | Webzech',
      description: 'Професійна веб-розробка: семантичний HTML5, висока швидкість завантаження та надійні стандарти безпеки.'
    }
  },
  webdesign: {
    de: {
      title: 'Webdesign Agentur – Ästhetisches & Nutzerzentriertes Design | Webzech',
      description: 'Modernes Webdesign mit klarem Weißraum, erstklassiger Typografie und optimaler Nutzerführung (UX/UI) für einen überzeugenden Markenauftritt.'
    },
    en: {
      title: 'Web Design Agency – Aesthetic & User-Centric Design | Webzech',
      description: 'Contemporary web design with clean whitespace, refined typography, and intuitive user ergonomics (UX/UI) reflecting corporate standing.'
    },
    ru: {
      title: 'Агентство веб-дизайна – Европейский стиль и удобный UX/UI | Webzech',
      description: 'Современный веб-дизайн с просторным белым фоном, продуманной типографикой и безупречным интерфейсом.'
    },
    uk: {
      title: 'Агентство веб-дизайну – Європейський стиль та зручний UX/UI | Webzech',
      description: 'Сучасний веб-дизайн із просторим білим фоном, продуманою типографікою та бездоганним інтерфейсом.'
    }
  },
  wordpress: {
    de: {
      title: 'WordPress Agentur – Performante Websites mit Elementor | Webzech',
      description: 'Professionelle WordPress- und Elementor-Websites: Schnell, sicher, DSGVO-konform und für Sie spielend leicht selbst zu pflegen.'
    },
    en: {
      title: 'WordPress Agency – High-Performance Elementor Websites | Webzech',
      description: 'Professional WordPress & Elementor websites: fast, secure, GDPR-compliant, and effortless for your team to manage.'
    },
    ru: {
      title: 'Агентство WordPress – Быстрые и надежные сайты на Elementor | Webzech',
      description: 'Профессиональные сайты на WordPress и Elementor: высокая скорость, безопасность и простота самостоятельного управления.'
    },
    uk: {
      title: 'Агентство WordPress – Швидкі та надійні сайти на Elementor | Webzech',
      description: 'Професійні сайти на WordPress та Elementor: висока швидкість, безпека та простота самостійного керування.'
    }
  },
  landingpages: {
    de: {
      title: 'Landingpage erstellen lassen – Fokus auf Lead-Generierung | Webzech',
      description: 'Conversion-optimierte Landingpages für maximale Kundenanfragen aus Google Ads und Marketing-Kampagnen. Schnell, mobil optimiert und überzeugend.'
    },
    en: {
      title: 'Landing Page Agency – High-Converting Lead Generation | Webzech',
      description: 'Conversion-engineered landing pages built to maximize qualified inquiries from paid search and marketing campaigns.'
    },
    ru: {
      title: 'Создание эффективных лендингов под рекламу и лиды | Webzech',
      description: 'Посадочные страницы с высокой конверсией для рекламных кампаний в Google Ads и привлечения клиентов.'
    },
    uk: {
      title: 'Створення ефективних лендінгів під рекламу та ліди | Webzech',
      description: 'Посадкові сторінки з високою конверсією для рекламних кампаній у Google Ads та залучення клієнтів.'
    }
  },
  seo: {
    de: {
      title: 'SEO Agentur – Nachhaltige Google-Sichtbarkeit & On-Page SEO | Webzech',
      description: 'Fundierte Suchmaschinenoptimierung für Unternehmen: Technisches SEO, strukturierte Daten, Keyword-Strategie und lokale Auffindbarkeit.'
    },
    en: {
      title: 'SEO Agency – Sustainable Organic Visibility on Google | Webzech',
      description: 'Rigorous search engine optimization for businesses: technical SEO, structured data, high-intent keyword mapping, and local search footprint.'
    },
    ru: {
      title: 'SEO Агентство – Органическое продвижение в Google | Webzech',
      description: 'Поисковая оптимизация сайтов: технический аудит, микроразметка Schema.org, локальное SEO и органический трафик.'
    },
    uk: {
      title: 'SEO Агентство – Органічне просування в Google | Webzech',
      description: 'Пошукова оптимізація сайтів: технічний аудит, мікророзмітка Schema.org, локальне SEO та органічний трафік.'
    }
  },
  regionen: {
    de: {
      title: 'Webentwicklung Deutschland – Regionale Standorte & Service | Webzech',
      description: 'Webentwicklung und SEO für Unternehmen in Bayern, Passau, Vilshofen, München, Berlin, Hamburg, Frankfurt und Düsseldorf.'
    },
    en: {
      title: 'Web Development Across Germany – Regional Hubs | Webzech',
      description: 'Web development and SEO for companies in Bavaria, Passau, Vilshofen, Munich, Berlin, Hamburg, Frankfurt, and Düsseldorf.'
    },
    ru: {
      title: 'Веб-разработка по всей Германии – Города и регионы | Webzech',
      description: 'Разработка сайтов и SEO для компаний в Баварии, Мюнхене, Берлине, Гамбурге, Франкфурте и Дюссельдорфе.'
    },
    uk: {
      title: 'Веб-розробка по всій Німеччині – Міста та регіони | Webzech',
      description: 'Розробка сайтів та SEO для компаній у Баварії, Мюнхені, Берліні, Гамбурзі, Франкфурті та Дюссельдорфі.'
    }
  },
  'region-bayern': {
    de: {
      title: 'Webentwicklung Bayern – Websites & SEO für den Mittelstand | Webzech',
      description: 'Moderne Webentwicklung und nachhaltiges SEO für mittelständische Unternehmen, Handwerk und innovative Betriebe im Freistaat Bayern.'
    },
    en: {
      title: 'Web Development Bavaria – Websites & SEO for the Mittelstand | Webzech',
      description: 'Modern web engineering and sustainable SEO for medium-sized enterprises, crafts, and industrial businesses across Bavaria.'
    },
    ru: {
      title: 'Веб-разработка в Баварии – Сайты и SEO для бизнеса | Webzech',
      description: 'Создание сайтов и поисковая оптимизация для предприятий и среднего бизнеса в Баварии.'
    },
    uk: {
      title: 'Веб-розробка в Баварії – Сайти та SEO для бізнесу | Webzech',
      description: 'Створення сайтів та пошукова оптимізація для підприємств і середнього бізнесу в Баварії.'
    }
  },
  'region-passau': {
    de: {
      title: 'Webentwicklung Passau – Websites für lokale Dienstleister | Webzech',
      description: 'Professionelle Webentwicklung und lokales SEO für Unternehmen, Handwerker und Freiberufler in Passau und Niederbayern.'
    },
    en: {
      title: 'Web Development Passau – Websites for Local Providers | Webzech',
      description: 'Professional web development and local SEO for enterprises, craft businesses, and practices in Passau and Lower Bavaria.'
    },
    ru: {
      title: 'Веб-разработка в Пассау – Локальное SEO и создание сайтов | Webzech',
      description: 'Создание сайтов и локальное SEO для предприятий, мастеров и сервисных компаний в Пассау.'
    },
    uk: {
      title: 'Веб-розробка в Пассау – Локальне SEO та створення сайтів | Webzech',
      description: 'Створення сайтів та локальне SEO для підприємств, майстрів та сервісних компаній у Пассау.'
    }
  },
  'region-vilshofen': {
    de: {
      title: 'Webentwicklung Vilshofen – WordPress & Webdesign | Webzech',
      description: 'Moderne Internetauftritte für Handwerk, Handel und Dienstleistung in Vilshofen an der Donau. Persönlich, nah und verlässlich.'
    },
    en: {
      title: 'Web Development Vilshofen – WordPress & Craft Websites | Webzech',
      description: 'Modern web solutions for craft, trade, and local services in Vilshofen an der Donau. Direct personal collaboration.'
    },
    ru: {
      title: 'Веб-разработка в Фильсхофене – WordPress и дизайн сайтов | Webzech',
      description: 'Современные сайты для предприятий, ремесленников и торговли в Фильсхофен-ан-дер-Донау.'
    },
    uk: {
      title: 'Веб-розробка у Фільсгофені – WordPress та дизайн сайтів | Webzech',
      description: 'Сучасні сайти для підприємств, ремісників та торгівлі у Фільсгофен-ан-дер-Донау.'
    }
  },
  'region-muenchen': {
    de: {
      title: 'Webentwicklung München – Anspruchsvolle Websites & SEO | Webzech',
      description: 'Erstklassige Webentwicklung, modernes Webdesign und technisches SEO für anspruchsvolle Unternehmen und B2B-Dienstleister in München.'
    },
    en: {
      title: 'Web Development Munich – High-Caliber Websites & SEO | Webzech',
      description: 'Top-tier web engineering, contemporary web design, and technical SEO for ambitious enterprises and B2B practices in Munich.'
    },
    ru: {
      title: 'Веб-разработка в Мюнхене – Премиальные сайты и SEO | Webzech',
      description: 'Разработка корпоративных сайтов, современный UI/UX и техническое SEO для компаний в Мюнхене.'
    },
    uk: {
      title: 'Веб-розробка в Мюнхені – Преміальні сайти та SEO | Webzech',
      description: 'Розробка корпоративних сайтів, сучасний UI/UX та технічне SEO для компаній у Мюнхені.'
    }
  },
  'region-berlin': {
    de: {
      title: 'Webentwicklung Berlin – Schnelle Technologien & Landingpages | Webzech',
      description: 'Moderne Webentwicklung, Next.js und konvertierende Landingpages für innovative Berliner Unternehmen und wachsende Startups.'
    },
    en: {
      title: 'Web Development Berlin – Fast Tech & Landing Pages | Webzech',
      description: 'Modern web engineering, Next.js, and high-converting landing pages for innovative Berlin businesses and scaleups.'
    },
    ru: {
      title: 'Веб-разработка в Берлине – Современный стек и лендинги | Webzech',
      description: 'Быстрая веб-разработка, масштабируемые решения и конверсионные посадочные страницы в Берлине.'
    },
    uk: {
      title: 'Веб-розробка в Берліні – Сучасний стек та лендінги | Webzech',
      description: 'Швидка веб-розробка, масштабовані рішення та конверсійні посадкові сторінки в Берліні.'
    }
  },
  'region-hamburg': {
    de: {
      title: 'Webentwicklung Hamburg – Zuverlässige B2B-Websites & SEO | Webzech',
      description: 'Hanseatische Verlässlichkeit trifft moderne Webentwicklung: Performante Unternehmenswebsites und nachhaltiges SEO für Hamburger Betriebe.'
    },
    en: {
      title: 'Web Development Hamburg – Dependable B2B Websites & SEO | Webzech',
      description: 'Hanseatic dependability meets cutting-edge web engineering: high-performance corporate websites and SEO for Hamburg businesses.'
    },
    ru: {
      title: 'Веб-разработка в Гамбурге – Надежные сайты для B2B | Webzech',
      description: 'Надежная разработка корпоративных сайтов, чистота кода и поисковая оптимизация в Гамбурге.'
    },
    uk: {
      title: 'Веб-розробка в Гамбурзі – Надійні сайти для B2B | Webzech',
      description: 'Надійна розробка корпоративних сайтів, чистота коду та пошукова оптимізація в Гамбурзі.'
    }
  },
  'region-frankfurt': {
    de: {
      title: 'Webentwicklung Frankfurt – Sichere Websites für B2B & Finanzen | Webzech',
      description: 'Präzise Webentwicklung, höchste Sicherheitsstandards und professionelles Webdesign für den Finanz- und Dienstleistungsstandort Frankfurt am Main.'
    },
    en: {
      title: 'Web Development Frankfurt – Secure B2B & Financial Web Solutions | Webzech',
      description: 'Precision web engineering, strict security compliance, and executive web design for Frankfurt am Main.'
    },
    ru: {
      title: 'Веб-разработка во Франкфурте – Безопасные B2B решения | Webzech',
      description: 'Точная веб-разработка, строгие стандарты безопасности и корпоративный дизайн во Франкфурте-на-Майне.'
    },
    uk: {
      title: 'Веб-розробка у Франкфурті – Безпечні B2B рішення | Webzech',
      description: 'Точна веб-розробка, суворі стандарти безпеки та корпоративний дизайн у Франкфурті-на-Майні.'
    }
  },
  'region-duesseldorf': {
    de: {
      title: 'Webentwicklung Düsseldorf – Ästhetik & Lead-Generierung | Webzech',
      description: 'Elegantes Webdesign, moderne Programmierung und zielgerichtetes SEO für Unternehmen in der wirtschaftsstarken Rheinmetropole Düsseldorf.'
    },
    en: {
      title: 'Web Development Düsseldorf – Aesthetics & Lead Acquisition | Webzech',
      description: 'Sophisticated web design, modern engineering, and targeted SEO for companies across the Rhine metropolis Düsseldorf.'
    },
    ru: {
      title: 'Веб-разработка в Дюссельдорфе – Эстетика и лидогенерация | Webzech',
      description: 'Элегантный веб-дизайн, чистый код и SEO для компаний деловой метрополии Дюссельдорф.'
    },
    uk: {
      title: 'Веб-розробка в Дюссельдорфі – Естетика та лідогенерація | Webzech',
      description: 'Елегантний веб-дизайн, чистий код та SEO для компаній ділової метрополії Дюссельдорф.'
    }
  },
  portfolio: {
    de: {
      title: 'Portfolio & Referenzen – Echte Arbeitsergebnisse | Webzech',
      description: 'Entdecken Sie ausgewählte Webprojekte von Webzech: SolaGrow, Handwerksbetriebe und lokale Dienstleister in Bayern und darüber hinaus.'
    },
    en: {
      title: 'Portfolio & Case Studies – Real Client Work | Webzech',
      description: 'Explore selected web projects delivered by Webzech: SolaGrow, regional craft enterprises, and local service providers.'
    },
    ru: {
      title: 'Портфолио и кейсы – Реальные выполненные проекты | Webzech',
      description: 'Примеры выполненных работ Webzech: SolaGrow, сайты для региональных предприятий и лендинги услуг.'
    },
    uk: {
      title: 'Портфоліо та кейси – Реальні виконані проекти | Webzech',
      description: 'Приклади виконаних робіт Webzech: SolaGrow, сайти для регіональних підприємств та лендінги послуг.'
    }
  },
  'ueber-uns': {
    de: {
      title: 'Über uns – Awais Abid & Werner Polatschek | Webzech',
      description: 'Lernen Sie die Köpfe hinter Webzech kennen: Awais Abid (Founder & Entwickler) und Werner Polatschek (Co-Founder & Projektpartner).'
    },
    en: {
      title: 'About Us – Awais Abid & Werner Polatschek | Webzech',
      description: 'Meet the team behind Webzech: Awais Abid (Founder & Developer) and Werner Polatschek (Co-Founder & Business Partner).'
    },
    ru: {
      title: 'О нас – Аваис Абид и Вернер Полатшек | Webzech',
      description: 'Познакомьтесь с основателями Webzech: Аваис Абид (разработчик) и Вернер Полатшек (партнер по проектам).'
    },
    uk: {
      title: 'Про нас – Аваїс Абід та Вернер Полатшек | Webzech',
      description: 'Познайомтеся із засновниками Webzech: Аваїс Абід (розробник) та Вернер Полатшек (партнер за проектами).'
    }
  },
  blog: {
    de: {
      title: 'Blog & Fachartikel – Webentwicklung, WordPress & SEO | Webzech',
      description: 'Praxisnahes Fachwissen rund um Core Web Vitals, lokales SEO für Dienstleister, WordPress-Sicherheit und Conversion-Optimierung.'
    },
    en: {
      title: 'Blog & Articles – Web Engineering, WordPress & SEO | Webzech',
      description: 'Practical guides on Core Web Vitals, local SEO for providers, WordPress maintenance, and conversion architecture.'
    },
    ru: {
      title: 'Блог и статьи – Веб-разработка, WordPress и SEO | Webzech',
      description: 'Экспертные статьи о скорости Core Web Vitals, локальном SEO, безопасности WordPress и росте конверсий.'
    },
    uk: {
      title: 'Блог та статті – Веб-розробка, WordPress та SEO | Webzech',
      description: 'Експертні статті про швидкість Core Web Vitals, локальне SEO, безпеку WordPress та зростання конверсій.'
    }
  },
  faq: {
    de: {
      title: 'FAQ – Häufige Fragen zu Ablauf, Preisen & Technik | Webzech',
      description: 'Transparente Antworten auf die wichtigsten Kundenfragen zu Webentwicklung, WordPress, SEO, Kostenstruktur und Zusammenarbeit.'
    },
    en: {
      title: 'FAQ – Frequent Questions on Process, Pricing & Tech | Webzech',
      description: 'Transparent answers to essential client questions regarding web engineering, WordPress, SEO, pricing, and workflow.'
    },
    ru: {
      title: 'Частые вопросы (FAQ) – Процесс, технологии и цены | Webzech',
      description: 'Честные ответы на вопросы о разработке сайтов, WordPress, продвижении в Google и порядке сотрудничества.'
    },
    uk: {
      title: 'Часті запитання (FAQ) – Процес, технології та ціни | Webzech',
      description: 'Чесні відповіді на запитання про розробку сайтів, WordPress, просування в Google та порядок співпраці.'
    }
  },
  kontakt: {
    de: {
      title: 'Kontakt & Projekt anfragen – Persönliche Beratung | Webzech',
      description: 'Erzählen Sie uns von Ihrem Projekt. Wir beraten Sie unverbindlich zu Ihrer neuen Website oder SEO-Strategie. Schnelle Rückmeldung garantiert.'
    },
    en: {
      title: 'Contact & Project Inquiry – Direct Founder Counsel | Webzech',
      description: 'Tell us about your project. Direct consultation on your new website or SEO strategy. Guaranteed response within 24h.'
    },
    ru: {
      title: 'Контакты и заявка на проект – Прямая связь | Webzech',
      description: 'Расскажите о вашей задаче. Быстрый ответ основателей и консультация по разработке сайта или SEO.'
    },
    uk: {
      title: 'Контакти та заявка на проект – Прямий зв\'язок | Webzech',
      description: 'Розкажіть про ваше завдання. Швидка відповідь засновників та консультація з розробки сайту або SEO.'
    }
  },
  impressum: {
    de: {
      title: 'Impressum – Rechtliche Angaben | Webzech',
      description: 'Gesetzliche Pflichtangaben und Anbieterkennzeichnung nach § 5 TMG für Webzech.'
    },
    en: {
      title: 'Imprint – Legal Information | Webzech',
      description: 'Mandatory provider identification and legal disclosure under German telemedia law for Webzech.'
    },
    ru: {
      title: 'Impressum – Выходные данные | Webzech',
      description: 'Официальные выходные данные компании Webzech в соответствии с законодательством Германии.'
    },
    uk: {
      title: 'Impressum – Вихідні дані | Webzech',
      description: 'Офіційні вихідні дані компанії Webzech відповідно до законодавства Німеччини.'
    }
  },
  datenschutz: {
    de: {
      title: 'Datenschutzerklärung – Schutz Ihrer Daten | Webzech',
      description: 'Informationen zur Verarbeitung personenbezogener Daten und Ihren Rechten nach der DSGVO bei Webzech.'
    },
    en: {
      title: 'Privacy Policy – Data Protection | Webzech',
      description: 'Information on the processing of personal data and your rights under GDPR at Webzech.'
    },
    ru: {
      title: 'Политика конфиденциальности | Webzech',
      description: 'Порядок обработки персональных данных и права пользователей согласно европейскому регламенту GDPR.'
    },
    uk: {
      title: 'Політика конфіденційності | Webzech',
      description: 'Порядок обробки персональних даних та права користувачів згідно з європейським регламентом GDPR.'
    }
  },
  cookies: {
    de: {
      title: 'Cookie-Einstellungen & Richtlinie | Webzech',
      description: 'Transparente Informationen zu eingesetzten Cookies und individuelle Verwaltung Ihrer Privatsphäre-Einstellungen.'
    },
    en: {
      title: 'Cookie Policy & Privacy Settings | Webzech',
      description: 'Transparent overview of cookies utilized on Webzech and controls to manage your preferences.'
    },
    ru: {
      title: 'Файлы Cookie и настройки приватности | Webzech',
      description: 'Информация об используемых файлах cookie и управление вашими настройками приватности.'
    },
    uk: {
      title: 'Файли Cookie та налаштування приватності | Webzech',
      description: 'Інформація про файли cookie та керування налаштуваннями приватності.'
    }
  }
};

export function updateDocumentMeta(pageId: PageId, lang: Language) {
  const meta = pageMetaConfig[pageId]?.[lang] || pageMetaConfig[pageId]?.de || pageMetaConfig.home.de;
  
  // Set document title
  document.title = meta.title;

  // Set meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (descTag) {
    descTag.setAttribute('content', meta.description);
  }

  // Set html lang
  document.documentElement.lang = lang;

  // Set OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);

  // Set canonical tag dynamically
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', window.location.origin + window.location.pathname);
}

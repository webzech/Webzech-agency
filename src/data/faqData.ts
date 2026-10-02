import { FaqItem } from '../types';

export const faqList: FaqItem[] = [
  // Allgemein
  {
    category: 'allgemein',
    categoryLabel: { de: 'Allgemein', en: 'General', ru: 'Общее', uk: 'Загальне' },
    question: {
      de: 'Wer steckt hinter Webzech?',
      en: 'Who is behind Webzech?',
      ru: 'Кто стоит за Webzech?',
      uk: 'Хто стоїть за Webzech?'
    },
    answer: {
      de: 'Webzech wird geführt von Awais Abid (Founder / Web Developer / Web Designer) und Werner Polatschek (Co-Founder / Business & Project Partner). Wir sind ein eingespieltes, professionelles Team und arbeiten direkt mit Ihnen zusammen – ohne anonyme Vermittler oder wechselnde Junior-Kräfte.',
      en: 'Webzech is founded and led by Awais Abid (Founder / Web Developer / Web Designer) and Werner Polatschek (Co-Founder / Business & Project Partner). You work directly with us, avoiding anonymous call centers or rotating junior staff.',
      ru: 'Webzech основан Аваисом Абидом (основатель / веб-разработчик / дизайнер) и Вернером Полатшеком (сооснователь / партнер по проектам). Мы работаем с вами напрямую.',
      uk: 'Webzech заснований Аваїсом Абід (засновник / веб-розробник / дизайнер) та Вернером Полатшек (співзасновник / партнер за проектами). Ми працюємо з вами безпосередньо.'
    }
  },
  {
    category: 'allgemein',
    categoryLabel: { de: 'Allgemein', en: 'General', ru: 'Общее', uk: 'Загальне' },
    question: {
      de: 'Gibt es bei Webzech starre Preispakete oder Pauschalen?',
      en: 'Does Webzech offer fixed price packages or bundles?',
      ru: 'Есть ли у Webzech фиксированные тарифные пакеты?',
      uk: 'Чи є у Webzech фіксовані тарифні пакети?'
    },
    answer: {
      de: 'Nein. Jedes Projekt ist unterschiedlich und hat individuelle Anforderungen an Funktionsumfang, Design und SEO. Wir besprechen Ihre Ziele persönlich und transparent und unterbreiten Ihnen ein exakt passendes Angebot ohne versteckte Kosten.',
      en: 'No. Every project is unique and requires specific considerations regarding features, visual craft, and SEO strategy. We discuss your needs personally and provide an accurate, transparent proposal.',
      ru: 'Нет. Каждый проект индивидуален. Мы лично обсуждаем задачи вашего бизнеса и предлагаем точное прозрачное решение.',
      uk: 'Ні. Кожен проект індивідуальний. Ми особисто обговорюємо завдання вашого бізнесу та пропонуємо точне прозоре рішення.'
    }
  },

  // Webentwicklung
  {
    category: 'webentwicklung',
    categoryLabel: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' },
    question: {
      de: 'Welche Technologien setzt Webzech bei der Webentwicklung ein?',
      en: 'What technologies does Webzech use for web development?',
      ru: 'Какие технологии использует Webzech при разработке?',
      uk: 'Які технології використовує Webzech під час розробки?'
    },
    answer: {
      de: 'Wir arbeiten nach modernen Webstandards mit semantischem HTML5, modernem CSS (z.B. Tailwind CSS), modernem JavaScript / TypeScript, React / Next.js sowie für Content-Management-Projekte mit professionell gehärtetem WordPress und Elementor Pro.',
      en: 'We build on modern web standards utilizing semantic HTML5, modern CSS (Tailwind), modern JavaScript/TypeScript, React / Next.js, and for CMS requirements, professionally hardened WordPress with Elementor Pro.',
      ru: 'Мы используем современные веб-стандарты: чистый семантический HTML5, Tailwind CSS, TypeScript/JavaScript, React, а для управления контентом — надежный WordPress.',
      uk: 'Ми використовуємо сучасні веб-стандарти: чистий семантичний HTML5, Tailwind CSS, TypeScript/JavaScript, React, а для керування контентом — надійний WordPress.'
    }
  },
  {
    category: 'webentwicklung',
    categoryLabel: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' },
    question: {
      de: 'Ist meine neue Website für Smartphones optimiert?',
      en: 'Will my new website be mobile-optimized?',
      ru: 'Будет ли сайт адаптирован под смартфоны?',
      uk: 'Чи буде сайт адаптований під смартфони?'
    },
    answer: {
      de: 'Selbstverständlich. Jede von uns entwickelte Website ist kompromisslos Mobile-First konzipiert und wird auf Smartphones, Tablets und hochauflösenden Desktop-Bildschirmen ausführlich getestet.',
      en: 'Absolutely. Every website we engineer follows an uncompromising mobile-first design and undergoes thorough testing across phones, tablets, and high-DPI desktop screens.',
      ru: 'Безусловно. Каждый проект создается по принципу Mobile-First и тщательно тестируется на экранах любых размеров.',
      uk: 'Безумовно. Кожен проект створюється за принципом Mobile-First і ретельно тестується на екранах будь-яких розмірів.'
    }
  },

  // WordPress
  {
    category: 'wordpress',
    categoryLabel: { de: 'WordPress', en: 'WordPress', ru: 'WordPress', uk: 'WordPress' },
    question: {
      de: 'Warum nutzen Sie WordPress und Elementor?',
      en: 'Why do you utilize WordPress and Elementor?',
      ru: 'Почему вы используете WordPress и Elementor?',
      uk: 'Чому ви використовуєте WordPress та Elementor?'
    },
    answer: {
      de: 'WordPress bietet Ihnen als Kunde maximale Unabhängigkeit: Sie können Texte und Bilder jederzeit selbst austauschen, ohne Programmierer zu sein. Durch unsere schlanke Konfiguration vermeiden wir langsame Ladezeiten und Sicherheitsrisiken.',
      en: 'WordPress offers independence: you can edit text and images anytime without needing developer intervention. Our lean configuration avoids code bloat, slow speeds, and vulnerabilities.',
      ru: 'WordPress дает независимость: вы можете легко менять тексты и фото сами. Наша настройка исключает перегруз и проблемы со скоростью.',
      uk: 'WordPress дає незалежність: ви можете легко змінювати тексти та фото самі. Наше налаштування виключає перевантаження та проблеми зі швидкістю.'
    }
  },

  // Landingpages
  {
    category: 'landingpages',
    categoryLabel: { de: 'Landingpages', en: 'Landing Pages', ru: 'Лендинги', uk: 'Лендінги' },
    question: {
      de: 'Wie schnell kann eine Conversion-Landingpage online sein?',
      en: 'How quickly can a conversion landing page go live?',
      ru: 'Как быстро можно запустить конверсионный лендинг?',
      uk: 'Як швидко можна запустити конверсійний лендінг?'
    },
    answer: {
      de: 'Eine zielgerichtete Landingpage lässt sich bei klaren Inhalten und enger Abstimmung in der Regel innerhalb von 7 bis 14 Werktagen konzipieren, programmieren und live schalten.',
      en: 'A targeted landing page with clear content and responsive feedback typically takes 7 to 14 business days from kickoff to live deployment.',
      ru: 'При наличии готовых материалов и оперативной обратной связи запуск лендинга занимает от 7 до 14 рабочих дней.',
      uk: 'За наявності готових матеріалів та оперативного зворотного зв\'язку запуск лендінгу триває від 7 до 14 робочих днів.'
    }
  },

  // SEO
  {
    category: 'seo',
    categoryLabel: { de: 'SEO', en: 'SEO', ru: 'SEO', uk: 'SEO' },
    question: {
      de: 'Wann sind erste Ergebnisse durch SEO spürbar?',
      en: 'When can we expect measurable SEO results?',
      ru: 'Когда ожидать первых результатов от SEO?',
      uk: 'Коли очікувати перших результатів від SEO?'
    },
    answer: {
      de: 'Seriöse Suchmaschinenoptimierung ist ein nachhaltiger Prozess. Technische Verbesserungen und Indexierungen greifen oft in wenigen Wochen, signifikante Ranking-Steigerungen für wettbewerbsintensive Suchbegriffe stellen sich typischerweise nach 3 bis 6 Monaten ein.',
      en: 'Ethical search optimization is a sustainable investment. Technical indexing fixes take effect within weeks; competitive keyword gains typically mature across 3 to 6 months.',
      ru: 'Качественное SEO требует времени. Технические правки дают эффект за пару недель, а рост по конкурентным запросам проявляется через 3-6 месяцев.',
      uk: 'Якісне SEO вимагає часу. Технічні правки дають ефект за пару тижнів, а зростання за конкурентними запитами проявляється через 3-6 місяців.'
    }
  },

  // Zusammenarbeit
  {
    category: 'zusammenarbeit',
    categoryLabel: { de: 'Zusammenarbeit', en: 'Collaboration', ru: 'Сотрудничество', uk: 'Співпраця' },
    question: {
      de: 'Wie läuft die Zusammenarbeit mit Webzech ab?',
      en: 'How does collaborating with Webzech work in practice?',
      ru: 'Как организован процесс сотрудничества с Webzech?',
      uk: 'Як організовано процес співпраці з Webzech?'
    },
    answer: {
      de: 'Unser Prozess ist transparent und erprobt: 1. Erstgespräch zur Klärung Ihrer Ziele, 2. Detaillierte Analyse und Konzept, 3. Design-Entwurf, 4. Technische Entwicklung, 5. SEO- und Qualitätsprüfung, 6. Launch & auf Wunsch langfristige Betreuung.',
      en: 'Our collaboration process is structured: 1. Discovery call to pinpoint goals, 2. Technical analysis & concept, 3. Design drafts, 4. Clean engineering, 5. SEO & QA testing, 6. Launch & ongoing support on request.',
      ru: 'Наш процесс понятен и открыт: бриф, анализ, дизайн, верстка, тестирование SEO и запуск с последующей поддержкой.',
      uk: 'Наш процес зрозумілий та відкритий: бриф, аналіз, дизайн, верстка, тестування SEO та запуск із подальшою підтримкою.'
    }
  },

  // Regionen
  {
    category: 'regionen',
    categoryLabel: { de: 'Regionen', en: 'Regions', ru: 'Регионы', uk: 'Регіони' },
    question: {
      de: 'Arbeitet Webzech nur in Bayern oder deutschlandweit?',
      en: 'Does Webzech work solely in Bavaria or throughout Germany?',
      ru: 'Webzech работает только в Баварии или по всей Германии?',
      uk: 'Webzech працює лише в Баварії чи по всій Німеччині?'
    },
    answer: {
      de: 'Wir haben unsere Wurzeln in Bayern (Passau, Vilshofen, München), betreuen jedoch Unternehmen im gesamten Bundesgebiet – darunter Berlin, Hamburg, Frankfurt und Düsseldorf. Dank erprobter digitaler Workflows arbeiten wir standortunabhängig mit maximaler Effizienz.',
      en: 'Our operational roots are anchored in Bavaria (Passau, Vilshofen, Munich), yet we support businesses nationwide—including Berlin, Hamburg, Frankfurt, and Düsseldorf—via disciplined digital workflows.',
      ru: 'Мы находимся в Баварии (Пассау, Фильсхофен, Мюнхен), но работаем с клиентами по всей Германии благодаря отлаженным онлайн-процессам.',
      uk: 'Ми знаходимося в Баварії (Пассау, Фільсгофен, Мюнхен), але працюємо з клієнтами по всій Німеччині завдяки налагодженим онлайн-процесам.'
    }
  }
];

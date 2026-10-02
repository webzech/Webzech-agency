import { Language } from '../types';

export const siteConfig = {
  brandName: 'Webzech',
  email: 'kontakt@webzech.de',
  foundersEmail: 'awaisabid534@gmail.com',
  phone: '+49 176 84592104',
  whatsappUrl: 'https://wa.me/4917684592104',
  linkedinUrl: 'https://linkedin.com/company/webzech',
  responseGuarantee: 'Innerhalb von 24 Stunden Rückmeldung',
  locationBasis: 'Bayern / Deutschland'
};

export const uiText: Record<Language, {
  nav: {
    services: string;
    regions: string;
    portfolio: string;
    about: string;
    blog: string;
    faq: string;
    contact: string;
    ctaButton: string;
    allServices: string;
    allRegions: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBullet1: string;
    trustBullet2: string;
    trustBullet3: string;
  };
  trust: {
    sectionTitle: string;
    heading: string;
    text1: string;
    text2: string;
    cta: string;
  };
  servicesSection: {
    subtitle: string;
    title: string;
    learnMore: string;
  };
  whyWebzech: {
    subtitle: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  process: {
    subtitle: string;
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  portfolioSection: {
    subtitle: string;
    title: string;
    viewAll: string;
    viewProject: string;
    challenge: string;
    solution: string;
    deliverables: string;
    technologies: string;
    closeModal: string;
  };
  foundersSection: {
    subtitle: string;
    title: string;
    text: string;
    awaisTitle: string;
    awaisDesc: string;
    wernerTitle: string;
    wernerDesc: string;
    cta: string;
  };
  seoSection: {
    subtitle: string;
    title: string;
    text: string;
    items: { title: string; desc: string }[];
    cta: string;
  };
  faqPreview: {
    subtitle: string;
    title: string;
    cta: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pricingNotice: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    privacyNote: string;
    directContactTitle: string;
    directContactSubtitle: string;
    guaranteeText: string;
  };
  footer: {
    desc: string;
    servicesTitle: string;
    regionsTitle: string;
    companyTitle: string;
    contactTitle: string;
    legalImpressum: string;
    legalPrivacy: string;
    legalCookies: string;
    allRightsReserved: string;
  };
  cookies: {
    bannerTitle: string;
    bannerText: string;
    acceptAll: string;
    saveSelected: string;
    declineOptional: string;
    settingsTitle: string;
    essentialTitle: string;
    essentialDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
    alwaysActive: string;
  };
  common: {
    breadcrumbsHome: string;
    breadcrumbsServices: string;
    breadcrumbsRegions: string;
    relatedServicesTitle: string;
    discussProjectCta: string;
    backToOverview: string;
    readArticle: string;
    filterAll: string;
  };
}> = {
  de: {
    nav: {
      services: 'Leistungen',
      regions: 'Regionen',
      portfolio: 'Portfolio',
      about: 'Über uns',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Kontakt',
      ctaButton: 'Kontakt aufnehmen',
      allServices: 'Alle Leistungen anzeigen',
      allRegions: 'Alle Regionen anzeigen'
    },
    hero: {
      badge: 'Professionelle Webagentur in Deutschland',
      h1: 'Professionelle Websites, Webentwicklung & SEO für Unternehmen',
      subtitle: 'Wir entwickeln maßgeschneiderte, blitzschnelle Websites und nachhaltige SEO-Strategien für den Mittelstand und moderne Betriebe. Persönlich betreut von Awais Abid & Werner Polatschek.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Portfolio ansehen',
      trustBullet1: '100% maßgeschneiderter Code & WordPress',
      trustBullet2: 'SEO & Performance von Anfang an',
      trustBullet3: 'Persönliche Gründerbetreuung'
    },
    trust: {
      sectionTitle: 'Über Webzech',
      heading: 'Verlässliche Webentwicklung mit persönlicher Betreuung',
      text1: 'Webzech ist keine anonyme Massenagentur und keine Vermittlungsplattform. Wir sind ein spezialisiertes Zwei-Personen-Team aus Gründer und Entwickler Awais Abid sowie Co-Founder und Projektpartner Werner Polatschek.',
      text2: 'Wir unterstützen Unternehmen in ganz Deutschland dabei, ihre digitale Präsenz modern, sicher und suchmaschinenoptimiert aufzustellen – transparent, ohne Agentur-Fachchinesisch und mit echtem handwerklichen Anspruch.',
      cta: 'Mehr über Webzech'
    },
    servicesSection: {
      subtitle: 'Unsere Kernkompetenzen',
      title: 'Leistungen für Ihren digitalen Erfolg',
      learnMore: 'Leistung im Detail'
    },
    whyWebzech: {
      subtitle: 'Ihre Vorteile',
      title: 'Warum Unternehmen mit Webzech arbeiten',
      items: [
        {
          title: 'Persönliche Zusammenarbeit',
          desc: 'Sie sprechen direkt mit den Gründern Awais Abid und Werner Polatschek – keine wechselnden Projektmanager oder zeitraubende Umwege.'
        },
        {
          title: 'Moderne Websites',
          desc: 'Klare typografische Hierarchien, großzügiger Weißraum und zeitloses, elegantes Design, das Ihre Marke seriös repräsentiert.'
        },
        {
          title: 'SEO von Anfang an',
          desc: 'Suchmaschinenoptimierung ist bei uns kein nachträgliches Add-on, sondern fester Bestandteil von Code-Architektur und Struktur.'
        },
        {
          title: 'Mobile-First Umsetzung',
          desc: 'Perfekte Darstellung und intuitive Bedienbarkeit auf jedem Smartphone, Tablet und modernen Desktop-Monitor.'
        },
        {
          title: 'Saubere Entwicklung',
          desc: 'Schlanker, valider Quellcode nach modernsten Webstandards für maximale Ladegeschwindigkeit und hohe Sicherheit.'
        },
        {
          title: 'Langfristige Betreuung',
          desc: 'Wir lassen Sie nach dem Launch nicht allein. Auf Wunsch übernehmen wir Wartung, Sicherheits-Updates und Weiterentwicklung.'
        }
      ]
    },
    process: {
      subtitle: 'Unser Vorgehen',
      title: 'In 9 klaren Schritten zu Ihrer neuen Website',
      steps: [
        { num: '01', title: 'Erstgespräch', desc: 'Kennenlernen und Erfassung Ihrer Ziele und Zielgruppe.' },
        { num: '02', title: 'Analyse', desc: 'Prüfung des Status quo, Mitbewerber und technischer Rahmenbedingungen.' },
        { num: '03', title: 'Konzept', desc: 'Festlegung von Navigationsstruktur, Seitenaufbau und Nutzerführung.' },
        { num: '04', title: 'Design', desc: 'Gestaltung des visuellen Erscheinungsbilds mit klarem Weißraum.' },
        { num: '05', title: 'Entwicklung', desc: 'Handwerklich saubere Umsetzung in Code oder WordPress/Elementor.' },
        { num: '06', title: 'SEO', desc: 'Suchmaschinenfreundliche Strukturierung, Meta-Tags und strukturierte Daten.' },
        { num: '07', title: 'Testing', desc: 'Umfassende Prüfung von Geschwindigkeit, Responsivität und Formularen.' },
        { num: '08', title: 'Launch', desc: 'Reibungsloser Livegang auf Ihrer Domain mit SSL und Weiterleitungen.' },
        { num: '09', title: 'Betreuung', desc: 'Verlässliche Begleitung, System-Updates und kontinuierlicher Support.' }
      ]
    },
    portfolioSection: {
      subtitle: 'Reale Ergebnisse',
      title: 'Ausgewählte Projekte aus unserer Praxis',
      viewAll: 'Alle Projekte ansehen',
      viewProject: 'Projektdetails anzeigen',
      challenge: 'Ausgangslage & Herausforderung',
      solution: 'Umsetzung & Lösung',
      deliverables: 'Erbrachte Leistungen',
      technologies: 'Technologien',
      closeModal: 'Schließen'
    },
    foundersSection: {
      subtitle: 'Das Team',
      title: 'Die Köpfe hinter Webzech',
      text: 'Hinter Webzech stehen zwei Partner mit klaren Rollen und einer gemeinsamen Vision: Webentwicklung für Unternehmen transparent, verlässlich und technisch exzellent zu gestalten.',
      awaisTitle: 'Founder / Web Developer / Web Designer',
      awaisDesc: 'Awais Abid konzipiert und programmiert moderne Benutzeroberflächen, sorgt für sauberen Code, beste Performance und intuitive Designs.',
      wernerTitle: 'Co-Founder / Business & Project Partner',
      wernerDesc: 'Werner Polatschek begleitet Kundenprojekte von der strategischen Planung bis zur Qualitätssicherung und sorgt für reibungslose Abläufe.',
      cta: 'Mehr über uns'
    },
    seoSection: {
      subtitle: 'Nachhaltige Sichtbarkeit',
      title: 'Gutes Webdesign braucht technische Suchmaschinenoptimierung',
      text: 'Ein schöner digitaler Auftritt entfaltet seinen vollen Wert erst, wenn potenzielle Kunden ihn über Google auch finden. Deshalb bauen wir jede Website nach den aktuellen Richtlinien für Suchmaschinen auf.',
      items: [
        { title: 'Technisches SEO', desc: 'Saubere HTML5-Hierarchien, XML-Sitemaps, robots.txt und standardkonforme URLs.' },
        { title: 'Mobile Optimierung', desc: 'Optimale Nutzbarkeit für Mobile First Indexing auf allen Endgeräten.' },
        { title: 'Performance & Ladezeit', desc: 'Minimale Asset-Größen für herausragende Core Web Vitals Messwerte.' },
        { title: 'Strukturierte Daten', desc: 'Schema.org JSON-LD Auszeichnungen für Unternehmen, Services und Navigation.' },
        { title: 'Lokales SEO', desc: 'Regionale Relevanz und Ausrichtung auf lokale Einzugsgebiete in Deutschland.' },
        { title: 'Interne Verlinkung', desc: 'Logische, thematisch abgestimmte Verknüpfung aller Leistungsbereiche.' }
      ],
      cta: 'SEO entdecken'
    },
    faqPreview: {
      subtitle: 'Häufige Fragen',
      title: 'Antworten auf die wichtigsten Fragen',
      cta: 'Alle Fragen ansehen'
    },
    finalCta: {
      title: 'Bereit für einen professionellen digitalen Auftritt?',
      subtitle: 'Lassen Sie uns gemeinsam über Ihr Projekt sprechen. Wir beraten Sie unverbindlich und zeigen Ihnen, wie Ihr Unternehmen im Internet überzeugt.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Kontakt aufnehmen',
      pricingNotice: 'Jedes Projekt ist unterschiedlich. Wir besprechen Ihre Anforderungen persönlich und erstellen eine passende Lösung.'
    },
    contactForm: {
      nameLabel: 'Ihr Name *',
      namePlaceholder: 'z.B. Maximilian Huber',
      emailLabel: 'Ihre E-Mail-Adresse *',
      emailPlaceholder: 'z.B. huber@unternehmen.de',
      companyLabel: 'Unternehmen / Organisation',
      companyPlaceholder: 'z.B. Huber Handwerk & Dienstleistung GmbH',
      serviceLabel: 'Gewünschte Leistung',
      servicePlaceholder: 'Bitte wählen...',
      websiteLabel: 'Bestehende Website (optional)',
      websitePlaceholder: 'https://ihre-website.de',
      messageLabel: 'Erzählen Sie uns von Ihrem Projekt *',
      messagePlaceholder: 'Welche Ziele möchten Sie erreichen? Wann soll das Projekt starten?',
      submitButton: 'Projekt anfragen',
      submitting: 'Wird gesendet...',
      successTitle: 'Vielen Dank für Ihre Anfrage!',
      successMessage: 'Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden persönlich bei Ihnen.',
      privacyNote: 'Ihre Daten werden vertraulich behandelt und ausschließlich zur Beantwortung Ihrer Anfrage genutzt. Keine Werbemails.',
      directContactTitle: 'Direkter Kontakt zu den Gründern',
      directContactSubtitle: 'Haben Sie Fragen oder möchten Sie direkt sprechen? Wir sind unkompliziert erreichbar:',
      guaranteeText: 'Rückmeldung garantiert innerhalb von 24 Stunden an Werktagen'
    },
    footer: {
      desc: 'Webzech ist Ihre deutsche Webagentur für moderne Webentwicklung, maßgeschneidertes Webdesign, WordPress, hochkonvertierende Landingpages und nachhaltiges SEO.',
      servicesTitle: 'Leistungen',
      regionsTitle: 'Regionen',
      companyTitle: 'Unternehmen',
      contactTitle: 'Kontakt',
      legalImpressum: 'Impressum',
      legalPrivacy: 'Datenschutz',
      legalCookies: 'Cookie-Einstellungen',
      allRightsReserved: 'Alle Rechte vorbehalten.'
    },
    cookies: {
      bannerTitle: 'Datenschutz & Cookie-Einstellungen',
      bannerText: 'Wir nutzen Cookies und ähnliche Technologien, um Ihnen eine optimale Website-Erfahrung zu bieten. Notwendige Cookies sind für den Betrieb erforderlich. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.',
      acceptAll: 'Alle akzeptieren',
      saveSelected: 'Auswahl speichern',
      declineOptional: 'Nur Notwendige',
      settingsTitle: 'Cookie-Präferenzen verwalten',
      essentialTitle: 'Technisch notwendige Cookies',
      essentialDesc: 'Erforderlich für Grundfunktionen wie Seitennavigation, Spracheinstellungen und Sicherheit. Diese können nicht deaktiviert werden.',
      analyticsTitle: 'Analyse & Statistik',
      analyticsDesc: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um Inhalte und Performance zu verbessern.',
      marketingTitle: 'Marketing & Externe Medien',
      marketingDesc: 'Ermöglichen die Einbindung interaktiver Karten, Videos und gezielter Angebote.',
      alwaysActive: 'Immer aktiv'
    },
    common: {
      breadcrumbsHome: 'Startseite',
      breadcrumbsServices: 'Leistungen',
      breadcrumbsRegions: 'Regionen',
      relatedServicesTitle: 'Verwandte Leistungen',
      discussProjectCta: 'Projekt besprechen',
      backToOverview: 'Zur Übersicht',
      readArticle: 'Artikel lesen',
      filterAll: 'Alle anzeigen'
    }
  },
  en: {
    nav: {
      services: 'Services',
      regions: 'Regions',
      portfolio: 'Portfolio',
      about: 'About Us',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      ctaButton: 'Get in Touch',
      allServices: 'View all services',
      allRegions: 'View all regions'
    },
    hero: {
      badge: 'Professional Web Agency in Germany',
      h1: 'Professional Websites, Web Development & SEO for Companies',
      subtitle: 'We engineer tailor-made, lightning-fast websites and sustainable SEO strategies for medium-sized enterprises and ambitious businesses. Directly led by Awais Abid & Werner Polatschek.',
      ctaPrimary: 'Start Project',
      ctaSecondary: 'View Portfolio',
      trustBullet1: '100% custom engineering & WordPress',
      trustBullet2: 'SEO & Core Web Vitals built-in',
      trustBullet3: 'Direct founder engagement'
    },
    trust: {
      sectionTitle: 'About Webzech',
      heading: 'Reliable Web Engineering with Personal Collaboration',
      text1: 'Webzech is neither an anonymous mass agency nor an outsourced broker. We are a specialized two-person partner team: founder & developer Awais Abid alongside co-founder & business partner Werner Polatschek.',
      text2: 'We empower companies across Germany with modern, secure, search-engine-ready websites—delivered transparently, free of agency jargon, and with authentic engineering craftsmanship.',
      cta: 'More about Webzech'
    },
    servicesSection: {
      subtitle: 'Our Core Capabilities',
      title: 'Services for Your Digital Success',
      learnMore: 'Explore service'
    },
    whyWebzech: {
      subtitle: 'Your Advantages',
      title: 'Why Companies Partner with Webzech',
      items: [
        {
          title: 'Personal Collaboration',
          desc: 'You collaborate directly with founders Awais Abid and Werner Polatschek—no rotating junior accounts or communication delays.'
        },
        {
          title: 'Modern Websites',
          desc: 'Crisp typographic hierarchy, deliberate whitespace, and timeless design that reflects your corporate standing.'
        },
        {
          title: 'SEO from Day One',
          desc: 'Search engine optimization is not an afterthought; it is built into the architecture from the very first line of code.'
        },
        {
          title: 'Mobile-First Architecture',
          desc: 'Flawless ergonomics and intuitive user flow across all smartphones, tablets, and high-DPI displays.'
        },
        {
          title: 'Clean Engineering',
          desc: 'Lean, semantic source code built to modern standards, maximizing page load velocity and security.'
        },
        {
          title: 'Long-Term Support',
          desc: 'We stay by your side post-launch. On request, we manage ongoing security updates, hosting maintenance, and feature enhancements.'
        }
      ]
    },
    process: {
      subtitle: 'Our Method',
      title: '9 Clear Steps to Your New Digital Presence',
      steps: [
        { num: '01', title: 'Discovery Call', desc: 'Understanding your commercial objectives and target audience.' },
        { num: '02', title: 'Analysis', desc: 'Auditing existing systems, market competitors, and technical boundaries.' },
        { num: '03', title: 'Concept', desc: 'Structuring navigation, information architecture, and user paths.' },
        { num: '04', title: 'Design', desc: 'Crafting the visual layout with generous whitespace and modern aesthetics.' },
        { num: '05', title: 'Development', desc: 'Clean coding in modern web standards or WordPress/Elementor.' },
        { num: '06', title: 'SEO', desc: 'Search-compliant structure, metadata, and Schema.org rich snippets.' },
        { num: '07', title: 'Testing', desc: 'Rigorous cross-device quality checks, speed audits, and form validation.' },
        { num: '08', title: 'Launch', desc: 'Smooth live deployment on your domain with SSL and 301 redirects.' },
        { num: '09', title: 'Support', desc: 'Reliable continuity, system updates, and ongoing technical guidance.' }
      ]
    },
    portfolioSection: {
      subtitle: 'Real Track Record',
      title: 'Featured Projects from Our Practice',
      viewAll: 'View all projects',
      viewProject: 'View project details',
      challenge: 'Initial Situation & Challenge',
      solution: 'Execution & Solution',
      deliverables: 'Deliverables',
      technologies: 'Technologies',
      closeModal: 'Close'
    },
    foundersSection: {
      subtitle: 'The Team',
      title: 'The People Behind Webzech',
      text: 'Webzech unites two dedicated partners with complementary roles and a shared standard: delivering web engineering for companies that is transparent, dependable, and technically exceptional.',
      awaisTitle: 'Founder / Web Developer / Web Designer',
      awaisDesc: 'Awais Abid designs and engineers modern interfaces, enforces clean code standards, and guarantees optimal page speed.',
      wernerTitle: 'Co-Founder / Business & Project Partner',
      wernerDesc: 'Werner Polatschek oversees strategic alignment, client communication, and rigorous quality assurance across all projects.',
      cta: 'More about us'
    },
    seoSection: {
      subtitle: 'Durable Visibility',
      title: 'Great Web Design Demands Technical Search Engine Optimization',
      text: 'A handsome website delivers its true commercial value only when potential buyers can discover it via Google. That is why every Webzech site is engineered according to search engine best practices.',
      items: [
        { title: 'Technical SEO', desc: 'Clean HTML5 hierarchies, XML sitemaps, robots.txt, and canonical URL structure.' },
        { title: 'Mobile Optimization', desc: 'Flawless usability tailored to Google\'s Mobile-First indexing.' },
        { title: 'Performance & Speed', desc: 'Minimized asset weights for exceptional Core Web Vitals benchmark scores.' },
        { title: 'Structured Data', desc: 'Schema.org JSON-LD markup for Organizations, Services, and Breadcrumbs.' },
        { title: 'Local SEO', desc: 'Regional relevance targeting corporate hubs across Germany.' },
        { title: 'Internal Linking', desc: 'Logically mapped topical links establishing topical authority.' }
      ],
      cta: 'Explore SEO'
    },
    faqPreview: {
      subtitle: 'Frequently Asked Questions',
      title: 'Answers to Essential Client Questions',
      cta: 'View all FAQs'
    },
    finalCta: {
      title: 'Ready for a Professional Digital Presence?',
      subtitle: 'Let us discuss your project. We offer honest, no-obligation advice on how to build a website that delivers commercial results.',
      ctaPrimary: 'Request Project',
      ctaSecondary: 'Get in Touch',
      pricingNotice: 'Every project is unique. We discuss your requirements personally and provide an accurate, transparent solution.'
    },
    contactForm: {
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. John Doe',
      emailLabel: 'Your Email Address *',
      emailPlaceholder: 'e.g. john@company.com',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'e.g. Acme Industries Ltd',
      serviceLabel: 'Requested Service',
      servicePlaceholder: 'Please choose...',
      websiteLabel: 'Current Website (optional)',
      websitePlaceholder: 'https://your-site.com',
      messageLabel: 'Tell us about your project *',
      messagePlaceholder: 'What goals do you want to accomplish? What is your preferred timeline?',
      submitButton: 'Request Project',
      submitting: 'Sending...',
      successTitle: 'Thank you for reaching out!',
      successMessage: 'We received your message and will respond personally within 24 hours.',
      privacyNote: 'Your details are strictly confidential and used solely to answer your project inquiry. Zero spam.',
      directContactTitle: 'Direct Founder Contact',
      directContactSubtitle: 'Prefer a direct conversation? Reach us directly via phone, WhatsApp, or email:',
      guaranteeText: 'Guaranteed personal reply within 24 hours on business days'
    },
    footer: {
      desc: 'Webzech is your German agency for modern web engineering, custom web design, WordPress, high-converting landing pages, and sustainable SEO.',
      servicesTitle: 'Services',
      regionsTitle: 'Regions',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      legalImpressum: 'Imprint',
      legalPrivacy: 'Privacy Policy',
      legalCookies: 'Cookie Settings',
      allRightsReserved: 'All rights reserved.'
    },
    cookies: {
      bannerTitle: 'Privacy & Cookie Preferences',
      bannerText: 'We use cookies and equivalent technologies to guarantee you a seamless browsing experience. Essential cookies are required to operate the site.',
      acceptAll: 'Accept All',
      saveSelected: 'Save Selection',
      declineOptional: 'Essential Only',
      settingsTitle: 'Manage Cookie Settings',
      essentialTitle: 'Technically Essential Cookies',
      essentialDesc: 'Required for core functionality including navigation, language state, and security. Cannot be switched off.',
      analyticsTitle: 'Analytics & Performance',
      analyticsDesc: 'Helps us comprehend how visitors use the website so we can enhance performance.',
      marketingTitle: 'Marketing & External Media',
      marketingDesc: 'Enables interactive maps and embedded rich media.',
      alwaysActive: 'Always active'
    },
    common: {
      breadcrumbsHome: 'Home',
      breadcrumbsServices: 'Services',
      breadcrumbsRegions: 'Regions',
      relatedServicesTitle: 'Related Services',
      discussProjectCta: 'Discuss Project',
      backToOverview: 'Back to overview',
      readArticle: 'Read article',
      filterAll: 'Show all'
    }
  },
  ru: {
    nav: {
      services: 'Услуги',
      regions: 'Регионы',
      portfolio: 'Портфолио',
      about: 'О нас',
      blog: 'Блог',
      faq: 'FAQ',
      contact: 'Контакты',
      ctaButton: 'Связаться с нами',
      allServices: 'Все услуги',
      allRegions: 'Все регионы'
    },
    hero: {
      badge: 'Немецкое веб-агентство',
      h1: 'Профессиональные сайты, веб-разработка и SEO для бизнеса',
      subtitle: 'Создаем быстрые современные сайты и долгосрочные SEO-стратегии для среднего бизнеса в Германии. Личное ведение проектов: Аваис Абид и Вернер Полатшек.',
      ctaPrimary: 'Начать проект',
      ctaSecondary: 'Смотреть портфолио',
      trustBullet1: '100% чистый код и WordPress',
      trustBullet2: 'SEO и скорость с первого дня',
      trustBullet3: 'Прямой контакт с основателями'
    },
    trust: {
      sectionTitle: 'О Webzech',
      heading: 'Надежная разработка сайтов с индивидуальным подходом',
      text1: 'Webzech — это не конвейерное агентство. Мы работаем напрямую: основатель и разработчик Аваис Абид и сооснователь Вернер Полатшек лично ведут каждый проект.',
      text2: 'Мы помогаем компаниям по всей Германии запускать современные, безопасные и оптимизированные для поиска сайты без наценок и лишней бюрократии.',
      cta: 'Узнать больше о нас'
    },
    servicesSection: {
      subtitle: 'Компетенции',
      title: 'Услуги для цифрового развития вашего бизнеса',
      learnMore: 'Подробнее'
    },
    whyWebzech: {
      subtitle: 'Преимущества',
      title: 'Почему компании выбирают Webzech',
      items: [
        { title: 'Личное сотрудничество', desc: 'Прямой диалог с создателями агентства без промежуточных менеджеров.' },
        { title: 'Современный дизайн', desc: 'Чистый белый фон, продуманная типографика и европейский стиль.' },
        { title: 'SEO с самого начала', desc: 'Оптимизация заложена в архитектуру кода, а не добавлена постфактум.' },
        { title: 'Mobile-First', desc: 'Безупречная работа и удобство на всех смартфонах и планшетах.' },
        { title: 'Чистый код', desc: 'Современные стандарты, высокая скорость и надежная безопасность.' },
        { title: 'Долгосрочная поддержка', desc: 'Помощь с обновлениями, хостингом и развитием проекта после запуска.' }
      ]
    },
    process: {
      subtitle: 'Этапы работы',
      title: '9 прозрачных шагов к новому сайту',
      steps: [
        { num: '01', title: 'Знакомство', desc: 'Определение целей и задач бизнеса.' },
        { num: '02', title: 'Анализ', desc: 'Исследование ниши, конкурентов и требований.' },
        { num: '03', title: 'Концепция', desc: 'Структура страниц и пользовательские сценарии.' },
        { num: '04', title: 'Дизайн', desc: 'Разработка макетов с акцентом на удобство.' },
        { num: '05', title: 'Разработка', desc: 'Чистая верстка и интеграция с WordPress.' },
        { num: '06', title: 'SEO', desc: 'Техническая оптимизация и микроразметка.' },
        { num: '07', title: 'Тестирование', desc: 'Проверка скорости, форм и адаптивности.' },
        { num: '08', title: 'Запуск', desc: 'Релиз на вашем домене с настройкой SSL.' },
        { num: '09', title: 'Поддержка', desc: 'Регулярные обновления и технический надзор.' }
      ]
    },
    portfolioSection: {
      subtitle: 'Реальные проекты',
      title: 'Примеры выполненных работ',
      viewAll: 'Все проекты',
      viewProject: 'Смотреть детали',
      challenge: 'Задача проекта',
      solution: 'Решение и реализация',
      deliverables: 'Что было сделано',
      technologies: 'Стек технологий',
      closeModal: 'Закрыть'
    },
    foundersSection: {
      subtitle: 'Команда',
      title: 'Основатели Webzech',
      text: 'Два партнера с четким разделением задач: техническое совершенство и внимательный клиентский сервис.',
      awaisTitle: 'Основатель / Веб-разработчик / Дизайнер',
      awaisDesc: 'Аваис Абид проектирует интерфейсы, пишет код и отвечает за высокую производительность.',
      wernerTitle: 'Сооснователь / Партнер по проектам',
      wernerDesc: 'Вернер Полатшек курирует стратегию, контроль качества и общение с клиентами.',
      cta: 'О нас подробнее'
    },
    seoSection: {
      subtitle: 'Видимость в Google',
      title: 'Качественному дизайну необходимо сильное техническое SEO',
      text: 'Сайт приносит реальную пользу бизнесу только тогда, когда потенциальные клиенты находят его в Google.',
      items: [
        { title: 'Техническое SEO', desc: 'Семантика HTML5, файлы sitemap, robots.txt и правильные URL.' },
        { title: 'Мобильная адаптация', desc: 'Полное соответствие Mobile-First индексации Google.' },
        { title: 'Скорость страниц', desc: 'Оптимизация изображений и высшие баллы Core Web Vitals.' },
        { title: 'Микроразметка Schema', desc: 'JSON-LD для организаций, услуг и навигации.' },
        { title: 'Локальное SEO', desc: 'Продвижение по городам и регионам Германии.' },
        { title: 'Внутренняя перелинковка', desc: 'Логичная структура для передачи авторитета страниц.' }
      ],
      cta: 'Узнать больше о SEO'
    },
    faqPreview: {
      subtitle: 'Частые вопросы',
      title: 'Ответы на главные вопросы',
      cta: 'Все вопросы и ответы'
    },
    finalCta: {
      title: 'Готовы к новому уровню вашего сайта?',
      subtitle: 'Свяжитесь с нами для открытой консультации без скрытых условий.',
      ctaPrimary: 'Оставить заявку',
      ctaSecondary: 'Связаться с нами',
      pricingNotice: 'Каждый проект уникален. Мы обсуждаем требования лично и подбираем точное решение.'
    },
    contactForm: {
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Иван Петров',
      emailLabel: 'Ваш Email *',
      emailPlaceholder: 'ivan@company.de',
      companyLabel: 'Компания / Организация',
      companyPlaceholder: 'ООО Пример',
      serviceLabel: 'Интересующая услуга',
      servicePlaceholder: 'Выберите услугу...',
      websiteLabel: 'Текущий сайт (если есть)',
      websitePlaceholder: 'https://vash-sait.de',
      messageLabel: 'Опишите ваш проект *',
      messagePlaceholder: 'Какие задачи предстоит решить? Какие сроки?',
      submitButton: 'Отправить заявку',
      submitting: 'Отправка...',
      successTitle: 'Спасибо за заявку!',
      successMessage: 'Мы получили сообщение и свяжемся с вами в течение 24 часов.',
      privacyNote: 'Данные конфиденциальны и не передаются третьим лицам.',
      directContactTitle: 'Прямая связь с основателями',
      directContactSubtitle: 'Хотите сразу обсудить детали? Напишите или позвоните нам:',
      guaranteeText: 'Ответ гарантирован в течение 24 часов в рабочие дни'
    },
    footer: {
      desc: 'Webzech — немецкое агентство веб-разработки, дизайна, WordPress и поисковой оптимизации.',
      servicesTitle: 'Услуги',
      regionsTitle: 'Регионы',
      companyTitle: 'Компания',
      contactTitle: 'Контакты',
      legalImpressum: 'Выходные данные (Impressum)',
      legalPrivacy: 'Конфиденциальность (Datenschutz)',
      legalCookies: 'Файлы Cookie',
      allRightsReserved: 'Все права защищены.'
    },
    cookies: {
      bannerTitle: 'Настройки приватности и файлов Cookie',
      bannerText: 'Мы используем cookie для обеспечения базовой работоспособности сайта.',
      acceptAll: 'Принять все',
      saveSelected: 'Сохранить выбор',
      declineOptional: 'Только обязательные',
      settingsTitle: 'Управление cookie',
      essentialTitle: 'Обязательные технические cookie',
      essentialDesc: 'Необходимы для работы навигации, языка и безопасности. Не могут быть отключены.',
      analyticsTitle: 'Аналитика',
      analyticsDesc: 'Помогает анализировать посещаемость для улучшения сайта.',
      marketingTitle: 'Маркетинг',
      marketingDesc: 'Используется для мультимедийных элементов.',
      alwaysActive: 'Всегда активны'
    },
    common: {
      breadcrumbsHome: 'Главная',
      breadcrumbsServices: 'Услуги',
      breadcrumbsRegions: 'Регионы',
      relatedServicesTitle: 'Связанные услуги',
      discussProjectCta: 'Обсудить проект',
      backToOverview: 'Назад к списку',
      readArticle: 'Читать статью',
      filterAll: 'Все'
    }
  },
  uk: {
    nav: {
      services: 'Послуги',
      regions: 'Регіони',
      portfolio: 'Портфоліо',
      about: 'Про нас',
      blog: 'Блог',
      faq: 'FAQ',
      contact: 'Контакти',
      ctaButton: 'Зв\'язатися з нами',
      allServices: 'Всі послуги',
      allRegions: 'Всі регіони'
    },
    hero: {
      badge: 'Німецьке веб-агентство',
      h1: 'Професійні сайти, веб-розробка та SEO для бізнесу',
      subtitle: 'Створюємо швидкі сучасні сайти та довгострокові SEO-стратегії для середнього бізнесу в Німеччині. Особистий супровід: Аваїс Абід та Вернер Полатшек.',
      ctaPrimary: 'Почати проект',
      ctaSecondary: 'Переглянути портфоліо',
      trustBullet1: '100% чистий код та WordPress',
      trustBullet2: 'SEO та швидкість із першого дня',
      trustBullet3: 'Прямий контакт із засновниками'
    },
    trust: {
      sectionTitle: 'Про Webzech',
      heading: 'Надійна розробка сайтів з індивідуальним підходом',
      text1: 'Webzech — це не конвеєрне агентство. Ми працюємо напряму: засновник і розробник Аваїс Абід та співзасновник Вернер Полатшек особисто ведуть кожен проект.',
      text2: 'Ми допомагаємо компаніям по всій Німеччині запускати сучасні, безпечні та оптимізовані для пошуку сайти без націнок та зайвої бюрократії.',
      cta: 'Дізнатися більше про нас'
    },
    servicesSection: {
      subtitle: 'Компетенції',
      title: 'Послуги для цифрового розвитку вашого бізнесу',
      learnMore: 'Детальніше'
    },
    whyWebzech: {
      subtitle: 'Переваги',
      title: 'Чому компанії обирають Webzech',
      items: [
        { title: 'Особиста співпраця', desc: 'Прямий діалог із творцями агентства без проміжних менеджерів.' },
        { title: 'Сучасний дизайн', desc: 'Чистий білий фон, продумана типографіка та європейський стиль.' },
        { title: 'SEO з самого початку', desc: 'Оптимізація закладена в архітектуру коду, а не додана постфактум.' },
        { title: 'Mobile-First', desc: 'Бездоганна робота та зручність на всіх смартфонах і планшетах.' },
        { title: 'Чистий код', desc: 'Сучасні стандарти, висока швидкість та надійна безпека.' },
        { title: 'Довгострокова підтримка', desc: 'Допомога з оновленнями, хостингом та розвитком проекту після запуску.' }
      ]
    },
    process: {
      subtitle: 'Етапи роботи',
      title: '9 прозорих кроків до нового сайту',
      steps: [
        { num: '01', title: 'Знайомство', desc: 'Визначення цілей та завдань бізнесу.' },
        { num: '02', title: 'Аналіз', desc: 'Дослідження ніші, конкурентів та вимог.' },
        { num: '03', title: 'Концепція', desc: 'Структура сторінок та користувацькі сценарії.' },
        { num: '04', title: 'Дизайн', desc: 'Розробка макетів з акцентом на зручність.' },
        { num: '05', title: 'Розробка', desc: 'Чиста верстка та інтеграція з WordPress.' },
        { num: '06', title: 'SEO', desc: 'Технічна оптимізація та мікророзмітка.' },
        { num: '07', title: 'Тестування', desc: 'Перевірка швидкості, форм та адаптивності.' },
        { num: '08', title: 'Запуск', desc: 'Реліз на вашому домені з налаштуванням SSL.' },
        { num: '09', title: 'Підтримка', desc: 'Регулярні оновлення та технічний нагляд.' }
      ]
    },
    portfolioSection: {
      subtitle: 'Реальні проекти',
      title: 'Приклади виконаних робіт',
      viewAll: 'Всі проекти',
      viewProject: 'Дивитися деталі',
      challenge: 'Завдання проекту',
      solution: 'Рішення та реалізація',
      deliverables: 'Що було зроблено',
      technologies: 'Стек технологій',
      closeModal: 'Закрити'
    },
    foundersSection: {
      subtitle: 'Команда',
      title: 'Засновники Webzech',
      text: 'Два партнери з чітким розподілом завдань: технічна досконалість та уважний клієнтський сервіс.',
      awaisTitle: 'Засновник / Веб-розробник / Дизайнер',
      awaisDesc: 'Аваїс Абід проектує інтерфейси, пише код та відповідає за високу продуктивність.',
      wernerTitle: 'Співзасновник / Партнер за проектами',
      wernerDesc: 'Вернер Полатшек курує стратегію, контроль якості та спілкування з клієнтами.',
      cta: 'Про нас детальніше'
    },
    seoSection: {
      subtitle: 'Видимість у Google',
      title: 'Якісному дизайну необхідне сильне технічне SEO',
      text: 'Сайт приносить реальну користь бізнесу тільки тоді, коли потенційні клієнти знаходять його в Google.',
      items: [
        { title: 'Технічне SEO', desc: 'Семантика HTML5, файли sitemap, robots.txt та правильні URL.' },
        { title: 'Мобільна адаптація', desc: 'Повна відповідність Mobile-First індексації Google.' },
        { title: 'Швидкість сторінок', desc: 'Оптимізація зображень та найвищі бали Core Web Vitals.' },
        { title: 'Мікророзмітка Schema', desc: 'JSON-LD для організацій, послуг та навігації.' },
        { title: 'Локальне SEO', desc: 'Просування по містах та регіонах Німеччини.' },
        { title: 'Внутрішня перелінковка', desc: 'Логічна структура для передачі авторитету сторінок.' }
      ],
      cta: 'Дізнатися більше про SEO'
    },
    faqPreview: {
      subtitle: 'Часті запитання',
      title: 'Відповіді на головні запитання',
      cta: 'Всі запитання та відповіді'
    },
    finalCta: {
      title: 'Готові до нового рівня вашого сайту?',
      subtitle: 'Зв\'яжіться з нами для відкритої консультації без прихованих умов.',
      ctaPrimary: 'Залишити заявку',
      ctaSecondary: 'Зв\'язатися з нами',
      pricingNotice: 'Кожен проект унікальний. Ми обговорюємо вимоги особисто та підбираємо точне рішення.'
    },
    contactForm: {
      nameLabel: 'Ваше ім\'я *',
      namePlaceholder: 'Олександр Шевченко',
      emailLabel: 'Ваш Email *',
      emailPlaceholder: 'oleksandr@company.de',
      companyLabel: 'Компанія / Організація',
      companyPlaceholder: 'ТОВ Приклад',
      serviceLabel: 'Послуга, що цікавить',
      servicePlaceholder: 'Оберіть послугу...',
      websiteLabel: 'Поточний сайт (якщо є)',
      websitePlaceholder: 'https://vash-sayt.de',
      messageLabel: 'Опишіть ваш проект *',
      messagePlaceholder: 'Які завдання потрібно вирішити? Які терміни?',
      submitButton: 'Надіслати заявку',
      submitting: 'Надсилання...',
      successTitle: 'Дякуємо за заявку!',
      successMessage: 'Ми отримали повідомлення і зв\'яжемося з вами протягом 24 годин.',
      privacyNote: 'Дані є конфіденційними і не передаються третім особам.',
      directContactTitle: 'Прямий зв\'язок із засновниками',
      directContactSubtitle: 'Бажаєте відразу обговорити деталі? Напишіть або зателефонуйте нам:',
      guaranteeText: 'Відповідь гарантована протягом 24 годин у робочі дні'
    },
    footer: {
      desc: 'Webzech — німецьке агентство веб-розробки, дизайну, WordPress та пошукової оптимізації.',
      servicesTitle: 'Послуги',
      regionsTitle: 'Регіони',
      companyTitle: 'Компанія',
      contactTitle: 'Контакти',
      legalImpressum: 'Вихідні дані (Impressum)',
      legalPrivacy: 'Конфіденційність (Datenschutz)',
      legalCookies: 'Файли Cookie',
      allRightsReserved: 'Всі права захищені.'
    },
    cookies: {
      bannerTitle: 'Налаштування приватності та файлів Cookie',
      bannerText: 'Ми використовуємо cookie для забезпечення базової працездатності сайту.',
      acceptAll: 'Прийняти всі',
      saveSelected: 'Зберегти вибір',
      declineOptional: 'Лише обов\'язкові',
      settingsTitle: 'Керування cookie',
      essentialTitle: 'Обов\'язкові технічні cookie',
      essentialDesc: 'Необхідні для роботи навігації, мови та безпеки. Не можуть бути відключені.',
      analyticsTitle: 'Аналітика',
      analyticsDesc: 'Допомагає аналізувати відвідуваність для покращення сайту.',
      marketingTitle: 'Маркетинг',
      marketingDesc: 'Використовується для мультимедійних елементів.',
      alwaysActive: 'Завжди активні'
    },
    common: {
      breadcrumbsHome: 'Головна',
      breadcrumbsServices: 'Послуги',
      breadcrumbsRegions: 'Регіони',
      relatedServicesTitle: 'Пов\'язані послуги',
      discussProjectCta: 'Обговорити проект',
      backToOverview: 'Назад до списку',
      readArticle: 'Читати статтю',
      filterAll: 'Всі'
    }
  }
};

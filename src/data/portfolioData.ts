import { ProjectItem } from '../types';

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'solagrow',
    name: 'SolaGrow Website',
    serviceType: 'Webentwicklung & UI/UX',
    industry: {
      de: 'Agrartechnologie & Solarenergie',
      en: 'Agricultural Technology & Solar Energy',
      ru: 'Агротехнологии и солнечная энергетика',
      uk: 'Агротехнології та сонячна енергетика'
    },
    image: '/src/assets/images/project_solagrow_mockup_1790918770202.jpg',
    summary: {
      de: 'Entwicklung eines modernen, performanten Webauftritts für SolaGrow mit Fokus auf innovative Agrar- und Solarlösungen.',
      en: 'Development of a modern, high-performance web presence for SolaGrow focusing on agricultural and solar innovations.',
      ru: 'Разработка современного производительного веб-сайта для SolaGrow с акцентом на агро- и солнечные технологии.',
      uk: 'Розробка сучасного високопродуктивного веб-сайту для SolaGrow з акцентом на аграрні та сонячні інновації.'
    },
    challenge: {
      de: 'Präsentation komplexer technologischer Lösungen im Bereich Agrar und Solar in einer klaren, verständlichen und optisch ansprechenden Struktur.',
      en: 'Presenting complex technological solutions in agricultural and solar fields with clear, intuitive structure and aesthetics.',
      ru: 'Презентация сложных технологических решений в сфере агро и солнечной энергетики в понятной и привлекательной структуре.',
      uk: 'Презентація складних технологічних рішень у сфері агро та сонячної енергетики у зрозумілій та привабливій структурі.'
    },
    solution: {
      de: 'Maßgeschneiderte Webarchitektur mit modular aufgebauten Informationsabschnitten, schnellen Ladezeiten, responsivem Design und suchmaschinenoptimierter Inhaltsstruktur.',
      en: 'Custom web architecture with modular content blocks, fast page load speeds, responsive design, and an SEO-optimized structure.',
      ru: 'Индивидуальная веб-архитектура с модульными блоками, быстрой загрузкой, адаптивным дизайном и SEO-оптимизированной структурой.',
      uk: 'Індивідуальна веб-архітектура з модульними блоками, швидким завантаженням, адаптивним дизайном та SEO-оптимізованою структурою.'
    },
    tech: ['HTML5 / Modern JS', 'Tailwind CSS', 'Responsive Layout', 'On-Page SEO', 'Core Web Vitals'],
    deliverables: {
      de: [
        'Konzeption und Informationsarchitektur',
        'Modernes, minimalistisches Oberflächendesign',
        'Responsive Umsetzung für Desktop, Tablet und Smartphone',
        'Vollständige technische On-Page-SEO-Vorbereitung'
      ],
      en: [
        'Concept & information architecture',
        'Modern minimalist interface design',
        'Responsive implementation for all devices',
        'Complete technical on-page SEO preparation'
      ],
      ru: [
        'Концепция и информационная архитектура',
        'Современный минималистичный интерфейс',
        'Адаптивная верстка для всех устройств',
        'Полная техническая On-Page SEO оптимизация'
      ],
      uk: [
        'Концепція та інформаційна архітектура',
        'Сучасний мінімалістичний інтерфейс',
        'Адаптивна верстка для всіх пристроїв',
        'Повна технічна On-Page SEO оптимізація'
      ]
    },
    location: 'International / Deutschland'
  },
  {
    id: 'vilshofen-service',
    name: 'Vilshofen Handwerk & Dienstleistung',
    serviceType: 'WordPress & Webdesign',
    industry: {
      de: 'Regionales Handwerk & Dienstleistung',
      en: 'Regional Craft & Local Services',
      ru: 'Региональные ремесленные и бытовые услуги',
      uk: 'Регіональні ремісничі та побутові послуги'
    },
    image: '/src/assets/images/project_vilshofen_service_1790918784001.jpg',
    summary: {
      de: 'Professionelle WordPress-Website für einen regionalen Dienstleister in Vilshofen an der Donau mit Elementor und strukturierter Leistungsübersicht.',
      en: 'Professional WordPress website for a local service provider in Vilshofen an der Donau featuring Elementor and structured service catalog.',
      ru: 'Профессиональный сайт на WordPress для поставщика локальных услуг в Фильсхофене с Elementor и каталогом услуг.',
      uk: 'Професійний сайт на WordPress для локального надавача послуг у Фільсгофені з Elementor та каталогом послуг.'
    },
    challenge: {
      de: 'Der Kunde benötigte eine übersichtliche, vertrauenserweckende Internetpräsenz, die lokale Suchanfragen in Vilshofen und Umgebung abdeckt und unkompliziert zu pflegen ist.',
      en: 'The client needed a clear, trustworthy online presence that captures local search queries in Vilshofen and is easy to maintain.',
      ru: 'Клиенту требовался понятный сайт, вызывающий доверие, оптимизированный под локальный поиск в Фильсхофене и простой в обновлении.',
      uk: 'Клієнту був потрібен зрозумілий сайт, що викликає довіру, оптимізований під локальний пошук у Фільсгофені та простий в оновленні.'
    },
    solution: {
      de: 'Individuell gestaltete WordPress-Lösung mit Elementor Pro, maßgeschneiderten Kontaktformularen, lokaler Suchmaschinenoptimierung und leicht verständlicher Navigation.',
      en: 'Customized WordPress solution built with Elementor Pro, bespoke inquiry forms, local SEO optimization, and intuitive navigation.',
      ru: 'Индивидуальное решение на WordPress + Elementor Pro, формы связи, локальное SEO и интуитивная навигация.',
      uk: 'Індивідуальне рішення на WordPress + Elementor Pro, форми зворотного зв\'язку, локальне SEO та інтуїтивна навігація.'
    },
    tech: ['WordPress', 'Elementor', 'Lokale SEO', 'Kontaktformular-Integration', 'Mobile-First'],
    deliverables: {
      de: [
        'Komplette WordPress-Installation und Härtung',
        'Strukturierung aller handwerklichen Leistungen',
        'Optimierung für mobile Endgeräte',
        'Einrichtung lokaler Suchbegriffe für Vilshofen'
      ],
      en: [
        'Complete WordPress installation & hardening',
        'Structured catalog of craft and trade services',
        'Full mobile optimization',
        'Local SEO setup for Vilshofen & surrounding region'
      ],
      ru: [
        'Установка и настройка безопасности WordPress',
        'Структурирование каталога услуг',
        'Оптимизация для мобильных устройств',
        'Настройка локальных ключевых слов для Фильсхофена'
      ],
      uk: [
        'Встановлення та налаштування безпеки WordPress',
        'Структурування каталогу послуг',
        'Оптимізація для мобільних пристроїв',
        'Налаштування локальних ключових слів для Фільсгофена'
      ]
    },
    location: 'Vilshofen an der Donau, Bayern'
  },
  {
    id: 'pc-service-landingpage',
    name: 'Lokale IT- & PC-Service Landingpage',
    serviceType: 'Landingpage & Conversion',
    industry: {
      de: 'IT-Dienstleistung & Computer-Reparatur',
      en: 'IT Services & PC Repair',
      ru: 'IT-услуги и ремонт компьютеров',
      uk: 'IT-послуги та ремонт комп\'ютерів'
    },
    image: '/src/assets/images/project_pc_service_landing_1790918801177.jpg',
    summary: {
      de: 'Conversion-optimierte Landingpage für einen lokalen PC- und Computer-Reparaturservice in Bayern mit Fokus auf schnelle Kontaktaufnahme.',
      en: 'Conversion-optimized landing page for a local computer repair and IT service business in Bavaria with direct contact conversion.',
      ru: 'Конверсионный лендинг для локального сервиса ремонта ПК и IT-поддержки в Баварии с быстрой связью.',
      uk: 'Конверсійний лендінг для локального сервісу ремонту ПК та IT-підтримки в Баварії зі швидким зв\'язком.'
    },
    challenge: {
      de: 'Kunden mit Computerproblemen suchen schnelle, unkomplizierte Hilfe in ihrer Nähe. Die Seite musste sofort Vertrauen aufbauen und Anrufe bzw. Nachrichten generieren.',
      en: 'Customers facing computer issues need fast, local support. The page had to build immediate trust and prompt phone calls and inquiries.',
      ru: 'Клиенты с компьютерными неполадками ищут быструю помощь рядом. Страница должна мгновенно вызывать доверие и стимулировать звонки.',
      uk: 'Клієнти з комп\'ютерними несправностями шукають швидку допомогу поруч. Сторінка мала миттєво викликати довіру та спонукати до дзвінків.'
    },
    solution: {
      de: 'Einseitiges, fokussiertes Design mit klar sichtbaren Telefon- und WhatsApp-Buttons, detaillierter Auflistung der Hilfebereiche (Hardware, Viren, Datenrettung) und transparentem Ablauf.',
      en: 'Single-page, focused layout with click-to-call and WhatsApp buttons, transparent problem breakdowns, and simple workflow explanation.',
      ru: 'Целевая страница с кнопками прямого звонка и WhatsApp, четким списком услуг и понятным описанием процесса.',
      uk: 'Цільова сторінка з кнопками прямого дзвінка та WhatsApp, чітким переліком послуг та зрозумілим описом процесу.'
    },
    tech: ['HTML5 / CSS3', 'Conversion-Optimierung', 'Click-to-Call & WhatsApp', 'Lokales SEO', 'Schnelle Ladezeit'],
    deliverables: {
      de: [
        'Konzeption des Conversion-Trichters',
        'Strukturierung von Notfall- und Vor-Ort-Services',
        'Einbindung direkter Kontaktkanäle (Telefon, WhatsApp)',
        'Extrem schnelle Ladezeit für Mobilnutzer'
      ],
      en: [
        'Conversion funnel concept & copy structure',
        'Structuring emergency and on-site repair services',
        'Direct contact integration (Phone, WhatsApp)',
        'Ultra-fast load time on 4G/5G mobile connections'
      ],
      ru: [
        'Концепция конверсионной воронки',
        'Структурирование срочных услуг',
        'Прямые каналы связи (телефон, WhatsApp)',
        'Максимально быстрая загрузка на смартфонах'
      ],
      uk: [
        'Концепція конверсійної воронки',
        'Структурування термінових послуг',
        'Прямі канали зв\'язку (телефон, WhatsApp)',
        'Максимально швидке завантаження на смартфонах'
      ]
    },
    location: 'Passau & Umgebung, Bayern'
  }
];

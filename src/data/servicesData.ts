import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'webentwicklung',
    pageId: 'webentwicklung',
    slug: 'webentwicklung',
    title: {
      de: 'Webentwicklung',
      en: 'Web Development',
      ru: 'Веб-разработка',
      uk: 'Веб-розробка'
    },
    shortDesc: {
      de: 'Moderne, performante und saubere Code-Entwicklung für zukunftssichere Unternehmenswebsites.',
      en: 'Modern, high-performance, and clean code development for future-proof corporate websites.',
      ru: 'Современная, быстрая и чистая разработка кода для надежных корпоративных сайтов.',
      uk: 'Сучасна, швидка та чиста розробка коду для надійних корпоративних сайтів.'
    },
    heroH1: {
      de: 'Webentwicklung für moderne und professionelle Websites',
      en: 'Web Development for Modern and Professional Corporate Websites',
      ru: 'Веб-разработка для современных и профессиональных корпоративных сайтов',
      uk: 'Веб-розробка для сучасних та професійних корпоративних сайтів'
    },
    problemTitle: {
      de: 'Die Herausforderung veralteter Websites',
      en: 'The Challenge with Outdated Websites',
      ru: 'Проблема устаревших сайтов',
      uk: 'Проблема застарілих сайтів'
    },
    problemText: {
      de: 'Viele Unternehmenswebsites leiden unter langsamen Ladezeiten, unsauberem Code, schlechter mobiler Bedienbarkeit und mangelhafter technischer SEO. Das führt zu schlechten Rankings und frustrierten Besuchern, die vor einer Kontaktaufnahme abspringen.',
      en: 'Many business websites suffer from slow load times, bloated code, poor mobile usability, and deficient technical SEO. This results in lost rankings and visitors bouncing before making contact.',
      ru: 'Многие сайты компаний страдают от медленной загрузки, перегруженного кода, плохого отображения на смартфонах и слабой технической базы SEO.',
      uk: 'Багато сайтів компаній страждають від повільного завантаження, перевантаженого коду, поганого мобільного інтерфейсу та слабкої бази SEO.'
    },
    solutionTitle: {
      de: 'Unsere Lösung: Saubere, zukunftssichere Entwicklung',
      en: 'Our Solution: Clean, Future-Proof Engineering',
      ru: 'Наше решение: Чистый и надежный код',
      uk: 'Наше рішення: Чистий та надійний код'
    },
    solutionText: {
      de: 'Webzech baut Websites nach modernsten Webstandards. Wir achten von der ersten Codezeile an auf saubere semantische HTML5-Strukturen, minimale Ladezeiten, strikte Barrierefreiheit und eine Architektur, die flexibel mit Ihrem Unternehmen wächst.',
      en: 'Webzech builds websites using modern web standards. From the very first line of code, we enforce semantic HTML5 structures, minimal load times, strict accessibility, and an architecture that scales with your business.',
      ru: 'Webzech создает сайты по современным веб-стандартам. С первой строки кода мы соблюдаем семантическую структуру HTML5, молниеносную скорость и адаптивность.',
      uk: 'Webzech створює сайти за сучасними веб-стандартами. З першого рядка коду ми дотримуємося семантичної структури HTML5, блискавичної швидкості та адаптивності.'
    },
    benefits: {
      de: [
        'Erstklassige Core Web Vitals und messbar schnelle Ladezeiten',
        'Vollständig responsives Verhalten auf allen Displaygrößen',
        'Suchmaschinenfreundlicher, sauberer Quellcode',
        'Hohe Sicherheit und DSGVO-konforme Umsetzung',
        'Persönlicher Ansprechpartner ohne anonyme Ticket-Warteschlangen'
      ],
      en: [
        'Top-tier Core Web Vitals and measurably fast load times',
        'Flawlessly responsive across all display dimensions',
        'Clean, search-engine-compliant semantic source code',
        'High security standards and full GDPR compliance',
        'Dedicated personal partners without anonymous ticket queues'
      ],
      ru: [
        'Высочайшие показатели Core Web Vitals и быстрая загрузка',
        'Безупречная адаптивность для смартфонов и ПК',
        'Чистый и понятный поисковикам исходный код',
        'Высокая безопасность и соблюдение GDPR/DSGVO',
        'Прямой контакт с разработчиками без анонимных тикетов'
      ],
      uk: [
        'Найвищі показники Core Web Vitals та швидке завантаження',
        'Бездоганна адаптивність для смартфонів та комп\'ютерів',
        'Чистий і зрозумілий пошуковим системам вихідний код',
        'Висока безпека та дотримання вимог GDPR/DSGVO',
        'Прямий контакт з розробниками без анонімних тікетів'
      ]
    },
    processSteps: {
      de: [
        { step: '01', title: 'Analyse & Anforderung', desc: 'Prüfung der Ziele, Zielgruppe und technischen Anforderungen Ihres Projekts.' },
        { step: '02', title: 'Architektur & Prototyping', desc: 'Festlegung von Navigationsstruktur, Datenflüssen und modularer Komponenten.' },
        { step: '03', title: 'Entwicklung & Optimierung', desc: 'Saubere Codierung mit Fokus auf Ladezeit, Barrierefreiheit und Core Web Vitals.' },
        { step: '04', title: 'Testing & Launch', desc: 'Gründliche Überprüfung auf allen Geräten, Sicherheits-Check und reibungsloser Livegang.' }
      ],
      en: [
        { step: '01', title: 'Analysis & Requirements', desc: 'Auditing project goals, target audience, and technical prerequisites.' },
        { step: '02', title: 'Architecture & Prototyping', desc: 'Defining navigation paths, data flows, and modular reusable components.' },
        { step: '03', title: 'Development & Optimization', desc: 'Clean coding focusing on page speed, accessibility, and Core Web Vitals.' },
        { step: '04', title: 'Testing & Deployment', desc: 'Rigorous cross-device quality assurance, security check, and seamless launch.' }
      ],
      ru: [
        { step: '01', title: 'Анализ и требования', desc: 'Определение целей, целевой аудитории и технических параметров.' },
        { step: '02', title: 'Архитектура', desc: 'Структура навигации, потоки данных и модульные компоненты.' },
        { step: '03', title: 'Разработка', desc: 'Чистый код с акцентом на скорость, удобство и Core Web Vitals.' },
        { step: '04', title: 'Тестирование и запуск', desc: 'Проверка на всех устройствах, тест безопасности и релиз.' }
      ],
      uk: [
        { step: '01', title: 'Аналіз та вимоги', desc: 'Визначення цілей, цільової аудиторії та технічних параметрів.' },
        { step: '02', title: 'Архітектура', desc: 'Структура навігації, потоки даних та модульні компоненти.' },
        { step: '03', title: 'Розробка', desc: 'Чистий код з акцентом на швидкість, зручність та Core Web Vitals.' },
        { step: '04', title: 'Тестування та запуск', desc: 'Перевірка на всіх пристроях, тест безпеки та реліз.' }
      ]
    },
    techStack: ['HTML5', 'CSS3 / Modern CSS', 'TypeScript / JavaScript', 'React / Next.js', 'WordPress', 'Elementor', 'Tailwind CSS'],
    faqs: [
      {
        q: {
          de: 'Wie lange dauert die Entwicklung einer professionellen Website?',
          en: 'How long does developing a professional website take?',
          ru: 'Сколько времени занимает разработка профессионального сайта?',
          uk: 'Скільки часу займає розробка професійного сайту?'
        },
        a: {
          de: 'Je nach Umfang und Anforderungen liegt der Zeitrahmen typischerweise zwischen 2 und 6 Wochen. Wir erstellen zu Projektbeginn einen verlässlichen Zeitplan.',
          en: 'Depending on scope and complexity, projects typically take 2 to 6 weeks. We establish a reliable schedule at kickoff.',
          ru: 'В зависимости от объема проект обычно занимает от 2 до 6 недель. В начале работы мы согласовываем четкий график.',
          uk: 'Залежно від обсягу проект зазвичай триває від 2 до 6 тижнів. На початку роботи ми узгоджуємо чіткий графік.'
        }
      },
      {
        q: {
          de: 'Kann ich Inhalte später selbst anpassen?',
          en: 'Can I edit content myself later?',
          ru: 'Смогу ли я сам редактировать контент позже?',
          uk: 'Чи зможу я сам редагувати контент пізніше?'
        },
        a: {
          de: 'Ja. Bei WordPress-Lösungen schulen wir Sie kurz ein, sodass Sie Texte, Bilder und Kontaktdaten eigenständig pflegen können. Alternativ übernehmen wir die laufende Betreuung.',
          en: 'Yes. With WordPress implementations, we provide straightforward guidance so you can easily update text, images, and contact details.',
          ru: 'Да. В решениях на WordPress вы сможете самостоятельно обновлять тексты и изображения, либо доверить поддержку нам.',
          uk: 'Так. У рішеннях на WordPress ви зможете самостійно оновлювати тексти та зображення, або довірити підтримку нам.'
        }
      }
    ],
    relatedServices: [
      { id: 'webdesign', name: { de: 'Webdesign', en: 'Web Design', ru: 'Веб-дизайн', uk: 'Веб-дизайн' }, path: '/webdesign/' },
      { id: 'wordpress', name: { de: 'WordPress Agentur', en: 'WordPress Agency', ru: 'Агентство WordPress', uk: 'Агентство WordPress' }, path: '/wordpress/' },
      { id: 'seo', name: { de: 'SEO Agentur', en: 'SEO Agency', ru: 'SEO-агентство', uk: 'SEO-агентство' }, path: '/seo/' }
    ]
  },
  {
    id: 'webdesign',
    pageId: 'webdesign',
    slug: 'webdesign',
    title: {
      de: 'Webdesign',
      en: 'Web Design',
      ru: 'Веб-дизайн',
      uk: 'Веб-дизайн'
    },
    shortDesc: {
      de: 'Ästhetisches, nutzerzentriertes Oberflächendesign für einen überzeugenden Markenauftritt.',
      en: 'Aesthetic, user-centric interface design crafted for an impactful brand presence.',
      ru: 'Эстетичный, удобный для пользователей дизайн для убедительного имиджа бренда.',
      uk: 'Естетичний, зручний для користувачів дизайн для переконливого іміджу бренду.'
    },
    heroH1: {
      de: 'Webdesign für einen modernen und überzeugenden Markenauftritt',
      en: 'Web Design for a Modern and Compelling Brand Presence',
      ru: 'Веб-дизайн для современного и убедительного бренда',
      uk: 'Веб-дизайн для сучасного та переконливого бренду'
    },
    problemTitle: {
      de: 'Der erste Eindruck entscheidet in Sekunden',
      en: 'First Impressions Form in Fractions of a Second',
      ru: 'Первое впечатление формируется за доли секунды',
      uk: 'Перше враження формується за частки секунди'
    },
    problemText: {
      de: 'Überladene Layouts, unklare Typografie und unübersichtliche Navigationen erzeugen sofortiges Misstrauen. Potenzielle Kunden verlassen die Seite und entscheiden sich für die Konkurrenz.',
      en: 'Cluttered layouts, ambiguous typography, and confusing navigation immediately erode user trust. Prospective clients leave to choose your competitors.',
      ru: 'Перегруженные макеты, невнятная типографика и запутанная навигация вызывают недоверие. Посетители уходят к конкурентам.',
      uk: 'Перевантажені макети, нечітка типографіка та заплутана навігація викликають недовіру. Відвідувачі йдуть до конкурентів.'
    },
    solutionTitle: {
      de: 'Klares, edles Design mit Fokus auf Benutzerführung',
      en: 'Crisp, Elegant Design Centered on Intuitive User Flow',
      ru: 'Чистый, благородный дизайн с понятной логикой',
      uk: 'Чистий, благородний дизайн зі зрозумілою логікою'
    },
    solutionText: {
      de: 'Webzech setzt auf weiße, aufgeräumte Hintergründe, großzügigen Weißraum, starke typografische Hierarchien und dezente Akzente. Jedes Element führt den Besucher zielgerichtet zur gewünschten Handlung.',
      en: 'Webzech emphasizes clean white canvases, generous whitespace, strong typographic hierarchy, and measured accents. Every element guides visitors toward clear action.',
      ru: 'Webzech делает ставку на чистый белый фон, простор, сильную типографику и точные акценты. Каждый элемент ведет посетителя к действию.',
      uk: 'Webzech робить ставку на чистий білий фон, простір, сильну типографіку та точні акценти. Кожен елемент веде відвідувача до дії.'
    },
    benefits: {
      de: [
        'Individuelle Gestaltung passend zu Ihrer Unternehmensidentität',
        'Strikte Ausrichtung an Mobile-First und Touch-Bedienung',
        'Hohe Benutzerfreundlichkeit (UX) und klare Benutzerführung (UI)',
        'Barrierearme Kontraste nach WCAG-Standards',
        'Vertrauensbildende visuelle Struktur ohne unnötigen Schnickschnack'
      ],
      en: [
        'Bespoke visual styling authentic to your corporate identity',
        'Strict mobile-first and intuitive touch ergonomics',
        'High usability (UX) paired with clean interface structure (UI)',
        'High-contrast, accessible layouts compliant with WCAG standards',
        'Trust-building visual structure free of unnecessary fluff'
      ],
      ru: [
        'Индивидуальный дизайн в соответствии с вашим брендом',
        'Фокус на Mobile-First и удобство на сенсорных экранах',
        'Удобный UX и продуманный современный UI',
        'Четкий контраст и соответствие стандартам доступности',
        'Структура, вызывающая доверие без лишнего визуального шума'
      ],
      uk: [
        'Індивідуальний дизайн відповідно до вашого бренду',
        'Фокус на Mobile-First та зручність на сенсорних екранах',
        'Зручний UX та продуманий сучасний UI',
        'Чіткий контраст та відповідність стандартам доступності',
        'Структура, що викликає довіру без зайвого візуального шуму'
      ]
    },
    processSteps: {
      de: [
        { step: '01', title: 'Zielgruppen- & UX-Briefing', desc: 'Ermittlung Ihrer Markenwerte, Wunschkunden und Konkurrenzumfeld.' },
        { step: '02', title: 'Wireframes & Struktur', desc: 'Skizzierung der Informationshierarchie und Seitenaufbauten.' },
        { step: '03', title: 'Visuelles UI-Design', desc: 'Ausarbeitung von Typografie, Farbwelt, Bildsprache und Mikro-Interaktionen.' },
        { step: '04', title: 'Feinschliff & Übergabe', desc: 'Prüfung aller Komponenten für die nahtlose technische Umsetzung.' }
      ],
      en: [
        { step: '01', title: 'Audience & UX Briefing', desc: 'Establishing your brand tone, target clientele, and competitive landscape.' },
        { step: '02', title: 'Wireframing & Structure', desc: 'Mapping information architecture and layout flows.' },
        { step: '03', title: 'Visual UI Craft', desc: 'Refining typography, color harmony, imagery, and micro-interactions.' },
        { step: '04', title: 'Refinement & Handoff', desc: 'Final polish of all components for pixel-perfect implementation.' }
      ],
      ru: [
        { step: '01', title: 'Бриф и анализ UX', desc: 'Определение ценностей бренда, аудитории и конкурентов.' },
        { step: '02', title: 'Вайрфреймы', desc: 'Проектирование информационной структуры страниц.' },
        { step: '03', title: 'UI-дизайн', desc: 'Типографика, цветовая гамма, визуал и микро-анимации.' },
        { step: '04', title: 'Передача в код', desc: 'Подготовка макетов к точной реализации в коде.' }
      ],
      uk: [
        { step: '01', title: 'Бриф та аналіз UX', desc: 'Визначення цінностей бренду, аудиторії та конкурентів.' },
        { step: '02', title: 'Вайрфрейми', desc: 'Проектування інформаційної структури сторінок.' },
        { step: '03', title: 'UI-дизайн', desc: 'Типографіка, колірна гама, візуал та мікро-анімації.' },
        { step: '04', title: 'Передача в код', desc: 'Підготовка макетів до точної реалізації в коді.' }
      ]
    },
    techStack: ['Figma', 'UI/UX Design', 'Design Systems', 'Responsive Typography', 'Design Tokens'],
    faqs: [
      {
        q: {
          de: 'Erhalte ich ein individuelles Design oder ein Standard-Template?',
          en: 'Do I get a custom design or an off-the-shelf template?',
          ru: 'Я получу индивидуальный дизайн или готовый шаблон?',
          uk: 'Я отримаю індивідуальний дизайн чи готовий шаблон?'
        },
        a: {
          de: 'Wir gestalten jedes Projekt maßgeschneidert auf Ihr Unternehmen. Keine 08/15-Kauf-Templates, sondern ein originärer, konsistenter Markenauftritt.',
          en: 'We craft every project custom-tailored to your company. No generic store templates, but an authentic, bespoke presence.',
          ru: 'Мы создаем каждый проект индивидуально под вашу компанию. Никаких шаблонных заготовок.',
          uk: 'Ми створюємо кожен проект індивідуально під вашу компанію. Жодних шаблонних заготовок.'
        }
      }
    ],
    relatedServices: [
      { id: 'webentwicklung', name: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' }, path: '/webentwicklung/' },
      { id: 'landingpages', name: { de: 'Landingpages', en: 'Landing Pages', ru: 'Лендинги', uk: 'Лендінги' }, path: '/landingpages/' }
    ]
  },
  {
    id: 'wordpress',
    pageId: 'wordpress',
    slug: 'wordpress',
    title: {
      de: 'WordPress Agentur',
      en: 'WordPress Agency',
      ru: 'WordPress Агентство',
      uk: 'WordPress Агентство'
    },
    shortDesc: {
      de: 'Professionelle WordPress- und Elementor-Websites mit maßgeschneiderten Layouts und einfacher Pflege.',
      en: 'Professional WordPress & Elementor websites featuring custom layouts and effortless maintenance.',
      ru: 'Профессиональные сайты на WordPress и Elementor с индивидуальным дизайном и легким управлением.',
      uk: 'Професійні сайти на WordPress та Elementor з індивідуальним дизайном та легким керуванням.'
    },
    heroH1: {
      de: 'WordPress Agentur für performante und flexible Websites',
      en: 'WordPress Agency for High-Performance, Flexible Websites',
      ru: 'Агентство WordPress для быстрых и гибких корпоративных сайтов',
      uk: 'Агентство WordPress для швидких та гнучких корпоративних сайтів'
    },
    problemTitle: {
      de: 'Warum viele WordPress-Seiten langsam und instabil sind',
      en: 'Why Many WordPress Sites Are Sluggish and Fragile',
      ru: 'Почему многие сайты на WordPress медленные и уязвимые',
      uk: 'Чому багато сайтів на WordPress повільні та вразливі'
    },
    problemText: {
      de: 'Zahllose überflüssige Plugins, überladene Themes und mangelnde Wartung machen WordPress-Websites oft träge, anfällig für Sicherheitslücken und schwer bedienbar.',
      en: 'Dozens of redundant plugins, bloated themes, and neglected updates frequently leave WordPress sites sluggish, prone to vulnerabilities, and difficult to manage.',
      ru: 'Десятки лишних плагинов, тяжелые темы и отсутствие обслуживания делают сайты на WordPress медленными и небезопасными.',
      uk: 'Десятки зайвих плагінів, важкі теми та відсутність обслуговування роблять сайти на WordPress повільними та небезпечними.'
    },
    solutionTitle: {
      de: 'Schlanke Architektur mit Elementor & maßgeschneidertem Code',
      en: 'Lean Architecture with Elementor & Tailored Engineering',
      ru: 'Оптимизированная архитектура с Elementor и чистым кодом',
      uk: 'Оптимізована архітектура з Elementor та чистим кодом'
    },
    solutionText: {
      de: 'Wir konfigurieren WordPress mit minimalem Plugin-Overhead, professionell eingerichtetem Elementor, striktem Sicherheitskonzept und optimiertem Caching. So bleibt Ihr Webauftritt schnell, sicher und für Sie spielend leicht zu pflegen.',
      en: 'We configure WordPress with minimal plugin overhead, professionally structured Elementor builds, rigorous security hardening, and tuned caching. Your site stays fast, safe, and effortless to update.',
      ru: 'Мы настраиваем WordPress с минимальным числом плагинов, правильной структурой Elementor, защитой и кэшированием. Ваш сайт работает стабильно и быстро.',
      uk: 'Ми налаштовуємо WordPress з мінімальною кількістю плагінів, правильною структурою Elementor, захистом та кешуванням. Ваш сайт працює стабільно та швидко.'
    },
    benefits: {
      de: [
        'Einfache Text- und Bildpflege ohne Programmierkenntnisse',
        'Optimierte Ladezeiten trotz vielseitiger Pagebuilder-Funktionen',
        'Strikte WordPress-Sicherheit & automatisierte Backups',
        'DSGVO-konforme Integration von Formularen und Analyse',
        'Zuverlässige Wartung und Unterstützung bei Updates'
      ],
      en: [
        'Effortless editing of text and images without coding experience',
        'Optimized page speed despite flexible page-builder capabilities',
        'Strict WordPress security hardening & automated backups',
        'GDPR-compliant integration of inquiry forms and analytics',
        'Dependable maintenance and update assistance'
      ],
      ru: [
        'Простое редактирование текстов и фото без знания кода',
        'Оптимизированная скорость страниц',
        'Надежная защита WordPress и резервные копии',
        'Соблюдение GDPR в формах связи',
        'Техническая поддержка и обновления'
      ],
      uk: [
        'Просте редагування текстів та фото без знання коду',
        'Оптимізована швидкість сторінок',
        'Надійний захист WordPress та резервні копії',
        'Дотримання вимог GDPR у формах зв\'язку',
        'Технічна підтримка та оновлення'
      ]
    },
    processSteps: {
      de: [
        { step: '01', title: 'Konfiguration & Härtung', desc: 'Saubere Grundinstallation, PHP-Optimierung und Sicherheitskonfiguration.' },
        { step: '02', title: 'Layout mit Elementor', desc: 'Erstellung individueller Vorlagen für Startseite, Leistungen und Kontakt.' },
        { step: '03', title: 'Performance & Caching', desc: 'Asset-Minifizierung, Bildkomprimierung und Caching-Feinschliff.' },
        { step: '04', title: 'Einweisung & Übergabe', desc: 'Verständliche Video- oder Live-Einweisung in Ihr neues Backend.' }
      ],
      en: [
        { step: '01', title: 'Setup & Hardening', desc: 'Clean installation, modern PHP configuration, and security baselines.' },
        { step: '02', title: 'Elementor Templating', desc: 'Crafting bespoke templates for homepage, services, and inquiries.' },
        { step: '03', title: 'Performance & Caching', desc: 'Asset minification, image compression, and server-side caching.' },
        { step: '04', title: 'Walkthrough & Handover', desc: 'Clear live or recorded orientation into managing your backend.' }
      ],
      ru: [
        { step: '01', title: 'Настройка и безопасность', desc: 'Чистая установка, оптимизация PHP и защита базы.' },
        { step: '02', title: 'Шаблоны в Elementor', desc: 'Индивидуальные шаблоны главной, услуг и контактов.' },
        { step: '03', title: 'Кэширование и скорость', desc: 'Сжатие изображений и настройка кэша.' },
        { step: '04', title: 'Обучение клиента', desc: 'Понятный инструктаж по работе с админ-панелью.' }
      ],
      uk: [
        { step: '01', title: 'Налаштування та безпека', desc: 'Чисте встановлення, оптимізація PHP та захист бази.' },
        { step: '02', title: 'Шаблони в Elementor', desc: 'Індивідуальні шаблони головної, послуг та контактів.' },
        { step: '03', title: 'Кешування та швидкість', desc: 'Стиснення зображень та налаштування кешу.' },
        { step: '04', title: 'Навчання клієнта', desc: 'Зрозумілий інструктаж по роботі з адмін-панеллю.' }
      ]
    },
    techStack: ['WordPress', 'Elementor Pro', 'PHP', 'MySQL', 'WP Rocket / Caching', 'Yoast / RankMath'],
    faqs: [
      {
        q: {
          de: 'Können Sie eine bestehende WordPress-Website überarbeiten (Redesign)?',
          en: 'Can you redesign an existing WordPress website?',
          ru: 'Можете ли вы обновить существующий сайт на WordPress (редизайн)?',
          uk: 'Чи можете ви оновити існуючий сайт на WordPress (редізайн)?'
        },
        a: {
          de: 'Ja. Wir analysieren Ihre aktuelle Seite, bereinigen Altlasten und überführen Struktur und Design in eine moderne, schnelle Lösung ohne Ranking-Verluste.',
          en: 'Yes. We audit your existing site, purge obsolete code, and migrate content smoothly into a fast modern layout with zero rank loss.',
          ru: 'Да. Мы проводим аудит текущего сайта, очищаем от мусора и переносим структуру в современный быстрый формат без потери позиций.',
          uk: 'Так. Ми проводимо аудит поточного сайту, очищаємо від сміття та переносимо структуру в сучасний швидкий формат без втрати позицій.'
        }
      }
    ],
    relatedServices: [
      { id: 'webentwicklung', name: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' }, path: '/webentwicklung/' },
      { id: 'seo', name: { de: 'SEO Agentur', en: 'SEO Agency', ru: 'SEO-агентство', uk: 'SEO-агентство' }, path: '/seo/' }
    ]
  },
  {
    id: 'landingpages',
    pageId: 'landingpages',
    slug: 'landingpages',
    title: {
      de: 'Landingpages',
      en: 'Landing Pages',
      ru: 'Лендинги',
      uk: 'Лендінги'
    },
    shortDesc: {
      de: 'Conversion-optimierte Zielseiten zur gezielten Lead-Generierung und Neukundengewinnung.',
      en: 'Conversion-engineered landing pages built for qualified lead generation and client acquisition.',
      ru: 'Конверсионные посадочные страницы для генерации лидов и привлечения клиентов.',
      uk: 'Конверсійні посадкові сторінки для генерації лідів та залучення клієнтів.'
    },
    heroH1: {
      de: 'Landingpage erstellen lassen für messbare Anfragen',
      en: 'Conversion-Focused Landing Pages Engineered for Qualified Inquiries',
      ru: 'Создание эффективных лендингов для получения заявок',
      uk: 'Створення ефективних лендінгів для отримання заявок'
    },
    problemTitle: {
      de: 'Warum Werbeklicks oft wirkungslos verpuffen',
      en: 'Why Ad Clicks Frequently Go to Waste',
      ru: 'Почему реклама часто не приносит клиентов',
      uk: 'Чому реклама часто не приносить клієнтів'
    },
    problemText: {
      de: 'Wenn bezahlte Anzeigen (Google Ads, Social Media) auf allgemeine Startseiten führen, finden Besucher nicht sofort das gesuchte Angebot. Die Folge: hohe Absprungraten und verschwendetes Marketingbudget.',
      en: 'When paid campaigns route to generic homepages, visitors fail to immediately find the specific offer. The result: high bounce rates and wasted marketing spend.',
      ru: 'Когда реклама ведет на общую главную страницу, посетители теряются и закрывают вкладку. Бюджет расходуется впустую.',
      uk: 'Коли реклама веде на загальну головну сторінку, відвідувачі губляться і закривають вкладку. Бюджет витрачається даремно.'
    },
    solutionTitle: {
      de: 'Laser-fokussierte Zielseiten mit klarer Handlungsaufforderung',
      en: 'Laser-Focused Pages with an Unmistakable Call-to-Action',
      ru: 'Целевые страницы с четким призывом к действию',
      uk: 'Цільові сторінки з чітким закликом до дії'
    },
    solutionText: {
      de: 'Eine Webzech-Landingpage hat genau ein klares Ziel: den Besucher von Ihrer Dienstleistung zu überzeugen und zur Kontaktaufnahme zu führen. Schnelle Ladezeiten, vertrauensbildende Beweise und reduzierte Barrieren sorgen für maximale Conversion-Raten.',
      en: 'A Webzech landing page has one unmistakable objective: to substantiate your service and convert visitors into active inquiries. Blazing speeds, proof elements, and friction-free forms maximize conversions.',
      ru: 'Лендинг от Webzech решает одну задачу: убедить посетителя и получить заявку. Высокая скорость и минимум барьеров дают результат.',
      uk: 'Лендінг від Webzech вирішує одне завдання: переконати відвідувача та отримати заявку. Висока швидкість та мінімум бар\'єрів дають результат.'
    },
    benefits: {
      de: [
        'Klarer Fokus auf eine Dienstleistung oder ein Angebot',
        'Optimiert für mobile Endgeräte (über 70 % des Ad-Traffics)',
        'Barrierearme Formulare und direkte Kontaktoptionen (WhatsApp, Telefon)',
        'Extrem kurze Ladezeiten zur Senkung des Absprungrisikos',
        'Perfekt vorbereitet für Google Ads und Social-Media-Kampagnen'
      ],
      en: [
        'Singular, laser focus on one specific core service or offer',
        'Engineered for mobile touchscreens (over 70% of ad traffic)',
        'Friction-free forms and direct channels (WhatsApp, click-to-call)',
        'Ultra-fast load speed eliminating visitor abandonment',
        'Seamless tracking readiness for Google Ads and paid campaigns'
      ],
      ru: [
        'Четкий фокус на одном предложении или услуге',
        'Оптимизация для мобильных устройств (более 70% рекламного трафика)',
        'Удобные формы и кнопки прямого контакта (WhatsApp, звонок)',
        'Мгновенная загрузка страниц',
        'Готовность к запуску рекламы в Google Ads'
      ],
      uk: [
        'Чіткий фокус на одній пропозиції чи послузі',
        'Оптимізація для мобільних пристроїв (понад 70% рекламного трафіку)',
        'Зручні форми та кнопки прямого контакту (WhatsApp, дзвінок)',
        'Миттєве завантаження сторінок',
        'Готовність до запуску реклами в Google Ads'
      ]
    },
    processSteps: {
      de: [
        { step: '01', title: 'Angebots- & Zielgruppenanalyse', desc: 'Herausarbeiten des zentralen Nutzens und der Einwände Ihrer Kunden.' },
        { step: '02', title: 'Conversion-Copywriting', desc: 'Strukturierung überzeugender Argumente und klarer Handlungsaufforderungen.' },
        { step: '03', title: 'Design & Programmierung', desc: 'Minimalistisches, ablenkungsfreies Layout mit Fokus auf den Conversion-Pfad.' },
        { step: '04', title: 'Tracking & Übergabe', desc: 'Einrichtung von Formular-Events und Bereitstellung für Ihre Werbekampagnen.' }
      ],
      en: [
        { step: '01', title: 'Offer & Audience Analysis', desc: 'Identifying your core value hook and neutralizing buyer hesitations.' },
        { step: '02', title: 'Conversion Copywriting', desc: 'Structuring compelling arguments and clear calls-to-action.' },
        { step: '03', title: 'Design & Code Implementation', desc: 'Distraction-free layout guiding users through the inquiry funnel.' },
        { step: '04', title: 'Event Tracking & Launch', desc: 'Configuring conversion triggers and deploying ready for traffic.' }
      ],
      ru: [
        { step: '01', title: 'Анализ предложения', desc: 'Выделение главного преимущества и отработка возражений.' },
        { step: '02', title: 'Копирайтинг', desc: 'Структура продающих аргументов и призывы к действию.' },
        { step: '03', title: 'Дизайн и код', desc: 'Лаконичный дизайн без отвлекающих элементов.' },
        { step: '04', title: 'Настройка конверсий', desc: 'Проверка форм и подготовка к запуску рекламы.' }
      ],
      uk: [
        { step: '01', title: 'Аналіз пропозиції', desc: 'Виділення головної переваги та відпрацювання заперечень.' },
        { step: '02', title: 'Копірайтинг', desc: 'Структура переконливих аргументів та заклики до дії.' },
        { step: '03', title: 'Дизайн і код', desc: 'Лаконічний дизайн без відволікаючих елементів.' },
        { step: '04', title: 'Налаштування конверсій', desc: 'Перевірка форм та підготовка до запуску реклами.' }
      ]
    },
    techStack: ['HTML5 / Modern JS', 'Tailwind CSS', 'Conversion Funnels', 'Event Tracking', 'Mobile Ergonomics'],
    faqs: [
      {
        q: {
          de: 'Was unterscheidet eine Landingpage von einer normalen Website?',
          en: 'What distinguishes a landing page from a regular website?',
          ru: 'Чем лендинг отличается от обычного сайта?',
          uk: 'Чим лендінг відрізняється від звичайного сайту?'
        },
        a: {
          de: 'Eine normale Website informiert umfassend über das gesamte Unternehmen. Eine Landingpage konzentriert sich strikt auf ein spezifisches Angebot und ein einziges Ziel: die qualifizierte Kontaktaufnahme ohne ablenkende Menüs.',
          en: 'A standard website provides broad company information. A landing page concentrates strictly on one offer with zero distraction, driving users to take one action.',
          ru: 'Обычный сайт рассказывает обо всей компании, а лендинг сфокусирован на одной услуге и ведет к заявке без лишних меню.',
          uk: 'Звичайний сайт розповідає про всю компанію, а лендінг сфокусований на одній послузі та веде до заявки без зайвих меню.'
        }
      }
    ],
    relatedServices: [
      { id: 'webentwicklung', name: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' }, path: '/webentwicklung/' },
      { id: 'seo', name: { de: 'SEO Agentur', en: 'SEO Agency', ru: 'SEO-агентство', uk: 'SEO-агентство' }, path: '/seo/' }
    ]
  },
  {
    id: 'seo',
    pageId: 'seo',
    slug: 'seo',
    title: {
      de: 'SEO Agentur',
      en: 'SEO Agency',
      ru: 'SEO Агентство',
      uk: 'SEO Агентство'
    },
    shortDesc: {
      de: 'Nachhaltige Suchmaschinenoptimierung für Google: technisch solide, inhaltlich stark und regional verankert.',
      en: 'Sustainable Google search optimization: technically sound, content-rich, and regionally anchored.',
      ru: 'Органическая поисковая оптимизация: техническая база, сильный контент и локальное присутствие.',
      uk: 'Органічна пошукова оптимізація: технічна база, сильний контент та локальна присутність.'
    },
    heroH1: {
      de: 'SEO Agentur für nachhaltige Sichtbarkeit bei Google',
      en: 'SEO Agency for Sustainable Search Visibility on Google',
      ru: 'SEO-агентство для стабильной видимости в поиске Google',
      uk: 'SEO-агентство для стабільної видимості в пошуку Google'
    },
    problemTitle: {
      de: 'Eine schöne Website nützt nichts, wenn sie niemand findet',
      en: 'A Beautiful Website Is Useless if Nobody Finds It',
      ru: 'Красивый сайт бесполезен, если его не находят клиенты',
      uk: 'Гарний сайт марний, якщо його не знаходять клієнти'
    },
    problemText: {
      de: 'Viele Unternehmen investieren in Webdesign, werden bei relevanten Google-Suchanfragen aber von Mitbewerbern überholt. Fehlende Keyword-Recherche, mangelhafte technische Grundlagen und unstrukturierte Inhalte verhindern gute Positionen.',
      en: 'Businesses invest heavily into aesthetics yet get outranked by competitors on high-intent search terms. Missing keyword strategy, weak technical foundations, and unstructured content choke visibility.',
      ru: 'Компании вкладывают в дизайн, но в поиске уступают конкурентам из-за отсутствия структуры, медленного сайта и слабой оптимизации.',
      uk: 'Компанії вкладають у дизайн, але в пошуку поступаються конкурентам через відсутність структури, повільний сайт та слабку оптимізацію.'
    },
    solutionTitle: {
      de: 'Fundierte SEO-Strategie statt unseriöser Schnellschüsse',
      en: 'Solid SEO Strategy Over Hollow Guarantees',
      ru: 'Основательная SEO-стратегия без пустых обещаний',
      uk: 'Ґрунтовна SEO-стратегія без порожніх обіцянок'
    },
    solutionText: {
      de: 'Wir versprechen keine unseriösen Wunder über Nacht. Wir optimieren das, worauf es Google und Nutzern ankommt: blitzschnelle Ladezeiten, saubere semantische HTML-Strukturen, strukturierte Daten (Schema.org), zielgerichtete Keyword-Zuordnung und lokale Auffindbarkeit.',
      en: 'We never make shady overnight promises. We engineer what Google and real users value: lightning speeds, clean semantic HTML, structured data (Schema.org), targeted intent mapping, and local search footprint.',
      ru: 'Мы не обещаем чудес за одну ночь. Мы настраиваем то, что ценит Google: скорость, структуру данных Schema.org, семантический HTML и правильный контент.',
      uk: 'Ми не обіцяємо чудес за одну ніч. Ми налаштовуємо те, що цінує Google: швидкість, структуру даних Schema.org, семантичний HTML та правильний контент.'
    },
    benefits: {
      de: [
        'Gründliche Recherche echter deutscher Suchbegriffe und Suchintentionen',
        'Vollständiges technisches SEO (Core Web Vitals, Crawlability, Sitemaps)',
        'Einbindung strukturierter Daten (JSON-LD nach Schema.org)',
        'Lokales SEO (Google Unternehmensprofil, regionale Relevanz)',
        'Transparente Beratung ohne automatisierte Massenreports'
      ],
      en: [
        'Rigorous research of genuine German search intent and query demand',
        'Comprehensive technical SEO (Core Web Vitals, crawlability, XML sitemaps)',
        'Implementation of structured data (JSON-LD via Schema.org)',
        'Local SEO configuration (Google Business Profile, regional relevance)',
        'Transparent consulting without automated, confusing jargon reports'
      ],
      ru: [
        'Анализ реальных поисковых запросов в Германии',
        'Комплексный технический аудит и Core Web Vitals',
        'Внедрение микроразметки Schema.org (JSON-LD)',
        'Локальное SEO для городов и регионов',
        'Прозрачные консультации без спам-отчетов'
      ],
      uk: [
        'Аналіз реальних пошукових запитів у Німеччині',
        'Комплексний технічний аудит та Core Web Vitals',
        'Впровадження мікророзмітки Schema.org (JSON-LD)',
        'Локальне SEO для міст та регіонів',
        'Прозорі консультації без спам-звітів'
      ]
    },
    processSteps: {
      de: [
        { step: '01', title: 'SEO-Audit & Keyword-Recherche', desc: 'Prüfung des Ist-Zustands und Identifikation relevanter Suchbegriffe.' },
        { step: '02', title: 'Technisches On-Page SEO', desc: 'Optimierung von Meta-Tags, Überschriftenhierarchien, URLs und Ladezeiten.' },
        { step: '03', title: 'Strukturierte Daten', desc: 'Hinterlegung von Schema.org-Auszeichnungen für Organisation, Services und Breadcrumbs.' },
        { step: '04', title: 'Lokale & inhaltliche Ausrichtung', desc: 'Optimierung von Leistungsseiten und regionalen Anknüpfungspunkten.' }
      ],
      en: [
        { step: '01', title: 'SEO Audit & Keyword Mapping', desc: 'Auditing existing standing and identifying high-intent commercial queries.' },
        { step: '02', title: 'Technical On-Page Setup', desc: 'Fine-tuning meta titles, heading trees, clean URLs, and load speeds.' },
        { step: '03', title: 'Structured Data Integration', desc: 'Embedding Schema.org schemas for Organization, Services, and Breadcrumbs.' },
        { step: '04', title: 'Local & Topical Architecture', desc: 'Connecting service hubs with targeted regional landing pages.' }
      ],
      ru: [
        { step: '01', title: 'SEO-аудит и ключи', desc: 'Анализ текущего сайта и подбор коммерческих поисковых запросов.' },
        { step: '02', title: 'On-Page оптимизация', desc: 'Заголовки, мета-теги, чистые URL и ускорение загрузки.' },
        { step: '03', title: 'Микроразметка Schema.org', desc: 'Настройка JSON-LD для организации, услуг и хлебных крошек.' },
        { step: '04', title: 'Локальное продвижение', desc: 'Связка услуг с региональными посадочными страницами.' }
      ],
      uk: [
        { step: '01', title: 'SEO-аудит та ключі', desc: 'Аналіз поточного сайту та підбір комерційних пошукових запитів.' },
        { step: '02', title: 'On-Page оптимізація', desc: 'Заголовки, мета-теги, чисті URL та прискорення завантаження.' },
        { step: '03', title: 'Мікророзмітка Schema.org', desc: 'Налаштування JSON-LD для організації, послуг та хлібних крихт.' },
        { step: '04', title: 'Локальне просування', desc: 'Зв\'язка послуг з регіональними посадковими сторінками.' }
      ]
    },
    techStack: ['Google Search Console', 'Schema.org JSON-LD', 'XML Sitemaps', 'Lighthouse / PageSpeed', 'Robots.txt Architecture'],
    faqs: [
      {
        q: {
          de: 'Garantieren Sie Platz 1 bei Google?',
          en: 'Do you guarantee rank #1 on Google?',
          ru: 'Гарантируете ли вы 1-е место в Google?',
          uk: 'Чи гарантуєте ви 1-ше місце в Google?'
        },
        a: {
          de: 'Nein, und jede Agentur, die das verspricht, ist unseriös. Die Algorithmen von Google werden von Google gesteuert. Was wir garantieren, ist handwerklich saubere, technisch einwandfreie und strategisch fundierte SEO-Arbeit nach aktuellen Best Practices.',
          en: 'No, and any agency claiming to guarantee #1 is misleading you. Google controls its own algorithms. What we guarantee is rigorous, technically sound, and strategic optimization following modern best practices.',
          ru: 'Нет, и любая компания, гарантирующая это, действует недобросовестно. Мы гарантируем качественную техническую оптимизацию и соблюдение всех требований Google.',
          uk: 'Ні, і будь-яка компанія, яка це гарантує, діє недобросовісно. Ми гарантуємо якісну технічну оптимізацію та дотримання всіх вимог Google.'
        }
      }
    ],
    relatedServices: [
      { id: 'webentwicklung', name: { de: 'Webentwicklung', en: 'Web Development', ru: 'Веб-разработка', uk: 'Веб-розробка' }, path: '/webentwicklung/' },
      { id: 'landingpages', name: { de: 'Landingpages', en: 'Landing Pages', ru: 'Лендинги', uk: 'Лендінги' }, path: '/landingpages/' }
    ]
  }
];

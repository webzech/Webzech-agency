# Webzech — Multi-Page Agency Website

Webzech is a premium, modern, responsive multi-page agency website built for **Webzech** (Founders: **Awais Abid** & **Werner Polatschek**).

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have Node.js (version 18 or higher) and npm installed on your machine.
- Node.js: `v18.x`, `v20.x`, or higher
- npm: `v9.x` or higher (or pnpm / bun)

Check your installed versions:
```bash
node -v
npm -v
```

---

### 2. Installation
Clone or download the project files into your desired directory, then open your terminal inside the project root and run:

```bash
npm install
```

This will install all necessary dependencies:
- React 19 & React DOM
- Vite
- Tailwind CSS
- Lucide React (Icons)
- Motion (Subtle UI animations)

---

### 3. Development Server
To start the local development server with instant hot-reloading:

```bash
npm run dev
```

The terminal will display the local development URL (typically `http://localhost:3000`). Open this link in your browser to view and test the website live.

---

### 4. Type Checking & Code Quality
To run TypeScript type checks across all files:

```bash
npm run lint
```

---

### 5. Production Build
To compile and bundle the website into an optimized, minified production build:

```bash
npm run build
```

This generates an ultra-fast, static distribution folder in `./dist/`.

---

### 6. Preview Production Build Locally
To test the built production files on a local server:

```bash
npm run preview
```

---

## 📁 Project Architecture

```text
/
├── index.html                  # HTML entry point with Schema.org JSON-LD & OpenGraph metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite + Tailwind configuration
├── public/                     # Static assets served at the root
│   ├── robots.txt              # Search engine crawler directives
│   ├── sitemap.xml             # Main sitemap index
│   ├── sitemap-de.xml          # German sitemap (23 core pages)
│   ├── sitemap-en.xml          # English sitemap
│   ├── sitemap-ru.xml          # Russian sitemap
│   └── sitemap-uk.xml          # Ukrainian sitemap
└── src/
    ├── main.tsx                # React application entry point
    ├── App.tsx                 # Main application component & router
    ├── index.css               # Global Tailwind CSS & typography rules
    ├── types/
    │   └── index.ts            # Type definitions for pages, services, regions, blog & FAQ
    ├── data/
    │   ├── translations.ts     # Complete multilingual dictionary (DE, EN, RU, UK) & contact info
    │   ├── servicesData.ts     # In-depth content for all 5 core services
    │   ├── regionsData.ts      # Unique content for all 8 German target locations
    │   ├── portfolioData.ts    # Real project case studies (SolaGrow, Vilshofen, PC-Service)
    │   ├── blogData.ts         # High-value SEO blog articles
    │   └── faqData.ts          # Categorized FAQs (Allgemein, Webentwicklung, WordPress, etc.)
    ├── components/
    │   ├── Header.tsx          # Sticky header with Mega Menu, language switcher & mobile drawer
    │   ├── Footer.tsx          # 5-column footer with contact details & legal links
    │   ├── Breadcrumbs.tsx     # Semantic accessible breadcrumbs with JSON-LD schema
    │   ├── ContactSection.tsx  # High-conversion contact form with validation & direct founder links
    │   └── CookieBanner.tsx    # GDPR/ePrivacy compliant cookie preferences manager
    ├── pages/
    │   ├── HomePage.tsx        # 10 comprehensive sections (Hero, Trust, Services, Process, etc.)
    │   ├── ServicePage.tsx     # Standardized template for Webentwicklung, Webdesign, WordPress, etc.
    │   ├── RegionsHubPage.tsx  # Service hub linking to all 8 regions
    │   ├── RegionPage.tsx      # Dedicated SEO landing pages for each location
    │   ├── PortfolioPage.tsx   # Filterable portfolio & modal detail views
    │   ├── AboutPage.tsx       # Founders (Awais Abid & Werner Polatschek), philosophy & process
    │   ├── BlogPage.tsx        # Category-filtered blog archive & article reader
    │   ├── FaqPage.tsx         # Searchable accordion FAQ
    │   ├── ContactPage.tsx     # Dedicated conversion contact page
    │   └── LegalPage.tsx       # Impressum, Datenschutz & Cookie-Einstellungen
    └── utils/
        ├── routing.ts          # Multi-language URL mapping & history navigation
        └── seoMeta.ts          # Dynamic document title & meta description updater
```

---

## ⚙️ Customization & Contact Details

All company information and contact links are centralized in:
`src/data/translations.ts`

```typescript
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
```
Updating these values automatically propagates to the Header, Footer, Contact page, Legal disclosures, and Schema.org structured data.

---

## 🌐 Deploying to Production

### Standard Web Hosting / Apache / Nginx (SPA Routing)
Because this is a Single Page Application (SPA) with clean URLs (e.g., `/webentwicklung/`, `/regionen/muenchen/`), configure your server to rewrite non-file requests to `index.html`.

#### For Apache (`.htaccess` in `dist/`):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### For Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### For Vercel / Netlify / Cloudflare Pages:
Build command: `npm run build`  
Publish directory: `dist`

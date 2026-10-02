import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { servicesData } from '../data/servicesData';
import { portfolioProjects } from '../data/portfolioData';
import { faqList } from '../data/faqData';
import { getPathForPage } from '../utils/routing';
import { 
  ArrowRight, 
  Code2, 
  Palette, 
  Layers, 
  MousePointerClick, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  ExternalLink,
  Laptop,
  Sparkles,
  Zap,
  Globe2
} from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
  onOpenProjectModal
}) => {
  const t = uiText[currentLang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const serviceIcons = [Code2, Palette, Layers, MousePointerClick, Search];

  const handleLink = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId, currentLang);
  };

  // Preview 5 FAQs for the homepage
  const previewFaqs = faqList.slice(0, 5);

  return (
    <div className="bg-white">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — HERO
          White background, large premium typography, clean browser mockup
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
        {/* Subtle background ambient mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-xs font-medium border border-slate-200/80">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.12]">
              {t.hero.h1}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={getPathForPage('kontakt', currentLang)}
                onClick={(e) => handleLink(e, 'kontakt')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getPathForPage('portfolio', currentLang)}
                onClick={(e) => handleLink(e, 'portfolio')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Bullets */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.trustBullet1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.trustBullet2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.trustBullet3}</span>
              </div>
            </div>
          </div>

          {/* Central Browser Frame & UI Preview Visual */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2 sm:p-3 transition-transform hover:scale-[1.01] duration-300">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/70 rounded-t-xl mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="px-4 py-1 text-[11px] font-mono text-slate-500 bg-white border border-slate-200/70 rounded-md max-w-xs w-full text-center truncate">
                  https://webzech.de
                </div>
                <div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Core Web Vitals 100/100
                </div>
              </div>

              {/* Showcase Image in Frame */}
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/project_solagrow_mockup_1790918770202.jpg"
                  alt="Webzech moderne Website-Entwicklung für Unternehmen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Glass Badges */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3.5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase text-blue-600">Reales Projekt</div>
                      <div className="text-xs font-bold text-slate-900">SolaGrow — Agrartechnologie & Solarenergie</div>
                    </div>
                    <button
                      onClick={() => onOpenProjectModal('solagrow')}
                      className="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — TRUST / INTRODUCTION
          Who we are, what we do, Germany-focused service, personal collaboration
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {t.trust.sectionTitle}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 text-balance">
                {t.trust.heading}
              </h2>
              <div className="pt-2">
                <a
                  href={getPathForPage('ueber-uns', currentLang)}
                  onClick={(e) => handleLink(e, 'ueber-uns')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>{t.trust.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>{t.trust.text1}</p>
              <p>{t.trust.text2}</p>
              
              {/* Trust Attributes */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="font-bold text-slate-900 text-xs">Deutschland-Fokus</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">DSGVO-konform, deutsche Server, regionale Verankerung.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="font-bold text-slate-900 text-xs">Persönlich & Direkt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direkter Kontakt mit Awais Abid & Werner Polatschek.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="font-bold text-slate-900 text-xs">Kein Template-Kauf</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Maßgeschneiderter Code & saubere Architektur.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — SERVICES
          Exactly 5 cards linking to each service page
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.servicesSection.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              {t.servicesSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const IconComp = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="group relative bg-white border border-slate-200/80 rounded-2xl p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title[currentLang]}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc[currentLang]}
                    </p>

                    {/* Key points */}
                    <ul className="space-y-1.5 pt-2 text-xs text-slate-500">
                      {service.benefits[currentLang].slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={getPathForPage(service.pageId, currentLang)}
                      onClick={(e) => handleLink(e, service.pageId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>{t.servicesSection.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: All-in-One / Custom Consultation */}
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {currentLang === 'de' ? 'Individuelle Projektberatung' : 'Custom Project Consultation'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLang === 'de'
                    ? 'Sie wissen noch nicht genau, welche Technologie oder welches Konzept für Ihr Vorhaben am besten passt? Wir analysieren Ihren Bedarf und beraten Sie offen und ehrlich.'
                    : 'Unsure which architecture or strategy best fits your enterprise? We analyze your goals and advise openly without locking you in.'}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href={getPathForPage('kontakt', currentLang)}
                  onClick={(e) => handleLink(e, 'kontakt')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>{currentLang === 'de' ? 'Erstgespräch anfragen' : 'Request Discovery Call'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — WHY WEBZECH
          6 strong points: Persönliche Zusammenarbeit, Moderne Websites,
          SEO von Anfang an, Mobile-first, Saubere Entwicklung, Langfristige Betreuung
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.whyWebzech.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              {t.whyWebzech.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyWebzech.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all space-y-2.5"
              >
                <div className="text-xs font-mono font-bold text-blue-600">
                  0{idx + 1}.
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 — PROCESS
          Animated timeline: 01 Erstgespräch, 02 Analyse, 03 Konzept,
          04 Design, 05 Entwicklung, 06 SEO, 07 Testing, 08 Launch, 09 Betreuung
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.process.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              {t.process.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {currentLang === 'de'
                ? 'Ein erprobter, transparenter Ablauf garantiert Termintreue und herausragende technische Qualität.'
                : 'A disciplined, transparent execution framework ensuring punctuality and technical excellence.'}
            </p>
          </div>

          {/* 9-Step Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.process.steps.map((st) => (
              <div
                key={st.num}
                className="relative p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-blue-300 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2 py-0.5 rounded-md">
                    {st.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 pt-1 group-hover:text-blue-600 transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 — PORTFOLIO
          Real projects: SolaGrow, Vilshofen Handwerk & Dienstleistung, PC Service Landingpage
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {t.portfolioSection.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
                {t.portfolioSection.title}
              </h2>
            </div>
            <div>
              <a
                href={getPathForPage('portfolio', currentLang)}
                onClick={(e) => handleLink(e, 'portfolio')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                <span>{t.portfolioSection.viewAll}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-800 border border-slate-200/80">
                      {proj.serviceType}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      {proj.industry[currentLang]}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {proj.summary[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenProjectModal(proj.id)}
                    className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.portfolioSection.viewProject}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 7 — FOUNDERS
          Awais Abid & Werner Polatschek
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.foundersSection.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              {t.foundersSection.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {t.foundersSection.text}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Founder 1: Awais Abid */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100 shadow-2xs">
                <img
                  src="/src/assets/images/founder_awais_abid_1790918740513.jpg"
                  alt="Awais Abid — Founder & Web Developer Webzech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Gründer & Entwickler
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Awais Abid
                </h3>
                <div className="text-xs font-medium text-slate-500">
                  {t.foundersSection.awaisTitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {t.foundersSection.awaisDesc}
                </p>
              </div>
            </div>

            {/* Founder 2: Werner Polatschek */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100 shadow-2xs">
                <img
                  src="/src/assets/images/founder_werner_polatschek_1790918754921.jpg"
                  alt="Werner Polatschek — Co-Founder & Business Partner Webzech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Co-Gründer & Projektpartner
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Werner Polatschek
                </h3>
                <div className="text-xs font-medium text-slate-500">
                  {t.foundersSection.wernerTitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {t.foundersSection.wernerDesc}
                </p>
              </div>
            </div>

          </div>

          <div className="text-center mt-10">
            <a
              href={getPathForPage('ueber-uns', currentLang)}
              onClick={(e) => handleLink(e, 'ueber-uns')}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>{t.foundersSection.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8 — SEO / DIGITAL PRESENCE
          Technical SEO, Mobile, Performance, Structured Data, Local SEO, Internal linking
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.seoSection.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1 text-balance">
              {t.seoSection.title}
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {t.seoSection.text}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.seoSection.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-blue-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <a
              href={getPathForPage('seo', currentLang)}
              onClick={(e) => handleLink(e, 'seo')}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>{t.seoSection.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 9 — FAQ PREVIEW
          Show 5 questions with interactive accordions
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.faqPreview.subtitle}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {t.faqPreview.title}
            </h2>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.question[currentLang]}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer[currentLang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <a
              href={getPathForPage('faq', currentLang)}
              onClick={(e) => handleLink(e, 'faq')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>{t.faqPreview.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 10 — FINAL CTA
          Large clean white / light-gray section
          NO PRICING PACKAGES! Direct personal consultation
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/80 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            {t.finalCta.title}
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          <div className="p-4 rounded-xl bg-white border border-slate-200 max-w-xl mx-auto text-xs text-slate-600 italic">
            {t.finalCta.pricingNotice}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => handleLink(e, 'kontakt')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.finalCta.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => handleLink(e, 'kontakt')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all cursor-pointer"
            >
              <span>{t.finalCta.ctaSecondary}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

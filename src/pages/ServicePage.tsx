import React, { useState } from 'react';
import { Language, PageId, ServiceItem } from '../types';
import { uiText } from '../data/translations';
import { portfolioProjects } from '../data/portfolioData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Zap, 
  ExternalLink,
  Laptop
} from 'lucide-react';

interface ServicePageProps {
  service: ServiceItem;
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  currentLang,
  onNavigate,
  onOpenProjectModal
}) => {
  const t = uiText[currentLang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleLink = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId, currentLang);
  };

  // Find relevant portfolio projects
  let relevantProjects = portfolioProjects;
  if (service.id === 'webentwicklung') {
    relevantProjects = portfolioProjects.filter(p => p.id === 'solagrow' || p.id === 'pc-service-landingpage');
  } else if (service.id === 'wordpress') {
    relevantProjects = portfolioProjects.filter(p => p.id === 'vilshofen-service');
  } else if (service.id === 'landingpages') {
    relevantProjects = portfolioProjects.filter(p => p.id === 'pc-service-landingpage');
  }

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title[currentLang],
    "description": service.shortDesc[currentLang],
    "provider": {
      "@type": "Organization",
      "name": "Webzech",
      "url": "https://webzech.de"
    },
    "areaServed": "DE"
  };

  return (
    <div className="bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[
            { label: t.common.breadcrumbsServices, pageId: 'webentwicklung' },
            { label: service.title[currentLang] }
          ]}
          onNavigate={onNavigate}
        />

        {/* 1. Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <span>{service.title[currentLang]}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {service.heroH1[currentLang]}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {service.shortDesc[currentLang]}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-3">
            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => handleLink(e, 'kontakt')}
              className="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>{t.common.discussProjectCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={getPathForPage('portfolio', currentLang)}
              onClick={(e) => handleLink(e, 'portfolio')}
              className="px-6 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>
        </section>

        {/* 2. Problem & 3. Solution (2-Column Grid) */}
        <section className="py-16 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Problem */}
            <div className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 space-y-3">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                {service.problemTitle[currentLang]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'de' ? 'Das typische Problem vieler Betriebe' : 'The Typical Challenge'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {service.problemText[currentLang]}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-3xl bg-blue-50/40 border border-blue-200/80 space-y-3">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                {service.solutionTitle[currentLang]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'de' ? 'Der professionelle Webzech-Ansatz' : 'The Webzech Approach'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {service.solutionText[currentLang]}
              </p>
            </div>

          </div>
        </section>

        {/* 4. Benefits */}
        <section className="py-16 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Ihre handfesten Vorteile' : 'Tangible Benefits'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? 'Was diese Leistung für Ihr Unternehmen leistet' : 'How This Drives Business Results'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits[currentLang].map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 flex items-start gap-3"
              >
                <div className="p-1 rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 font-medium leading-relaxed">
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Process */}
        <section className="py-16 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Vorgehensweise' : 'Process Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? 'Schritt für Schritt zum Ziel' : 'Step by Step Execution'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps[currentLang].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2.5"
              >
                <div className="text-xs font-mono font-bold text-white bg-blue-600 px-2 py-0.5 rounded w-fit">
                  {st.step}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technologies / Approach */}
        <section className="py-14 border-t border-slate-200 bg-slate-50/50 rounded-3xl p-6 sm:p-10 my-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Technologien & Standards' : 'Tech Stack & Quality Standards'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {currentLang === 'de' ? 'Geprüfte Werkzeuge für maximale Langlebigkeit' : 'Battle-Tested Modern Tools'}
            </h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {currentLang === 'de'
                ? 'Wir setzen auf bewährte, zukunftssichere Technologien ohne experimentelle Abhängigkeiten oder unnötigen Code-Ballast.'
                : 'We strictly utilize proven, durable tools with zero unnecessary third-party overhead.'}
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Relevant Real Portfolio Examples */}
        {relevantProjects.length > 0 && (
          <section className="py-16 border-t border-slate-200">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {currentLang === 'de' ? 'Praxisbeispiele' : 'Real Project Showcase'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
                {currentLang === 'de' ? 'Passende Projekte aus unserer Arbeit' : 'Related Case Studies'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-16/10 overflow-hidden bg-slate-100">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="text-[11px] font-semibold text-blue-600 uppercase">
                        {proj.serviceType}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {proj.summary[currentLang]}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenProjectModal(proj.id)}
                      className="w-full py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.portfolioSection.viewProject}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Service FAQ */}
        <section className="py-16 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? `Häufige Fragen zu ${service.title[currentLang]}` : `Frequently Asked Questions`}
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.q[currentLang]}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.a[currentLang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Related Services */}
        <section className="py-14 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-4">
            {t.common.relatedServicesTitle}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.relatedServices.map((rel) => (
              <a
                key={rel.id}
                href={rel.path}
                onClick={(e) => handleLink(e, rel.id as PageId)}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{rel.name[currentLang]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="mt-8 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {currentLang === 'de' ? `Bereit für Ihr Projekt im Bereich ${service.title[currentLang]}?` : `Ready to Launch Your ${service.title[currentLang]} Project?`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {currentLang === 'de'
              ? 'Jedes Projekt ist unterschiedlich. Wir besprechen Ihre Anforderungen persönlich und erstellen eine passende Lösung.'
              : 'Every project is unique. We discuss your technical prerequisites personally and prepare a tailored proposal.'}
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => handleLink(e, 'kontakt')}
              className="px-8 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              {t.common.discussProjectCta}
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

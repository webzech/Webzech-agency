import React, { useState } from 'react';
import { Language, PageId, RegionItem } from '../types';
import { uiText } from '../data/translations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Building2, 
  Users,
  Compass
} from 'lucide-react';

interface RegionPageProps {
  region: RegionItem;
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const RegionPage: React.FC<RegionPageProps> = ({
  region,
  currentLang,
  onNavigate
}) => {
  const t = uiText[currentLang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleLink = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId, currentLang);
  };

  // Structured Data Schema
  const regionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": region.heroTitle[currentLang],
    "description": region.heroSubtitle[currentLang],
    "provider": {
      "@type": "Organization",
      "name": "Webzech",
      "url": "https://webzech.de"
    },
    "areaServed": {
      "@type": region.id === 'bayern' ? "AdministrativeArea" : "City",
      "name": region.name
    }
  };

  return (
    <div className="bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[
            { label: t.common.breadcrumbsRegions, pageId: 'regionen' },
            { label: region.name }
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <section className="pt-8 pb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regionale Webentwicklung & SEO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {region.heroTitle[currentLang]}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {region.heroSubtitle[currentLang]}
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

        {/* Local Economic Profile & Target Audience (2 Columns) */}
        <section className="py-14 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>{currentLang === 'de' ? `Wirtschaftsstandort ${region.name}` : `Economic Profile: ${region.name}`}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'de' ? 'Regionale Besonderheiten & Anforderungen' : 'Regional Economic Context'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {region.profileText[currentLang]}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/30 border border-blue-200/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Users className="w-4 h-4 text-blue-600" />
                <span>{currentLang === 'de' ? 'Zielgruppe vor Ort' : 'Target Client Profile'}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'de' ? 'Für wen wir arbeiten' : 'Who We Support in this Region'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {region.targetAudience[currentLang]}
              </p>
            </div>

          </div>
        </section>

        {/* Key Features for this Region */}
        <section className="py-14 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Ihre Vorteile' : 'Key Advantages'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? `Webentwicklung abgestimmt auf Unternehmen in ${region.name}` : `Tailored for ${region.name}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {region.localFeatures[currentLang].map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5"
              >
                <div className="p-1 rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 font-medium leading-relaxed">
                  {feat}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Services for this Region */}
        <section className="py-14 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Empfohlene Leistungen' : 'Recommended Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? `Gefragte Lösungen für Betriebe in ${region.name}` : `Popular Services in ${region.name}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {region.recommendedServices.map((svc) => (
              <a
                key={svc.id}
                href={svc.path}
                onClick={(e) => handleLink(e, svc.id as PageId)}
                className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {svc.title[currentLang]}
                  </h4>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {currentLang === 'de' ? 'Mehr zur Leistung erfahren' : 'Explore service details'}
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Regional FAQ */}
        <section className="py-14 border-t border-slate-200">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {currentLang === 'de' ? `Häufige Fragen zu Projekten in ${region.name}` : `Questions regarding ${region.name}`}
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {region.faqs.map((faq, idx) => {
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

        {/* Regional Navigation Cross-Links */}
        <section className="py-10 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <a
              href={getPathForPage('regionen', currentLang)}
              onClick={(e) => handleLink(e, 'regionen')}
              className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
            >
              ← {t.common.backToOverview}: {t.nav.regions}
            </a>
          </div>
          <div>
            <span>Standortbezogene SEO & Webentwicklung ohne Büro-Zuschläge</span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-8 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {currentLang === 'de' ? `Planen Sie ein Webprojekt in ${region.name}?` : `Planning a Web Project in ${region.name}?`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {currentLang === 'de'
              ? 'Lassen Sie uns persönlich über Ihre Anforderungen sprechen. Wir erstellen eine fundierte Lösung ohne starre Paketpreise.'
              : 'Let us discuss your project. We prepare a tailored solution without rigid packages.'}
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

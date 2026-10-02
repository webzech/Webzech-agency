import React, { useState } from 'react';
import { Language, PageId, ProjectItem } from '../types';
import { uiText } from '../data/translations';
import { portfolioProjects } from '../data/portfolioData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { ArrowRight, CheckCircle2, X, ExternalLink, MapPin } from 'lucide-react';

interface PortfolioPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  selectedProjectId?: string | null;
  onSelectProject: (projectId: string | null) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  currentLang,
  onNavigate,
  selectedProjectId,
  onSelectProject
}) => {
  const t = uiText[currentLang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'webentwicklung' | 'wordpress' | 'landingpage'>('all');

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'webentwicklung') return p.id === 'solagrow';
    if (activeFilter === 'wordpress') return p.id === 'vilshofen-service';
    if (activeFilter === 'landingpage') return p.id === 'pc-service-landingpage';
    return true;
  });

  const activeProject = portfolioProjects.find(p => p.id === selectedProjectId);

  const filterTabs = [
    { id: 'all', label: t.common.filterAll },
    { id: 'webentwicklung', label: 'Webentwicklung' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'landingpage', label: 'Landingpages' }
  ];

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: t.nav.portfolio }]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <div className="pt-8 pb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <span>{currentLang === 'de' ? 'Praxisreferenzen' : 'Real Projects'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {currentLang === 'de'
              ? 'Ausgewählte Projekte & echte Arbeitsergebnisse'
              : 'Featured Projects & Verified Client Work'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {currentLang === 'de'
              ? 'Wir erfinden keine Phantasie-Ergebnisse oder Scheinreferenzen. Hier sehen Sie reale Arbeiten von Webzech für Kunden in Bayern und darüber hinaus.'
              : 'We strictly display verified client work. Explore selected implementations delivered by Webzech for regional and international businesses.'}
          </p>
        </div>

        {/* Filter Tabs (Functional segmented buttons with zero-pill metadata discipline) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit mb-12 border border-slate-200/80">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-900 border border-slate-200/80 shadow-2xs">
                    {proj.serviceType}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {proj.industry[currentLang]}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.summary[currentLang]}
                  </p>

                  {proj.location && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(proj.id)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-900 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t.portfolioSection.viewProject}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-150">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                    {activeProject.serviceType} · {activeProject.industry[currentLang]}
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {activeProject.name}
                  </h2>
                  {activeProject.location && (
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{activeProject.location}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onSelectProject(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="font-bold text-slate-900">
                    {t.portfolioSection.challenge}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {activeProject.challenge[currentLang]}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/40 border border-blue-200/70 space-y-2">
                  <div className="font-bold text-slate-900">
                    {t.portfolioSection.solution}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {activeProject.solution[currentLang]}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.portfolioSection.deliverables}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeProject.deliverables[currentLang].map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.portfolioSection.technologies}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((tItem) => (
                    <span
                      key={tItem}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px]"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {t.portfolioSection.closeModal}
                </button>
                <button
                  onClick={() => {
                    onSelectProject(null);
                    onNavigate('kontakt', currentLang);
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
                >
                  {t.common.discussProjectCta}
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {currentLang === 'de' ? 'Möchten Sie ein ähnliches Projekt umsetzen?' : 'Looking to Build a Similar Solution?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {currentLang === 'de'
              ? 'Wir beraten Sie persönlich zu Konzeption, Technik und Suchmaschinenoptimierung.'
              : 'We provide dedicated consultation on architecture, design, and search optimization.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('kontakt', currentLang)}
              className="px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
            >
              {t.common.discussProjectCta}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

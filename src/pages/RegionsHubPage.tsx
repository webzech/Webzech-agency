import React from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { regionsData } from '../data/regionsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface RegionsHubPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const RegionsHubPage: React.FC<RegionsHubPageProps> = ({
  currentLang,
  onNavigate
}) => {
  const t = uiText[currentLang];

  const handleLink = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId, currentLang);
  };

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: t.nav.regions }]}
          onNavigate={onNavigate}
        />

        {/* Hero Section */}
        <div className="pt-8 pb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Deutschlandweiter Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {currentLang === 'de' 
              ? 'Webentwicklung für Unternehmen in Deutschland' 
              : 'Web Development for Companies Across Germany'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {currentLang === 'de'
              ? 'Von unserem Heimatstandort in Bayern (Passau & Vilshofen) betreuen wir mittelständische Unternehmen, Dienstleister und innovative Betriebe in ganz Deutschland – persönlich, zuverlässig und mit handwerklich sauberem Code.'
              : 'From our roots in Bavaria (Passau & Vilshofen), we partner with medium-sized enterprises and ambitious companies across Germany.'}
          </p>
        </div>

        {/* 8 Regional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {regionsData.map((reg) => (
            <div
              key={reg.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {reg.id === 'bayern' ? 'Bundesland' : 'Standort'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {reg.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {reg.profileText[currentLang]}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={getPathForPage(reg.pageId, currentLang)}
                  onClick={(e) => handleLink(e, reg.pageId)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>{currentLang === 'de' ? `Webentwicklung in ${reg.name}` : `Explore ${reg.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Work Guarantee */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900">Keine Agentur-Aufschläge</div>
            <div className="text-xs text-slate-600">Sie zahlen für echte Entwicklungsarbeit und persönliche Beratung, nicht für teure Repräsentanzbüros.</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900">Erprobte Remote-Workflows</div>
            <div className="text-xs text-slate-600">Klare Videocalls, strukturierte Meilensteine und permanente Erreichbarkeit via Mail, Telefon und WhatsApp.</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900">Vor-Ort-Treffen in Bayern</div>
            <div className="text-xs text-slate-600">Für Kunden in Niederbayern, München und Umgebung sind persönliche Abstimmungen nach Absprache möglich.</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={getPathForPage('kontakt', currentLang)}
            onClick={(e) => handleLink(e, 'kontakt')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>{t.common.discussProjectCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { faqList } from '../data/faqData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { ChevronDown, Search, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  currentLang,
  onNavigate
}) => {
  const t = uiText[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const categories = [
    { id: 'all', label: t.common.filterAll },
    { id: 'allgemein', label: 'Allgemein' },
    { id: 'webentwicklung', label: 'Webentwicklung' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'landingpages', label: 'Landingpages' },
    { id: 'seo', label: 'SEO' },
    { id: 'zusammenarbeit', label: 'Zusammenarbeit' },
    { id: 'regionen', label: 'Regionen' }
  ];

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = item.question[currentLang].toLowerCase();
    const a = item.answer[currentLang].toLowerCase();
    const s = searchQuery.toLowerCase().trim();
    const matchesSearch = !s || q.includes(s) || a.includes(s);
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question[currentLang],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer[currentLang]
      }
    }))
  };

  return (
    <div className="bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: t.nav.faq }]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <div className="pt-8 pb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Häufige Fragen & Antworten</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {currentLang === 'de'
              ? 'Transparente Antworten auf alle wichtigen Fragen'
              : 'Frequently Asked Questions & Plain Answers'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {currentLang === 'de'
              ? 'Hier finden Sie ehrliche Antworten zu unserem Vorgehen, unseren Preisen, technischen Abläufen und der regionalen Zusammenarbeit.'
              : 'Honest, comprehensive answers regarding our process, pricing philosophy, technical methodology, and regional collaboration.'}
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-xl mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLang === 'de' ? 'Frage suchen (z.B. WordPress, Ablauf, Preise)...' : 'Search questions (e.g., WordPress, timeline)...'}
            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit mb-12 border border-slate-200/80 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="max-w-4xl space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs sm:text-sm text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
              {currentLang === 'de' ? 'Keine Fragen gefunden. Bitte ändern Sie Ihre Suchbegriffe.' : 'No questions found matching your search.'}
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = !!openIndices[idx];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-blue-600 uppercase mb-1">
                        {faq.categoryLabel[currentLang]}
                      </div>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question[currentLang]}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer[currentLang]}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Direct Contact Prompt if question not answered */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {currentLang === 'de' ? 'Ihre Frage war nicht dabei?' : 'Have a question not listed here?'}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {currentLang === 'de'
                ? 'Wir beantworten Ihre individuellen Fragen gerne persönlich und unverbindlich.'
                : 'We are glad to answer your questions personally and without obligation.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('kontakt', currentLang)}
            className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            {currentLang === 'de' ? 'Frage stellen' : 'Ask a question'}
          </button>
        </div>

      </div>
    </div>
  );
};

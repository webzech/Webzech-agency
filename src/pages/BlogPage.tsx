import React, { useState } from 'react';
import { Language, PageId, BlogItem } from '../types';
import { uiText } from '../data/translations';
import { blogArticles } from '../data/blogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { ArrowRight, Clock, User, X, BookOpen } from 'lucide-react';

interface BlogPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  selectedArticleId?: string | null;
  onSelectArticle: (articleId: string | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  currentLang,
  onNavigate,
  selectedArticleId,
  onSelectArticle
}) => {
  const t = uiText[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Webentwicklung', 'Local SEO', 'Landingpages', 'WordPress'];

  const filteredArticles = blogArticles.filter(art => {
    if (selectedCategory === 'all') return true;
    return art.category === selectedCategory;
  });

  const activeArticle = blogArticles.find(a => a.id === selectedArticleId);

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: t.nav.blog }]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <div className="pt-8 pb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEO & Web Content Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {currentLang === 'de'
              ? 'Wissen & Praxistipps rund um Webentwicklung und SEO'
              : 'Insights & Best Practices in Web Engineering and Search'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {currentLang === 'de'
              ? 'Fundierte Fachbeiträge aus unserem Agenturalltag: Keine KI-Floskeln, sondern praxisnahe Leitfäden für spürbar mehr digitale Reichweite und bessere Websites.'
              : 'Substantive technical guides from our agency practice: practical frameworks for superior digital visibility and website performance.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit mb-12 border border-slate-200/80 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? t.common.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Zero-Pill Metadata Discipline */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-blue-600">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {article.title[currentLang]}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.excerpt[currentLang]}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.author}</span>
                </div>
                <button
                  onClick={() => onSelectArticle(article.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>{t.common.readArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-6 animate-in zoom-in-95 duration-150">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-blue-600">{activeArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {activeArticle.title[currentLang]}
                  </h2>
                  <div className="text-xs text-slate-500">
                    Autor: <strong className="text-slate-800">{activeArticle.author}</strong> — Webzech
                  </div>
                </div>
                <button
                  onClick={() => onSelectArticle(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeArticle.content[currentLang].map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author & Consultation Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {currentLang === 'de' ? 'Haben Sie Fragen zu diesem Thema?' : 'Questions on this topic?'}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {currentLang === 'de'
                      ? 'Wir beraten Sie persönlich zu einer maßgeschneiderten Umsetzung.'
                      : 'We are pleased to consult with you on tailored execution.'}
                  </div>
                </div>
                <button
                  onClick={() => {
                    onSelectArticle(null);
                    onNavigate('kontakt', currentLang);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  {t.common.discussProjectCta}
                </button>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onSelectArticle(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {currentLang === 'de' ? 'Fenster schließen' : 'Close'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

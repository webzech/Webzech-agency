import React, { useState, useEffect, useRef } from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { getPathForPage } from '../utils/routing';
import { servicesData } from '../data/servicesData';
import { regionsData } from '../data/regionsData';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Palette, 
  Layers, 
  MousePointerClick, 
  Search, 
  MapPin, 
  ArrowRight,
  Globe
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  currentLang,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [regionsMenuOpen, setRegionsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const regionsMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = uiText[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (regionsMenuRef.current && !regionsMenuRef.current.contains(e.target as Node)) {
        setRegionsMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceIcons = [Code2, Palette, Layers, MousePointerClick, Search];

  const handleNavClick = (pageId: PageId) => {
    setMegaMenuOpen(false);
    setRegionsMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageId, currentLang);
  };

  const handleLangChange = (newLang: Language) => {
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(currentPage, newLang);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'de', label: 'DE', flag: 'Deutsch' },
    { code: 'en', label: 'EN', flag: 'English' },
    { code: 'ru', label: 'RU', flag: 'Русский' },
    { code: 'uk', label: 'UK', flag: 'Українська' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled 
          ? 'py-3 border-b border-slate-200/80 shadow-xs' 
          : 'py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Single Text Element per Top Bar Contract) */}
          <a
            href={getPathForPage('home', currentLang)}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Webzech Startseite"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg tracking-tight shadow-xs transition-transform group-hover:scale-105">
              W
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Webzech
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Hauptnavigation">
            
            {/* Leistungen with Mega Menu */}
            <div 
              className="relative" 
              ref={megaMenuRef}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  ['webentwicklung', 'webdesign', 'wordpress', 'landingpages', 'seo'].includes(currentPage)
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
                aria-expanded={megaMenuOpen}
              >
                <span>{t.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${megaMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {/* Clean Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-136 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-4 grid grid-cols-1 gap-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t.nav.services}</span>
                    <button
                      onClick={() => handleNavClick('webentwicklung')}
                      className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                    >
                      {t.nav.allServices}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {servicesData.map((service, idx) => {
                    const IconComponent = serviceIcons[idx % serviceIcons.length];
                    return (
                      <a
                        key={service.id}
                        href={getPathForPage(service.pageId, currentLang)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.pageId);
                        }}
                        className={`flex items-start gap-3.5 p-3 rounded-xl transition-all cursor-pointer ${
                          currentPage === service.pageId ? 'bg-blue-50/70 border border-blue-100' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          currentPage === service.pageId ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                            {service.title[currentLang]}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {service.shortDesc[currentLang]}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Regionen Dropdown */}
            <div 
              className="relative" 
              ref={regionsMenuRef}
              onMouseEnter={() => setRegionsMenuOpen(true)}
              onMouseLeave={() => setRegionsMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setRegionsMenuOpen(!regionsMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  currentPage.startsWith('region')
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
                aria-expanded={regionsMenuOpen}
              >
                <span>{t.nav.regions}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${regionsMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {regionsMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="col-span-2 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Standorte in Deutschland</span>
                    <button
                      onClick={() => handleNavClick('regionen')}
                      className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                    >
                      {t.nav.allRegions}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {regionsData.map((reg) => (
                    <a
                      key={reg.id}
                      href={getPathForPage(reg.pageId, currentLang)}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(reg.pageId);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        currentPage === reg.pageId 
                          ? 'bg-blue-50 text-blue-600 font-semibold' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{reg.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a
              href={getPathForPage('portfolio', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('portfolio');
              }}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'portfolio' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t.nav.portfolio}
            </a>

            <a
              href={getPathForPage('ueber-uns', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('ueber-uns');
              }}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'ueber-uns' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t.nav.about}
            </a>

            <a
              href={getPathForPage('blog', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('blog');
              }}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'blog' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t.nav.blog}
            </a>

            <a
              href={getPathForPage('faq', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('faq');
              }}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'faq' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Actions: Language Selector + Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Language Selector: DE | EN | RU | UK */}
            <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50/80">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangChange(l.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currentLang === l.code
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={l.flag}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('kontakt');
              }}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs hover:shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Mobile Language Switcher */}
            <div className="flex items-center border border-slate-200 rounded-md p-0.5 bg-slate-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangChange(l.code)}
                  className={`px-1.5 py-0.5 text-xs font-medium rounded ${
                    currentLang === l.code ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-hidden cursor-pointer"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'home' ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
              }`}
            >
              Startseite
            </button>

            {/* Mobile Services Accordion */}
            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                {t.nav.services}
              </div>
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNavClick(s.pageId)}
                  className={`block w-full text-left px-3 py-1.5 text-sm rounded-lg ${
                    currentPage === s.pageId ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-600'
                  }`}
                >
                  {s.title[currentLang]}
                </button>
              ))}
            </div>

            {/* Mobile Regions Accordion */}
            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                {t.nav.regions}
              </div>
              <button
                onClick={() => handleNavClick('regionen')}
                className={`block w-full text-left px-3 py-1.5 text-sm font-semibold rounded-lg ${
                  currentPage === 'regionen' ? 'text-blue-600 bg-blue-50' : 'text-blue-600'
                }`}
              >
                {t.nav.allRegions}
              </button>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {regionsData.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleNavClick(r.pageId)}
                    className={`text-left px-3 py-1 text-xs rounded-md ${
                      currentPage === r.pageId ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-600'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Pages */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <button
                onClick={() => handleNavClick('portfolio')}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'portfolio' ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => handleNavClick('ueber-uns')}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'ueber-uns' ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'blog' ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
              >
                {t.nav.blog}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'faq' ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
              >
                {t.nav.faq}
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => handleNavClick('kontakt')}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-xs"
            >
              {t.nav.ctaButton}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

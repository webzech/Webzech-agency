import React from 'react';
import { Language, PageId } from '../types';
import { uiText, siteConfig } from '../data/translations';
import { getPathForPage } from '../utils/routing';
import { Mail, Phone, MessageSquare, Linkedin, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  currentPage: PageId;
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  onOpenCookies: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage,
  currentLang,
  onNavigate,
  onOpenCookies
}) => {
  const t = uiText[currentLang];

  const handleLink = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId, currentLang);
  };

  const handleLang = (l: Language) => {
    onNavigate(currentPage, l);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Webzech Brand & Mission */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg tracking-tight">
                W
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Webzech
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              {t.footer.desc}
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Passau & Vilshofen, Bayern</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Bundesweiter Service für ganz Deutschland
              </div>
            </div>
          </div>

          {/* Col 2: Leistungen */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getPathForPage('webentwicklung', currentLang)}
                  onClick={(e) => handleLink(e, 'webentwicklung')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Webentwicklung
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('webdesign', currentLang)}
                  onClick={(e) => handleLink(e, 'webdesign')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Webdesign
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('wordpress', currentLang)}
                  onClick={(e) => handleLink(e, 'wordpress')}
                  className="hover:text-blue-600 transition-colors"
                >
                  WordPress Agentur
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('landingpages', currentLang)}
                  onClick={(e) => handleLink(e, 'landingpages')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Landingpages
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('seo', currentLang)}
                  onClick={(e) => handleLink(e, 'seo')}
                  className="hover:text-blue-600 transition-colors"
                >
                  SEO Agentur
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Regionen */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.regionsTitle}
            </h4>
            <ul className="space-y-2 text-xs grid grid-cols-2 gap-x-2">
              <li>
                <a href={getPathForPage('region-bayern', currentLang)} onClick={(e) => handleLink(e, 'region-bayern')} className="hover:text-blue-600">Bayern</a>
              </li>
              <li>
                <a href={getPathForPage('region-passau', currentLang)} onClick={(e) => handleLink(e, 'region-passau')} className="hover:text-blue-600">Passau</a>
              </li>
              <li>
                <a href={getPathForPage('region-vilshofen', currentLang)} onClick={(e) => handleLink(e, 'region-vilshofen')} className="hover:text-blue-600">Vilshofen</a>
              </li>
              <li>
                <a href={getPathForPage('region-muenchen', currentLang)} onClick={(e) => handleLink(e, 'region-muenchen')} className="hover:text-blue-600">München</a>
              </li>
              <li>
                <a href={getPathForPage('region-berlin', currentLang)} onClick={(e) => handleLink(e, 'region-berlin')} className="hover:text-blue-600">Berlin</a>
              </li>
              <li>
                <a href={getPathForPage('region-hamburg', currentLang)} onClick={(e) => handleLink(e, 'region-hamburg')} className="hover:text-blue-600">Hamburg</a>
              </li>
              <li>
                <a href={getPathForPage('region-frankfurt', currentLang)} onClick={(e) => handleLink(e, 'region-frankfurt')} className="hover:text-blue-600">Frankfurt</a>
              </li>
              <li>
                <a href={getPathForPage('region-duesseldorf', currentLang)} onClick={(e) => handleLink(e, 'region-duesseldorf')} className="hover:text-blue-600">Düsseldorf</a>
              </li>
            </ul>
            <div className="mt-3">
              <a
                href={getPathForPage('regionen', currentLang)}
                onClick={(e) => handleLink(e, 'regionen')}
                className="text-[11px] font-semibold text-blue-600 hover:underline"
              >
                {t.nav.allRegions} →
              </a>
            </div>
          </div>

          {/* Col 4: Unternehmen */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getPathForPage('ueber-uns', currentLang)}
                  onClick={(e) => handleLink(e, 'ueber-uns')}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('portfolio', currentLang)}
                  onClick={(e) => handleLink(e, 'portfolio')}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('blog', currentLang)}
                  onClick={(e) => handleLink(e, 'blog')}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('faq', currentLang)}
                  onClick={(e) => handleLink(e, 'faq')}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a
                  href={getPathForPage('kontakt', currentLang)}
                  onClick={(e) => handleLink(e, 'kontakt')}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontakt & Direkte Kanäle */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" />
                  <span>LinkedIn Profil</span>
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Gründer: Awais Abid & Werner Polatschek</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal + Language Selector + Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} Webzech. {t.footer.allRightsReserved}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={getPathForPage('impressum', currentLang)}
              onClick={(e) => handleLink(e, 'impressum')}
              className="hover:text-blue-600 transition-colors"
            >
              {t.footer.legalImpressum}
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={getPathForPage('datenschutz', currentLang)}
              onClick={(e) => handleLink(e, 'datenschutz')}
              className="hover:text-blue-600 transition-colors"
            >
              {t.footer.legalPrivacy}
            </a>
            <span className="text-slate-300">·</span>
            <button
              onClick={onOpenCookies}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {t.footer.legalCookies}
            </button>
          </div>

          {/* Footer Language Selector */}
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span>Sprache:</span>
            <button
              onClick={() => handleLang('de')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${currentLang === 'de' ? 'font-bold text-blue-600' : 'hover:text-slate-900'}`}
            >
              DE
            </button>
            <span>/</span>
            <button
              onClick={() => handleLang('en')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${currentLang === 'en' ? 'font-bold text-blue-600' : 'hover:text-slate-900'}`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => handleLang('ru')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${currentLang === 'ru' ? 'font-bold text-blue-600' : 'hover:text-slate-900'}`}
            >
              RU
            </button>
            <span>/</span>
            <button
              onClick={() => handleLang('uk')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${currentLang === 'uk' ? 'font-bold text-blue-600' : 'hover:text-slate-900'}`}
            >
              UK
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

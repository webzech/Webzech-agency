import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { parsePath, getPathForPage } from './utils/routing';
import { updateDocumentMeta } from './utils/seoMeta';
import { servicesData } from './data/servicesData';
import { regionsData } from './data/regionsData';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { RegionsHubPage } from './pages/RegionsHubPage';
import { RegionPage } from './pages/RegionPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentLang, setCurrentLang] = useState<Language>('de');

  // Modals & sub-states
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  // Initialize from browser URL
  useEffect(() => {
    const handleUrlChange = () => {
      const parsed = parsePath(window.location.pathname);
      setCurrentPage(parsed.pageId);
      setCurrentLang(parsed.lang);
      updateDocumentMeta(parsed.pageId, parsed.lang);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Navigation handler
  const handleNavigate = (pageId: PageId, lang?: Language) => {
    const targetLang = lang || currentLang;
    const targetPath = getPathForPage(pageId, targetLang);

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    setCurrentPage(pageId);
    setCurrentLang(targetLang);
    updateDocumentMeta(pageId, targetLang);

    // Close any opened modals
    setSelectedProjectId(null);
    setSelectedArticleId(null);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find if current page is a service page
  const currentService = servicesData.find(s => s.pageId === currentPage);

  // Find if current page is a regional page
  const currentRegion = regionsData.find(r => r.pageId === currentPage);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header with Mega Menu */}
      <Header
        currentPage={currentPage}
        currentLang={currentLang}
        onNavigate={handleNavigate}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {/* 1. Home */}
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenProjectModal={(id) => {
              setSelectedProjectId(id);
              handleNavigate('portfolio', currentLang);
            }}
          />
        )}

        {/* 2-6. Service Pages */}
        {currentService && (
          <ServicePage
            service={currentService}
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenProjectModal={(id) => {
              setSelectedProjectId(id);
              handleNavigate('portfolio', currentLang);
            }}
          />
        )}

        {/* 7. Regions Hub */}
        {currentPage === 'regionen' && (
          <RegionsHubPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {/* 8-15. Dedicated Regional SEO Pages */}
        {currentRegion && (
          <RegionPage
            region={currentRegion}
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {/* 16. Portfolio */}
        {currentPage === 'portfolio' && (
          <PortfolioPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
          />
        )}

        {/* 17. Über uns */}
        {currentPage === 'ueber-uns' && (
          <AboutPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {/* 18. Blog */}
        {currentPage === 'blog' && (
          <BlogPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            selectedArticleId={selectedArticleId}
            onSelectArticle={setSelectedArticleId}
          />
        )}

        {/* 19. FAQ */}
        {currentPage === 'faq' && (
          <FaqPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {/* 20. Kontakt */}
        {currentPage === 'kontakt' && (
          <ContactPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {/* 21-23. Legal Pages: Impressum, Datenschutz, Cookies */}
        {(currentPage === 'impressum' || currentPage === 'datenschutz' || currentPage === 'cookies') && (
          <LegalPage
            pageId={currentPage}
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenCookieModal={() => setCookieModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenCookies={() => setCookieModalOpen(true)}
      />

      {/* Cookie Consent Banner & Settings Modal */}
      <CookieBanner
        currentLang={currentLang}
        isOpen={cookieModalOpen}
        onClose={() => setCookieModalOpen(false)}
      />

    </div>
  );
}

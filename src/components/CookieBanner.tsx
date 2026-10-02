import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { uiText } from '../data/translations';
import { Shield, Check, X, Settings2 } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

interface CookieBannerProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  currentLang,
  isOpen,
  onClose
}) => {
  const t = uiText[currentLang].cookies;
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('webzech_cookie_consent');
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalytics(parsed.analytics);
        setMarketing(parsed.marketing);
      } catch (err) {
        setShowBanner(true);
      }
    }
  }, []);

  // When isOpen prop changes (e.g. clicked from footer)
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const saveConsent = (analyticsVal: boolean, marketingVal: boolean) => {
    const consent: CookiePreferences = {
      essential: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('webzech_cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowModal(false);
    onClose();
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    saveConsent(true, true);
  };

  const handleDeclineOptional = () => {
    setAnalytics(false);
    setMarketing(false);
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analytics, marketing);
  };

  return (
    <>
      {/* Floating Bottom Banner if no decision made yet */}
      {showBanner && !showModal && (
        <aside 
          aria-label={t.bannerTitle}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-5 animate-in slide-in-from-bottom duration-300"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                {t.bannerTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.bannerText}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  {t.acceptAll}
                </button>
                <button
                  onClick={handleDeclineOptional}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  {t.declineOptional}
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>{t.settingsTitle}</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Detailed Cookie Settings Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-5 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 id="cookie-settings-title" className="text-base font-bold text-slate-900">
                  {t.settingsTitle}
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  onClose();
                }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 text-xs">
              {/* Essential */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{t.essentialTitle}</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    {t.essentialDesc}
                  </p>
                </div>
                <span className="shrink-0 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded border border-emerald-200">
                  {t.alwaysActive}
                </span>
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.analyticsTitle}
                  </div>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    {t.analyticsDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.marketingTitle}
                  </div>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    {t.marketingDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={handleDeclineOptional}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                {t.declineOptional}
              </button>
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {t.saveSelected}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

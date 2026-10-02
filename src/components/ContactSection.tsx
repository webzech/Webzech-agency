import React, { useState } from 'react';
import { Language } from '../types';
import { uiText, siteConfig } from '../data/translations';
import { Mail, Phone, MessageSquare, Linkedin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  preselectedService?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  preselectedService,
  isStandalonePage = false
}) => {
  const t = uiText[currentLang].contactForm;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || 'webentwicklung');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(currentLang === 'de' ? 'Bitte füllen Sie alle mit * markierten Pflichtfelder aus.' : 'Please fill in all mandatory fields (*).');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg(currentLang === 'de' ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' : 'Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const servicesOptions = [
    { value: 'webentwicklung', label: currentLang === 'de' ? 'Webentwicklung' : 'Web Development' },
    { value: 'webdesign', label: currentLang === 'de' ? 'Webdesign' : 'Web Design' },
    { value: 'wordpress', label: 'WordPress & Elementor' },
    { value: 'landingpages', label: 'Conversion Landingpages' },
    { value: 'seo', label: 'SEO & Google Sichtbarkeit' },
    { value: 'beratung', label: currentLang === 'de' ? 'Allgemeine Projektberatung' : 'General Consulting' }
  ];

  return (
    <section className={`relative ${isStandalonePage ? 'pt-8 pb-20' : 'py-20'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>{currentLang === 'de' ? 'Kontakt & Projektanfrage' : 'Contact & Inquiry'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            {currentLang === 'de' ? 'Erzählen Sie uns von Ihrem Projekt' : 'Tell Us About Your Project'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {currentLang === 'de' 
              ? 'Jedes Projekt ist unterschiedlich. Wir besprechen Ihre Anforderungen persönlich und erstellen eine passgenaue Lösung – unverbindlich und transparent.'
              : 'Every project is unique. We discuss your technical and commercial requirements personally to craft an accurate solution.'}
          </p>
        </div>

        {/* 2-Columns Layout: Form (Left) & Direct Founder Contacts (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.successMessage}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    {currentLang === 'de' ? 'Weitere Nachricht senden' : 'Send another inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
                {errorMsg && (
                  <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t.companyPlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.serviceLabel}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer"
                    >
                      {servicesOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Website */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.websiteLabel}
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder={t.websitePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? t.submitting : t.submitButton}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="mt-3 text-[11px] text-slate-500 leading-normal">
                    {t.privacyNote}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.directContactTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.directContactSubtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-400 font-medium">E-Mail Adresse</div>
                    <div className="font-semibold text-slate-900 truncate">{siteConfig.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Telefon / Direktkontakt</div>
                    <div className="font-semibold text-slate-900">{siteConfig.phone}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
                >
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">WhatsApp Direktchat</div>
                    <div className="font-semibold text-emerald-700">Nachricht via WhatsApp</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Netzwerk</div>
                    <div className="font-semibold text-slate-900">Webzech auf LinkedIn</div>
                  </div>
                </a>
              </div>

              {/* Guarantees & Trust Badges */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.guaranteeText}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% vertrauliche Behandlung & deutsche Server</span>
                </div>
              </div>
            </div>

            {/* Quote / Founders Note */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <div className="text-xs text-slate-600 italic leading-relaxed">
                „Wir glauben an Partnerschaften auf Augenhöhe. Egal ob Sie eine neue Website planen oder eine bestehende Präsenz modernisieren möchten: Wir freuen uns auf das Gespräch.“
              </div>
              <div className="mt-3 text-[11px] font-semibold text-slate-900">
                Awais Abid & Werner Polatschek <span className="font-normal text-slate-500">— Gründer von Webzech</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

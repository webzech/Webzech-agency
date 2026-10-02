import React from 'react';
import { Language, PageId } from '../types';
import { uiText, siteConfig } from '../data/translations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Shield, FileText, Cookie, Settings2 } from 'lucide-react';

interface LegalPageProps {
  pageId: 'impressum' | 'datenschutz' | 'cookies';
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
  onOpenCookieModal: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  pageId,
  currentLang,
  onNavigate,
  onOpenCookieModal
}) => {
  const t = uiText[currentLang];

  const titles = {
    impressum: {
      de: 'Impressum',
      en: 'Imprint / Legal Notice',
      ru: 'Выходные данные (Impressum)',
      uk: 'Вихідні дані (Impressum)'
    },
    datenschutz: {
      de: 'Datenschutzerklärung',
      en: 'Privacy Policy',
      ru: 'Политика конфиденциальности',
      uk: 'Політика конфіденційності'
    },
    cookies: {
      de: 'Cookie-Richtlinie & Einstellungen',
      en: 'Cookie Policy & Preferences',
      ru: 'Файлы Cookie и настройки',
      uk: 'Файли Cookie та налаштування'
    }
  };

  const currentTitle = titles[pageId][currentLang];

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: currentTitle }]}
          onNavigate={onNavigate}
        />

        <div className="pt-8 pb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {currentTitle}
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Stand: 01. Oktober 2026
          </p>
        </div>

        {/* ── IMPRESSUM ── */}
        {pageId === 'impressum' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Angaben gemäß § 5 TMG</h2>
              <p className="font-semibold text-slate-800">Webzech</p>
              <p>Awais Abid & Werner Polatschek GbR (i.G.)</p>
              <p>Standort: Bayern, Deutschland</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Vertretungsberechtigte Gesellschafter</h2>
              <p>Awais Abid (Founder / Web Developer / Web Designer)</p>
              <p>Werner Polatschek (Co-Founder / Business & Project Partner)</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Kontakt</h2>
              <p>E-Mail: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></p>
              <p>E-Mail Founder: <a href={`mailto:${siteConfig.foundersEmail}`} className="text-blue-600 hover:underline">{siteConfig.foundersEmail}</a></p>
              <p>Telefon: {siteConfig.phone}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="text-slate-500 italic">[USt-IdNr. in Beantragung / Hinterlegt bei Rechnungsstellung]</span></p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Awais Abid & Werner Polatschek<br />Webzech, Bayern, Deutschland</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">EU-Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>
          </div>
        )}

        {/* ── DATENSCHUTZ ── */}
        {pageId === 'datenschutz' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Datenschutz auf einen Blick</h2>
              <p>Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Verantwortliche Stelle</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              <strong>Webzech</strong><br />
              Awais Abid & Werner Polatschek<br />
              E-Mail: {siteConfig.email}<br />
              Telefon: {siteConfig.phone}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Datenerfassung auf dieser Website</h2>
              <p><strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p><strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Grundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
            </section>
          </div>
        )}

        {/* ── COOKIES ── */}
        {pageId === 'cookies' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-bold text-slate-900 text-sm">
                  Ihre aktuellen Cookie-Einstellungen bearbeiten
                </div>
                <div className="text-xs text-slate-600">
                  Klicken Sie hier, um Ihre Einwilligung für Analyse und optionale Medien jederzeit anzupassen oder zu widerrufen.
                </div>
              </div>
              <button
                onClick={onOpenCookieModal}
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Settings2 className="w-4 h-4" />
                <span>Einstellungen öffnen</span>
              </button>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Was sind Cookies?</h2>
              <p>Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Sie richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Kategorien von Cookies auf dieser Website</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Technisch notwendige Cookies:</strong> Erforderlich, um grundlegende Funktionen wie Seitennavigation und die Speicherung Ihrer Spracheinstellung zu gewährleisten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
                <li><strong>Analyse-Cookies (optional):</strong> Werden nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) aktiviert, um zu messen, wie Besucher mit der Website interagieren.</li>
                <li><strong>Marketing-Cookies (optional):</strong> Für externe Inhalte wie interaktive Karten oder Medien. Werden nur nach aktiver Bestätigung geladen.</li>
              </ul>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};

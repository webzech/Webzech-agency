import React from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPathForPage } from '../utils/routing';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Code2, 
  MessageSquare,
  FileCheck2
} from 'lucide-react';

interface AboutPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
          items={[{ label: t.nav.about }]}
          onNavigate={onNavigate}
        />

        {/* 1. Hero: Webzech Story */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100">
            <span>Über Webzech</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
            {currentLang === 'de'
              ? 'Persönliche Webagentur mit technischem Qualitätsanspruch'
              : 'Dedicated Web Agency Built on Technical Craftsmanship'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            {currentLang === 'de'
              ? 'Webzech wurde mit einer klaren Überzeugung gegründet: Unternehmen in Deutschland verdienen moderne, saubere Websites ohne überteuerte Agentur-Wasserköpfe, ohne wechselnde Praktikanten und ohne leere Marketing-Versprechen.'
              : 'Webzech was established on one straightforward conviction: companies deserve clean, high-performance web engineering without corporate bloat or rotating junior staff.'}
          </p>
        </section>

        {/* 2. The Founders Section (Awais Abid & Werner Polatschek) */}
        <section className="py-16 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Die Gründer
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? 'Awais Abid & Werner Polatschek' : 'Awais Abid & Werner Polatschek'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {currentLang === 'de'
                ? 'Wir treten als echtes Team an. Bei Webzech sprechen Sie direkt mit den Entscheidern und Entwicklern, die Ihr Projekt von der ersten Zeile bis zum Livegang umsetzen.'
                : 'Direct collaboration with the technical founders responsible for your delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Awais Abid */}
            <div className="p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                  <img
                    src="/src/assets/images/founder_awais_abid_1790918740513.jpg"
                    alt="Awais Abid — Founder & Web Developer Webzech"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Awais Abid</h3>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">
                    Founder / Web Developer / Web Designer
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Frontend Architecture, UI/UX & Speed
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-2 border-t border-slate-100">
                <p>
                  {currentLang === 'de'
                    ? 'Als Entwickler und Designer liegt mein Fokus auf sauberem, semantischem Code, intuitiven Benutzeroberflächen und messbar schnellen Ladezeiten.'
                    : 'As a developer and designer, my focus is uncompromisingly on semantic clean code, intuitive UI ergonomics, and blistering load speeds.'}
                </p>
                <p>
                  {currentLang === 'de'
                    ? 'Ich setze Projekte so um, dass sie nicht nur optisch modern wirken, sondern technisch auf dem neuesten Stand sind und den Anforderungen von Google Core Web Vitals mühelos genügen.'
                    : 'I build systems to not only look contemporary, but excel technically against Google Core Web Vitals standards.'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['TypeScript', 'React / Next.js', 'WordPress / Elementor', 'Tailwind CSS', 'Technical SEO'].map(sk => (
                  <span key={sk} className="px-2.5 py-1 text-[11px] font-medium bg-slate-50 border border-slate-200 rounded-md text-slate-700">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Werner Polatschek */}
            <div className="p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                  <img
                    src="/src/assets/images/founder_werner_polatschek_1790918754921.jpg"
                    alt="Werner Polatschek — Co-Founder & Business Partner Webzech"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Werner Polatschek</h3>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">
                    Co-Founder / Business & Project Partner
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Project Strategy, Quality Assurance & Client Relations
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pt-2 border-t border-slate-100">
                <p>
                  {currentLang === 'de'
                    ? 'Als Projekt- und Geschäftspartner begleite ich unsere Kunden von der ersten Zieldefinition über die inhaltliche Struktur bis zur finalen Abnahme.'
                    : 'As business and project partner, I guide our clients from first scoping through content architecture to final handover.'}
                </p>
                <p>
                  {currentLang === 'de'
                    ? 'Mir ist wichtig, dass Projekte termintreu und ohne Reibungsverluste ablaufen und dass unsere Kunden zu jeder Zeit genau wissen, in welchem Stadium sich ihr Projekt befindet.'
                    : 'I ensure projects launch reliably on schedule and that our clients maintain full clarity at every stage.'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Projektmanagement', 'Kundenberatung', 'Strukturierung', 'Qualitätssicherung', 'B2B-Prozesse'].map(sk => (
                  <span key={sk} className="px-2.5 py-1 text-[11px] font-medium bg-slate-50 border border-slate-200 rounded-md text-slate-700">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 3. How We Work (Collaboration Philosophy) */}
        <section className="py-16 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {currentLang === 'de' ? 'Arbeitsphilosophie' : 'Working Philosophy'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              {currentLang === 'de' ? 'Wie wir mit Ihnen zusammenarbeiten' : 'How We Collaborate'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {currentLang === 'de' ? 'Auf Augenhöhe' : 'Eye-Level Trust'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentLang === 'de'
                  ? 'Kein Agentur-Fachchinesisch. Wir sprechen verständlich und transparent über technische Möglichkeiten und Lösungen.'
                  : 'Plain speaking without confusing jargon. Transparent technical counsel.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {currentLang === 'de' ? 'Transparenz' : 'Radical Clarity'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentLang === 'de'
                  ? 'Feste Absprachen, keine versteckten Folgekosten und voller Einblick in den Arbeitsfortschritt.'
                  : 'Clear agreements, zero hidden follow-up traps, and full milestone visibility.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {currentLang === 'de' ? 'Echte Qualität' : 'Code Quality'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentLang === 'de'
                  ? 'Wir bauen nachhaltige Architekturen, die auch in mehreren Jahren noch sicher, schnell und pflegbar sind.'
                  : 'Sustainable architectures engineered to stay safe, agile, and fast for years.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {currentLang === 'de' ? 'Langfristig' : 'Long-Term Ally'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentLang === 'de'
                  ? 'Wir sind auch nach dem Go-Live für Sie erreichbar – für Updates, Erweiterungen oder SEO-Nachjustierungen.'
                  : 'Reliable continuity post-launch for security patches, feature additions, or SEO.'}
              </p>
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="mt-12 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {currentLang === 'de' ? 'Projekt mit Webzech starten' : 'Launch Your Project with Webzech'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {currentLang === 'de'
              ? 'Lassen Sie uns unverbindlich über Ihre Vorstellungen sprechen. Wir freuen uns darauf, Sie und Ihr Unternehmen kennenzulernen.'
              : 'Let us discuss your goals without obligation. We look forward to connecting with you.'}
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={getPathForPage('kontakt', currentLang)}
              onClick={(e) => handleLink(e, 'kontakt')}
              className="px-8 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              {t.common.discussProjectCta}
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

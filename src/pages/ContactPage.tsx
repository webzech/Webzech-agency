import React from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  currentLang: Language;
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  onNavigate
}) => {
  const t = uiText[currentLang];

  return (
    <div className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          currentLang={currentLang}
          items={[{ label: t.nav.contact }]}
          onNavigate={onNavigate}
        />

        {/* Contact Content & Form Component */}
        <ContactSection
          currentLang={currentLang}
          isStandalonePage={true}
        />

      </div>
    </div>
  );
};

import React from 'react';
import { Language, PageId } from '../types';
import { uiText } from '../data/translations';
import { getPathForPage } from '../utils/routing';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  pageId?: PageId;
}

interface BreadcrumbsProps {
  currentLang: Language;
  items: BreadcrumbItem[];
  onNavigate: (pageId: PageId, lang?: Language) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentLang,
  items,
  onNavigate
}) => {
  const t = uiText[currentLang];

  // Generate BreadcrumbList Schema JSON-LD
  const schemaList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": t.common.breadcrumbsHome,
      "item": "https://webzech.de" + getPathForPage('home', currentLang)
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.label,
      ...(item.pageId ? { "item": "https://webzech.de" + getPathForPage(item.pageId, currentLang) } : {})
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": schemaList
          })
        }}
      />
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
        <li>
          <a
            href={getPathForPage('home', currentLang)}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home', currentLang);
            }}
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.common.breadcrumbsHome}</span>
          </a>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li className="text-slate-300" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {isLast || !item.pageId ? (
                  <span className="font-medium text-slate-900" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={getPathForPage(item.pageId, currentLang)}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.pageId) onNavigate(item.pageId, currentLang);
                    }}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

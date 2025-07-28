'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Language, translations } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function MobileMenu({ currentLang, onLanguageChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[currentLang];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="#features" 
              className="block text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link 
              href="#community" 
              className="block text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.community}
            </Link>
            <Link 
              href="https://github.com/canyon-project/canyon" 
              className="block text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.github}
            </Link>
            <div className="pt-2 border-t border-slate-200">
              <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
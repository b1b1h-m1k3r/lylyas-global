import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('lylyas_lang');
      return saved === 'fr' || saved === 'ar' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'fr' || newLang === 'ar') {
      setLangState(newLang);
      try {
        localStorage.setItem('lylyas_lang', newLang);
      } catch (e) {
        console.warn('Could not save language to localStorage', e);
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations.en;
  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

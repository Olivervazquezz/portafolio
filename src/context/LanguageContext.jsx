// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { translations } from '../constants';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' por defecto

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[language]; // 't' será nuestro objeto de textos

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
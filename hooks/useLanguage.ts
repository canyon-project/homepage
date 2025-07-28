'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    // 从 localStorage 读取保存的语言设置
    const savedLang = localStorage.getItem('canyon-lang') as Language;
    if (savedLang && ['en', 'zh', 'ja'].includes(savedLang)) {
      setCurrentLang(savedLang);
    } else {
      // 根据浏览器语言自动检测
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setCurrentLang('zh');
      } else if (browserLang.startsWith('ja')) {
        setCurrentLang('ja');
      } else {
        setCurrentLang('en');
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('canyon-lang', lang);
  };

  return { currentLang, changeLanguage };
}
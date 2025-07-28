'use client';

import Link from "next/link";
import { translations } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { useLanguage } from '@/hooks/useLanguage';

export default function Home() {
  const { currentLang, changeLanguage } = useLanguage();
  const t = translations[currentLang];

  // 简单的加载状态，避免初始渲染时的闪烁
  if (!currentLang) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0071c2]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-[#0071c2]/5 scroll-smooth">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 relative">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Canyon Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-slate-900">Canyon</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t.nav.features}
                </Link>
                <Link href="#community" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t.nav.community}
                </Link>
                <Link href="https://github.com/canyon-project/canyon" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t.nav.github}
                </Link>
              </nav>
              <div className="hidden md:block">
                <LanguageSwitcher currentLang={currentLang} onLanguageChange={changeLanguage} />
              </div>
              <MobileMenu currentLang={currentLang} onLanguageChange={changeLanguage} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#get-started"
              className="bg-[#0071c2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005a9e] transition-all transform hover:scale-105"
            >
              {t.getStarted}
            </Link>
            <Link
              href="https://github.com/canyon-project/canyon"
              className="border border-[#0071c2] text-[#0071c2] px-8 py-3 rounded-lg font-semibold hover:bg-[#0071c2] hover:text-white transition-colors"
            >
              {t.githubRepo}
            </Link>
          </div>
        </div>
      </section>      {/*
 Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.features}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-[#0071c2]/20 animate-fade-in-up hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0071c2] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.featureCards.accurate.title}</h3>
              <p className="text-slate-600">
                {t.featureCards.accurate.desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-[#0071c2]/20 animate-fade-in-up animate-delay-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0071c2] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.featureCards.sourcemap.title}</h3>
              <p className="text-slate-600">
                {t.featureCards.sourcemap.desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-[#0071c2]/20 animate-fade-in-up animate-delay-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0071c2] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.featureCards.buildTools.title}</h3>
              <p className="text-slate-600">
                {t.featureCards.buildTools.desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border border-[#0071c2]/20 animate-fade-in-up animate-delay-300 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0071c2] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.featureCards.automation.title}</h3>
              <p className="text-slate-600">
                {t.featureCards.automation.desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-[#0071c2]/20 animate-fade-in-up animate-delay-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0071c2] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.featureCards.ci.title}</h3>
              <p className="text-slate-600">
                {t.featureCards.ci.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Community Section */}
      <section id="community" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{t.community}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 mb-8">
              {t.communityDesc}
              <span className="font-semibold">{t.communityDescAuthor}</span>
              {t.communityDescFollow}
              <Link href="https://twitter.com/wr_zhang25" className="text-[#0071c2] hover:text-[#005a9e] font-semibold">
                {t.communityDescTwitter}
              </Link>
              {t.communityDescEnd}
            </p>
            <Link
              href="https://github.com/canyon-project/canyon/discussions"
              className="inline-flex items-center bg-[#0071c2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005a9e] transition-colors"
            >
              {t.joinDiscussions}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/logo.svg" alt="Canyon Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-slate-900">Canyon</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="https://github.com/canyon-project/canyon" className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.github}
              </Link>
              <Link href="https://github.com/canyon-project/canyon/discussions" className="text-slate-600 hover:text-slate-900 transition-colors">
                Discussions
              </Link>
              <Link href="https://twitter.com/wr_zhang25" className="text-slate-600 hover:text-slate-900 transition-colors">
                Twitter
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
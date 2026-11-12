import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sun, Moon, FileText, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  activeView: 'landing' | 'cv';
  setActiveView: (view: 'landing' | 'cv') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onNavigateSection: (sectionId: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  darkMode,
  setDarkMode,
  onNavigateSection,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const handleNavClick = (sectionId?: string, view: 'landing' | 'cv' = 'landing') => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (view === 'landing' && sectionId) {
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? 'Hello Kaka Yoko, I am contacting you from www.kakayoko.my.id. I would like to consult on your services.'
        : 'Halo Kaka Yoko, saya menghubungi Anda melalui website www.kakayoko.my.id. Saya ingin konsultasi layanan.'
    );
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-18">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick(undefined, 'landing')}
            className="flex items-center gap-2 text-left group transition cursor-pointer"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
              Kaka Yoko<span className="text-teal-600 dark:text-teal-400">.my.id</span>
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => handleNavClick('hero', 'landing')}
              className={`hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'landing' ? 'text-teal-600 dark:text-teal-400 font-semibold' : ''
              }`}
            >
              {t.home}
            </button>

            <button
              onClick={() => handleNavClick('services', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.services}
            </button>

            <button
              onClick={() => handleNavClick('gallery', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.gallery}
            </button>

            <button
              onClick={() => handleNavClick(undefined, 'cv')}
              className={`flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'cv' ? 'text-teal-600 dark:text-teal-400 font-semibold' : ''
              }`}
            >
              <FileText className="w-4 h-4" />
              {t.cv}
            </button>

            <button
              onClick={() => handleNavClick('about', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.about}
            </button>

            <button
              onClick={() => handleNavClick('contact', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Zone 3: Language Switcher + Theme Toggle + Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Language Switcher Buttons (ID / EN) */}
            <div 
              className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700"
              role="group"
              aria-label="Pilih Bahasa / Select Language"
            >
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === 'id'
                    ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
                title="Bahasa Indonesia"
                aria-pressed={lang === 'id'}
              >
                <span className="text-xs">🇮🇩</span>
                <span>ID</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
                title="English"
                aria-pressed={lang === 'en'}
              >
                <span className="text-xs">🇬🇧</span>
                <span>EN</span>
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              aria-label="Toggle tema gelap/terang"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Download CV PDF Button */}
            <a
              href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
              download="CV_Dwi_Priyoko_Takasihaeng.pdf"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 rounded-lg border border-teal-200 dark:border-teal-800 transition cursor-pointer whitespace-nowrap shrink-0"
              title={t.downloadCv}
            >
              <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{t.downloadCv}</span>
            </a>

            {/* Primary Action Button: WhatsApp */}
            <button
              onClick={openWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-xs transition whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.chatWa}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2">
          
          {/* Mobile Language Selector Pill */}
          <div className="p-2 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>{lang === 'id' ? 'Bahasa / Language:' : 'Language / Bahasa:'}</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
                  lang === 'id'
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                🇮🇩 Indonesia
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
                  lang === 'en'
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('hero', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.home}
          </button>
          <button
            onClick={() => handleNavClick('services', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.services}
          </button>
          <button
            onClick={() => handleNavClick('gallery', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.gallery}
          </button>
          <button
            onClick={() => handleNavClick(undefined, 'cv')}
            className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{t.cv}</span>
            </span>
          </button>
          <a
            href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
            download="CV_Dwi_Priyoko_Takasihaeng.pdf"
            className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>{t.downloadCv}</span>
            </span>
            <span className="text-xs text-teal-600 dark:text-teal-400 font-mono">.PDF</span>
          </a>
          <button
            onClick={() => handleNavClick('about', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.about}
          </button>
          <button
            onClick={() => handleNavClick('contact', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.contact}
          </button>

          <div className="pt-2">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              {t.chatWa}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


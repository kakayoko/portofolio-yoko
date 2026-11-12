import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sun, Moon, FileText, Compass } from 'lucide-react';

interface NavbarProps {
  activeView: 'landing' | 'cv';
  setActiveView: (view: 'landing' | 'cv') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  darkMode,
  setDarkMode,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const text = encodeURIComponent('Halo Kaka Yoko, saya menghubungi Anda melalui website www.kakayoko.my.id. Saya ingin konsultasi layanan.');
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick(undefined, 'landing')}
            className="flex items-center gap-2 text-left group transition"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
              Kaka Yoko<span className="text-teal-600 dark:text-teal-400">.my.id</span>
            </span>
          </button>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => handleNavClick('hero', 'landing')}
              className={`hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'landing' ? 'text-teal-600 dark:text-teal-400 font-semibold' : ''
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => handleNavClick('services', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Layanan & Keahlian
            </button>

            <button
              onClick={() => handleNavClick('gallery', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Galeri Foto
            </button>

            <button
              onClick={() => handleNavClick(undefined, 'cv')}
              className={`flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'cv' ? 'text-teal-600 dark:text-teal-400 font-semibold' : ''
              }`}
            >
              <FileText className="w-4 h-4" />
              Curriculum Vitae (CV)
            </button>

            <button
              onClick={() => handleNavClick('about', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Tentang Saya
            </button>

            <button
              onClick={() => handleNavClick('contact', 'landing')}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setDarkMode(prev => !prev)}
              aria-label="Toggle tema gelap/terang"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <a
              href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
              download="CV_Dwi_Priyoko_Takasihaeng.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 rounded-lg border border-teal-200 dark:border-teal-800 transition cursor-pointer whitespace-nowrap shrink-0"
              title="Unduh Berkas CV Resmi (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Unduh CV (PDF)</span>
            </a>

            <button
              onClick={openWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Kaka Yoko</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
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
          <button
            onClick={() => handleNavClick('hero', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('services', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Layanan & Keahlian
          </button>
          <button
            onClick={() => handleNavClick('gallery', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Galeri Foto
          </button>
          <button
            onClick={() => handleNavClick(undefined, 'cv')}
            className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae (CV) & Pratinjau</span>
            </span>
          </button>
          <a
            href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
            download="CV_Dwi_Priyoko_Takasihaeng.pdf"
            className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Download Berkas CV (PDF Asli)</span>
            </span>
            <span className="text-xs text-teal-600 dark:text-teal-400 font-mono">.PDF</span>
          </a>
          <button
            onClick={() => handleNavClick('about', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Tentang Saya
          </button>
          <button
            onClick={() => handleNavClick('contact', 'landing')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Kontak & Lokasi Sorong
          </button>

          <div className="pt-2">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp (+62 823-9858-1997)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

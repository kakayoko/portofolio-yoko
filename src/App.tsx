/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVView } from './components/CVView';
import { ConsultationModal } from './components/ConsultationModal';
import { MessageCircle } from 'lucide-react';
import { Language } from './data/translations';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'cv'>('landing');
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('ky_lang');
      if (savedLang === 'en' || savedLang === 'id') return savedLang;
    }
    return 'id';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ky_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('guide');

  // Persist language choice
  useEffect(() => {
    localStorage.setItem('ky_lang', lang);
  }, [lang]);

  // Synchronize darkMode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ky_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ky_theme', 'light');
    }
  }, [darkMode]);

  const handleNavigateSection = (sectionId: string) => {
    setActiveView('landing');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectServiceFromCard = (serviceKey: string) => {
    setConsultationService(serviceKey);
    setConsultationOpen(true);
  };

  const openQuickWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? 'Hello Kaka Yoko, I am contacting you from www.kakayoko.my.id.'
        : 'Halo Kaka Yoko, saya menghubungi Anda dari website www.kakayoko.my.id.'
    );
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Top Bar Navigation with Bilingual Switcher */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onNavigateSection={handleNavigateSection}
        lang={lang}
        setLang={setLang}
      />

      {/* View Switcher: Full CV or Landing Page */}
      {activeView === 'cv' ? (
        <CVView
          onBackToHome={() => setActiveView('landing')}
          lang={lang}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onExploreServices={() => handleNavigateSection('services')}
            onOpenCV={() => {
              setActiveView('cv');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => {
              setConsultationService('guide');
              setConsultationOpen(true);
            }}
            lang={lang}
          />

          {/* Services & Capabilities Section */}
          <ServicesSection
            onSelectService={handleSelectServiceFromCard}
            lang={lang}
          />

          {/* Portfolio & Gallery Section */}
          <GallerySection
            lang={lang}
          />

          {/* About Section featuring User Photo */}
          <AboutSection
            onOpenCV={() => {
              setActiveView('cv');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => {
              setConsultationService('guide');
              setConsultationOpen(true);
            }}
            lang={lang}
          />

          {/* Contact Section */}
          <ContactSection
            lang={lang}
          />
        </main>
      )}

      {/* Global Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenCV={() => {
          setActiveView('cv');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        lang={lang}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={consultationService}
        lang={lang}
      />

      {/* Floating Action Button for Instant WhatsApp Chat */}
      <div className="fixed bottom-5 right-5 z-40 no-print">
        <button
          onClick={openQuickWhatsApp}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer font-medium text-xs sm:text-sm"
          aria-label={lang === 'en' ? 'Chat directly on WhatsApp' : 'Chat WhatsApp Langsung'}
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Kaka Yoko</span>
        </button>
      </div>

    </div>
  );
}


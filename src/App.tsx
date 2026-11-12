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

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'cv'>('landing');
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
    const text = encodeURIComponent('Halo Kaka Yoko, saya menghubungi Anda dari website www.kakayoko.my.id.');
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onNavigateSection={handleNavigateSection}
      />

      {/* View Switcher: Full CV or Landing Page */}
      {activeView === 'cv' ? (
        <CVView onBackToHome={() => setActiveView('landing')} />
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
          />

          {/* Services & Capabilities Section */}
          <ServicesSection onSelectService={handleSelectServiceFromCard} />

          {/* Portfolio & Gallery Section */}
          <GallerySection />

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
          />

          {/* Contact Section */}
          <ContactSection />
        </main>
      )}

      {/* Global Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenCV={() => {
          setActiveView('cv');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={consultationService}
      />

      {/* Floating Action Button for Instant WhatsApp Chat (Compliant with sticky cap) */}
      <div className="fixed bottom-5 right-5 z-40 no-print">
        <button
          onClick={openQuickWhatsApp}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer font-medium text-xs sm:text-sm"
          aria-label="Chat WhatsApp Langsung"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Kaka Yoko</span>
        </button>
      </div>

    </div>
  );
}

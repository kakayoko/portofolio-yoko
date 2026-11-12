import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle, Heart, Shield, Compass, FileText } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  onOpenCV: () => void;
  onOpenConsultation: () => void;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV, onOpenConsultation, lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-850">
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg"
                    alt="Yoko Takasihaen (Kaka Yoko) di Raja Ampat"
                    className="w-full h-full object-cover object-top hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-display font-bold text-lg">Dwi Priyoko Takasihaeng</div>
                    <div className="text-xs text-teal-300">
                      Kaka Yoko · {lang === 'en' ? 'B.S. Information Systems & Marine Tour Guide' : 'S1 Sistem Informasi & Pemandu Bahari'}
                    </div>
                    <div className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Sorong, Papua Barat Daya
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">{t.officialWebsite}:</span>
                  <span className="font-mono font-semibold text-teal-700 dark:text-teal-400">www.kakayoko.my.id</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Promotion & Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              {t.kicker}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              <p>
                {t.p1}
              </p>

              <p>
                {t.p2}
              </p>

              <p>
                {t.p3}
              </p>
            </div>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <Shield className="w-5 h-5 text-teal-600 dark:text-teal-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{t.val1Title}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.val1Desc}</div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{t.val2Title}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.val2Desc}</div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <Heart className="w-5 h-5 text-rose-500 dark:text-rose-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{t.val3Title}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.val3Desc}</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCV}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{t.btnFullCv}</span>
              </button>

              <a
                href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
                download="CV_Dwi_Priyoko_Takasihaeng.pdf"
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 rounded-lg transition inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                <span>{t.btnDownloadPdf}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{t.btnDirectWa}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


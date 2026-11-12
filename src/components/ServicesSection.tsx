import React from 'react';
import { Compass, ShieldCheck, Cpu, Code2, ArrowUpRight, Check, MessageSquare } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  onSelectService: (serviceKey: string) => void;
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, lang }) => {
  const t = TRANSLATIONS[lang].services;

  const openWhatsAppService = (message: string) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
            {t.kicker}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Guide Raja Ampat */}
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-teal-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                  01. {lang === 'en' ? 'MARINE EXPEDITION' : 'WISATA BAHARI'}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.guideTitle}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.guideDesc}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{t.guideBullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{t.guideBullet2}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{t.guideBullet3}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{t.guideBullet4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('guide')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 cursor-pointer"
              >
                <span>{t.btnSeeDetails}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService(
                  lang === 'en'
                    ? 'Hello Kaka Yoko, I would like to book your guiding service for Waigeo / Misool. Please share your schedule availability.'
                    : 'Halo Kaka Yoko, saya ingin menggunakan jasa guide Anda untuk spot Waigeo / Misool. Mohon info ketersediaan jadwal pemanduan.'
                )}
                className="px-3.5 py-1.5 text-xs font-medium bg-teal-600 hover:bg-teal-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.btnOrderGuide}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Teknisi CCTV */}
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                  02. {lang === 'en' ? 'SMART SURVEILLANCE' : 'SMART SECURITY'}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.cctvTitle}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.cctvDesc}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t.cctvBullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t.cctvBullet2}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t.cctvBullet3}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t.cctvBullet4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('cctv')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 cursor-pointer"
              >
                <span>{t.btnSeeDetails}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService(
                  lang === 'en'
                    ? 'Hello Kaka Yoko, I would like to consult on CCTV camera installation in Sorong. Please share packages and on-site survey availability.'
                    : 'Halo Kaka Yoko, saya mau konsultasi pasang kamera CCTV di lokasi saya (Kota/Kabupaten Sorong). Mau tanya paket dan jadwal survey lokasi.'
                )}
                className="px-3.5 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.btnOrderCctv}</span>
              </button>
            </div>
          </div>

          {/* Card 3: IT Konsultan & Jaringan */}
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                  03. {lang === 'en' ? 'NETWORKING & SATELLITE' : 'NETWORKING & IT'}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.itTitle}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.itDesc}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.itBullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.itBullet2}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.itBullet3}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.itBullet4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('it')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
              >
                <span>{t.btnSeeDetails}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService(
                  lang === 'en'
                    ? 'Hello Kaka Yoko, I need IT consultation for WiFi / Starlink / Mikrotik networking in Sorong or Raja Ampat.'
                    : 'Halo Kaka Yoko, saya butuh konsultasi IT untuk setup jaringan WiFi / Starlink / Mikrotik di Sorong atau Raja Ampat.'
                )}
                className="px-3.5 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.btnOrderIt}</span>
              </button>
            </div>
          </div>

          {/* Card 4: Web Development */}
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-indigo-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                  04. {lang === 'en' ? 'WEB & DEVELOPMENT' : 'WEB & DIGITAL'}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.webTitle}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.webDesc}
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{t.webBullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{t.webBullet2}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{t.webBullet3}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{t.webBullet4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('web')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
              >
                <span>{t.btnSeeDetails}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService(
                  lang === 'en'
                    ? 'Hello Kaka Yoko, I would like to consult on web development for my business. Please share information on packages and process.'
                    : 'Halo Kaka Yoko, saya ingin konsultasi pembuatan website untuk bisnis / usaha saya. Mohon informasi paket dan tahapan pembuatannya.'
                )}
                className="px-3.5 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.btnOrderWeb}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


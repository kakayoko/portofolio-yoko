import React from 'react';
import { Compass, ShieldCheck, Cpu, Code2, MapPin, ArrowRight, FileText, CheckCircle2, PhoneCall } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenCV: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onOpenCV,
  onOpenConsultation
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background ambient subtle gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,148,136,0.15),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker & Location (No slop pills, clean typography) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Sorong, Papua Barat Daya
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Gerbang Eksplorasi Raja Ampat</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="font-mono text-slate-500">www.kakayoko.my.id</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              <span className="text-teal-600 dark:text-teal-400">Freelance Guide Raja Ampat</span> & Freelance IT Konsultan
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Halo, saya <span className="font-semibold text-slate-900 dark:text-white">Dwi Priyoko Takasihaeng (Kaka Yoko)</span>, lulusan S1 Sistem Informasi. Sebagai freelance guide Raja Ampat dan freelance IT konsultan profesional di Sorong, saya siap mendampingi ekspedisi bahari Anda sekaligus menangani kebutuhan infrastruktur IT, jaringan satelit, dan instalasi CCTV di Papua Barat Daya.
            </p>

            {/* 4 Pillars Mini-Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">Guide Raja Ampat</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Spot Waigeo & Misool</div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">Teknisi CCTV</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">IP Cam, Remote HP, Ruko/Resort</div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">IT & Jaringan</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Mikrotik, Starlink, LAN</div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">Web Dev & K3</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Travel, CMS & First Aid</div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Konsultasi Kebutuhan Anda</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCV}
                className="px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Lihat CV Lengkap</span>
              </button>

              <a
                href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
                download="CV_Dwi_Priyoko_Takasihaeng.pdf"
                className="px-4 py-3 text-sm font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 rounded-lg transition inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                <span>Unduh CV (PDF)</span>
              </a>

              <button
                onClick={onExploreServices}
                className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition whitespace-nowrap shrink-0 cursor-pointer"
              >
                Jelajahi Portofolio ↓
              </button>
            </div>

            {/* Trust Bulletpoints */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Resmi & Berpengalaman Lapangan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Survey Langsung Area Sorong & Raja Ampat
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Respon Cepat via WhatsApp (+62 823-9858-1997)
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Photo Showcase of Kaka Yoko */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card with subtle border */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-xl">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg"
                    alt="Kaka Yoko (Yoko Takasihaen) di Puncak Karst Raja Ampat"
                    className="w-full h-full object-cover object-top hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle gradient overlay at bottom for legible caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Overlay text in photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                      Profil & Dokumentasi Lapangan
                    </div>
                    <div className="text-lg font-bold">
                      Dwi Priyoko Takasihaeng
                    </div>
                    <div className="text-xs text-slate-200 mt-0.5">
                      Kaka Yoko · S1 Sistem Informasi & Pemandu Bahari
                    </div>
                  </div>
                </div>

                {/* Sub-card info footer */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Lokasi Foto</div>
                    <div className="text-slate-500 dark:text-slate-400">Puncak Karst Raja Ampat</div>
                  </div>
                  <a
                    href="https://wa.me/6282398581997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 font-medium rounded-md hover:bg-teal-100 transition flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Kontak</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI / Trust Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              500+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Trip Raja Ampat Sukses & Aman
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              80+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Titik Kamera CCTV Terpasang
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Dukungan Jaringan & Remote Support
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Komitmen Kepuasan Klien Papua
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

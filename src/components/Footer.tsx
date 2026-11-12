import React from 'react';
import { Compass, ShieldCheck, Cpu, Code2, Phone, Mail, MapPin, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Wordmark & Summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
              Kaka Yoko<span className="text-teal-600 dark:text-teal-400">.my.id</span>
            </div>
            <p className="text-xs leading-relaxed max-w-md text-slate-600 dark:text-slate-400">
              Profil resmi Yoko Takasihaen (Kaka Yoko). Pemandu wisata terpercaya kepulauan Raja Ampat, teknisi spesialis instalasi CCTV, konsultan infrastruktur jaringan IT & Starlink, dan web developer di Sorong, Papua Barat Daya.
            </p>
            <div className="pt-1 flex items-center gap-2 font-mono text-teal-700 dark:text-teal-400">
              <span>Domain Resmi:</span>
              <a href="https://www.kakayoko.my.id" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.kakayoko.my.id
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Layanan */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Layanan Utama
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer text-left"
                >
                  Guide Raja Ampat (Spot Waigeo & Misool)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer text-left"
                >
                  Teknisi CCTV & IP Cam Sorong
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer text-left"
                >
                  IT Konsultan, Mikrotik & Starlink
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer text-left"
                >
                  Pembuatan Website & Tour Travel
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCV}
                  className="text-teal-600 dark:text-teal-400 font-medium hover:underline transition cursor-pointer text-left flex items-center gap-1 mt-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae (CV) & Pratinjau</span>
                </button>
              </li>
              <li>
                <a
                  href="/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf"
                  download="CV_Dwi_Priyoko_Takasihaeng.pdf"
                  className="text-teal-700 dark:text-teal-300 font-semibold hover:underline transition cursor-pointer text-left flex items-center gap-1"
                >
                  <span>⬇ Unduh File CV (PDF Asli)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak & Wilayah */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Kontak Resmi
            </div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <a href="https://wa.me/6282398581997" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +62 823-9858-1997
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                <a href="mailto:yokotakasihaen9@gmail.com" className="hover:underline truncate">
                  yokotakasihaen9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Kota Sorong, Papua Barat Daya, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Kaka Yoko (Yoko Takasihaen). Hak Cipta Dilindungi Undang-Undang.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

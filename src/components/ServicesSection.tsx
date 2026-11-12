import React from 'react';
import { Compass, ShieldCheck, Cpu, Code2, ArrowUpRight, Check, MessageSquare } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceKey: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
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
            Keahlian & Layanan Profesional
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Empat Pilar Keahlian untuk Solusi Pariwisata & Teknologi Anda
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Dari puncak karst hingga ruang server, Kaka Yoko menghadirkan integritas kerja tinggi, pengalaman lapangan riil, dan pemahaman mendalam karakteristik geografis Papua Barat Daya.
          </p>
        </div>

        {/* 4 Pillars Grid (Asymmetric Bento style) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Guide Raja Ampat */}
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-teal-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">01. WISATA BAHARI</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Freelance Guide Spot Waigeo & Misool
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pemanduan wisata bahari independen khusus pada spot-spot unggulan Pulau Waigeo dan keajaiban karst Misool. Menjamin kenyamanan rute, protokol keselamatan laut (First Aid), pengurusan izin konservasi BLUD, serta pendampingan langsung di spot snorkeling terbaik.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Spot Pulau Waigeo: Teluk Kabui, Batu Pensil, Pasir Timbul, Yenbuba & Friwen</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Spot Eksotis Misool: Danau Ubur-ubur, Gua Keramat Tomolol, Balbulol & Karst Yapap</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Snorkeling Manta Ray, Terumbu Karang Sehat & Pengamatan Burung Cenderawasih</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Pengurusan izin konservasi PIN BLUD & liaison homestay lokal</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('guide')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Foto & Detail Proyek</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService('Halo Kaka Yoko, saya ingin menggunakan jasa guide Anda untuk spot Waigeo / Misool. Mohon info ketersediaan jadwal pemanduan.')}
                className="px-3.5 py-1.5 text-xs font-medium bg-teal-600 hover:bg-teal-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Tanya Guide Waigeo / Misool</span>
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
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">02. SMART SECURITY</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Teknisi Spesialis CCTV & Pengawasan
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pemasangan kamera pengawas beresolusi tinggi (Analog & IP Camera) dengan kerapian instalasi kabel conduit. Berpengalaman menangani proyek ruko perkotaan, perkantoran, perumahan, resort pulau, hingga kapal phinisi.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Instalasi IP Camera 2MP/4MP/5MP ColorVu (Hikvision, Dahua, Uniview)</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Kamera Outdoor tahan air hujan badai & anti-korosi uap laut garam</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Setting pemantauan online langsung di HP Android & iPhone tanpa batas jarak</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Troubleshooting, reset password DVR, ganti harddisk, & kontrak maintenance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('cctv')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Portofolio CCTV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService('Halo Kaka Yoko, saya mau konsultasi pasang kamera CCTV di lokasi saya (Kota/Kabupaten Sorong). Mau tanya paket dan jadwal survey lokasi.')}
                className="px-3.5 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Survey & Pasang CCTV</span>
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
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">03. NETWORKING & IT</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Konsultan IT & Infrastruktur Jaringan
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Penyedia solusi jaringan komputer terstruktur, manajemen router Mikrotik, hingga instalasi satelit Starlink di pulau-pulau terluar Raja Ampat yang belum memiliki jangkauan kabel optik maupun sinyal seluler stabil.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instalasi & Bypass Dish Starlink Satelit untuk resort pulau & kantor proyek</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Manajemen Mikrotik: Bandwidth limit, Hotspot Voucher tamu, Failover 2 ISP</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Penataan Rak Server 9U/12U, Switch Gigabit Managed, & Patch Panel Cat6 rapi</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Server File Sharing NAS (Synology) untuk proteksi data kantor dari ransomware</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('it')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Portofolio IT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService('Halo Kaka Yoko, saya butuh konsultasi IT untuk setup jaringan WiFi / Starlink / Mikrotik di Sorong atau Raja Ampat.')}
                className="px-3.5 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Konsultasi Jaringan</span>
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
                <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">04. WEB & DIGITAL</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Web Development & Solusi Digital
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pengembangan website modern yang cepat, mobile-friendly, dan berorientasi konversi. Membantu pelaku usaha wisata, UMKM, dan perusahaan kontraktor di Papua memiliki etalase digital resmi dan memenangkan persaingan di Google.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Website Tour & Travel Raja Ampat terintegrasi WhatsApp & booking otomatis</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Company Profile elegan untuk CV, PT, instansi, & rental transportasi</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Setup domain resmi (.my.id, .com, .id, .co.id) & email korporat gratis</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Optimasi SEO Google Lokal Sorong agar bisnis mudah ditemukan pencari jasa</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectService('web')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Portofolio Web</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppService('Halo Kaka Yoko, saya ingin konsultasi pembuatan website untuk bisnis / usaha saya. Mohon informasi paket dan tahapan pembuatannya.')}
                className="px-3.5 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Bikin Website</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, Globe, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Guide Raja Ampat');
  const [userMsg, setUserMsg] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = 
`Halo Kaka Yoko,
Saya ${senderName || 'Klien'} (${senderContact || '-'}),
Ingin menanyakan perihal: ${serviceNeeded}
Pesan: ${userMsg || 'Mohon info ketersediaan jadwal dan estimasi biaya.'}
(Dikirim melalui form kontak www.kakayoko.my.id)`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282398581997?text=${encoded}`, '_blank');
    setStatus('Pesan berhasil dibuka di WhatsApp!');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                Kontak & Konsultasi
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Hubungi Kaka Yoko Sekarang
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Konsultasikan rencana liburan trip Raja Ampat, survey lokasi CCTV, instalasi jaringan Starlink, atau pembuatan website usaha Anda.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6282398581997"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/60 dark:bg-teal-950/30 flex items-center justify-between hover:border-teal-400 transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase">
                      WhatsApp Resmi (Respon Cepat)
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      +62 823-9858-1997
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 group-hover:underline">
                  Chat Langsung →
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:yokotakasihaen9@gmail.com"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex items-center justify-between hover:border-slate-400 dark:hover:border-slate-700 transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      Email Korespondensi
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
                      yokotakasihaen9@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:underline">
                  Kirim Email →
                </span>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Pusat Operasional: Sorong, Papua Barat Daya
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Melayani seluruh area Kota Sorong, Kabupaten Sorong, Aimas, Waisai, serta spot wisata kepulauan di Raja Ampat (Pulau Waigeo, Selat Dampier, Arborek, Kri, Mansuar, dan Misool).
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Waktu Pelayanan (WIT - Waktu Indonesia Timur)
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Senin - Minggu: 07.30 - 21.00 WIT
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 text-[11px]">
                    *Layanan darurat teknis & trip laut dapat disesuaikan jadwal khusus.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Kirim Pesan Langsung ke WhatsApp Kaka Yoko
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Isi form singkat ini untuk langsung terhubung dengan Kaka Yoko tanpa perlu repot mengetik ulang format pesan.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Lengkap:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda / Perusahaan"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nomor HP / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812..."
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Layanan yang Ingin Ditanyakan:
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
                  >
                    <option value="Paket Pemandu Trip Wisata Raja Ampat">Paket Pemandu Trip Wisata Raja Ampat</option>
                    <option value="Pemasangan Kamera CCTV Baru (IP / Analog)">Pemasangan Kamera CCTV Baru (IP / Analog)</option>
                    <option value="Perbaikan / Servis Sistem CCTV Rusak">Perbaikan / Servis Sistem CCTV Rusak</option>
                    <option value="Instalasi Starlink Satelit & Jaringan Mikrotik">Instalasi Starlink Satelit & Jaringan Mikrotik</option>
                    <option value="Pembuatan Website Bisnis / Tour Travel">Pembuatan Website Bisnis / Tour Travel</option>
                    <option value="Konsultasi Gabungan / Kemitraan Proyek">Konsultasi Gabungan / Kemitraan Proyek</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tuliskan Detail Pertanyaan Anda:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Contoh: Halo Kaka Yoko, kami berencana trip ke Piaynemo untuk 6 orang tanggal 20 bulan depan, bisa info penawaran harga boat dan guide? Terima kasih."
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Buka Chat WhatsApp (+62 823-9858-1997)</span>
                  </button>
                </div>

                {status && (
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{status}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

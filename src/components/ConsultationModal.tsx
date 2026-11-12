import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, MapPin, Compass, ShieldCheck, Cpu, Code2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'guide'
}) => {
  const [service, setService] = useState<string>(defaultService);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('Kota Sorong');
  const [details, setDetails] = useState('');

  // Guide-specific options
  const [tripRoute, setTripRoute] = useState('Piaynemo & Telaga Bintang');
  const [tripDuration, setTripDuration] = useState('3 Hari 2 Malam');
  const [participants, setParticipants] = useState('4 Orang');

  // CCTV-specific options
  const [cctvChannels, setCctvChannels] = useState('4 Titik Kamera');
  const [cctvProperty, setCctvProperty] = useState('Ruko / Kantor');

  // IT-specific options
  const [itScope, setItScope] = useState('Instalasi Starlink Satelit di Pulau');

  // Web-specific options
  const [webType, setWebType] = useState('Website Tour & Travel Raja Ampat');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let serviceSpecificSummary = '';
    if (service === 'guide') {
      serviceSpecificSummary = `*Rute Trip:* ${tripRoute}\n*Durasi:* ${tripDuration}\n*Jumlah Tamu:* ${participants}`;
    } else if (service === 'cctv') {
      serviceSpecificSummary = `*Jumlah Kamera:* ${cctvChannels}\n*Tipe Bangunan:* ${cctvProperty}`;
    } else if (service === 'it') {
      serviceSpecificSummary = `*Kebutuhan IT:* ${itScope}`;
    } else if (service === 'web') {
      serviceSpecificSummary = `*Tipe Website:* ${webType}`;
    }

    const message = 
`*KONSULTASI LAYANAN KAKA YOKO (www.kakayoko.my.id)*
-----------------------------------
*Nama Pengirim:* ${name || 'Klien'}
*Nomor Kontak:* ${contactNumber || '-'}
*Lokasi:* ${location}
*Layanan Yang Dipilih:* ${
  service === 'guide' ? 'Pemandu Wisata Raja Ampat' :
  service === 'cctv' ? 'Instalasi / Servis CCTV' :
  service === 'it' ? 'Konsultan IT & Jaringan / Starlink' : 'Pembuatan Website'
}
${serviceSpecificSummary}
*Catatan Tambahan:* ${details || 'Mohon informasi estimasi biaya, jadwal, dan ketersediaan waktu survey/trip.'}
-----------------------------------
Terima kasih Kaka Yoko!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282398581997?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
          Konsultasi & Estimasi Kebutuhan
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Diskusikan Kebutuhan Anda dengan Kaka Yoko
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Pilih jenis layanan di bawah ini. Pesan akan terformat otomatis untuk dikirimkan langsung ke WhatsApp resmi Kaka Yoko.
        </p>

        <form onSubmit={handleSubmitWhatsApp} className="mt-5 space-y-4">
          
          {/* Service Selector Tabs */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Pilih Layanan Utama:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setService('guide')}
                className={`p-2.5 rounded-lg border text-left text-xs transition cursor-pointer flex items-center gap-2 ${
                  service === 'guide'
                    ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Compass className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Guide Raja Ampat</span>
              </button>

              <button
                type="button"
                onClick={() => setService('cctv')}
                className={`p-2.5 rounded-lg border text-left text-xs transition cursor-pointer flex items-center gap-2 ${
                  service === 'cctv'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Teknisi CCTV</span>
              </button>

              <button
                type="button"
                onClick={() => setService('it')}
                className={`p-2.5 rounded-lg border text-left text-xs transition cursor-pointer flex items-center gap-2 ${
                  service === 'it'
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>IT & Jaringan / Starlink</span>
              </button>

              <button
                type="button"
                onClick={() => setService('web')}
                className={`p-2.5 rounded-lg border text-left text-xs transition cursor-pointer flex items-center gap-2 ${
                  service === 'web'
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Web Development</span>
              </button>
            </div>
          </div>

          {/* Dynamic Service Options */}
          {service === 'guide' && (
            <div className="p-3 bg-teal-50/40 dark:bg-teal-950/20 rounded-xl border border-teal-100 dark:border-teal-900/40 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Destinasi Raja Ampat:
                  </label>
                  <select
                    value={tripRoute}
                    onChange={(e) => setTripRoute(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Spot Pulau Waigeo (Teluk Kabui, Yenbuba, Pasir Timbul)">Spot Pulau Waigeo (Teluk Kabui, Yenbuba, Pasir Timbul)</option>
                    <option value="Spot Karst Misool (Danau Ubur-ubur & Gua Tomolol)">Spot Karst Misool (Danau Ubur-ubur & Gua Tomolol)</option>
                    <option value="Spot Piaynemo & Telaga Bintang">Spot Piaynemo & Telaga Bintang</option>
                    <option value="Spot Selat Dampier (Manta & Arborek)">Spot Selat Dampier (Manta & Arborek)</option>
                    <option value="Paket Custom Spot Waigeo / Misool">Paket Custom Spot Waigeo / Misool</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Durasi Rencana Trip:
                  </label>
                  <select
                    value={tripDuration}
                    onChange={(e) => setTripDuration(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Trip 1 Hari (One-Day Tour)">Trip 1 Hari (One-Day Tour)</option>
                    <option value="2 Hari 1 Malam (2D1N)">2 Hari 1 Malam (2D1N)</option>
                    <option value="3 Hari 2 Malam (3D2N)">3 Hari 2 Malam (3D2N)</option>
                    <option value="4 Hari 3 Malam (4D3N)">4 Hari 3 Malam (4D3N)</option>
                    <option value="5 Hari 4 Malam ke atas">5 Hari 4 Malam ke atas</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {service === 'cctv' && (
            <div className="p-3 bg-blue-50/40 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/40 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Estimasi Jumlah Kamera:
                  </label>
                  <select
                    value={cctvChannels}
                    onChange={(e) => setCctvChannels(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="4 Titik Kamera (Paket Rumah / Toko Kecil)">4 Titik Kamera</option>
                    <option value="8 Titik Kamera (Paket Ruko / Gudang Sedang)">8 Titik Kamera</option>
                    <option value="16 Titik Kamera (Kantor / Swalayan)">16 Titik Kamera</option>
                    <option value="Lebih dari 16 Titik Kamera (Proyek Besar)">Lebih dari 16 Titik Kamera</option>
                    <option value="Servis & Perbaikan CCTV Rusak Saja">Servis & Perbaikan CCTV Rusak Saja</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tipe Lokasi Pemasangan:
                  </label>
                  <select
                    value={cctvProperty}
                    onChange={(e) => setCctvProperty(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Ruko / Kantor di Kota Sorong">Ruko / Kantor di Kota Sorong</option>
                    <option value="Rumah Tinggal Pribadi">Rumah Tinggal Pribadi</option>
                    <option value="Resort / Homestay di Kepulauan">Resort / Homestay di Kepulauan</option>
                    <option value="Kapal Wisata / Phinisi / Speedboat">Kapal Wisata / Phinisi / Speedboat</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {service === 'it' && (
            <div className="p-3 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
              <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kebutuhan Jaringan / IT:
              </label>
              <select
                value={itScope}
                onChange={(e) => setItScope(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Instalasi & Setting Starlink Satelit di Pulau">Instalasi & Setting Starlink Satelit di Pulau</option>
                <option value="Konfigurasi Mikrotik: Voucher WiFi Hotspot & Bandwidth">Konfigurasi Mikrotik: Voucher WiFi Hotspot & Bandwidth</option>
                <option value="Penarikan Kabel Data LAN Kantor & Rak Server">Penarikan Kabel Data LAN Kantor & Rak Server</option>
                <option value="Setup Server File Sharing NAS / Backup Data">Setup Server File Sharing NAS / Backup Data</option>
                <option value="Troubleshooting Komputer & Jaringan Rutin">Troubleshooting Komputer & Jaringan Rutin</option>
              </select>
            </div>
          )}

          {service === 'web' && (
            <div className="p-3 bg-indigo-50/40 dark:bg-indigo-950/20 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
              <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Jenis Website yang Dibutuhkan:
              </label>
              <select
                value={webType}
                onChange={(e) => setWebType(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Website Tour & Travel Raja Ampat + WhatsApp Booking">Website Tour & Travel Raja Ampat + WhatsApp Booking</option>
                <option value="Company Profile Perusahaan / Kontraktor / Jasa">Company Profile Perusahaan / Kontraktor / Jasa</option>
                <option value="Landing Page Promosi Jasa / Produk Tunggal">Landing Page Promosi Jasa / Produk Tunggal</option>
                <option value="Redesign / Perbaikan Website Lama">Redesign / Perbaikan Website Lama</option>
              </select>
            </div>
          )}

          {/* User Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nama Lengkap Anda:
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Pak Herman"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nomor WhatsApp Anda:
              </label>
              <input
                type="tel"
                placeholder="0812xxxxxxx"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Lokasi Pekerjaan / Domisili:
            </label>
            <input
              type="text"
              placeholder="Contoh: Jl. Ahmad Yani Sorong / Waisai Raja Ampat"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Catatan / Pertanyaan Tambahan:
            </label>
            <textarea
              rows={2}
              placeholder="Ceritakan detail kebutuhan atau tanggal yang Anda rencanakan..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-teal-500"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim ke WhatsApp Kaka Yoko (+6282398581997)</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'guide' | 'cctv' | 'it' | 'web';
  categoryLabel: string;
  location: string;
  client: string;
  year: string;
  summary: string;
  highlights: string[];
  specs: { [key: string]: string };
  imageSrc?: string;
  badgeColor?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Guide Raja Ampat
  {
    id: 'raja-ampat-piaynemo',
    title: 'Ekspedisi Karst Piaynemo & Telaga Bintang',
    category: 'guide',
    categoryLabel: 'Guide Raja Ampat',
    location: 'Kepulauan Fam, Raja Ampat',
    client: 'Grup Wisatawan Domestik & Mancanegara (Jakarta & Australia)',
    year: '2024 - 2026',
    summary: 'Pemanduan trip eksklusif mendaki puncak ikonik Piaynemo, tracking ke Telaga Bintang (Star Lagoon), snorkeling di Rufas Island, dan edukasi konservasi terumbu karang.',
    highlights: [
      'Manajemen rute laut cuaca bersahabat & pasang surut',
      'Spotting satwa endemik & spot foto panorama spektakuler',
      'Safety briefing laut & penyediaan perlengkapan snorkeling terstandar',
      'Koordinasi homestay lokal & konsumsi khas laut segar'
    ],
    specs: {
      'Destinasi': 'Piaynemo, Telaga Bintang, Pulau Rufas, Sauwandarek',
      'Aktivitas': 'Trekking, Snorkeling, Drone/Photo Session, Homestay Liaison',
      'Durasi': '3 Hari 2 Malam (Pemanduan dari Sorong / Waisai)',
      'Status': 'Rute Reguler Tersedia'
    },
    imageSrc: '/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg'
  },
  {
    id: 'raja-ampat-waigeo',
    title: 'Pemanduan Spot Eksotis Pulau Waigeo & Teluk Kabui',
    category: 'guide',
    categoryLabel: 'Guide Raja Ampat',
    location: 'Pulau Waigeo & Sekitarnya',
    client: 'Grup Wisatawan & Fotografer Alam',
    year: '2025 - 2026',
    summary: 'Pemanduan profesional menjelajahi spot-spot unggulan Pulau Waigeo: karst megah Teluk Kabui, tebing Batu Pensil, snorkeling di terumbu karang dermaga Yenbuba, Pasir Timbul, dan pengamatan Burung Cenderawasih.',
    highlights: [
      'Pemanduan rute karst dan teluk tenang Waigeo yang aman dan memukau',
      'Spotting satwa endemik Cenderawasih dan biota laut Selat Dampier',
      'Safety briefing laut & penyediaan panduan snorkeling terumbu karang',
      'Edukasi kearifan lokal masyarakat adat pesisir Waigeo'
    ],
    specs: {
      'Destinasi': 'Teluk Kabui, Batu Pensil, Yenbuba, Pasir Timbul, Friwen Wall',
      'Aktivitas': 'Snorkeling, Bird Watching, Cultural Walk, Karst Sightseeing',
      'Fokus Area': 'Pulau Waigeo & Sekitarnya',
      'Status': 'Spot Unggulan Kaka Yoko'
    },
    imageSrc: '/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg'
  },
  {
    id: 'raja-ampat-manta-arborek',
    title: 'Safari Snorkeling Manta Sandy & Budaya Kampung Arborek',
    category: 'guide',
    categoryLabel: 'Guide Raja Ampat',
    location: 'Selat Dampier, Raja Ampat',
    client: 'Keluarga & Komunitas Pecinta Bahari',
    year: '2024 - 2026',
    summary: 'Eksplorasi spot cleaning station Pari Manta raksasa di Manta Sandy, dilanjutkan dengan kunjungan budaya kerajinan anyaman topi pari di Desa Wisata Arborek.',
    highlights: [
      'Pemanduan etika mendekati Pari Manta tanpa mengganggu habitat',
      'Interaksi hangat dengan tetua dan anak-anak warga Kampung Arborek',
      'Snorkeling di dermaga Arborek dengan ribuan ikan schooling jackfish',
      'Mendukung ekonomi pariwisata berbasis masyarakat lokal'
    ],
    specs: {
      'Destinasi': 'Manta Sandy, Kampung Arborek, Pasir Timbul Mansuar, Yenbuba',
      'Aktivitas': 'Marine Life Snorkeling, Cultural Immersion, Local Handcrafts',
      'Durasi': 'Trip 1 Hari / Rangkaian Tour Dampier',
      'Status': 'Rute Terfavorit'
    },
    imageSrc: '/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg'
  },

  // 2. Teknisi CCTV & Keamanan
  {
    id: 'cctv-resort-kepulauan',
    title: 'Instalasi Sistem CCTV Wireless & Solar untuk Eco-Resort',
    category: 'cctv',
    categoryLabel: 'Teknisi CCTV',
    location: 'Pulau Mansuar, Raja Ampat',
    client: 'Eco-Resort & Dive Center Kepulauan',
    year: '2025',
    summary: 'Pemasangan 12 titik IP Camera outdoor tahan korosi air laut (IP67 weather-proof & anti-salt spray) terintegrasi sistem baterai tenaga surya dan pemantauan jarak jauh via Starlink.',
    highlights: [
      'Kamera outdoor tahan cuaca maritim ekstrem dan korosi garam',
      'Setup link wireless bridge jarak 800 meter antar dermaga dan kamar bungalow',
      'Konfigurasi NVR 16 channel dengan harddisk surveillance 4TB hemat daya',
      'Akses pemantauan real-time dari HP pemilik di Bali dan Sorong'
    ],
    specs: {
      'Perangkat': 'IP Camera 4MP ColorVu Night Vision, NVR 16Ch, PoE Switch Industrial',
      'Transmisi': 'Wireless Point-to-Multipoint 5GHz + Solar Backup',
      'Fitur': 'Human & Vehicle Detection, Two-way Audio di Dermaga',
      'Hasil': 'Area resort 100% terpantau 24/7 tanpa blindspot'
    }
  },
  {
    id: 'cctv-ruko-perkantoran-sorong',
    title: 'Sistem Keamanan Terpadu 16 Kamera Ruko Niaga & Gudang Logistik',
    category: 'cctv',
    categoryLabel: 'Teknisi CCTV',
    location: 'Klademak & Km. 8, Kota Sorong',
    client: 'Distributor Barang Konsumsi & Pergudangan Papua',
    year: '2024 - 2025',
    summary: 'Instalasi rapi menggunakan pipa conduit PVC pelindung kabel, menjangkau area kasir, bongkar muat logistik, brankas, dan perimeter pagar keliling toko.',
    highlights: [
      'Penarikan kabel UTP Cat6 terlindung rapi dan minim estetika rusak',
      'Penempatan angle strategis merekam plat nomor truk dan transaksi kasir',
      'Pemasangan monitor live 32 inch di ruang pimpinan dan pos satpam',
      'Aplikasi mobile Hik-Connect terinstal pada ponsel seluruh direksi'
    ],
    specs: {
      'Perangkat': 'Hikvision IP 5MP Audio Series, NVR 4K, HDD 8TB Surveillance',
      'Kabel': 'Belden Cat6 Outdoor & Indoor + Conduit Clips High Durability',
      'Keamanan': 'Smart Motion Alert, Line Crossing Detection malam hari',
      'Garansi': 'Layanan Garansi Instalasi & Maintenance 1 Tahun'
    }
  },
  {
    id: 'cctv-maritim-speedboat',
    title: 'Sistem Surveillance Khusus Kapal Phinisi Wisata & Speedboat',
    category: 'cctv',
    categoryLabel: 'Teknisi CCTV',
    location: 'Pelabuhan Rakyat & Marina Sorong',
    client: 'Operator Kapal Wisata Liveaboard Raja Ampat',
    year: '2025',
    summary: 'Instalasi kamera pengawas anti getaran pada ruang mesin (engine room), dek anjungan kemudi, dan dek tamu dengan sistem perekaman DVR shock-mounted.',
    highlights: [
      'Tahan getaran mesin diesel kapal dan kelembaban tinggi laut',
      'Kabel power & video bertaraf kelautan (Marine grade cabling)',
      'Pemantauan suhu ruang mesin secara visual dari anjungan nakhoda',
      'Perekaman offline mandiri dengan UPS anti lonjakan daya genset kapal'
    ],
    specs: {
      'Perangkat': 'AHD Shock-Proof Dome Cameras + Low-lux Starlight Sensor',
      'Daya': 'DC 12V/24V Converter terisolasi dari sistem aki kapal',
      'Monitoring': 'Layar kontrol 10" di dashboard kapten + HDMI ruang tamu',
      'Keunggulan': 'Meningkatkan standar keselamatan pelayaran wisata'
    }
  },

  // 3. IT Konsultan & Jaringan
  {
    id: 'it-starlink-resort',
    title: 'Pemasangan Starlink Satelit & Manajemen Bandwidth Mikrotik',
    category: 'it',
    categoryLabel: 'IT Konsultan',
    location: 'Pulau Gam & Arborek, Raja Ampat',
    client: 'Resort Bahari & Homestay Penginapan',
    year: '2024 - 2026',
    summary: 'Integrasi internet satelit Starlink Gen 2 & Gen 3 ke jaringan lokal resort menggunakan Mikrotik RouterOS untuk pembagian bandwidth adil antara operasional kantor dan tamu.',
    highlights: [
      'Instalasi bracket mast kokoh tahan hembusan angin badai laut',
      'Bypass router Starlink ke Mikrotik RB750Gr3 / RB4011',
      'Sistem voucher WiFi hotspot untuk monetisasi atau kuota tamu resort',
      'Prioritas bandwidth (QoS) untuk transaksi EDC, CCTV, & email manajer'
    ],
    specs: {
      'Satelit': 'Starlink Maritime / High Performance Kit',
      'Router': 'Mikrotik RouterBoard + Ubiquiti UniFi Long Range AP',
      'Jangkauan': 'Cover seluruh area restoran, pantai, dan 10 cottage',
      'Hasil': 'Koneksi stabil 120-220 Mbps di tengah kepulauan terpencil'
    }
  },
  {
    id: 'it-kantor-infrastruktur-sorong',
    title: 'Pembangunan Jaringan LAN Kantor, Server File NAS & WiFi Kantor',
    category: 'it',
    categoryLabel: 'IT Konsultan',
    location: 'Pusat Kota Sorong, Papua Barat Daya',
    client: 'Perusahaan Konsultan & Kantor Jasa Ekspedisi',
    year: '2024 - 2025',
    summary: 'Penataan ulang infrastruktur IT dari nol: instalasi rak server 9U, patch panel, switch gigabit terkelola (Managed Switch), instalasi NAS Synology untuk backup dokumen terpusat, dan konfigurasi printer sharing.',
    highlights: [
      'Penyusunan kabel data terstruktur (Structured Cabling & Labelling)',
      'Sistem backup otomatis berkala mencegah kehilangan data dokumen akibat ransomware',
      'Pemisahan jaringan staff kantor dengan jaringan tamu (VLAN Security)',
      'Kontrak perawatan berkala (Maintenance Support) hardware & software'
    ],
    specs: {
      'Infrastruktur': 'Rak Server Wallmount 9U, Switch Gigabit 24-Port, Patch Panel Cat6',
      'Server Storage': 'Synology DiskStation NAS 2-Bay RAID 1 Mirroring Data',
      'Keamanan': 'Firewall filter port, auto-block brute-force login, UPS 1200VA',
      'Outcome': 'Zero downtime kerja staff kantor & file sharing instan'
    }
  },

  // 4. Web Development
  {
    id: 'web-tour-travel-rajaampat',
    title: 'Platform Web Tour & Travel Raja Ampat Terintegrasi WhatsApp',
    category: 'web',
    categoryLabel: 'Web Development',
    location: 'Sorong & Global Market',
    client: 'Operator Lokal Wisata Raja Ampat',
    year: '2025',
    summary: 'Pengembangan website responsif modern untuk promosi paket tour Raja Ampat (Open Trip & Private Trip) dengan fitur kalkulator biaya, galeri resolusi tinggi, dan formulir booking instan langsung terkirim ke WhatsApp pemandu.',
    highlights: [
      'Desain modern, cepat dibuka di koneksi internet kepulauan',
      'Optimasi SEO Google untuk kata kunci "Guide Raja Ampat" & "Trip Sorong"',
      'Fitur itinerary interaktif hari-ke-hari dan daftar kelengkapan bawaan',
      'Koneksi direct booking via API WhatsApp resmi'
    ],
    specs: {
      'Teknologi': 'React, Tailwind CSS, TypeScript, Vite, Node.js API',
      'Fitur': 'Trip Filter, Cost Estimator, Multi-language (ID/EN), PWA Ready',
      'Performance': 'Google PageSpeed Score 95+ (Mobile & Desktop)',
      'Integrasi': 'WhatsApp Direct Chat, Google Maps Location Pin'
    }
  },
  {
    id: 'web-company-profile-sorong',
    title: 'Website Company Profile Jasa Teknik & Bengkel Konstruksi',
    category: 'web',
    categoryLabel: 'Web Development',
    location: 'Aimas & Sorong Timur',
    client: 'CV Karya Teknik Papua',
    year: '2024 - 2025',
    summary: 'Pembuatan website profil perusahaan terpercaya untuk memenangkan tender pengadaan dan proyek korporat dengan portofolio terperinci, katalog jasa, dan unduhan profil PDF.',
    highlights: [
      'Tampilan kredibel, profesional, dan mencerminkan kapabilitas teknik',
      'Domain kustom .id & email profesional (info@namausaha.co.id)',
      'Formulir permintaan penawaran harga (RFP) otomatis',
      'Halaman legalitas izin usaha & sertifikasi keahlian'
    ],
    specs: {
      'Platform': 'Modern Static Web Architecture + Fast CDN Hosting',
      'Domain & Email': 'Custom Domain Setup, Cloudflare Security, SSL Enforced',
      'SEO': 'Peringkat 1 Google Maps & Search untuk jasa lokal di Sorong'
    }
  }
];

export const SERVICE_PACKAGES = [
  {
    id: 'guide',
    title: 'Pemandu Wisata Spesialis Waigeo & Misool',
    badge: 'Guide Bahari & Petualangan',
    description: 'Pemanduan wisata bahari profesional fokus pada spot-spot terbaik Pulau Waigeo dan kawasan karst eksotis Misool bersama pemandu lokal berpengalaman yang menguasai rute dan keselamatan laut.',
    items: [
      'Pemanduan Eksklusif Spot Pulau Waigeo: Teluk Kabui, Yenbuba, Pasir Timbul, Friwen',
      'Ekspedisi Spot Karst Misool: Danau Ubur-ubur, Gua Tomolol, Balbulol, Yapap',
      'Spotting Pari Manta, Snorkeling Terumbu Karang & Pengamatan Cenderawasih',
      'Pengurusan Izin Konservasi / PIN BLUD Raja Ampat',
      'Rekomendasi & Penghubung Homestay Lokal / Penginapan'
    ],
    waMessage: 'Halo Kaka Yoko, saya ingin menggunakan jasa guide Anda untuk spot Waigeo / Misool. Bisa info ketersediaan jadwal?'
  },
  {
    id: 'cctv',
    title: 'Teknisi CCTV & Smart Security',
    badge: 'Keamanan 24/7 Online',
    description: 'Instalasi kamera pengawas profesional kualitas tinggi untuk ruko, kantor swasta/pemerintah, gudang, perumahan, resort pulau, dan kapal di Sorong & Papua Barat Daya.',
    items: [
      'Pemasangan IP Camera & Analog HD (Hikvision, Dahua, Uniview)',
      'Setting pantau online jarak jauh di Smartphone & Laptop',
      'Instalasi sistem solar cell & wireless bridge untuk pulau/remote area',
      'Perawatan rutin, backup rekaman, dan perbaikan DVR/NVR rusak',
      'Kamera outdoor tahan air & korosi hawa laut maritim'
    ],
    waMessage: 'Halo Kaka Yoko, saya ingin konsultasi pemasangan / perbaikan sistem CCTV di lokasi saya di Sorong. Bisa minta jadwal survey?'
  },
  {
    id: 'it',
    title: 'Konsultan IT & Jaringan Terpadu',
    badge: 'Infrastruktur & Satelit',
    description: 'Solusi teknologi informasi komprehensif mulai dari jaringan kabel LAN kantor, manajemen router Mikrotik, hingga instalasi satelit Starlink di wilayah tanpa sinyal seluler.',
    items: [
      'Instalasi & Bypass Starlink Satelit untuk pulau & remote area',
      'Setting Mikrotik RouterOS: Bandwidth limiter, voucher WiFi, failover',
      'Penarikan kabel data LAN Cat6 rapi dengan rak server & patch panel',
      'Setting server penyimpanan kantor (NAS Synology/TrueNAS)',
      'Troubleshooting komputer kerja, printer network, & sistem kasir POS'
    ],
    waMessage: 'Halo Kaka Yoko, saya butuh bantuan konsultasi IT / instalasi jaringan internet & Mikrotik di Sorong/Raja Ampat.'
  },
  {
    id: 'web',
    title: 'Web Development & Digital Solution',
    badge: 'Website Cepat & Kredibel',
    description: 'Pembuatan website profesional yang dirancang khusus untuk meningkatkan penjualan bisnis, mulai dari landing page, company profile perusahaan, hingga web tour & travel.',
    items: [
      'Website Tour & Travel Raja Ampat terintegrasi WhatsApp',
      'Company Profile perusahaan kontraktor, jasa, dan UMKM Sorong',
      'Desain ultra responsif di smartphone & loading super cepat',
      'Setup domain resmi (.my.id, .com, .id) & email bisnis',
      'Optimasi SEO agar mudah ditemukan turis dan klien di Google'
    ],
    waMessage: 'Halo Kaka Yoko, saya ingin membuat website untuk usaha saya. Bisa bantu konsultasikan konsep dan biayanya?'
  }
];

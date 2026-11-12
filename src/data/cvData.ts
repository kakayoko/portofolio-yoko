export interface WorkExperience {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  keyAchievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface CVProfile {
  fullName: string;
  nickname: string;
  tagline: string;
  domain: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  pdfUrl: string;
  pdfFilename: string;
  languages: { name: string; proficiency: string }[];
  summary: string;
  coreCompetencies: string[];
  experiences: WorkExperience[];
  education: {
    degree: string;
    institution: string;
    location: string;
    year: string;
    details: string;
  }[];
  certifications: Certification[];
  skillCategories: SkillCategory[];
}

export const CV_DATA: CVProfile = {
  fullName: 'Dwi Priyoko Takasihaeng',
  nickname: 'Kaka Yoko',
  tagline: 'S1 Sistem Informasi · IT Support & Networking · Teknisi CCTV · Guide Raja Ampat · K3 & First Aid Responder',
  domain: 'www.kakayoko.my.id',
  email: 'Yokotakasihaen9@Gmail.com',
  phone: '+62 823-9858-1997',
  location: 'Sorong, Papua Barat Daya',
  nationality: 'Indonesia',
  pdfUrl: '/assets/aistudio/CV_Dwi_Priyoko_Takasihaeng_38bba1bb.pdf',
  pdfFilename: 'CV_Dwi_Priyoko_Takasihaeng.pdf',
  languages: [
    { name: 'Bahasa Indonesia', proficiency: 'Native / Aktif' },
    { name: 'Bahasa Inggris', proficiency: 'Pasif / Menengah' }
  ],
  summary: 'Individu yang disiplin, berdedikasi tinggi, dan cekatan dalam bekerja. Berkomitmen penuh pada loyalitas waktu serta tanggung jawab kerja, memiliki motivasi tinggi untuk terus mengembangkan potensi diri guna memberikan kontribusi terbaik, selalu belajar hal - hal baru.',
  
  coreCompetencies: [
    'Administration & Digital Tools',
    'Web Development & CMS',
    'IT Support & Troubleshooting',
    'Networking Support (LAN/WAN)',
    'Problem Solving & Analytical Thinking',
    'Digital Branding & Creative Design',
    'First Aid & Emergency Response',
    'CCTV Installation & Smart Surveillance'
  ],

  experiences: [
    {
      role: 'Magang / Asisten Safety Officer',
      organization: 'Petrogas Basin',
      location: 'Site NWK, Sorong, Papua Barat Daya',
      period: 'Juni 2026 – Agustus 2026',
      type: 'Proyek Migas',
      responsibilities: [
        'Melakukan praktik lapangan mempelajari sistem manajemen Keselamatan dan Kesehatan Kerja (K3) bersama praktisi senior.',
        'Memantau kepatuhan pekerja terhadap penggunaan Alat Pelindung Diri (APD) dan prosedur kerja aman.',
        'Mengidentifikasi area kerja berisiko tinggi serta menyusun dokumentasi laporan inspeksi keselamatan harian.',
        'Mendukung kesiapan tim dalam tanggap darurat (emergency response) di area operasional kerja.'
      ]
    },
    {
      role: 'Driver Ambulance (International SOS)',
      organization: 'PT. Asih Eka Abadi (Seconded to Petrogas Basin)',
      location: 'Site NWK, Sorong, Papua Barat Daya',
      period: 'Mei 2026 – Agustus 2026',
      type: 'Tanggap Darurat Medis & Migas',
      responsibilities: [
        'Bertanggung jawab sebagai pengemudi ambulance dan tim medis pendukung dalam proyek migas Petrogas Basin.',
        'Membantu paramedis First Aid dalam penanganan insiden darurat dan pertolongan pertama di area site.',
        'Melaksanakan prosedur Drilling Ambulance secara berkala untuk memastikan kesiapan operasional kendaraan dan peralatan medis.'
      ]
    },
    {
      role: 'Driver Ambulance (International SOS)',
      organization: 'PT. Asih Eka Abadi (Seconded to Petrogas Basin)',
      location: 'Site KARIM, Sorong, Papua Barat Daya',
      period: 'November 2025 – Februari 2026',
      type: 'Operasional RIG 3 Karim',
      responsibilities: [
        'Bertugas pada proyek pengeboran migas Petrogas di RIG 3 Karim Sorong.',
        'Memiliki sertifikasi DDT (Defensive Driving Training) dan First Aid 1-2 dalam mendukung tugas tanggap darurat.',
        'Merawat dan menginspeksi kesiapan ambulans serta membantu tim medis selama masa operasional proyek.'
      ]
    },
    {
      role: 'Freelance IT Support & Instalasi CCTV',
      organization: 'Bank Mandiri',
      location: 'Sorong, Papua Barat',
      period: 'November 2019 – Desember 2019',
      type: 'Perbankan & Infrastruktur',
      responsibilities: [
        'Network & Infrastructure Engineer: Mengatur dan merawat infrastruktur jaringan agar transaksi digital berjalan stabil dan lancar.',
        'IT Support / Helpdesk: Membantu mengatasi masalah perangkat keras, perangkat lunak, dan jaringan komputer di kantor pusat maupun cabang.',
        'Melakukan pemasangan dan konfigurasi sistem CCTV untuk keamanan kantor operasional.'
      ]
    },
    {
      role: 'IT Support & Network Specialist',
      organization: 'PT Albidaya Esra Sejahtera',
      location: 'Kota Sorong, Papua Barat',
      period: 'Januari 2018 – September 2019',
      type: 'Teknologi & Sistem Informasi',
      responsibilities: [
        'Helpdesk Support: Memberikan bantuan teknis bagi pengguna komputer terkait sistem informasi data dan software operasional.',
        'Networking Support: Merancang dan membangun infrastruktur jaringan komputer (LAN/WAN) yang terhubung aman ke internet.',
        'Software & System Admin: Menginstal software perusahaan, aplikasi server, Microsoft Office, serta pemeliharaan sistem berkala.',
        'Admin Support: Mengelola dan mendokumentasikan pencatatan aset IT perusahaan ke dalam database terstruktur.'
      ]
    },
    {
      role: 'Freelance Guide Spesialis Spot Waigeo & Misool',
      organization: 'Pemanduan Wisata Mandiri & Tamu Ekspedisi Raja Ampat',
      location: 'Spot Pulau Waigeo & Kepulauan Misool',
      period: '2020 – Sekarang',
      type: 'Pariwisata Bahari & Pemandu Lapangan',
      responsibilities: [
        'Memandu trip wisata bahari khusus pada spot-spot terbaik Pulau Waigeo (Teluk Kabui, Yenbuba, Pasir Timbul, Friwen, spot Cenderawasih) dan kawasan eksotis Misool (Danau Ubur-ubur, Gua Tomolol, Balbulol).',
        'Mengutamakan standar keselamatan laut (First Aid & emergency response), perizinan konservasi BLUD, serta penghubung homestay masyarakat adat lokal.'
      ]
    }
  ],

  education: [
    {
      degree: 'S1 Sistem Informasi',
      institution: 'Universitas Victory Sorong',
      location: 'Kota Sorong, Papua Barat Daya',
      year: '2019',
      details: 'Pendidikan sarjana dengan fokus pada arsitektur sistem informasi komputer, database terstruktur, rekayasa perangkat lunak, dan manajemen teknologi informasi.'
    },
    {
      degree: 'Teknik Komputer & Jaringan (TKJ)',
      institution: 'SMK Negeri 1 Kota Sorong',
      location: 'Kota Sorong, Papua Barat Daya',
      year: '2015',
      details: 'Kompetensi kejuruan dalam perakitan perangkat keras PC, crimping kabel UTP/STP, instalasi sistem operasi Windows & Linux, konfigurasi LAN/WAN, dan administrasi server.'
    }
  ],

  certifications: [
    {
      name: 'Sistem Administrasi Jaringan',
      issuer: 'Pemerintah Provinsi Papua Barat (Pemprov)',
      year: '2026',
      description: 'Sertifikasi kompetensi pengelolaan dan konfigurasi infrastruktur administrasi jaringan komputer pemerintahan.'
    },
    {
      name: 'Defensive Driving Training (DDT)',
      issuer: 'Sertifikasi Keselamatan Berkendara Industri Migas',
      year: '2025',
      description: 'Pelatihan teknik mengemudi aman dan defensif untuk kendaraan tanggap darurat (ambulance) pada medan proyek migas.'
    },
    {
      name: 'First Aid & Sertifikasi Petugas P3K',
      issuer: 'Sertifikasi Tanggap Darurat & Pertolongan Pertama',
      year: '2025',
      description: 'Kualifikasi respon cepat insiden darurat, CPR dasar, pertolongan pertama kecelakaan kerja, dan koordinasi medis darurat.'
    },
    {
      name: 'Multimedia Service',
      issuer: 'LSP TIK / Kementerian Kominfo',
      year: '2018',
      description: 'Sertifikasi standar kompetensi kerja nasional untuk layanan pengolahan multimedia digital dan konten kreatif.'
    },
    {
      name: 'Digital Imaging',
      issuer: 'Kementerian Komunikasi dan Informatika (Kemkominfo)',
      year: '2017',
      description: 'Keahlian pengolahan citra digital, desain grafis komputer, dan digital branding.'
    },
    {
      name: 'Teknik Komputer dan Jaringan',
      issuer: 'Kementerian Pendidikan dan Kebudayaan (Kemdikbud)',
      year: '2014/2015',
      description: 'Sertifikasi keahlian kejuruan instalasi komputer dan jaringan terstandar nasional.'
    }
  ],

  skillCategories: [
    {
      title: 'IT Infrastructure & Networking Support',
      skills: [
        { name: 'Networking Support (LAN/WAN / Mikrotik)', level: 95 },
        { name: 'IT Support & Hardware/Software Troubleshooting', level: 95 },
        { name: 'Instalasi & Konfigurasi CCTV (IP Cam & Analog)', level: 92 },
        { name: 'System Admin, Windows/Linux Server & Office', level: 90 },
        { name: 'Koneksi Satelit Starlink & Failover', level: 90 }
      ]
    },
    {
      title: 'Web Development & Digital Tools',
      skills: [
        { name: 'Web Development & CMS (React, HTML5, CSS3, JS)', level: 88 },
        { name: 'Administration & Digital Tools', level: 95 },
        { name: 'Digital Branding & Creative Design', level: 90 },
        { name: 'Domain Management & WhatsApp Integration', level: 92 },
        { name: 'Database Management & Asset Tracking', level: 88 }
      ]
    },
    {
      title: 'K3, First Aid & Emergency Response',
      skills: [
        { name: 'First Aid & Emergency Response (P3K)', level: 95 },
        { name: 'Defensive Driving & Kesiapan Ambulance', level: 92 },
        { name: 'Inspeksi K3 & Kepatuhan APD Lapangan', level: 90 },
        { name: 'Tanggap Darurat Operasional Site Migas', level: 92 }
      ]
    },
    {
      title: 'Pemanduan & Kemaritiman Raja Ampat',
      skills: [
        { name: 'Pemanduan Wisata Bahari Raja Ampat', level: 95 },
        { name: 'Pemanduan Lapangan Spot Waigeo & Misool', level: 95 },
        { name: 'Pengetahuan Biota Karst & Snorkeling Spots', level: 92 },
        { name: 'Kearifan Lokal & Komunikasi Ramah', level: 96 }
      ]
    }
  ]
};

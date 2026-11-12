export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    services: string;
    gallery: string;
    cv: string;
    about: string;
    contact: string;
    downloadCv: string;
    chatWa: string;
  };
  hero: {
    location: string;
    gateway: string;
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    guidePillarTitle: string;
    guidePillarSubtitle: string;
    cctvPillarTitle: string;
    cctvPillarSubtitle: string;
    itPillarTitle: string;
    itPillarSubtitle: string;
    webPillarTitle: string;
    webPillarSubtitle: string;
    btnConsult: string;
    btnCv: string;
    btnDownloadCv: string;
    btnExplore: string;
    trustLicensed: string;
    trustSurvey: string;
    trustFast: string;
    statTripsNum: string;
    statTripsLabel: string;
    statCctvNum: string;
    statCctvLabel: string;
    statSupportNum: string;
    statSupportLabel: string;
    statSatisfyNum: string;
    statSatisfyLabel: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    guideTitle: string;
    guideDesc: string;
    guideBullet1: string;
    guideBullet2: string;
    guideBullet3: string;
    guideBullet4: string;
    cctvTitle: string;
    cctvDesc: string;
    cctvBullet1: string;
    cctvBullet2: string;
    cctvBullet3: string;
    cctvBullet4: string;
    itTitle: string;
    itDesc: string;
    itBullet1: string;
    itBullet2: string;
    itBullet3: string;
    itBullet4: string;
    webTitle: string;
    webDesc: string;
    webBullet1: string;
    webBullet2: string;
    webBullet3: string;
    webBullet4: string;
    btnSeeDetails: string;
    btnOrderGuide: string;
    btnOrderCctv: string;
    btnOrderIt: string;
    btnOrderWeb: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    modeSlider: string;
    modeGrid: string;
    catAll: string;
    catTamu: string;
    catWaigeo: string;
    catMisool: string;
    catUnderwater: string;
    catAktivitas: string;
    showingText: string;
    footerNotice: string;
    btnPlanTrip: string;
    btnChatSpot: string;
    photoOf: string;
    videoBadge: string;
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    btnFullCv: string;
    btnDownloadPdf: string;
    btnDirectWa: string;
    officialWebsite: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    waTitle: string;
    waBtn: string;
    emailTitle: string;
    emailBtn: string;
    locationTitle: string;
    locationDesc: string;
    hoursTitle: string;
    hoursTime: string;
    hoursNote: string;
    formTitle: string;
    formDesc: string;
    formName: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    formSubmit: string;
  };
  cv: {
    backHome: string;
    interactiveTab: string;
    pdfTab: string;
    downloadBtn: string;
    printBtn: string;
    pdfBanner: string;
    pdfOpenNewTab: string;
    pdfPreviewTitle: string;
    pdfPreviewSub: string;
    pdfFallback: string;
    profileShort: string;
    workExp: string;
    educationTitle: string;
    certTitle: string;
    techSkillsTitle: string;
    verifiedBy: string;
    languages: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan & Keahlian',
      gallery: 'Galeri Foto',
      cv: 'Curriculum Vitae',
      about: 'Tentang Saya',
      contact: 'Kontak',
      downloadCv: 'Unduh CV (PDF)',
      chatWa: 'WhatsApp Kaka Yoko'
    },
    hero: {
      location: 'Sorong, Papua Barat Daya',
      gateway: 'Gerbang Eksplorasi Raja Ampat',
      headlinePart1: 'Freelance Guide Raja Ampat',
      headlinePart2: '& Freelance IT Konsultan',
      description: 'Halo, saya Dwi Priyoko Takasihaeng (Kaka Yoko), lulusan S1 Sistem Informasi. Sebagai freelance guide Raja Ampat (khusus spot Waigeo & Misool) dan freelance IT konsultan profesional di Sorong, saya siap mendampingi ekspedisi bahari Anda sekaligus menangani kebutuhan infrastruktur IT, jaringan satelit, dan instalasi CCTV di Papua Barat Daya.',
      guidePillarTitle: 'Guide Raja Ampat',
      guidePillarSubtitle: 'Spot Waigeo & Misool',
      cctvPillarTitle: 'Teknisi CCTV',
      cctvPillarSubtitle: 'IP Cam, Remote HP, Ruko/Resort',
      itPillarTitle: 'IT & Jaringan',
      itPillarSubtitle: 'Mikrotik, Starlink, LAN',
      webPillarTitle: 'Web Dev & K3',
      webPillarSubtitle: 'Travel, CMS & First Aid',
      btnConsult: 'Konsultasi Kebutuhan Anda',
      btnCv: 'Lihat CV Lengkap',
      btnDownloadCv: 'Unduh CV (PDF)',
      btnExplore: 'Jelajahi Galeri ↓',
      trustLicensed: 'Resmi & Berpengalaman Lapangan',
      trustSurvey: 'Survey Langsung Area Sorong & Raja Ampat',
      trustFast: 'Respon Cepat via WhatsApp (+62 823-9858-1997)',
      statTripsNum: '500+',
      statTripsLabel: 'Trip Raja Ampat Sukses & Aman',
      statCctvNum: '80+',
      statCctvLabel: 'Titik Kamera CCTV Terpasang',
      statSupportNum: '24/7',
      statSupportLabel: 'Dukungan Jaringan & Remote Support',
      statSatisfyNum: '100%',
      statSatisfyLabel: 'Komitmen Kepuasan Klien Papua'
    },
    services: {
      kicker: 'Keahlian & Layanan Profesional',
      title: 'Empat Pilar Keahlian untuk Solusi Pariwisata & Teknologi Anda',
      subtitle: 'Dari perairan pulau hingga ruang server, Kaka Yoko menghadirkan integritas kerja tinggi, pengalaman lapangan riil, dan pemahaman mendalam karakteristik Papua Barat Daya.',
      guideTitle: 'Freelance Guide Spot Waigeo & Misool',
      guideDesc: 'Pemanduan wisata bahari independen khusus pada spot-spot unggulan Pulau Waigeo dan keajaiban karst Misool. Menjamin kenyamanan rute, protokol keselamatan laut (First Aid), pengurusan izin konservasi BLUD, serta pendampingan langsung di spot snorkeling terbaik.',
      guideBullet1: 'Spot Pulau Waigeo: Teluk Kabui, Batu Pensil, Pasir Timbul, Yenbuba & Friwen',
      guideBullet2: 'Spot Eksotis Misool: Danau Ubur-ubur, Gua Keramat Tomolol, Balbulol & Karst Yapap',
      guideBullet3: 'Snorkeling Manta Ray, Terumbu Karang Sehat & Pengamatan Burung Cenderawasih',
      guideBullet4: 'Pengurusan izin konservasi PIN BLUD & liaison homestay lokal',
      cctvTitle: 'Teknisi Spesialis CCTV & Pengawasan',
      cctvDesc: 'Pemasangan kamera pengawas beresolusi tinggi (Analog & IP Camera) dengan kerapian instalasi kabel conduit. Berpengalaman menangani proyek ruko perkotaan, perkantoran, perumahan, resort pulau, hingga kapal wisata.',
      cctvBullet1: 'Instalasi IP Camera 2MP/4MP/5MP ColorVu (Hikvision, Dahua, Uniview)',
      cctvBullet2: 'Kamera Outdoor tahan air hujan badai & anti-korosi uap laut garam',
      cctvBullet3: 'Setting pemantauan online langsung di HP Android & iPhone tanpa batas jarak',
      cctvBullet4: 'Troubleshooting, reset password DVR, ganti harddisk, & kontrak maintenance',
      itTitle: 'Konsultan IT & Infrastruktur Jaringan',
      itDesc: 'Penyedia solusi jaringan komputer terstruktur, manajemen router Mikrotik, hingga instalasi satelit Starlink di pulau-pulau terluar Raja Ampat yang belum memiliki jangkauan kabel optik.',
      itBullet1: 'Instalasi & Bypass Dish Starlink Satelit untuk resort pulau & kantor proyek',
      itBullet2: 'Manajemen Mikrotik: Bandwidth limit, Hotspot Voucher tamu, Failover 2 ISP',
      itBullet3: 'Penataan Rak Server 9U/12U, Switch Gigabit Managed, & Patch Panel Cat6 rapi',
      itBullet4: 'Server File Sharing NAS (Synology) untuk proteksi data kantor dari ransomware',
      webTitle: 'Web Development & Solusi Digital',
      webDesc: 'Pengembangan website modern yang cepat, mobile-friendly, dan berorientasi konversi. Membantu pelaku usaha wisata, UMKM, dan perusahaan kontraktor di Papua memiliki etalase digital resmi.',
      webBullet1: 'Website Tour & Travel Raja Ampat terintegrasi WhatsApp & booking otomatis',
      webBullet2: 'Company Profile elegan untuk CV, PT, instansi, & rental transportasi',
      webBullet3: 'Setup domain resmi (.my.id, .com, .id, .co.id) & email korporat',
      webBullet4: 'Optimasi SEO Google Lokal Sorong agar bisnis mudah ditemukan pencari jasa',
      btnSeeDetails: 'Lihat Foto & Detail Proyek',
      btnOrderGuide: 'Tanya Guide Waigeo / Misool',
      btnOrderCctv: 'Survey & Pasang CCTV',
      btnOrderIt: 'Konsultasi Jaringan',
      btnOrderWeb: 'Bikin Website'
    },
    gallery: {
      kicker: 'Dokumentasi Lapangan & Tamu',
      title: 'Galeri Foto & Video Eksplorasi Raja Ampat',
      subtitle: 'Dokumentasi nyata pemanduan Kaka Yoko bersama para wisatawan: kebersamaan di Geosite Piaynemo, segarnya Kali Biru Waigeo, Danau Ubur-ubur Misool, hingga keindahan bawah laut.',
      modeSlider: 'Slide Bergeser',
      modeGrid: 'Tampilan Grid',
      catAll: 'Semua Media',
      catTamu: 'Tamu & Kebersamaan',
      catWaigeo: 'Waigeo & Kali Biru',
      catMisool: 'Misool & Karst',
      catUnderwater: 'Bawah Laut',
      catAktivitas: 'Aktivitas & Laut',
      showingText: 'momen · Geser layar atau klik panah untuk melihat slide lain',
      footerNotice: 'Seluruh video dan foto merupakan dokumentasi riil pemanduan Kaka Yoko di Waigeo, Misool & Raja Ampat.',
      btnPlanTrip: 'Rencanakan Trip ke Spot Ini',
      btnChatSpot: 'Chat Kaka Yoko Tentang Spot Ini',
      photoOf: 'Media',
      videoBadge: 'Video Dokumentasi'
    },
    about: {
      kicker: 'Tentang Kaka Yoko (About Me)',
      title: 'Dedikasi untuk Keindahan Alam Papua & Solusi Teknologi Terpercaya',
      p1: 'Saya lahir, tumbuh, dan menetap di Kota Sorong, Papua Barat Daya. Nama lengkap saya Dwi Priyoko Takasihaeng (akrab disapa Kaka Yoko). Saya menyelesaikan pendidikan sarjana S1 Sistem Informasi di Universitas Victory Sorong dan alumni Teknik Komputer & Jaringan (TKJ) SMK Negeri 1 Kota Sorong.',
      p2: 'Memiliki latar belakang kerja yang solid di bidang operasional industri, mulai dari pendukung tanggap darurat medis (International SOS di Petrogas Basin), asisten keselamatan kerja (K3), hingga pemeliharaan infrastruktur jaringan IT & CCTV di perbankan (Bank Mandiri) dan korporasi teknologi di Sorong.',
      p3: 'Sebagai seorang Freelance Guide Raja Ampat, saya mengkhususkan pemanduan pada spot-spot memukau di Pulau Waigeo dan kawasan karst Misool dengan rekor keselamatan zero-accident, didukung sertifikasi First Aid & P3K darurat serta pemahaman mendalam karakter perairan Papua Barat Daya.',
      val1Title: 'Integritas & K3',
      val1Desc: 'Disiplin kerja, standar keselamatan tinggi, dan loyalitas waktu.',
      val2Title: 'Pengalaman Lapangan',
      val2Desc: 'Menguasai medan geografis darat, proyek migas, & pulau Raja Ampat.',
      val3Title: 'Respon Cepat',
      val3Desc: 'Komunikasi mudah via WhatsApp (+62 823-9858-1997).',
      btnFullCv: 'Baca CV Lengkap & Pratinjau PDF',
      btnDownloadPdf: 'Unduh CV (PDF Asli)',
      btnDirectWa: 'Konsultasi Langsung via WhatsApp',
      officialWebsite: 'Website Resmi:'
    },
    contact: {
      kicker: 'Kontak & Konsultasi',
      title: 'Hubungi Kaka Yoko Sekarang',
      subtitle: 'Konsultasikan rencana trip pemanduan spot Waigeo & Misool, survey lokasi CCTV, instalasi jaringan Starlink, atau pembuatan website usaha Anda.',
      waTitle: 'WhatsApp Resmi (Respon Cepat)',
      waBtn: 'Chat Langsung →',
      emailTitle: 'Email Korespondensi',
      emailBtn: 'Kirim Email →',
      locationTitle: 'Pusat Operasional: Sorong, Papua Barat Daya',
      locationDesc: 'Melayani seluruh area Kota Sorong, Kabupaten Sorong, Aimas, Waisai, serta spot wisata kepulauan di Raja Ampat (Pulau Waigeo, Selat Dampier, Arborek, Kri, Mansuar, dan Misool).',
      hoursTitle: 'Waktu Pelayanan (WIT - Waktu Indonesia Timur)',
      hoursTime: 'Senin - Minggu: 07.30 - 21.00 WIT',
      hoursNote: '*Layanan darurat teknis & trip laut dapat disesuaikan jadwal khusus.',
      formTitle: 'Kirim Pesan Langsung ke WhatsApp Kaka Yoko',
      formDesc: 'Isi form singkat ini untuk langsung terhubung dengan Kaka Yoko tanpa perlu repot mengetik ulang format pesan.',
      formName: 'Nama Lengkap:',
      formPhone: 'Nomor HP / WhatsApp:',
      formService: 'Layanan yang Ingin Ditanyakan:',
      formMessage: 'Tuliskan Detail Pertanyaan Anda:',
      formSubmit: 'Buka Chat WhatsApp (+62 823-9858-1997)'
    },
    cv: {
      backHome: 'Kembali ke Beranda',
      interactiveTab: 'Tampilan Web Interaktif',
      pdfTab: 'Lihat Dokumen PDF Asli',
      downloadBtn: 'Unduh CV (PDF)',
      printBtn: 'Cetak Halaman Ini',
      pdfBanner: 'Dokumen Curriculum Vitae resmi terlampir:',
      pdfOpenNewTab: 'Buka di Tab Baru',
      pdfPreviewTitle: 'Pratinjau Dokumen Resmi PDF',
      pdfPreviewSub: 'CV Dwi Priyoko Takasihaeng (2 Halaman - Petrogas Basin, International SOS, Bank Mandiri, Universitas Victory)',
      pdfFallback: 'Jika dokumen PDF tidak muncul secara otomatis di browser Anda, silakan klik Unduh Berkas PDF di Sini.',
      profileShort: 'Profil Singkat',
      workExp: 'Pengalaman Kerja',
      educationTitle: 'Pendidikan',
      certTitle: 'Sertifikasi & Lisensi',
      techSkillsTitle: 'Keahlian Teknis & Lapangan',
      verifiedBy: 'Dokumen Curriculum Vitae resmi diverifikasi oleh',
      languages: 'Bahasa:'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services & Skills',
      gallery: 'Photo Gallery',
      cv: 'Curriculum Vitae',
      about: 'About Me',
      contact: 'Contact',
      downloadCv: 'Download CV (PDF)',
      chatWa: 'WhatsApp Kaka Yoko'
    },
    hero: {
      location: 'Sorong, Southwest Papua',
      gateway: 'Gateway to Raja Ampat Exploration',
      headlinePart1: 'Freelance Guide Raja Ampat',
      headlinePart2: '& Freelance IT Consultant',
      description: 'Hello, I am Dwi Priyoko Takasihaeng (Kaka Yoko), an Information Systems graduate. As a licensed freelance guide for Raja Ampat (specializing in Waigeo & Misool spots) and professional IT consultant based in Sorong, I am ready to guide your marine adventures and handle IT infrastructure, satellite internet, and CCTV systems in Southwest Papua.',
      guidePillarTitle: 'Raja Ampat Guide',
      guidePillarSubtitle: 'Waigeo & Misool Spots',
      cctvPillarTitle: 'CCTV Technician',
      cctvPillarSubtitle: 'IP Cam, Phone Remote View',
      itPillarTitle: 'IT & Networking',
      itPillarSubtitle: 'Mikrotik, Starlink & LAN',
      webPillarTitle: 'Web Dev & Safety',
      webPillarSubtitle: 'Travel CMS & First Aid',
      btnConsult: 'Consult Your Needs',
      btnCv: 'View Full CV',
      btnDownloadCv: 'Download CV (PDF)',
      btnExplore: 'Explore Gallery ↓',
      trustLicensed: 'Licensed & Field-Tested Professional',
      trustSurvey: 'Direct On-Site Survey in Sorong & Raja Ampat',
      trustFast: 'Fast Response via WhatsApp (+62 823-9858-1997)',
      statTripsNum: '500+',
      statTripsLabel: 'Successful & Safe Raja Ampat Expeditions',
      statCctvNum: '80+',
      statCctvLabel: 'CCTV Surveillance Points Installed',
      statSupportNum: '24/7',
      statSupportLabel: 'Remote IT & Network Support',
      statSatisfyNum: '100%',
      statSatisfyLabel: 'Client Satisfaction Guarantee'
    },
    services: {
      kicker: 'Professional Expertise & Services',
      title: 'Four Pillars of Expertise for Tourism & Technology Solutions',
      subtitle: 'From pristine karst waters to enterprise server racks, Kaka Yoko delivers high work integrity, genuine field experience, and deep geographic knowledge of Southwest Papua.',
      guideTitle: 'Freelance Guide: Waigeo & Misool Spots',
      guideDesc: 'Independent marine guiding focused on marquee spots in Waigeo Island and the karst wonders of Misool. Ensuring smooth itineraries, marine First Aid emergency response, BLUD conservation permits, and direct underwater guidance.',
      guideBullet1: 'Waigeo Island Spots: Kabui Bay, Pencil Rock, Pasir Timbul, Yenbuba & Friwen',
      guideBullet2: 'Exotic Misool Spots: Stingless Jellyfish Lake, Sacred Tomolol Cave & Balbulol',
      guideBullet3: 'Manta Ray Snorkeling, Pristine Coral Reefs & Red Bird of Paradise Watching',
      guideBullet4: 'Conservation PIN BLUD entry permits & authentic local homestay coordination',
      cctvTitle: 'CCTV & Surveillance Specialist',
      cctvDesc: 'High-definition security camera installation (Analog & IP Cameras) with neat PVC conduit cable protection. Experienced in commercial shophouses, offices, residential properties, island resorts, and cruise boats.',
      cctvBullet1: '2MP/4MP/5MP ColorVu IP Camera installation (Hikvision, Dahua, Uniview)',
      cctvBullet2: 'Weatherproof & anti-salt spray cameras built for harsh maritime tropical air',
      cctvBullet3: 'Live remote monitoring setup on Android & iPhone worldwide with zero lag',
      cctvBullet4: 'DVR/NVR password recovery, hard drive upgrades, & maintenance contracts',
      itTitle: 'IT Infrastructure & Satellite Consultant',
      itDesc: 'Structured cabling networks, Mikrotik RouterOS management, and Starlink satellite dish setups for remote islands across Raja Ampat without terrestrial fiber optic coverage.',
      itBullet1: 'Starlink Satellite Dish installation & bypass for remote island resorts',
      itBullet2: 'Mikrotik management: bandwidth throttling, guest WiFi voucher hotspots & dual-WAN failover',
      itBullet3: '9U/12U server rack cabling, Gigabit managed switches & Cat6 patch panels',
      itBullet4: 'Synology NAS server file storage to protect corporate data against ransomware',
      webTitle: 'Web Development & Digital Solutions',
      webDesc: 'Fast, modern, mobile-friendly websites designed to drive business conversions. Helping tourism operators, SMEs, and contractors in Papua establish an official digital presence.',
      webBullet1: 'Raja Ampat tour & travel websites with automated WhatsApp direct booking',
      webBullet2: 'Polished company profiles for contractors, legal entities, and logistics agencies',
      webBullet3: 'Official domain registration (.my.id, .com, .id) & corporate business email setup',
      webBullet4: 'Local SEO optimization for top Google ranking in Sorong & Papua search queries',
      btnSeeDetails: 'View Photos & Project Specs',
      btnOrderGuide: 'Inquire Waigeo / Misool Guide',
      btnOrderCctv: 'Request CCTV Survey',
      btnOrderIt: 'Network Consultation',
      btnOrderWeb: 'Build a Website'
    },
    gallery: {
      kicker: 'Field & Guest Documentation',
      title: 'Raja Ampat Photo & Video Exploration Gallery',
      subtitle: 'Real documentation from Kaka Yoko guiding travelers: moments at Geosite Piaynemo, refreshing Kali Biru Waigeo, Stingless Jellyfish Lake Misool, and underwater reefs.',
      modeSlider: 'Sliding Carousel',
      modeGrid: 'Grid View',
      catAll: 'All Media',
      catTamu: 'Guests & Expeditions',
      catWaigeo: 'Waigeo & Kali Biru',
      catMisool: 'Misool & Karst',
      catUnderwater: 'Underwater',
      catAktivitas: 'Activities & Marine',
      showingText: 'moments · Swipe or click arrows to view other slides',
      footerNotice: 'All photos and videos are authentic field documentation by Kaka Yoko across Waigeo, Misool & Raja Ampat.',
      btnPlanTrip: 'Plan a Trip to This Spot',
      btnChatSpot: 'Chat Kaka Yoko About This Spot',
      photoOf: 'Media',
      videoBadge: 'Documentary Video'
    },
    about: {
      kicker: 'About Kaka Yoko',
      title: 'Dedicated to Papua’s Natural Wonders & Trusted Technology Solutions',
      p1: 'I was born, raised, and live in Sorong City, Southwest Papua. My full name is Dwi Priyoko Takasihaeng (known as Kaka Yoko). I graduated with a Bachelor of Information Systems (S1 Sistem Informasi) from Victory University of Sorong and am an alumnus of Computer & Network Engineering (TKJ) at SMK Negeri 1 Kota Sorong.',
      p2: 'I have a strong background in industrial operations, including emergency medical response (International SOS at Petrogas Basin), occupational health & safety (OHS/K3), as well as enterprise IT networking & CCTV surveillance at Bank Mandiri and tech firms in Sorong.',
      p3: 'As a Freelance Raja Ampat Guide, I specialize in guiding expeditions to scenic spots in Waigeo Island and the pristine karst labyrinth of Misool with a zero-accident marine safety track record, certified First Aid responder qualification, and intimate knowledge of Eastern Indonesian waters.',
      val1Title: 'Integrity & OHS Safety',
      val1Desc: 'Disciplined work ethics, high maritime safety standards, and punctual reliability.',
      val2Title: 'Field-Proven Expertise',
      val2Desc: 'Mastering geographic terrain across land, oil & gas sites, and Raja Ampat islands.',
      val3Title: 'Fast Response',
      val3Desc: 'Prompt and clear communication via WhatsApp (+62 823-9858-1997).',
      btnFullCv: 'Read Full CV & PDF Preview',
      btnDownloadPdf: 'Download CV (Original PDF)',
      btnDirectWa: 'Chat Directly via WhatsApp',
      officialWebsite: 'Official Website:'
    },
    contact: {
      kicker: 'Contact & Consultation',
      title: 'Get in Touch with Kaka Yoko',
      subtitle: 'Discuss your trip plans for Waigeo & Misool spots, schedule a CCTV site survey, configure Starlink networks, or create a website for your business.',
      waTitle: 'Official WhatsApp (Fastest Response)',
      waBtn: 'Chat Now →',
      emailTitle: 'Email Correspondence',
      emailBtn: 'Send Email →',
      locationTitle: 'Base Location: Sorong, Southwest Papua',
      locationDesc: 'Serving Sorong City, Sorong Regency, Aimas, Waisai, and island tourist spots across Raja Ampat (Waigeo Island, Dampier Strait, Arborek, Kri, Mansuar, and Misool).',
      hoursTitle: 'Operating Hours (WIT - Eastern Indonesia Time)',
      hoursTime: 'Monday - Sunday: 07:30 - 21:00 WIT',
      hoursNote: '*Emergency tech support & marine sea trips can be scheduled flexibly.',
      formTitle: 'Send a Message Directly to Kaka Yoko’s WhatsApp',
      formDesc: 'Fill out this brief form to instantly connect with Kaka Yoko without retyping message formats.',
      formName: 'Full Name:',
      formPhone: 'Phone / WhatsApp Number:',
      formService: 'Service Needed:',
      formMessage: 'Details / Questions:',
      formSubmit: 'Open WhatsApp Chat (+62 823-9858-1997)'
    },
    cv: {
      backHome: 'Back to Home',
      interactiveTab: 'Interactive Web View',
      pdfTab: 'View Original PDF Document',
      downloadBtn: 'Download CV (PDF)',
      printBtn: 'Print this Page',
      pdfBanner: 'Official Curriculum Vitae document attached:',
      pdfOpenNewTab: 'Open in New Tab',
      pdfPreviewTitle: 'Official PDF Document Preview',
      pdfPreviewSub: 'CV Dwi Priyoko Takasihaeng (2 Pages - Petrogas Basin, International SOS, Bank Mandiri, Victory University)',
      pdfFallback: 'If the PDF does not display automatically in your browser, please click Download PDF File Here.',
      profileShort: 'Professional Summary',
      workExp: 'Work Experience',
      educationTitle: 'Education',
      certTitle: 'Certifications & Licenses',
      techSkillsTitle: 'Technical & Practical Skills',
      verifiedBy: 'Official Curriculum Vitae verified by',
      languages: 'Languages:'
    }
  }
};

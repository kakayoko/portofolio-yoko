export interface GalleryItem {
  id: string;
  title: string;
  category: 'waigeo' | 'misool' | 'underwater' | 'tamu' | 'aktivitas';
  categoryLabel: string;
  location: string;
  caption: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  aspectClass?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Featured Video - Kali Biru Waigeo
  {
    id: 'video-kalibiru-tourists',
    title: 'Momen Hangat Bersama Wisatawan Asing di Kali Biru',
    category: 'waigeo',
    categoryLabel: 'Video & Waigeo',
    location: 'Sungai Alami Kali Biru, Waigeo',
    caption: 'Kaka Yoko menyuguhkan kudapan kue puding lokal kepada wisatawan mancanegara setelah berenang di segarnya mata air Kali Biru Waigeo.',
    mediaSrc: '/assets/aistudio/WhatsApp_Video_2026-11-12_at_13.10.36_243eb41f.mp4',
    mediaType: 'video',
    aspectClass: 'aspect-9/16'
  },

  // 2. Guiding with Tourists (New additions)
  {
    id: 'tamu-piaynemo-deck',
    title: 'Pemanduan Tamu di Geosite Piaynemo',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Geosite Piaynemo, Raja Ampat',
    caption: 'Kaka Yoko bersama wisatawan dari mancanegara menikmati pemandangan spektakuler gugusan pulau karst dari gardu pandang Piaynemo.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.37__1__fe4fcb6d.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-16/9'
  },
  {
    id: 'tamu-boat-piaynemo',
    title: 'Petualangan Laut Menuju Geosite Karst',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Perairan Piaynemo, Raja Ampat',
    caption: 'Senyum ceria bersama tamu wisatawan saat mendekati pulau karst megah dengan tulisan ikonik Geosite Piaynemo.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.37__2__5f929a27.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  },
  {
    id: 'tamu-yenbuba-pier',
    title: 'Grup Wisatawan di Dermaga Desa Wisata Yenbuba',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Dermaga Kampung Yenbuba, Waigeo',
    caption: 'Kaka Yoko bersama kelompok turis mancanegara setelah sesi snorkeling seru di terumbu karang dermaga Yenbuba.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.40__1__602664ce.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  },
  {
    id: 'tamu-puncak-karst-couple',
    title: 'Pendampingan Pasangan Wisatawan di Puncak Karst',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Puncak Panorama Raja Ampat',
    caption: 'Mendampingi pasangan pelancong menikmati panorama samudra biru luas dan gugusan pulau hijau di bawah langit cerah.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.40_582b5e4d.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  },
  {
    id: 'tamu-deck-bendera-merah-putih',
    title: 'Ekspedisi Bersama Delegasi Tamu di Dek Kapal',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Pelayaran Laut Papua Barat Daya',
    caption: 'Kebersamaan hangat Kaka Yoko dengan rombongan wisatawan muda internasional di geladak kapal berlatar bendera Merah Putih.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.38_26d89831.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'tamu-homestay-boardwalk',
    title: 'Dermaga Penginapan Laut Air Jernih',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Resort / Homestay Pesisir Raja Ampat',
    caption: 'Menikmati kehangatan keramahan khas Papua bersama para tamu di atas jembatan kayu homestay terapung.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.39_ef5673bf.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-9/16'
  },
  {
    id: 'tamu-makan-malam-homestay',
    title: 'Makan Malam Bersama & Cerita Budaya Papua',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Ruang Makan Homestay Tradisional',
    caption: 'Berbagi cerita, canda tawa, dan hidangan kuliner laut lezat bersama tamu wisatawan asing setelah seharian menjelajah laut.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.42_be1be36c.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'tamu-kampung-adat-malasigi',
    title: 'Wisata Budaya Kampung Adat Malasigi',
    category: 'waigeo',
    categoryLabel: 'Waigeo & Budaya',
    location: 'Kampung Wisata Adat Malasigi, Papua',
    caption: 'Mengenalkan wisatawan kepada anak-anak dan kearifan masyarakat adat Papua di Kampung Wisata Malasigi.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.37_841fa036.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'tamu-hutan-kalibiru',
    title: 'Tracking Hutan Alami & Mata Air Kali Biru',
    category: 'waigeo',
    categoryLabel: 'Waigeo & Hutan',
    location: 'Hutan Lindung Kali Biru, Waigeo',
    caption: 'Kaka Yoko memandu tamu menyusuri rute rimba hijau tropis menuju aliran sungai jernih berhawa sejuk di jantung Waigeo.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.38__1__13db4468.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-9/16'
  },
  {
    id: 'tamu-trekking-jungle-stairs',
    title: 'Istirahat Santai di Jalur Trekking Hutan',
    category: 'tamu',
    categoryLabel: 'Tamu & Kebersamaan',
    location: 'Jalur Tangga Trekking Wisata',
    caption: 'Momen akrab beristirahat di sela pendakian rute hutan bersama rekan pemandu lokal dan para pelancong.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.03_8b0090e8.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-9/16'
  },
  {
    id: 'yoko-haluan-kapal',
    title: 'Kaka Yoko di Haluan Kapal Wisata',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Karst',
    location: 'Perairan Laut Dalam Raja Ampat',
    caption: 'Berdiri di ujung haluan kapal memastikan jalur navigasi aman dan menyapa keindahan alam kepulauan Papua.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.41_40a005b8.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-square'
  },
  {
    id: 'yoko-puncak-terbuka',
    title: 'Berdiri Gagah di Puncak Karst Raja Ampat',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Karst',
    location: 'Tebing Puncak Panorama Karst',
    caption: 'Pemandangan 360 derajat gugusan pulau karst dan samudra tanpa batas di bawah gumpalan awan putih.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_13.10.41__1__1b0ffcdb.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  },

  // 3. Underwater & Marine Encounters
  {
    id: 'freediving-yoko-blue',
    title: 'Freediving di Laut Sebening Kaca',
    category: 'underwater',
    categoryLabel: 'Bawah Laut & Snorkeling',
    location: 'Selat Dampier & Sekitarnya',
    caption: 'Kaka Yoko menikmati ketenangan bawah laut Raja Ampat dengan jarak pandang (visibility) air yang jernih sempurna.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-03-22_at_18.43.32_bf2c1ee9.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'penyu-sisik-reef',
    title: 'Berenang Bersama Penyu Sisik Liar',
    category: 'underwater',
    categoryLabel: 'Bawah Laut & Snorkeling',
    location: 'Terumbu Karang Yenbuba / Friwen',
    caption: 'Momen magis berenang berdampingan dengan penyu sisik liar di atas hamparan terumbu karang yang terjaga kelestariannya.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-03-22_at_18.32.40_c0be49b4.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'danau-ubur-ubur-misool',
    title: 'Danau Ubur-ubur Emas Tanpa Sengat',
    category: 'misool',
    categoryLabel: 'Spot Misool & Karst',
    location: 'Danau Ubur-ubur (Jellyfish Lake), Misool',
    caption: 'Pengalaman langka di dunia berenang di danau air asin terisolasi yang dihuni ribuan ubur-ubur emas jinak tanpa sengat.',
    mediaSrc: '/assets/aistudio/images__8__8a413e95.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'schooling-sweetlips-coral',
    title: 'Kawanan Ikan Bibir Tebal (Sweetlips)',
    category: 'underwater',
    categoryLabel: 'Bawah Laut & Snorkeling',
    location: 'Terumbu Karang Selat Dampier',
    caption: 'Ratusan ikan karang bergaris kuning berkumpul di dinding karang, bukti kekayaan hayati bawah laut nomor satu di dunia.',
    mediaSrc: '/assets/aistudio/3-6_5874fcbc.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },

  // 4. Waigeo Endemic Fauna & Karst Spots
  {
    id: 'cenderawasih-merah-waigeo',
    title: 'Burung Cenderawasih Merah Asli',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Satwa',
    location: 'Hutan Konservasi Waigeo',
    caption: 'Satwa endemik legendaris (Red Bird of Paradise) yang hanya dapat disaksikan di kanopi hutan alami kepulauan Waigeo.',
    mediaSrc: '/assets/aistudio/Burung-Cendrawasih_4a3c7705.webp',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'cenderawasih-liar-canopy',
    title: 'Pengamatan Cenderawasih Liar di Alam Bebas',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Satwa',
    location: 'Spot Bird Watching Waigeo',
    caption: 'Dokumentasi pengamatan Cenderawasih menari di dahan pohon saat pagi hari, momen paling dicari pengamat burung dunia.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-09-08_at_23.10.38_44ad55ad.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'teluk-kabui-karst-pillar',
    title: 'Karst Megah & Laguna Toska Teluk Kabui',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Satwa',
    location: 'Teluk Kabui & Batu Pensil, Waigeo',
    caption: 'Pilar-pilar batu karst menjulang tinggi di atas laguna air tenang bergradasi hijau toska khas perairan Pulau Waigeo.',
    mediaSrc: '/assets/aistudio/images__11__01bde4c8.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'aerial-karst-lagoon',
    title: 'Panorama Udara Gugusan Pulau Karst',
    category: 'waigeo',
    categoryLabel: 'Spot Waigeo & Satwa',
    location: 'Gugusan Karst Raja Ampat',
    caption: 'Pemandangan lanskap tropis karst rimbun dengan cincin terumbu karang hidup yang mengelilingi setiap pulau kecil.',
    mediaSrc: '/assets/aistudio/images__10__b5993124.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },

  // 5. Misool Karst Wonders
  {
    id: 'labirin-karst-balbulol',
    title: 'Labirin Karst & Laguna Sebening Kaca',
    category: 'misool',
    categoryLabel: 'Spot Misool & Karst',
    location: 'Kawasan Karst Balbulol / Yapap, Misool',
    caption: 'Gugusan pulau karst berbentuk unik dengan air laut tenang sebening kristal, spot terbaik untuk bermain kano dan berenang santai.',
    mediaSrc: '/assets/aistudio/images__12__5a27bdf1.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-4/3'
  },
  {
    id: 'siluet-senja-dafalen',
    title: 'Siluet Senja di Puncak Karst Laut',
    category: 'misool',
    categoryLabel: 'Spot Misool & Karst',
    location: 'Batu Karst Dafalen, Misool',
    caption: 'Pemandangan matahari terbenam spektakuler di atas formasi batuan karst alami di tengah hembusan angin samudra.',
    mediaSrc: '/assets/aistudio/images__9__3550ce68.jpg',
    mediaType: 'image',
    aspectClass: 'aspect-16/9'
  },

  // 6. Fishing & Activities
  {
    id: 'tangkapan-ikan-karang-fresh',
    title: 'Hasil Pancing Segar Ikan Karang',
    category: 'aktivitas',
    categoryLabel: 'Aktivitas & Hasil Laut',
    location: 'Dermaga Penginapan / Homestay',
    caption: 'Tangkapan aneka ikan karang segar (kakap merah, kerapu, baronang) hasil memancing tradisional bersama tamu di perairan lokal.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_09.13.36_4772bc54.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  },
  {
    id: 'ikan-tenggiri-mackerel',
    title: 'Tangkapan Segar Ikan Tenggiri Laut',
    category: 'aktivitas',
    categoryLabel: 'Aktivitas & Hasil Laut',
    location: 'Dermaga Laut Raja Ampat',
    caption: 'Ikan tenggiri (mackerel) tangkapan segar perairan dalam siap untuk diolah menjadi hidangan laut bakar khas pesisir Papua.',
    mediaSrc: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_09.24.34_65a7c4c1.jpeg',
    mediaType: 'image',
    aspectClass: 'aspect-3/4'
  }
];

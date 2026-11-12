import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MessageCircle, 
  Camera, 
  Play, 
  Sliders, 
  Grid, 
  Pause, 
  Users, 
  Trees, 
  Compass, 
  Fish, 
  Sparkles
} from 'lucide-react';

interface GallerySectionProps {
  initialCategory?: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Auto-slide effect when in slider mode
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'slider' || lightboxIndex !== null) return;

    const interval = setInterval(() => {
      handleSlideNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode, lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleSlidePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth < 640 ? 300 : 380;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
    setActiveSlideIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleSlideNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth < 640 ? 300 : 380;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      if (sliderRef.current.scrollLeft >= maxScroll - 20) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
    setActiveSlideIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth < 640 ? 300 : 380;
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
    setActiveSlideIndex(index);
  };

  const currentItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleInquireMedia = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `Halo Kaka Yoko, saya melihat dokumentasi "${item.title}" di lokasi ${item.location} pada website www.kakayoko.my.id. Saya tertarik untuk tanya paket trip & guide ke spot ini.`
    );
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4" />
              <span>Dokumentasi Lapangan & Tamu ({GALLERY_ITEMS.length} Koleksi)</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Galeri Foto & Video Eksplorasi Raja Ampat
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Dokumentasi nyata pemanduan Kaka Yoko bersama para wisatawan: kebersamaan di Geosite Piaynemo, segarnya Kali Biru Waigeo, Danau Ubur-ubur Misool, hingga keindahan bawah laut.
            </p>
          </div>

          {/* View Mode & Auto-slide controls */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Slide Bergeser</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Tampilan Grid</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  title={isAutoPlaying ? 'Jeda Geser Otomatis' : 'Mulai Geser Otomatis'}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition cursor-pointer"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-600" />}
                </button>
                <button
                  onClick={handleSlidePrev}
                  aria-label="Slide Sebelumnya"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSlideNext}
                  aria-label="Slide Selanjutnya"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => { setActiveCategory('all'); setActiveSlideIndex(0); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Semua Media ({GALLERY_ITEMS.length})
          </button>

          <button
            onClick={() => { setActiveCategory('tamu'); setActiveSlideIndex(0); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeCategory === 'tamu'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Tamu & Kebersamaan</span>
          </button>

          <button
            onClick={() => { setActiveCategory('waigeo'); setActiveSlideIndex(0); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeCategory === 'waigeo'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Trees className="w-3.5 h-3.5" />
            <span>Waigeo & Kali Biru</span>
          </button>

          <button
            onClick={() => { setActiveCategory('misool'); setActiveSlideIndex(0); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeCategory === 'misool'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Misool & Karst</span>
          </button>

          <button
            onClick={() => { setActiveCategory('underwater'); setActiveSlideIndex(0); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeCategory === 'underwater'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Fish className="w-3.5 h-3.5" />
            <span>Bawah Laut</span>
          </button>
        </div>

        {/* MODE 1: SLIDER / CAROUSEL (Slide Bisa Bergeser) */}
        {viewMode === 'slider' && (
          <div className="relative mt-6 group">
            {/* Horizontal Slide Track */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="flex-none w-[280px] sm:w-[340px] md:w-[380px] snap-start rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-850 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Media Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    {item.mediaType === 'video' ? (
                      <div className="relative w-full h-full">
                        <video
                          src={item.mediaSrc}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                        {/* Play Video Overlay Badge */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                          <div className="w-14 h-14 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                          <span>Video Dokumentasi</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.mediaSrc}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      </>
                    )}

                    {/* Maximize Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1 text-[11px] font-medium text-teal-300 mb-0.5">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <h3 className="font-display text-sm font-bold leading-snug line-clamp-1 group-hover:text-teal-200 transition">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Caption underneath */}
                  <div className="p-3.5 bg-white dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation Float Buttons */}
            <button
              onClick={handleSlidePrev}
              aria-label="Geser ke kiri"
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 dark:bg-slate-800/95 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:bg-teal-600 hover:text-white transition cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleSlideNext}
              aria-label="Geser ke kanan"
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 dark:bg-slate-800/95 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:bg-teal-600 hover:text-white transition cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicator Thumbnails / Progress Strip */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono">
                Menampilkan {filteredItems.length} momen · Geser layar atau klik panah untuk melihat slide lain
              </span>

              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-xs no-scrollbar">
                {filteredItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSlide(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeSlideIndex
                        ? 'w-6 bg-teal-600'
                        : 'w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide ke ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: FULL GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-850 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  {item.mediaType === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.mediaSrc}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                        <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-md">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-bold uppercase">
                        Video
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.mediaSrc}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    </>
                  )}

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] font-medium text-teal-300 mb-0.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className="font-display text-sm font-bold leading-snug line-clamp-1 group-hover:text-teal-200 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery bottom footnote */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>Seluruh video dan foto merupakan dokumentasi riil pemanduan Kaka Yoko di Waigeo, Misool & Raja Ampat.</span>
          </div>

          <a
            href="https://wa.me/6282398581997?text=Halo%20Kaka%20Yoko,%20saya%20melihat%20galeri%20slide%20foto%20&%20video%20trip%20Anda.%20Saya%20ingin%20tanya%20spot%20wisata%20dan%20jadwal."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Rencanakan Trip ke Spot Ini</span>
          </a>
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Modal (Supports Image & Video) */}
      {currentItem && lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Lightbox Controls */}
            <div className="flex items-center justify-between text-white pb-3">
              <div className="text-xs font-mono text-slate-300">
                Media {lightboxIndex + 1} dari {filteredItems.length} · <span className="text-teal-400">{currentItem.categoryLabel}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleInquireMedia(currentItem)}
                  className="px-3 py-1.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tanya Spot Ini via WA</span>
                </button>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  aria-label="Tutup Pratinjau"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Media Container (Video Player or Image View) */}
            <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-slate-800 flex items-center justify-center max-h-[65vh] sm:max-h-[72vh]">
              {currentItem.mediaType === 'video' ? (
                <video
                  src={currentItem.mediaSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full rounded-xl"
                />
              ) : (
                <img
                  src={currentItem.mediaSrc}
                  alt={currentItem.title}
                  className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredItems.length - 1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer z-10"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex < filteredItems.length - 1 ? lightboxIndex + 1 : 0);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer z-10"
                aria-label="Selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="mt-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentItem.location}</span>
                </div>
                <h4 className="font-display text-base font-bold text-white mt-0.5">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              <button
                onClick={() => handleInquireMedia(currentItem)}
                className="self-start sm:self-auto px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Kaka Yoko Tentang Spot Ini</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

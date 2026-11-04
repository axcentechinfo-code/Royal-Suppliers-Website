import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, SITE_CONFIG } from '../data/siteData';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const categories = ['All', 'Stage Decor', 'Entrances', 'Seating & Catering', 'Floral'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Automatic Seamless Motion Loop (3.2 seconds per slide)
  useEffect(() => {
    if (isHovered || activeLightboxIndex !== null || filteredItems.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % filteredItems.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered, activeLightboxIndex, filteredItems.length]);

  // Lightbox handlers
  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#06090e] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="royal-glow left-1/2 -top-24 -translate-x-1/2 h-[500px] w-[800px] bg-gold/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <span className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-bold tracking-widest text-gold uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Visual Portfolio</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Moments of Splendor
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            An automatic showcase of royal stages, luxury floral art, and bespoke event architectures.
          </p>

          {/* Minimalist Category Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCarouselIndex(0);
                }}
                className={`rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'border border-gold bg-gold/20 text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'border border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Automatic 3D Coverflow Stream (No Clutter, Pure Fluid Motion) */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative mx-auto flex h-[380px] sm:h-[480px] md:h-[530px] items-center justify-center overflow-hidden">
            {filteredItems.map((item, index) => {
              const total = filteredItems.length;
              let offset = (index - carouselIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // Only render items close to viewport center for optimal 60fps performance
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const isCenter = offset === 0;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: offset * 300,
                    scale: isCenter ? 1 : 0.8,
                    rotateY: offset * -22,
                    zIndex: 30 - Math.abs(offset) * 10,
                    opacity: Math.abs(offset) > 1 ? 0.35 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    mass: 0.8,
                  }}
                  style={{ perspective: 1200, willChange: 'transform, opacity' }}
                  onClick={() => {
                    if (isCenter) openLightbox(index);
                    else setCarouselIndex(index);
                  }}
                  className="absolute cursor-pointer overflow-hidden rounded-3xl border border-gold/35 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                >
                  <div className="relative h-[340px] w-[260px] sm:h-[420px] sm:w-[320px] md:h-[470px] md:w-[390px]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallbackSrc;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-[#06090e]/30 to-transparent opacity-90" />

                    {/* Stage Meta & Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2">
                        <span className="inline-block rounded-full border border-gold/40 bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-gold uppercase backdrop-blur-sm">
                          {item.category}
                        </span>
                        <span className="text-[10px] text-slate-300 font-medium tracking-wide">
                          Signature Setup
                        </span>
                      </div>
                      <h4 className="mt-2 font-serif text-lg font-bold text-white sm:text-xl leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle Zoom Indicator on Center Item */}
                    {isCenter && (
                      <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-gold backdrop-blur-md transition-transform hover:scale-110">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Minimalist Automatic Slide Progress Line (Senior Design) */}
          <div className="mx-auto mt-6 flex max-w-xs items-center justify-center space-x-1.5">
            {filteredItems.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={`h-1 rounded-full transition-all duration-500 ${
                  carouselIndex === dotIdx
                    ? 'w-8 bg-gold shadow-[0_0_10px_#d4af37]'
                    : 'w-2 bg-slate-800'
                }`}
              />
            ))}
          </div>

          <div className="mt-2 text-center text-[11px] text-slate-500 font-mono tracking-widest">
            {String(carouselIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white transition-all hover:bg-gold hover:text-black hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl border border-gold/30 bg-slate-950 shadow-2xl">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto object-contain mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = activeItem.fallbackSrc;
                }}
              />
              <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-wider text-gold uppercase">
                    {activeItem.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {activeItem.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20am%20interested%20in%20a%20setup%20similar%20to%20"${encodeURIComponent(
                    activeItem.title
                  )}".`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center space-x-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-black hover:bg-gold-light transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire This Setup</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

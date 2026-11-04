import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="relative py-24 sm:py-36 bg-[#06090e] overflow-hidden">
      {/* Glow */}
      <div className="royal-glow right-10 bottom-10 h-80 w-80 bg-gold/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Visit Us In Person</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Central Headquarters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Conveniently situated in the heart of Vaniyambadi, serving weddings and celebrations across Tirupattur district and Tamil Nadu.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          {/* Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-gold/30 bg-slate-900/80 p-8 shadow-card-glass backdrop-blur-xl lg:h-full"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                ROYAL SUPPLIERS
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-gold uppercase">
                & Decoration
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Address:</span>
                    <p className="mt-0.5 text-xs text-slate-300 leading-relaxed">
                      Jamia Masjid Street, Neelispfield,<br />
                      Vaniyambadi - 635751,<br />
                      Tirupattur District, Tamil Nadu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Opening Hours:</span>
                    <p className="mt-0.5 text-xs text-slate-300">
                      {SITE_CONFIG.timings}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Direct Line:</span>
                    <p className="mt-0.5 text-xs text-slate-300">
                      {SITE_CONFIG.primaryPhone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gold py-3.5 text-xs font-bold tracking-wider text-black uppercase transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 overflow-hidden rounded-3xl border border-gold/30 bg-slate-900 shadow-2xl"
          >
            <div className="relative h-[420px] sm:h-[480px] w-full">
              <iframe
                title="Royal Suppliers VNB Office Location"
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(15%) contrast(105%)',
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

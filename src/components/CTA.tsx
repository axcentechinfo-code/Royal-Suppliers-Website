import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { triggerRoyalConfetti } from '../utils/confetti';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-[#06090e] via-[#0d1424] to-[#06090e]">
      {/* Ambient Breathing Glow */}
      <div className="royal-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:w-[850px] bg-gold/15 animate-pulse-slow" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-gold/40 bg-slate-900/70 p-8 sm:p-16 shadow-[0_20px_50px_rgba(212,175,55,0.25)] backdrop-blur-2xl"
        >
          {/* Subtle Ambient Shimmer Beam */}
          <div className="pointer-events-none absolute -inset-full top-0 block -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000 hover:translate-x-full" />

          <span className="inline-flex items-center space-x-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles className="h-4 w-4" />
            <span>Ready for a Premium Experience?</span>
          </span>

          <h2 className="mt-6 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let Us Craft Your <span className="text-gold-gradient">Dream Wedding</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
            Let us orchestrate every lavish detail while you immerse in the joyous celebration with your family and loved ones.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => triggerRoyalConfetti(e)}
              className="flex w-full items-center justify-center space-x-3 rounded-full bg-gradient-to-r from-gold via-gold-hover to-gold-light px-9 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(212,175,55,0.45)] transition-all hover:shadow-[0_15px_45px_rgba(212,175,55,0.7)] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Instant WhatsApp Enquiry</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="flex w-full items-center justify-center space-x-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold hover:text-black sm:w-auto shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <Phone className="h-4 w-4" />
              <span>Call {SITE_CONFIG.primaryPhone}</span>
            </motion.a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Open daily: 9:00 AM – 9:00 PM • Prompt response within minutes on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-24 sm:py-36 bg-[#080d19] overflow-hidden border-t border-gold/15">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-bold tracking-widest text-gold uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Everything you need to know about planning your dream setup with Royal Suppliers.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/50 bg-slate-900/90 shadow-gold-glow'
                    : 'border-slate-800 bg-slate-900/60 hover:border-gold/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-serif text-base font-bold text-white sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-slate-800/80 px-6 pb-6 pt-3"
                    >
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

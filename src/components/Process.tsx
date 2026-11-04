import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Layers, Truck, PartyPopper } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  const icons = [Calendar, Layers, Truck, PartyPopper];

  return (
    <section className="relative py-24 sm:py-36 bg-[#070b16] overflow-hidden">
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
            <span>How We Work</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Royal Execution Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            From initial concept to breathtaking reality, every step is orchestrated with precision and elegance.
          </p>
        </motion.div>

        {/* 4 Steps Horizontal / Grid with Staggered Entrance */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/50 p-7 backdrop-blur-md transition-all duration-500 hover:border-gold/50 hover:bg-slate-900/90 hover:shadow-gold-glow"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-black text-gold/30 transition-colors group-hover:text-gold">
                      {step.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-lg font-bold text-white transition-colors group-hover:text-gold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed sm:text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-gold/50 via-gold/10 to-transparent transition-all duration-300 group-hover:from-gold group-hover:via-gold/50" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

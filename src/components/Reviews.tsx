import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/siteData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-36 bg-royal-grid overflow-hidden border-t border-b border-gold/15">
      {/* Glow */}
      <div className="royal-glow left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 bg-gold/10" />

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
            <span>Words of Praise</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Customer Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Don’t just take our word for it. Here is what families and wedding organizers across Tamil Nadu say about our royal standards.
          </p>
        </motion.div>

        {/* 3 Review Cards with Cinematic Blur Entrance */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-3xl border border-gold/20 bg-slate-900/60 p-8 shadow-card-glass backdrop-blur-xl transition-all duration-500 hover:border-gold/50 hover:bg-slate-900/80 hover:shadow-gold-glow"
            >
              {/* Star Rating & Quote */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1.5 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gold/30 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold/60" />
              </div>

              {/* Review Content */}
              <p className="mt-6 font-serif text-sm italic text-slate-200 leading-relaxed sm:text-base">
                "{review.content}"
              </p>

              {/* Reviewer Details */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
                <div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                    {review.name}
                  </h4>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                    <span>{review.role}</span>
                    <span>•</span>
                    <span className="text-gold/90">{review.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold shadow-[0_0_8px_rgba(212,175,55,0.2)]">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

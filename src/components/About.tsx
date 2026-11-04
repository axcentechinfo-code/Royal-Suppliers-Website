import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Sparkles, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

// Animated Counter Hook / Component for fluid count-up
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const highlights = [
    {
      title: "18+ Years of Craftsmanship",
      desc: "Founded in 2007, serving generations of families with prestigious wedding celebrations.",
      icon: Crown,
    },
    {
      title: "Signature 'High Look Decor'",
      desc: "Architectural stage structures, bespoke floral walls, and magnificent crystal illumination.",
      icon: Sparkles,
    },
    {
      title: "Direct Warehouse Inventory",
      desc: "Immense stocks of chairs, tables, royal shamianas, and luxury tableware ready for thousands of guests.",
      icon: ShieldCheck,
    },
    {
      title: "Flawless On-Ground Delivery",
      desc: "Our master crew manages transportation, setup, and teardown so you can celebrate worry-free.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-36 bg-royal-grid overflow-hidden">
      {/* Background Radial Accents */}
      <div className="royal-glow -left-40 top-1/3 h-[500px] w-[500px] bg-gold/10" />
      <div className="royal-glow right-0 bottom-10 h-80 w-80 bg-gold-dark/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Visual Showcase with Cinematic Parallax Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer Glowing Border Effect */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-gold/50 via-gold/10 to-gold/40 opacity-70 blur-lg transition duration-700 group-hover:opacity-100" />

            {/* Main Image Frame with Gold Border & Shadow */}
            <div className="relative mx-auto max-w-md sm:max-w-lg overflow-hidden rounded-3xl border border-gold/40 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <img
                src="/static/ImagesCarousel/1000336893.jpg"
                alt="Royal Suppliers Event Architecture"
                loading="lazy"
                decoding="async"
                className="h-[460px] w-full object-cover transition-transform duration-1000 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent opacity-85" />
              
              {/* Badge Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold/30 bg-[#070a12]/85 p-4 backdrop-blur-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Crown className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white tracking-wider">
                      HIGH LOOK DECORATION
                    </h4>
                    <p className="text-xs text-gold">Suppliers of all marriage materials</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Heritage Year Badge with Spring Entrance */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute -top-6 -right-2 sm:-right-6 rounded-2xl border border-gold/50 bg-[#0c1220] p-4 shadow-[0_15px_30px_rgba(212,175,55,0.35)] backdrop-blur-lg"
            >
              <div className="text-center">
                <span className="block font-serif text-3xl font-extrabold text-gold">2007</span>
                <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                  Year Established
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Vaniyambadi • Tirupattur District</span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Crafting Unforgettable <span className="text-gold-gradient">Royal Experiences</span>
            </h2>

            <p className="mt-4 text-base font-semibold text-gold tracking-wide leading-relaxed">
              SUPPLIERS OF ALL MARRIAGE MATERIALS. DECORATION ITEMS ARE ALWAYS AVAILABLE.
            </p>

            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              With nearly two decades of deep-rooted expertise in the Tirupattur district and surrounding regions, Royal Suppliers brings your dream celebration into vibrant reality. From lavish seating arrangements and German hangars to exquisite floral stages, our signature "High Look Decoration" touch ensures every corner of your venue speaks pure grandeur.
            </p>

            {/* Metrics Ticker with Animated Counter */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-gold/20 py-6 sm:grid-cols-4">
              <div className="text-center">
                <h3 className="font-serif text-2xl font-black text-gold sm:text-3xl">
                  <AnimatedCounter target={1000} suffix="+" />
                </h3>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Events Done
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-black text-gold sm:text-3xl">
                  <AnimatedCounter target={18} suffix="+" />
                </h3>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Years Heritage
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-black text-gold sm:text-3xl">
                  <AnimatedCounter target={100} suffix="%" />
                </h3>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Satisfaction
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-black text-gold sm:text-3xl">
                  <AnimatedCounter target={50} suffix="k+" />
                </h3>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Guests Hosted
                </span>
              </div>
            </div>

            {/* 4 Feature Cards with Staggered Entrance */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * idx, duration: 0.5 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-slate-800/60 hover:shadow-gold-glow"
                >
                  <div className="flex items-start space-x-3">
                    <item.icon className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs text-slate-400 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold tracking-wider text-black uppercase transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]"
              >
                <span>Consult Our Decor Team</span>
              </a>
              <span className="text-xs text-slate-400">
                Centrally located at Jamia Masjid Street
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

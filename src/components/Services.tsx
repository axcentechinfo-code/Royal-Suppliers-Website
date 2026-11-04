import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Armchair, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, SITE_CONFIG, ServiceItem } from '../data/siteData';

// 3D Tilt Card Component with Shimmer & Spring Entry
const TiltCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="h-7 w-7 text-gold" />;
      case 'Sparkles':
        return <Sparkles className="h-7 w-7 text-gold" />;
      case 'Armchair':
        return <Armchair className="h-7 w-7 text-gold" />;
      default:
        return <Sparkles className="h-7 w-7 text-gold" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.12s ease-out',
          willChange: 'transform',
        }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[#0e1627] via-[#090e1b] to-[#060912] p-8 shadow-card-glass transition-all duration-300 hover:border-gold hover:shadow-gold-glow"
      >
        {/* Shimmer Light Beam Effect across card */}
        <div className="pointer-events-none absolute -inset-full top-0 block -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000 group-hover:translate-x-full" />

        {/* Subtle top glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div>
          {/* Header & Icon */}
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-transform duration-300 group-hover:scale-110">
              {getIcon(service.icon)}
            </div>
            {service.badge && (
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold tracking-wider text-gold uppercase shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                {service.badge}
              </span>
            )}
          </div>

          {/* Subtitle & Title */}
          <div className="mt-6">
            <span className="text-xs font-semibold tracking-wider text-gold/80 uppercase">
              {service.subtitle}
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-white transition-colors group-hover:text-gold">
              {service.title}
            </h3>
          </div>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {service.description}
          </p>

          {/* Feature Bullets with Micro-Stagger */}
          <ul className="mt-6 space-y-2.5 border-t border-slate-800 pt-6">
            {service.features.map((feature, fIdx) => (
              <motion.li
                key={fIdx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * fIdx + 0.3 }}
                className="flex items-start text-xs text-slate-300"
              >
                <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-gold mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(
              service.title
            )}%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gold/30 bg-gold/10 py-3.5 text-xs font-bold tracking-wider text-gold uppercase transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-black group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Enquire on WhatsApp</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-36 bg-[#080d19] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="royal-glow right-10 top-1/2 -translate-y-1/2 h-[550px] w-[550px] bg-gold/10" />

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
            <span>Exquisite Offerings</span>
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Premium Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Tailored bespoke wedding and ceremonial setups delivering unforgettable experiences for you and your esteemed guests.
          </p>
        </motion.div>

        {/* 3 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <TiltCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState('PREPARING ROYAL EXPERIENCE');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatusText('WELCOME TO ROYAL EXCELLENCE');
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onLoaded, 900);
          }, 350);
          return 100;
        }

        if (prev > 45 && prev < 80) {
          setStatusText('CURATING BESPOKE EVENT STAGES');
        } else if (prev >= 80) {
          setStatusText('FINALIZING ROYAL DETAILS');
        }

        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 85);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[10000] pointer-events-none flex flex-col justify-between overflow-hidden">
          {/* Top Theatrical Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.95, ease: [0.87, 0, 0.13, 1] },
            }}
            className="pointer-events-auto relative h-1/2 w-full bg-[#05080e] border-b border-gold/20"
          >
            <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent opacity-40" />
          </motion.div>

          {/* Bottom Theatrical Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.95, ease: [0.87, 0, 0.13, 1] },
            }}
            className="pointer-events-auto relative h-1/2 w-full bg-[#05080e] border-t border-gold/20"
          >
            <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent opacity-40" />
          </motion.div>

          {/* Center Stage Emblem & Content */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              filter: 'blur(10px)',
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
            className="pointer-events-auto absolute inset-0 z-20 flex flex-col items-center justify-center p-6"
          >
            {/* Ambient Radial Aura */}
            <div className="royal-glow h-96 w-96 bg-gold/20 animate-pulse-slow" />

            {/* Rotating Sacred Geometric Gold Ring Container */}
            <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center">
              {/* Outer Slow Rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-gold/40"
              />

              {/* Reverse Counter-Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-dotted border-gold/60"
              />

              {/* Glowing Center Logo with Breathing Scale */}
              <motion.div
                animate={{
                  scale: [0.96, 1.04, 0.96],
                  filter: [
                    'drop-shadow(0 0 15px rgba(212,175,55,0.4))',
                    'drop-shadow(0 0 35px rgba(212,175,55,0.8))',
                    'drop-shadow(0 0 15px rgba(212,175,55,0.4))',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center"
              >
                <img
                  src="/static/Images/LogoWhitenew.png"
                  alt="Royal Suppliers"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo/LogoWhitenew.png';
                  }}
                />
              </motion.div>
            </div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-center"
            >
              <h2 className="font-serif text-2xl font-bold tracking-[0.25em] text-white uppercase sm:text-3xl">
                ROYAL SUPPLIERS
              </h2>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.35em] text-gold uppercase">
                HIGH LOOK DECORATION • EST. 2007
              </p>
            </motion.div>

            {/* Progress Bar & Numeric Ticker */}
            <div className="mt-8 w-64 max-w-[80vw]">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-900 border border-gold/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-600 via-gold to-gold-light"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-xs">
                <span className="text-[10px] tracking-widest text-slate-400 uppercase">
                  {statusText}
                </span>
                <span className="font-bold text-gold">{String(progress).padStart(3, '0')}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link spy
      const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#070a12]/85 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl border-b border-gold/15'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-decoration-none"
          >
            <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-xl border border-gold/30 bg-gold/5 p-1 transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <img
                src="/static/Images/LogoWhitenew.png"
                alt="Royal Suppliers Logo"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/LogoWhitenew.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-white transition-colors group-hover:text-gold sm:text-xl">
                ROYAL SUPPLIERS
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-gold/80 uppercase">
                Vaniyambadi • Est. 2007
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-gold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center space-x-3 sm:flex">
            <a
              href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-2 overflow-hidden rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-xs font-semibold tracking-wider text-gold uppercase transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 transition-colors hover:border-gold hover:text-gold"
              title="Call Now"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors hover:bg-gold/20 lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 border-b border-gold/20 bg-[#070a12]/95 p-6 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gold/15 text-gold font-semibold'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-full bg-gold py-3 text-sm font-bold text-black"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.primaryPhone}`}
                  className="flex items-center justify-center space-x-2 rounded-full border border-gold/30 bg-gold/5 py-3 text-sm font-medium text-gold"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {SITE_CONFIG.primaryPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


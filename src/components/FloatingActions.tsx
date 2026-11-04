import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Instagram Floating Pill */}
      <a
        href={SITE_CONFIG.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#2f55a4] text-white shadow-[0_10px_25px_rgba(188,24,136,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_35px_rgba(188,24,136,0.6)]"
        title="Follow us on Instagram"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>

      {/* WhatsApp Floating Pill */}
      <a
        href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:shadow-[0_15px_35px_rgba(16,185,129,0.6)]"
        title="Chat on WhatsApp"
        aria-label="WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gold" />
        </span>
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </div>
  );
};


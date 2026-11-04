import React from 'react';
import { Phone, MapPin, Instagram, Clock, ArrowUp } from 'lucide-react';
import { SITE_CONFIG, CONTACT_PERSONS } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gold/20 bg-[#04060a] pt-16 pb-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Col 1: About & Brand (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3">
              <img
                src="/static/Images/LogoWhitenew.png"
                alt="Royal Suppliers Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/LogoWhitenew.png';
                }}
              />
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wider text-white">
                  ROYAL SUPPLIERS
                </h3>
                <span className="text-[11px] font-semibold tracking-widest text-gold uppercase">
                  Vaniyambadi • Est. 2007
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold tracking-wider text-gold uppercase">
              HIGH LOOK DECORATION DONE
            </p>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed max-w-sm">
              SUPPLIERS OF ALL MARRIAGE MATERIALS. Premium event decors, luxury stage setups, royal chairs, and catering rental materials.
            </p>

            <div className="mt-6 flex items-center space-x-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all hover:bg-gold hover:text-black hover:scale-110"
                title="Follow on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all hover:bg-gold hover:text-black hover:scale-110"
                title="Chat on WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 inline-flex items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2">
              <Clock className="h-4 w-4 text-gold" />
              <span className="text-xs text-slate-300">
                Store Timings: <strong className="text-white">9:00 AM – 9:00 PM</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Office Location (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Office Location
            </h4>
            <div className="mt-4 flex items-start space-x-2.5 text-xs text-slate-400 leading-relaxed">
              <MapPin className="h-4 w-4 flex-shrink-0 text-gold mt-0.5" />
              <div>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  <strong className="text-white block">ROYAL SUPPLIERS</strong>
                  JAMIA MASJID STREET NEELISPFIELD<br />
                  VANIYAMBADI - 635751<br />
                  TIRUPATTUR DISTRICT, TAMIL NADU
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-medium text-gold hover:underline"
              >
                <span>View Google Maps & Directions &rarr;</span>
              </a>
            </div>
          </div>

          {/* Col 3: Direct Contact Lines (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Contact Numbers
            </h4>
            <ul className="mt-4 space-y-3 text-xs">
              {CONTACT_PERSONS.map((person) => (
                <li key={person.phone} className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div>
                    <span className="font-medium text-white block">{person.name}</span>
                    {person.role && <span className="text-[10px] text-gold">{person.role}</span>}
                  </div>
                  <a
                    href={`tel:+91${person.phone}`}
                    className="flex items-center space-x-1 font-mono font-bold text-gold hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{person.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-900 pt-8 sm:flex-row gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; 2026 Royal Suppliers. All Rights Reserved.
          </p>

          <p className="text-xs text-slate-400">
            Developed by <span className="font-semibold text-gold tracking-wide">anxff.io</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-semibold text-gold transition-colors hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! Welcome to Royal Suppliers. How may our royal team assist you today?',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    { label: 'Explore Services', action: 'services' },
    { label: 'View Stage Gallery', action: 'gallery' },
    { label: 'Store Timings & Address', action: 'location' },
    { label: 'WhatsApp Inquiry', action: 'whatsapp' },
  ];

  const handleAction = (action: string) => {
    if (action === 'services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: 'Tell me about your services' },
        {
          sender: 'bot',
          text: 'We specialize in Turnkey Event Planning, High Look Decor & Stage Art, and Marriage Material Rentals. Navigating you to our services!',
        },
      ]);
    } else if (action === 'gallery') {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: 'Show me your portfolio' },
        {
          sender: 'bot',
          text: 'Here is our visual portfolio of grand stage setups, banquet seating, and floral arrangements!',
        },
      ]);
    } else if (action === 'location') {
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: 'Where are you located?' },
        {
          sender: 'bot',
          text: `We are located at Jamia Masjid Street, Neelispfield, Vaniyambadi - 635751. Store timings: ${SITE_CONFIG.timings}.`,
        },
      ]);
    } else if (action === 'whatsapp') {
      window.open(
        `https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20want%20to%20make%20an%20enquiry.`,
        '_blank'
      );
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setInputText('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thank you for asking about "${userMsg}". For instant personalized quotations and dates, let's connect directly on WhatsApp with K. Mohammed Shuaib!`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 flex w-[320px] sm:w-[360px] flex-col overflow-hidden rounded-3xl border border-gold/40 bg-[#070b14]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/20 bg-slate-900/90 p-4">
              <div className="flex items-center space-x-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    Royal Assistant
                  </h4>
                  <span className="flex items-center space-x-1 text-[10px] text-gold font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Ready to assist</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Body */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    m.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gold font-semibold text-black rounded-tr-none'
                        : 'border border-slate-800 bg-slate-900/90 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="border-t border-slate-800 bg-slate-950/60 p-3">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Quick Options
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {quickPrompts.map((btn) => (
                  <button
                    key={btn.action}
                    onClick={() => handleAction(btn.action)}
                    className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[11px] font-medium text-gold hover:bg-gold hover:text-black transition-colors"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex border-t border-slate-800 p-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about decor, dates, or items..."
                className="flex-1 bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold text-black transition-transform hover:scale-105"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-gold via-gold-hover to-gold-light text-black shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]"
        title="Chat with Royal Assistant"
        aria-label="Toggle Royal Assistant"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
        </span>
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};


'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full text-white py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <span className="font-montserrat font-bold text-base tracking-widest uppercase text-white/90 block mb-2">
            INTERFACE <span className="text-accent-pink">2026</span>
          </span>
          <p className="text-xs text-white/40 font-medium leading-relaxed max-w-sm">
            Polytechnic University of the Philippines <br />
            College of Engineering and Architecture <br />
            BSCPE Sections 4-3 & 4-6
          </p>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center md:text-right space-y-1">
          <p>© 2026 Organizing Committee.</p>
          <p>Facebook.</p>
          <p className="pt-2 flex items-center justify-center md:justify-end gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Department Site.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-lg bg-accent-pink text-white font-bold transition-all duration-300 transform hover:scale-110 shadow-lg ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
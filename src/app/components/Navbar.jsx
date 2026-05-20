'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import interfaceLogo from '@/assets/interface-logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lumaUrl = process.env.NEXT_PUBLIC_LUMA_URL || 'https://lu.ma';

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutside = (e) => {
      const target = e.target;
      if (menuRef.current && !menuRef.current.contains(target)) {
        if (!toggleRef.current || !toggleRef.current.contains(target)) {
          setMobileOpen(false);
        }
      }
    };

    const handleScrollClose = () => setMobileOpen(false);

    document.addEventListener('pointerdown', handleOutside);
    window.addEventListener('scroll', handleScrollClose, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutside);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#160410]/85 backdrop-blur-xl border-b border-[#a1005a]/30 shadow-lg shadow-black/50 py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto gap-3">
        <button
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-2 sm:gap-3 min-w-0"
        >
          <Image
            src={interfaceLogo}
            alt="Interface 2026 logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover shrink-0"
            priority
          />
          <span className="font-montserrat text-lg sm:text-xl font-bold tracking-tighter text-[#ffebf7] whitespace-nowrap">
            INTERFACE <span className="text-[#FF2F8E]">2026</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {["About", "Speakers", "Agenda", "Venue"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-semibold text-[#ffebf7]/70 hover:text-[#FF2F8E] transition-colors"
            >
              {item}
            </button>
          ))}

          <a
            className="relative overflow-hidden bg-[#a1005a] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#FF2F8E] transition-all shadow-[0_0_15px_rgba(161,0,90,0.4)] group"
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">Register</span>
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1s_infinite] transition-opacity duration-300 pointer-events-none"></div>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-[#a1005a] text-white text-xs sm:text-sm font-bold whitespace-nowrap"
          >
            Register
          </a>
          <button
            ref={toggleRef}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
            className="w-10 h-10 flex items-center justify-center p-2 rounded-sm bg-white/5 text-[#ffebf7] transition-transform active:scale-95"
          >
            {mobileOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div ref={menuRef} className="md:hidden absolute top-full left-0 right-0 bg-[#160410]/95 backdrop-blur-xl border-b border-[#a1005a]/20 animate-slide-down origin-top">
          <div className="flex flex-col gap-2 px-6 py-4 max-w-[1200px] mx-auto">
            {["About", "Speakers", "Agenda", "Venue"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full text-left py-3 px-3 rounded-sm text-[#ffebf7]/85 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

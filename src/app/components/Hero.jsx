"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import interfaceLogo from "@/assets/interface-logo.png";
import bridgeImage from "@/assets/Bridge.png";

function BridgeIllustration() {
  return (
    <Image
      src={bridgeImage}
      alt="Bridge illustration"
      className="w-full max-w-5xl mx-auto h-auto"
    />
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const lumaUrl = process.env.NEXT_PUBLIC_LUMA_URL || "https://lu.ma";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen text-white font-inter overflow-x-hidden\">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(161,0,90,0.15) 0%, transparent 70%)",
        }}
      />

      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-white/5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src={interfaceLogo}
            alt="Interface 2026 logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg object-cover"
            priority
          />
          <span className="font-montserrat font-bold text-lg tracking-widest uppercase text-white">
            Interface <span className="text-accent-pink">2026</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
          {["About", "Speakers", "Agenda", "Venue"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const element = document.getElementById(item.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-accent-coral transition-colors duration-200 bg-none border-none cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href={lumaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block px-6 py-2.5 rounded-lg bg-primary hover:bg-opacity-90 text-white text-sm font-montserrat font-semibold tracking-wide transition-colors duration-200 shadow-lg shadow-primary/30"
        >
          Register
        </a>
      </nav>

      <main className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="mb-1 inline-flex items-center rounded-full px-6 md:px-8 py-2 border border-[#a56992]/45 bg-[#3a0f3f]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <span className="text-[12px] font-montserrat font-semibold tracking-[0.18em] uppercase text-[#e8a8c9]">
            PUP Computer Engineering Seminar 2026
          </span>
        </div>

        <h1
          className={`text-6xl md:text-8xl lg:text-[7rem] font-montserrat font-extrabold tracking-tight leading-none mb-2 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white">INTERFACE </span>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-coral"
            style={{
              textShadow: "0 0 50px rgba(255,47,142,0.4)",
            }}
          >
            2026
          </span>
        </h1>

        <p className="max-w-2xl text-white/70 font-inter font-medium text-base md:text-xl leading-relaxed mb-9">
          Bridging Core Computer Engineering Principles with Emerging Industry
          Practice.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 font-montserrat text-sm">
          {[
            {
              icon: (
                <svg className="w-4 h-4 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              ),
              label: "May 22, 2026",
            },
            {
              icon: (
                <svg className="w-4 h-4 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: "08:00 AM – 05:00 PM",
            },
            {
              icon: (
                <svg className="w-4 h-4 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: "CEA AVR / Virtual",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#5a2a57]/55 border border-white/10 text-[#e8c9dc] backdrop-blur-sm shadow-inner shadow-white/5"
            >
              {icon}
              <span className="font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <a
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] px-10 py-4 rounded-xl font-montserrat font-bold text-xl tracking-wide text-[#5c0b3f] bg-[#f2a8c5] hover:bg-[#f7b8cf] transition-all duration-200 active:scale-95"
          >
            Register on Luma
          </a>
          <a
            href="#agenda"
            className="min-w-[280px] px-10 py-4 rounded-xl font-montserrat font-bold text-xl tracking-wide text-white border border-white/20 bg-transparent hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            Learn More
          </a>
        </div>

        <div
          className={`w-full max-w-6xl relative -mt-8 md:-mt-10 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <BridgeIllustration />
        </div>
      </main>
    </div>
  );
}
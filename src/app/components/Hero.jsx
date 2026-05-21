"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import bridgeImage from "@/assets/Bridge.png";
import icpepLogo from "@/assets/icpep_logo.png";
import GradientText from "@/shared/GradientText";

function MetaPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5a2a57]/55 border border-white/10 text-[#e8c9dc] backdrop-blur-sm shadow-inner shadow-white/5 whitespace-nowrap">
      {icon}
      <span className="font-montserrat font-semibold tracking-wide text-[11px] sm:text-sm">
        {label}
      </span>
    </div>
  );
}

const CalendarIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const lumaUrl = process.env.NEXT_PUBLIC_LUMA_URL || "https://lu.ma";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black text-white font-inter overflow-x-hidden flex flex-col justify-center"
      style={{ minHeight: "78vh" }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(161,0,90,0.15) 0%, transparent 70%)",
        }}
      />

      <main className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="mb-4 sm:mb-5 inline-flex items-center rounded-full px-4 py-1.5 border border-[#a56992]/45 bg-[#3a0f3f]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm pointer-events-auto">
          <span className="text-[10px] sm:text-[11px] font-montserrat font-semibold tracking-[0.15em] uppercase text-[#e8a8c9] leading-tight">
            PUP Computer Engineering Seminar 2026
          </span>
        </div>

        <h1
          className={`font-montserrat font-extrabold tracking-tight leading-[0.95] mb-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "clamp(2.8rem, 14vw, 7rem)" }}
        >
          <GradientText colors={["#FF2F8E", "#FF5A4F", "#C88CFF"]} animationSpeed={6} className="font-montserrat font-extrabold">
            INTERFACE
          </GradientText>
          <span
            className="ml-3 sm:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-coral"
            style={{
              WebkitTextStroke: "0px",
              textShadow: "0 0 10px rgba(255, 47, 142, 0.35), 0 0 22px rgba(255, 90, 79, 0.14)",
            }}
            aria-hidden={false}
          >
            2026
          </span>
        </h1>

        <p className="max-w-xl text-white/65 font-inter font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 px-2">
          Bridging Core Computer Engineering Principles with Emerging Industry Practice.
        </p>

        <div className="mb-6 sm:mb-7 w-full max-w-3xl px-2 pointer-events-auto">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-[28px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,47,142,0.12),rgba(255,90,79,0.08))] px-5 py-5 shadow-[0_18px_60px_rgba(20,0,22,0.34)] backdrop-blur-md sm:flex-row sm:justify-center sm:gap-6 sm:px-7">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[26px] border border-[#ffd4e5]/30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.04)_100%)] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md ring-1 ring-white/10">
              <Image
                src={icpepLogo}
                alt="ICpEP logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="text-center sm:text-left">
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4b4d2]">
                In Partnership With
              </p>
              <p className="mt-2 font-montserrat text-xl font-bold tracking-tight text-white sm:text-2xl">
                The Institute of Computer Engineers in the Philippines
              </p>
              <p className="mt-1 text-sm text-white/70 sm:text-[15px]">
                ICpEP joins INTERFACE 2026 in connecting academic foundations with the realities of professional computer engineering practice.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col items-center gap-1 mb-6 text-center">
          <p className="font-montserrat text-xl font-bold text-[#FF2F8E] tracking-tight">
            May 22, 2026
          </p>
          <p className="text-sm text-white/70 font-medium">
            09:00 AM - 06:00 PM • CEA Room 315 / Virtual
          </p>
        </div>

        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-7 w-full sm:w-auto">
          <MetaPill icon={<CalendarIcon />} label="May 22, 2026" />
          <MetaPill icon={<ClockIcon />} label="09:00 AM – 06:00 PM" />
          <MetaPill icon={<PinIcon />} label="CEA Room 315 / Virtual" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 w-full max-w-xl px-2 sm:px-0 pointer-events-auto">
          <a
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-10 py-4 rounded-xl font-montserrat font-bold text-lg sm:text-xl tracking-wide text-[#5c0b3f] bg-[#f2a8c5] hover:bg-[#f7b8cf] transition-all duration-200 active:scale-95 text-center shadow-lg shadow-[#a1005a]/20"
          >
            Register on Luma
          </a>
          <a
            href="#agenda"
            className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-10 py-4 rounded-xl font-montserrat font-bold text-lg sm:text-xl tracking-wide text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 active:scale-95 text-center"
          >
            Learn More
          </a>
        </div>

        <div className="relative flex w-full max-w-7xl mx-auto mt-4 items-center justify-center overflow-visible min-h-[108px] sm:min-h-0">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72vw] sm:w-[420px] h-[140px] sm:h-[220px] rounded-full blur-[34px] sm:blur-[42px] transition-opacity duration-1000 delay-[900ms] pointer-events-none z-0 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 47, 142, 0.42) 0%, rgba(200, 140, 255, 0.22) 28%, rgba(255, 47, 142, 0.1) 50%, transparent 72%)",
            }}
          />

          <div
            className={`w-1/2 flex justify-end -mr-4 sm:-mr-10 md:-mr-14 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms] z-10 ${
              mounted ? "translate-x-0 opacity-100" : "-translate-x-16 md:-translate-x-32 opacity-0"
            }`}
          >
            <Image
              src={bridgeImage}
              alt="Bridge connect left"
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="block w-[60vw] max-w-[620px] sm:w-[50vw] sm:max-w-[620px] h-auto max-h-[136px] sm:max-h-none object-contain object-right drop-shadow-[0_0_20px_rgba(255,47,142,0.3)]"
            />
          </div>

          <div
            className={`w-1/2 flex justify-start -ml-4 sm:-ml-10 md:-ml-14 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms] z-10 ${
              mounted ? "translate-x-0 opacity-100" : "translate-x-16 md:translate-x-32 opacity-0"
            }`}
          >
            <Image
              src={bridgeImage}
              alt="Bridge connect right"
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="block w-[60vw] max-w-[620px] sm:w-[50vw] sm:max-w-[620px] h-auto max-h-[136px] sm:max-h-none object-contain object-left -scale-x-100 drop-shadow-[0_0_20px_rgba(255,47,142,0.3)]"
            />
          </div>
        </div>
      </main>

      <div className="h-16 sm:h-32 bg-gradient-to-b from-transparent to-[#280327] absolute bottom-0 left-0 w-full z-20 pointer-events-none" />
    </div>
  );
}

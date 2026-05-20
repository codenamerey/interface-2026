import React from 'react';
import Image from 'next/image';
import RoboticsLogo from "@/assets/about/robotics-industry.png";
import BorderGlow from "@/shared/BorderGlow";

export default function About() {
  const cards = [
    {
      session: "SESSION 01",
      title: "Artificial Intelligence",
      desc: "Neural networks, ML pipelines, and embedded AI architectures.",
      icon: "memory",
      gradient: "from-[#C88CFF] to-[#FF2F8E]"
    },
    {
      session: "SESSION 02",
      title: "Networks & Cybersecurity",
      desc: "Network architectures, security best practices, and threat mitigation.",
      icon: "vpn_key",
      gradient: "from-[#FF2F8E] to-[#FF5A4F]"
    },
    {
      session: "SESSION 03",
      title: "Big Data",
      desc: "Large-scale data processing, analytics platforms, and insight engineering.",
      icon: "database",
      gradient: "from-[#FF2F8E] to-[#a1005a]"
    },
    {
      session: "SESSION 04",
      title: "System Development (Full-stack)", 
      desc: "Full-stack architecture, scalable backends, and modern devops.",
      icon: "code_blocks",
      gradient: "from-[#FF5A4F] to-[#fb923c]"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-[#280327] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#a1005a]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

      <div className="px-8 md:px-16 max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 sm:mb-20">
          <div className="space-y-6">
            <div>
              <span className="text-[#a1005a] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs block mb-3">
                The Mission
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-[#ffebf7]">
                About the <span className="text-[#FF5A4F]">Seminar</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-[#ffebf7]/70 leading-relaxed max-w-lg font-body">
              INTERFACE 2026 is organized by{" "}
              <span className="text-[#ffebf7] font-semibold">BSCPE 4-3 &amp; 4-6</span>{" "}
              engineering students. This event bridges the theoretical gap between classroom
              learning and the rapid evolution of modern tech industries, serving as a partial
              fulfillment of CMPE 408.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image 
                src={RoboticsLogo}
                alt="About Industry" 
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-[0_10px_40px_rgba(255,47,142,0.25)] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <BorderGlow
              key={index}
              className="group cursor-target h-full overflow-hidden rounded-xl"
              backgroundColor="#220021"
              colors={['#FF2F8E', '#f2a8c5', '#FF5A4F']}
              glowColor="330 92 64"
              glowRadius={32}
              borderRadius={18}
              edgeSensitivity={24}
            >
              <div className="relative flex h-full flex-col p-6 md:p-8">
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${card.gradient}`}></div>

                <div className="mb-8 w-14 h-14 flex items-center justify-center text-[#ffebf7] opacity-80 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-5xl drop-shadow-[0_0_15px_rgba(255,47,142,0.4)]">
                    {card.icon}
                  </span>
                </div>

                <span className="text-sm font-bold tracking-widest uppercase text-[#ffebf7]/40 mb-3">
                  {card.session}
                </span>

                <h3 className="font-display text-xl font-bold text-[#ffebf7] mb-3 leading-tight">
                  {card.title}
                </h3>

                <p className="font-body text-sm text-[#ffebf7]/50 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  );
}
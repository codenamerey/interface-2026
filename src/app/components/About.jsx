import React from 'react';
import Image from 'next/image';
import RoboticsLogo from "@/assets/about/robotics-industry.png";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div>
              <span className="text-[#a1005a] font-bold uppercase tracking-[0.2em] text-xs">
                The Mission
              </span>
              <h2 className="font-display text-4xl font-bold text-[#ffebf7] mt-4">
                About the Seminar
              </h2>
            </div>
            
            <p className="text-lg text-[#ffebf7]/70 leading-relaxed">
              INTERFACE 2026 is organized by{" "}
              <span className="text-[#ffebf7] font-semibold">BSCPE 4-3 &amp; 4-6</span>{" "}
              engineering students. This event bridges the theoretical gap between classroom
              learning and the rapid evolution of modern tech industries, serving as a partial
              fulfillment of CMPE 408.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
              {[
                { title: "Core Principles", sub: "Engineering Foundations", icon: "build" },
                { title: "Cyber Systems", sub: "Modern Infrastructure", icon: "security" },
                { title: "Neural Networks", sub: "AI Architecture", icon: "psychology" },
                { title: "Cloud Scale", sub: "System Deployment", icon: "cloud_upload" },
              ].map(({ title, sub, icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-4 rounded bg-[#220021]/40 border border-white/5 hover:border-[#a1005a]/50 transition-all"
                >
                  <div className="w-10 h-10 rounded bg-[#a1005a]/20 flex items-center justify-center text-[#a1005a] shrink-0">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#ffebf7]">{title}</h4>
                    <p className="text-xs text-[#ffebf7]/50">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image 
                src={RoboticsLogo}
                alt="About Industry" 
                className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_30px_rgba(161,0,90,0.3)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
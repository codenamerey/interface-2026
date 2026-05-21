import React from 'react';
import BorderGlow from "@/shared/BorderGlow";

export default function Venue() {
  return (
    <section id="venue" className="relative w-full py-20 sm:py-32 font-inter overflow-hidden bg-[#280327]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-[#a1005a] font-bold uppercase tracking-[0.2em] text-xs">
            Accessibility
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mt-4">
            Venue & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2a8c5] to-[#efb3ce]">Access</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm glass-card hud-border glow-pink-hover cursor-target">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0014260670996!2d121.00538239999997!3d14.598994500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e67d3d0725%3A0x2160f756c20106e1!2sPolytechnic%20University%20of%20the%20Philippines%20-%20College%20of%20Engineering%20and%20Architecture!5e0!3m2!1sen!2sph!4v1779174765173!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 cursor-target"
            ></iframe>
          </div>

          <div className="space-y-6 lg:space-y-8">

            <BorderGlow
              className="group cursor-target overflow-hidden rounded-2xl glass-card hud-border glow-pink-hover"
              backgroundColor="#220021"
              colors={['#FF2F8E', '#f2a8c5', '#FF5A4F']}
              glowColor="330 92 64"
              glowRadius={28}
              borderRadius={24}
              edgeSensitivity={22}
            >
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#f2a8c5] text-2xl transform transition-transform duration-300 group-hover:-translate-y-1">location_on</span>
                  <h3 className="font-montserrat font-bold text-xl text-white">CEA Room 315</h3>
                </div>
                <p className="font-inter font-medium text-white/70 leading-relaxed text-sm">
                  State-of-the-art environment for physical networking and collaborative learning sessions.
                </p>
              </div>
            </BorderGlow>

            <BorderGlow
              className="group cursor-target overflow-hidden rounded-2xl glass-card hud-border glow-pink-hover"
              backgroundColor="#220021"
              colors={['#FF2F8E', '#f2a8c5', '#FF5A4F']}
              glowColor="330 92 64"
              glowRadius={28}
              borderRadius={24}
              edgeSensitivity={22}
            >
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#f2a8c5] text-2xl transform transition-transform duration-300 group-hover:-translate-y-1">live_tv</span>
                  <h3 className="font-montserrat font-bold text-xl text-white">Virtual Access</h3>
                </div>
                <p className="font-inter font-medium text-white/70 leading-relaxed text-sm">
                  The Facebook Live link will be broadcasted and shared through our Facebook Page.
                </p>
              </div>
            </BorderGlow>
          </div>

        </div>
      </div>
    </section>
  );
}

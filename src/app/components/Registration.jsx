import React from 'react';

export default function Registration() {
  const lumaUrl = process.env.NEXT_PUBLIC_LUMA_URL || "https://lu.ma";

  return (
    <section className="relative w-full py-32 font-inter overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-primary via-accent-pink to-accent-coral opacity-20 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl tracking-tight text-white mb-6">
          Ready to Secure Your Slot?
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
          Attendance management is strictly handled through the Luma infrastructure. Verify your eligibility and secure your hybrid or on-site allocation below.
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <a 
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#0B0409] hover:bg-white/90 px-10 py-5 rounded-xl font-montserrat font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Register now on Luma
          </a>
          <p className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/30">
            Registration deadline: May 20, 2026 • 12:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
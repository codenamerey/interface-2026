import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-white border-t border-white/5 py-12 px-6 font-inter">
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

      </div>
    </footer>
  );
}
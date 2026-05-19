import React from 'react';

const SPEAKERS = [
  { id: 1, name: "Pending Confirmation", role: "Industry Practitioner", company: "To Be Announced", topic: "Seminar Session 1: Core Frameworks" },
  { id: 2, name: "Pending Confirmation", role: "Academic Expert", company: "To Be Announced", topic: "Seminar Session 2: Infrastructure" },
  { id: 3, name: "Pending Confirmation", role: "Senior Engineer", company: "To Be Announced", topic: "Seminar Session 3: Emerging Practices" },
  { id: 4, name: "Pending Confirmation", role: "Solutions Architect", company: "To Be Announced", topic: "Seminar Session 4: Industry Matrix" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-24 font-inter overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Seminar <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-coral">Speakers</span>
          </h2>
          <p className="text-white/60 font-medium max-w-2xl mx-auto">
            Industry professionals and academic experts bringing real-world insights to the core principles of computer engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker) => (
            <div 
              key={speaker.id} 
              className="group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-accent-coral/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-accent-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="w-full aspect-square bg-white/5 border border-white/10 rounded-xl mb-6 flex flex-col items-center justify-center text-white/30 font-mono text-[10px] uppercase tracking-widest relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:10px_10px] opacity-10"></div>
                [ HEADSHOT ]
              </div>
              
              <h3 className="font-montserrat font-bold text-lg text-white leading-tight mb-1">
                {speaker.name}
              </h3>
              <p className="font-mono text-xs text-accent-coral uppercase tracking-wide">
                {speaker.role}
              </p>
              
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">Session Topic</span>
                <p className="font-inter font-medium text-sm text-white/80 leading-snug">
                  {speaker.topic}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
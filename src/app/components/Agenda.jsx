import React from 'react';

const TIMELINE = [
  { time: "08:00 AM – 09:00 AM", event: "Opening Ceremonies & Welcome Remarks", type: "ceremony" },
  { time: "09:00 AM – 10:30 AM", event: "Seminar Session 1: Core Frameworks", type: "session" },
  { time: "10:30 AM – 12:00 PM", event: "Seminar Session 2: Infrastructure & Bridging", type: "session" },
  { time: "12:00 PM – 01:00 PM", event: "Lunch Break & Networking", type: "break" },
  { time: "01:00 PM – 02:30 PM", event: "Seminar Session 3: Emerging Practices", type: "session" },
  { time: "02:30 PM – 04:00 PM", event: "Seminar Session 4: Industry Deployment Matrix", type: "session" },
  { time: "04:00 PM – 05:00 PM", event: "Closing Ceremonies & Certificate Handover", type: "ceremony" },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative w-full py-24 font-inter overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-light/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white text-center mb-16">
          Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-coral">Agenda</span>
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-8 pb-4">
          {TIMELINE.map((slot, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[#280327] transition-transform group-hover:scale-150 shadow-[0_0_10px_rgba(255,255,255,0.5)] ${
                slot.type === 'session' ? 'bg-accent-pink' : slot.type === 'break' ? 'bg-white/40' : 'bg-primary'
              }`} />
              
              <div className="bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all backdrop-blur-sm rounded-xl p-5 shadow-sm">
                <span className="font-mono text-xs font-semibold text-accent-coral block tracking-widest uppercase mb-2">
                  {slot.time}
                </span>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  {slot.event}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import BorderGlow from "@/shared/BorderGlow";

import marcEscober from "@/assets/speakers/mark.jpg";
import asiGuiang from "@/assets/speakers/asi.jpg";
import rannieOllit from "@/assets/speakers/rannie.jpg";
import billyFajardo from "@/assets/speakers/billy.jpg";

const SPEAKERS = [
  { id: 1, name: "Mr. Marc Ian Escober", role: "Chief Technology Officer", company: "SOFI AI Tech Solution Inc.", topic: "What Does It Actually Take to Be an AI Engineer in the Philippines?", image: marcEscober },
  { id: 2, name: "Mr. Asi Guiang", role: "Solutions Architect", company: "Appficiency Inc.", topic: "Introduction to Cybersecurity", image: asiGuiang },
  { id: 3, name: "Mr. Billy Fajardo", role: "Senior Talent Acquisition Manager", company: "Arch Global Services (Philippines) Inc.", topic: "Data-Driven by Default: How Industry Runs on Big Data Analytics", image: billyFajardo },
  { id: 4, name: "Mr. Rannie Ollit", role: "Lead Software Engineer", company: "Salescaddie", topic: "From Requirements to Production: Full-Stack AI Systems and Context Engineering ", image: rannieOllit },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-16 sm:py-24 font-inter overflow-hidden">
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
            <BorderGlow
              key={speaker.id}
              className="group cursor-target h-full overflow-hidden rounded-2xl"
              backgroundColor="#220021"
              colors={['#FF2F8E', '#f2a8c5', '#FF5A4F']}
              glowColor="330 92 64"
              glowRadius={34}
              borderRadius={24}
              edgeSensitivity={22}
            >
              <div className="relative flex h-full flex-col p-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-accent-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="w-full aspect-square bg-white/5 border border-white/10 rounded-xl mb-6 relative overflow-hidden">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 font-mono text-[10px] uppercase tracking-widest">
                      <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:10px_10px] opacity-10"></div>
                      [ HEADSHOT ]
                    </div>
                  )}
                </div>

                <h3 className="font-montserrat font-bold text-lg text-white leading-tight mb-1">
                  {speaker.name}
                </h3>
                <p className="font-mono text-xs text-accent-coral uppercase tracking-wide">
                  {speaker.role}
                </p>
                <p className="font-inter text-xs text-white/50 mt-0.5">
                  {speaker.company}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">Session Topic {speaker.id}</span>
                  <p className="font-inter font-medium text-sm text-white/80 leading-snug">
                    {speaker.topic}
                  </p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

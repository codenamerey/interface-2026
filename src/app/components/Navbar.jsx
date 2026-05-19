export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#280327]/95 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-5 max-w-[1200px] mx-auto">
        <span className="font-display text-xl font-bold tracking-tighter text-[#ffebf7]">
          INTERFACE 2026
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["About", "Speakers", "Agenda", "Venue"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-[#ffebf7]/70 hover:text-[#a1005a] transition-colors">
              {item}
            </a>
          ))}
          <a className="bg-[#a1005a] text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-[#FF2F8E]" href="https://lu.ma" target="_blank">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
  // src/app/page.js
  import Hero from "@/app/components/Hero";
  import About from "@/app/components/About";
  import Speakers from "@/app/components/Speakers";
  import Agenda from "@/app/components/Agenda";
  import Venue from "@/app/components/Venue";
  import Registration from "@/app/components/Registration";
  import Footer from "@/app/components/Footer";

  export default function Home() {
    return (
      <main className="min-h-screen bg-[#280327] selection:bg-accent-pink selection:text-white">
        <Hero />
        <About />
        <Speakers />
        <Agenda />
        <Venue />
        <Registration />
        <Footer />
      </main>
    );
  }
import Header      from "@/components/layout/Header";
import Footer      from "@/components/layout/Footer";
import Hero        from "@/components/sections/Hero";
import Ticker      from "@/components/sections/Ticker";
import Stats       from "@/components/sections/Stats";
import Services    from "@/components/sections/Services";
import Diferenciais from "@/components/sections/Diferenciais";
import Contact     from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" style={{ fontFamily: "'Barlow', sans-serif", background: "#0c0b08", color: "#fff" }}>
      <Header />
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <Diferenciais />
      <Contact />
      <Footer />
    </main>
  );
}

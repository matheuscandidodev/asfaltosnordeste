import Header       from "@/components/layout/Header";
import Footer       from "@/components/layout/Footer";
import Ticker       from "@/components/sections/Ticker";
import SobreContent from "@/components/sections/sobre/SobreContent";

export const metadata = {
  title: "Sobre nós | Asfaltos Nordeste",
  description: "Desde 1997, lideramos o desenvolvimento da infraestrutura rodoviária do Norte e Nordeste com tecnologia, qualidade e logística própria.",
};

export default function SobrePage() {
  return (
    <main id="top" style={{ fontFamily: "'Barlow', sans-serif", background: "#0c0b08", color: "#fff" }}>
      <Header />
      <SobreContent />
      <Ticker />
      <Footer />
    </main>
  );
}

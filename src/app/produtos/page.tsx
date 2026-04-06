import Header          from "@/components/layout/Header";
import Footer          from "@/components/layout/Footer";
import Ticker          from "@/components/sections/Ticker";
import ProdutosContent from "@/components/sections/produtos/ProdutosContent";

export const metadata = {
  title: "Produtos | Asfaltos Nordeste",
  description: "CAP, Emulsões Asfálticas e Aditivos com tecnologia de ponta para obras de qualquer escala no Norte e Nordeste.",
};

export default function ProdutosPage() {
  return (
    <main id="top" style={{ fontFamily: "'Barlow', sans-serif", background: "#0c0b08", color: "#fff" }}>
      <Header />
      <ProdutosContent />
      <Ticker />
      <Footer />
    </main>
  );
}

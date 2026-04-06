import Header           from "@/components/layout/Header";
import Footer           from "@/components/layout/Footer";
import Ticker           from "@/components/sections/Ticker";
import TrabalheContent  from "@/components/sections/trabalhe/TrabalheContent";

export const metadata = {
  title: "Trabalhe Conosco | Asfaltos Nordeste",
  description: "Faça parte do time da Asfaltos Nordeste. Confira as vagas disponíveis ou envie seu currículo para o nosso banco de talentos.",
};

export default function TrabalhePage() {
  return (
    <main id="top" style={{ fontFamily: "'Barlow', sans-serif", background: "#0c0b08", color: "#fff" }}>
      <Header />
      <TrabalheContent />
      <Ticker />
      <Footer />
    </main>
  );
}

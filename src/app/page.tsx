import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Sobre from "@/components/Sobre";
import AreasAtuacao from "@/components/AreasAtuacao";
import Metodologia from "@/components/Metodologia";
import CasosDeSuccesso from "@/components/CasosDeSuccesso";
import Depoimentos from "@/components/Depoimentos";
import Diferenciais from "@/components/Diferenciais";
import Agendamento from "@/components/Agendamento";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <Sobre />
        <AreasAtuacao />
        <Metodologia />
        <CasosDeSuccesso />
        <Depoimentos />
        <Diferenciais />
        <Agendamento />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

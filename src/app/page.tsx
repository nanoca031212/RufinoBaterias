import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Baterias from "@/components/Baterias";
import ComoFunciona from "@/components/ComoFunciona";
import LogoCarousel from "@/components/LogoCarousel";
import ServicosAdicionais from "@/components/ServicosAdicionais";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <div className="relative">
          <Hero />
          <Features />
        </div>

        <Baterias />
        <ServicosAdicionais />

        <LogoCarousel />
        <ComoFunciona />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

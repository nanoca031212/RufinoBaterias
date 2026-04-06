"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  letterStagger,
  letterAnim,
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    gsap.to(el, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      aria-label="Abertura"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col items-center pt-32 md:pt-0 md:flex-row md:items-center"
    >
      <div ref={bgRef} className="absolute inset-0 bg-cover bg-center " />
      <Image
        src="/backgroundHero.jpeg"
        alt="Fundo do Hero"
        fill
        priority
        className="object-cover object-center brightness-[0.25]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent border-b-[#FFCC00] border-b-1" />

      {/* Luz focal */}
      <div className="absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 flex flex-col items-center text-center md:grid md:grid-cols-2 md:items-center md:text-left gap-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-flex mb-6 items-center gap-3 rounded-full border border-gold/50 bg-black/60 px-5 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-sm">
            <span>Frete grátis para região de Pedro Leopoldo</span>
          </div>

          <h1 className="text-white font-bold text-[26px] md:text-5xl lg:text-6xl tracking-tight leading-[1.2] md:leading-[1.1] mb-3">
            <div className="overflow-hidden mb-1 whitespace-nowrap">
              <p>Levamos sua bateria nova</p>
            </div>
            <div className="text-gold overflow-hidden text-[0.85em] md:text-[0.85em] whitespace-nowrap">
              <p>até você em poucos minutos!</p>
            </div>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl md:max-w-xl mb-4 leading-relaxed">
            Garanta uma bateria nova, com instalação rápida e preço justo sem
            perder tempo e sem correr riscos de ficar na mão.
          </p>

          <div className="mb-12 md:mb-0">
            <a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              className="group inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base md:text-lg font-bold text-black hover:bg-gold/90 transition-all active:scale-95 shadow-[0_0_25px_rgba(255,204,0,0.3)]"
            >
              Garanta sua bateria agora
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Espaço para o Pablo no grid desktop */}
        <div className="hidden md:block h-full" />
      </div>

      {/* Pablo - Mobile: Centralizado / Desktop: Lateral */}
      <div className="relative z-10 w-full max-w-lg md:max-w-none h-[400px] md:h-[650px] mt-auto md:absolute md:bottom-0 md:right-[8%] md:w-[35%] pointer-events-none">
        <Image
          src="/Pablo.svg"
          alt="Pablo - Especialista em Baterias"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(255,204,0,0.1)]"
          priority
        />
      </div>
    </section>
  );
}

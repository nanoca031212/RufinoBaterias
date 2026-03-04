"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import {
  letterStagger,
  letterAnim,
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";
import { SITE } from "@/lib/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SplitText({ text }: { text: string }) {
  return (
    <motion.span
      variants={letterStagger(0.05)}
      initial="hidden"
      animate="show"
      className="inline-block"
    >
      {text.split("").map((c, i) => (
        <motion.span
          aria-hidden
          variants={letterAnim}
          className="inline-block will-change-transform"
          key={i}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

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
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.heroBg})`,
          backgroundPositionY: "0%",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,.55),rgba(10,10,10,.85))]" />

      <div className="relative z-10 mx-auto flex h-full min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 items-center text-center md:items-start md:text-left">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-zinc-200 backdrop-blur"
        >
          <span>⭐</span>
          <span>300+ Casos Resolvidos</span>
          <span className="text-zinc-500">|</span>
          <span>{SITE.oab}</span>
        </motion.div>

        <motion.h1
          className="text-white font-[var(--font-playfair)] text-5xl md:text-6xl leading-tight"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate="show"
        >
          <div>
            <SplitText text="Justiça que" />
          </div>
          <div className="text-gold">
            <SplitText text="Transforma Vidas" />
          </div>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-lg text-zinc-200"
        >
          Atendimento exclusivo e estratégico com o {SITE.nome}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contato"
            className="rounded-full bg-gold px-6 py-3 text-black font-medium hover:bg-[var(--gold-600)] transition-colors"
          >
            {SITE.cta}
          </a>
          <a
            href="#areas"
            className="rounded-full border border-white/25 px-6 py-3 text-white hover:bg-white/10 transition-colors"
          >
            Conhecer Atuação
          </a>
        </motion.div>

        {/* logos de credibilidade removidos por solicitação */}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

export default function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-[var(--gold)]">
              <Image
                src={images.advogado}
                alt="Retrato profissional do Dr. Rafael Mendes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-full bg-black/80 px-4 py-2 text-sm text-gold">
              Atendimento Exclusivo
            </div>
          </motion.div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 id="sobre-title" className="font-[var(--font-playfair)] text-3xl md:text-4xl">
              Compromisso com a sua causa
            </h2>
            <motion.p variants={fadeInUp} className="mt-4 text-zinc-600">
              Formado em Direito com pós-graduação em Direito Civil e Processo Civil, atua há mais de 15 anos com foco em resultados e total transparência.
            </motion.p>
            <ul className="mt-6 space-y-3">
              {[
                "OAB Seccional XX",
                "Pós-graduado em Direito Civil e Processo Civil",
                "Membro da Comissão de [especialidade] da OAB",
                "+15 anos de experiência em [área]",
              ].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-gold" aria-hidden />
                  <span className="text-zinc-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="#contato" className="rounded-full bg-gold px-6 py-3 text-black hover:bg-[var(--gold-600)] transition-colors">
                Agende sua Consulta Gratuita
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


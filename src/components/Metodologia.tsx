"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Search, Gavel, Zap, Flag } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Análise Detalhada do Caso", desc: "Levantamento minucioso dos fatos e documentos." },
  { icon: Gavel, title: "Estratégia Jurídica Personalizada", desc: "Plano de ação sob medida para o seu objetivo." },
  { icon: Zap, title: "Atuação Ágil e Transparente", desc: "Acompanhamento claro de cada etapa do processo." },
  { icon: Flag, title: "Acompanhamento até o Resultado", desc: "Compromisso até a entrega do melhor resultado." },
];

export default function Metodologia() {
  return (
    <section aria-labelledby="metodo-title" className="bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="metodo-title" className="font-[var(--font-playfair)] text-3xl md:text-4xl">
          Advocacia Estratégica e Personalizada
        </h2>
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map(({ icon: Icon, title, desc }) => (
            <motion.li key={title} variants={fadeInUp} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Icon />
              </div>
              <div className="text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}


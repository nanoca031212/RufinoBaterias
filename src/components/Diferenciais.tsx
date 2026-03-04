"use client";

import { ShieldCheck, Eye, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Atendimento Exclusivo",
    desc: "Cada caso tratado com dedicação integral.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Informações claras e objetivas em todas as etapas.",
  },
  {
    icon: Trophy,
    title: "Resultado Comprovado",
    desc: "Histórico robusto de êxito em diversas áreas.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diff-title"
      className="py-20 bg-[linear-gradient(180deg,#fff,rgba(10,10,10,.05))]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="diff-title"
          className="font-[var(--font-playfair)] text-3xl md:text-4xl text-[#333333]"
        >
          Por que escolher o Dr. Rafael?
        </h2>
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm text-[#333333]"
            >
              <Icon className="mb-4 h-10 w-10 text-gold" aria-hidden />
              <div className="text-lg font-semibold text-[#333333]">
                {title}
              </div>
              <p className="mt-2 text-sm text-[#333333]">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

"use client";

import { AREAS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronRight } from "lucide-react";

export default function AreasAtuacao() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 id="areas-title" className="font-[var(--font-playfair)] text-3xl md:text-4xl">
            Áreas de Atuação
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gold" />
        </div>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AREAS.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition dark:border-white/10 dark:bg-zinc-950 hover:bg-zinc-950 hover:text-gold"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black/5 text-zinc-700 group-hover:bg-black/20 group-hover:text-gold">
                <Icon />
              </div>
              <div className="text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-zinc-600 group-hover:text-gold">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-gold">
                Saiba mais <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10">
          <a href="#contato" className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5">
            Ver todas as áreas de atuação
          </a>
        </div>
      </div>
    </section>
  );
}


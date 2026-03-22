"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CATEGORIAS = [
  {
    title: "Carros",
    brands: "Moura, Zetta, Heliar e mais.",
    image:
      "/Carro.png", // Carro SUV/Sedan
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Caminhonetes e veículos a diesel",
    brands: "Moura, Zetta, Heliar e mais.",
    image:
      "/caminhonete12.png", // Caminhão/Caminhonete
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Motos",
    brands: "Moura, Heliar, Tudor e mais...",
    image:
      "/Moto.png", // Moto
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
];

const Baterias = () => {
  return (
    <section id="baterias" className="pt-[24rem] pb-28 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Usando centralização explicita */}
        <motion.div
          className="mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 rounded-full border border-[#1B1545]/30 bg-gold/5 text-[#1B1545] text-xs font-bold uppercase tracking-widest mb-4"
          >
            Baterias
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-zinc-900"
          >
            Linha completa de baterias
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIAS.map((cat, index) => (
            <motion.a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-[32px] border-2 border-gold/20 hover:border-gold transition-all cursor-pointer shadow-lg"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradiente para legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-300 mb-6">{cat.brands}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="text-center mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <a
          href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-black hover:bg-gold/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Garanta sua bateria agora
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Baterias;

"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CATEGORIAS = [
  {
    title: "Carros",
    brands: "Moura, Zetta, Heliar e mais.",
    image: "/Carro.png", // Carro SUV/Sedan
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Caminhonetes e veículos a diesel",
    brands: "Moura, Zetta, Heliar e mais.",
    image: "/caminhonete12.png", // Caminhão/Caminhonete
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Motos",
    brands: "Moura, Heliar, Tudor e mais...",
    image: "/Moto.png", // Moto
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
];

const Baterias = () => {
  return (
    <section id="baterias" className="pt-[24rem] pb-28 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Usando centralização explicita */}
        <div className="mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#1B1545]/30 bg-gold/5 text-[#1B1545] text-xs font-bold uppercase tracking-widest mb-4">
            Baterias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Linha completa de baterias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIAS.map((cat, index) => (
            <a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              className="group relative h-[500px] overflow-hidden rounded-[32px] border-2 border-gold/20 hover:border-gold transition-all cursor-pointer shadow-lg"
              key={index}
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
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-black hover:bg-gold/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Garanta sua bateria agora
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Baterias;

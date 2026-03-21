"use client";

import { Truck, Tag, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Truck,
    title: "Frete grátis",
    description: "Para toda região do centro",
    highlight: true,
  },
  {
    icon: Tag,
    title: "Melhores preços",
    description: "Baterias direto da fábrica",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Benefícios exclusivos",
    description: "Conheça nossos descontos",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Entrega expressa",
    description: "Receba seu pedido em minutos",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section className="absolute left-0 right-0 z-40 -translate-y-10 md:-translate-y-1/2 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-[2.5rem] md:rounded-full p-3 md:p-4 shadow-2xl flex flex-col lg:flex-row lg:justify-between items-stretch lg:items-center gap-3 md:gap-4 border border-zinc-100">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 px-6 py-4 rounded-[2rem] md:rounded-full transition-all flex-1 ${
                feature.highlight
                  ? "bg-gold text-black shadow-lg shadow-gold/20"
                  : "bg-white border border-zinc-100 text-zinc-800"
              }`}
            >
              <div
                className={`flex items-center justify-center shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full ${
                  feature.highlight ? "bg-white" : "bg-gold text-black"
                }`}
              >
                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[15px] md:text-base leading-tight">
                  {feature.title}
                </h3>
                <p
                  className={`text-[10px] md:text-[10px] uppercase tracking-wider font-medium opacity-70`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

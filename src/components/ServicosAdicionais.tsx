"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MessageCircle } from "lucide-react";

const SERVICOS = [
  {
    title: "Troca de Bateria",
    image: "/trocar.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
  },
  {
    title: "Verificação de carga do alternador",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
  },
  {
    title: "Limpeza de terminais e cabos",
    image: "/Limpeza.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
  },
  {
    title: "Teste de carga da bateria",
    image: "/testebatera.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
  }
];

export default function ServicosAdicionais() {
  return (
    <section id="servicos-adicionais" className="py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-4"
          >
            Outros serviços
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold"
          >
            Outros serviços que oferecemos
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICOS.map((servico, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-[32px] border-2 border-gold/20 hover:border-gold transition-all shadow-2xl"
            >
              <Image
                src={servico.image}
                alt={servico.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradiente denso conforme design */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold mb-6 max-w-[80%] leading-tight group-hover:text-gold transition-colors">
                  {servico.title}
                </h3>
                <a 
                  href={servico.link}
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3 rounded-xl text-black font-bold text-xs uppercase tracking-wider hover:bg-gold/90 transition-all active:scale-95 shadow-[0_4px_15px_rgba(255,204,0,0.3)]"
                >
                  Agendar Serviço
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

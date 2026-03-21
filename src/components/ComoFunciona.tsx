"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MessageSquare, PhoneCall, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Chame no WhatsApp",
    description: "Nossa equipe está pronta para te atender e identificar a bateria ideal para o seu veículo.",
    color: "from-red-500/20 to-transparent"
  },
  {
    icon: PhoneCall,
    title: "Confirmamos o Pedido",
    description: "Validamos os detalhes técnicos e o local de entrega para garantir agilidade total.",
    color: "from-gold/20 to-transparent"
  },
  {
    icon: Truck,
    title: "Entrega e Instalação",
    description: "Chegamos em poucos minutos para realizar a troca com segurança e garantia.",
    color: "from-blue-500/20 to-transparent"
  }
];

export default function ComoFunciona() {
  return (
    <section id="servicos" className="py-24 bg-black text-white overflow-hidden">
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
            className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 block"
          >
            COMO FUNCIONA
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight"
          >
            Em 3 passos simples, a sua bateria nova chega até você — <span className="text-gold">sem estresse.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 overflow-hidden hover:border-gold/30 transition-colors`}
            >
              {/* Efeito de brilho no fundo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(22,163,74,0.3)] uppercase text-sm tracking-wider"
          >
            QUERO RESOLVER AGORA MESMO
          </a>
        </motion.div>
      </div>
    </section>
  );
}

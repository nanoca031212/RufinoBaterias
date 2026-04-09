"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MessageSquare, PhoneCall, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Chame no WhatsApp",
    description:
      "Nossa equipe está pronta para te atender e identificar a bateria ideal para o seu veículo.",
    color: "from-red-500/20 to-transparent",
  },
  {
    icon: PhoneCall,
    title: "Confirmamos o Pedido",
    description:
      "Validamos os detalhes técnicos e o local de entrega para garantir agilidade total.",
    color: "from-gold/20 to-transparent",
  },
  {
    icon: Truck,
    title: "Entrega e Instalação",
    description:
      "Chegamos em poucos minutos para realizar a troca com segurança e garantia.",
    color: "from-blue-500/20 to-transparent",
  },
];

export default function ComoFunciona() {
  return (
    <section id="entrega" className="py-24 bg-black text-white overflow-hidden">
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
            Em 3 passos simples, a sua bateria nova chega até você —{" "}
            <span className="text-gold">sem estresse.</span>
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

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

        <div className="mt-16 flex justify-center">
          <div className="w-full md:w-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              className="group inline-flex items-center justify-center w-full md:w-auto gap-4 rounded-full bg-[#25D366] py-4 px-6 text-base md:text-lg font-bold text-white hover:bg-[#1ebe5d] transition-all active:scale-95 shadow-[0_0_25px_rgba(37,211,102,0.3)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Peça Pelo ja whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Eric Guimarães",
    date: "11 meses atrás",
    rating: 5,
    text: "Excelente recepção, bons profissionais, ótimo serviço e excelente preço",
    initials: "EG",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "José M C A",
    date: "11 meses atrás",
    rating: 5,
    text: "Atendimento rápido, cortês e técnico. Me ajudou a escolher a melhor bateria de acordo com minha necessidade e custo.",
    initials: "J",
    color: "bg-green-700",
  },
  {
    id: 3,
    name: "Silesio Machado",
    date: "11 meses atrás",
    rating: 5,
    text: "Foi ótima, atendimento muito bom 😃",
    initials: "S",
    color: "bg-indigo-700",
  },
  {
    id: 4,
    name: "Ricardo Oliveira",
    date: "5 meses atrás",
    rating: 5,
    text: "Preço justo e Honestidade. Precisava trocar a bateria e me orientaram sobre a melhor opção para o meu carro. Recomendo muito!",
    initials: "RO",
    color: "bg-blue-600",
  },
  {
    id: 5,
    name: "Mariana Costa",
    date: "3 meses atrás",
    rating: 5,
    text: "Atendimento nota 10! Chegaram em 20 minutos e a instalação foi super rápida. Salvou meu dia!",
    initials: "MC",
    color: "bg-pink-600",
  },
  {
    id: 6,
    name: "Felipe Almeida",
    date: "1 mês atrás",
    rating: 5,
    text: "Melhor lugar para comprar bateria em BH. Atendimento excelente e equipe muito educada.",
    initials: "FA",
    color: "bg-teal-600",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-[#09090B] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Google Badge Right */}
        <div className="flex justify-end mb-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-[#FFCC00] text-black px-4 py-2 rounded-xl shadow-lg"
          >
            <span className="text-sm font-bold tracking-tight">Google 5.0</span>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                className="min-w-[300px] md:min-w-[400px] h-[280px] bg-white p-8 rounded-[32px] shadow-sm flex flex-col select-none"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xl overflow-hidden shrink-0`}>
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 text-[16px] leading-tight mb-1">
                        {review.name}
                      </h3>
                      <p className="text-[13px] text-zinc-500">{review.date}</p>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>

                <div className="flex gap-1 mb-4 items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                  <div className="ml-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>

                <p className="text-zinc-700 text-[15px] leading-relaxed line-clamp-3 overflow-hidden">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Indicator Hint */}
        <div className="mt-12 flex justify-center gap-2 md:hidden">
          <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="w-1/2 h-full bg-gold"
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

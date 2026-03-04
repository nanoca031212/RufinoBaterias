"use client";

import { CASOS_SUCESSO } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function CasosDeSuccesso() {
  return (
    <section aria-labelledby="casos-title" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="casos-title" className="font-[var(--font-playfair)] text-3xl md:text-4xl">
          Casos de Sucesso
        </h2>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {CASOS_SUCESSO.map((c, i) => (
              <SwiperSlide key={i}>
                <motion.article
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
                >
                  <div className="text-sm text-gold">{c.area}</div>
                  <div className="mt-2 text-zinc-700">Situação: {c.inicio}</div>
                  <div className="mt-4 text-lg font-semibold">Resultado: {c.resultado}</div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-8">
          <a href="#contato" className="rounded-full bg-gold px-6 py-3 text-black hover:bg-[var(--gold-600)] transition-colors">
            Quero resolver meu caso
          </a>
        </div>
      </div>
    </section>
  );
}


"use client";

import { DEPOIMENTOS } from "@/lib/constants";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depo-title"
      className="bg-white py-20 text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2
            id="depo-title"
            className="font-[var(--font-playfair)] text-[#333333] text-3xl md:text-4xl "
          >
            Depoimentos
          </h2>
          <div className="inline-flex items-center gap-2 text-[#0a0a0a] rounded-full border border-zinc-200 px-3 py-1 text-sm">
            <Star className="h-4 w-4 text-[#0a0a0a]" aria-hidden />
            <h1>Google Reviews 5.0</h1>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {DEPOIMENTOS.map((d, idx) => (
            <SwiperSlide key={idx}>
              <article className="h-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm text-[#333333]">
                <div className="flex items-center gap-3 text-[#333333]">
                  <div
                    className="h-10 w-10 rounded-full bg-zinc-200"
                    aria-hidden
                  />
                  <div className="font-medium text-[#333333]">{d.nome}</div>
                </div>
                <div
                  className="mt-3 text-yellow-500"
                  aria-label="Avaliação 5 de 5"
                >
                  {"★★★★★"}
                </div>
                <p className="mt-3 text-[#333333]">{d.texto}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

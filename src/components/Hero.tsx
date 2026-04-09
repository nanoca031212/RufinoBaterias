"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    gsap.to(el, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      aria-label="Abertura"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col items-center pt-32 md:pt-0 md:flex-row md:items-center"
    >
      <div ref={bgRef} className="absolute inset-0 bg-cover bg-center " />
      <Image
        src="/backgroundHero.jpeg"
        alt="Entrega de bateria automotiva em Pedro Leopoldo MG"
        fill
        priority
        className="object-cover object-center brightness-[0.25]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent border-b-[#FFCC00] border-b-1" />

      {/* Luz focal */}
      <div className="absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 flex flex-col items-center text-center md:grid md:grid-cols-2 md:items-center md:text-left gap-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-flex mb-6 items-center gap-3 rounded-full border border-gold/50 bg-black/60 px-5 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-sm">
            <span>Frete grátis para Pedro Leopoldo e região</span>
          </div>

          <h1 className="text-white font-bold text-3xl md:text-5xl  lg:text-5xl tracking-tight leading-[1.2] md:leading-[1.1] mb-3 ">
            <div className="">
              <p>
                Bateria Automotiva em{" "}
                <span className="text-gold">Pedro Leopoldo</span>
              </p>
            </div>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl md:max-w-xl mb-4 leading-relaxed">
            Bateria nova com entrega rápida e instalação grátis em Pedro
            Leopoldo e região. Preço justo, sem perder tempo e sem risco de
            ficar na mão.
          </p>
          <div className="flex flex-col md:flex-row items-stretch md:items-center mt-4 mb-8 gap-3 w-full">
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
                Peça Pelo whatsapp
              </a>
            </div>
            <div className="w-full md:w-auto">
              <a
                href="tel:+553137683663"
                className="group inline-flex items-center justify-center w-full md:w-auto gap-4 rounded-full bg-gold hover:bg-gold/90 text-black py-4 px-6 text-base md:text-lg font-bold transition-all active:scale-95 shadow-[0_0_25px_rgba(255,204,0,0.3)]"
              >
                <PhoneCallIcon className="" size={26} />
                <span>(31) 3768-3663 </span>
              </a>
            </div>
          </div>
        </div>

        {/* Espaço para o Pablo no grid desktop */}
        <div className="hidden md:block h-full" />
      </div>

      {/* Pablo - Mobile: Centralizado / Desktop: Lateral */}
      <div className="relative z-10 w-full max-w-lg md:max-w-none h-[400px] md:h-[650px] mt-auto md:absolute md:bottom-0 md:right-[8%] md:w-[35%] pointer-events-none">
        <Image
          src="/Pablo.svg"
          alt="Especialista em baterias automotivas da Rufino Baterias"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(255,204,0,0.1)]"
          priority
        />
      </div>

      <a
        href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1ebe5d] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:h-16 md:w-16"
        aria-label="Abrir WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-7 w-7 md:h-8 md:w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  );
}

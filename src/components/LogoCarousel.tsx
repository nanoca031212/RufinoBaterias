"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  { src: "/carrosselLogo/MouraLogo.svg", alt: "Moura" },
  { src: "/carrosselLogo/Heliar.svg", alt: "Heliar" },
  { src: "/carrosselLogo/zetta.svg", alt: "Zetta" },

  { src: "/carrosselLogo/DelcarLogo.svg", alt: "Delcar" },
  { src: "/carrosselLogo/KondorLogo.svg", alt: "Kondor" },
];

export default function LogoCarousel() {
  // Duplicamos a lista para criar o efeito de scroll infinito suave
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className=" bg-white border-y border-zinc-100 ">
      <div className="relative flex overflow-hidden group/carousel">
        {/* Gradientes nas laterais para suavizar a entrada/saída */}

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{
            x: [0, -100 * LOGOS.length],
          }}
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                x: 12,
                scale: 1.15,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-100 hover:opacity-100 w-40 h-24 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="max-h-28 w-auto object-contain scale-125"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

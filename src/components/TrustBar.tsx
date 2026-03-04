"use client";

import { useEffect, useRef } from "react";
import { TRUST_METRICS } from "@/lib/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
  const refs = useRef<HTMLSpanElement[]>([]);
  refs.current = [];
  const setRef = (el: HTMLSpanElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    refs.current.forEach((el, i) => {
      const metric = TRUST_METRICS[i];
      const obj = { val: metric.from };
      gsap.fromTo(
        obj,
        { val: metric.from },
        {
          val: metric.to,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            const value = Math.floor(obj.val);
            el.textContent = `${value}${metric.suffix}`;
          },
        }
      );
    });
  }, []);

  return (
    <section aria-label="Credibilidade" className="bg-[#0A0A0A] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="grid grid-cols-2 gap-6 text-white sm:grid-cols-4">
          {TRUST_METRICS.map((m, idx) => (
            <li key={m.label} className="flex items-baseline gap-3">
              <span ref={setRef} className="text-3xl font-semibold text-gold">0</span>
              <span className="text-sm text-zinc-300">{m.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


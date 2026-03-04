"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Carregando"
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="text-[13px] uppercase tracking-[0.35em] text-gold mb-2">
              {SITE.escritorio}
            </div>
            <div className="text-3xl md:text-4xl font-[var(--font-playfair)] text-white">
              {SITE.nome}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

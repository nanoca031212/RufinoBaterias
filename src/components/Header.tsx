"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#baterias", label: "Baterias" },
  { href: "#servicos", label: "Serviços" },
  { href: "#entrega", label: "Entrega" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-2xs border-b border-zinc-200 py-3 md:py-4"
          : "bg-white py-4 md:py-6 shadow-2xs"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-full">
        {/* Mobile View (Hamburger - Logo - Button) */}
        <div className="flex md:hidden items-center justify-between w-full h-full">
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <Link
              href="#hero"
              className="relative flex items-center h-10 w-24 overflow-visible"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/RufinoLogoBranca.svg"
                  alt="Rufino Baterias"
                  width={120}
                  height={40}
                  className="-rotate-90 h-auto w-[90px]"
                />
              </div>
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-black shadow-lg shadow-gold/20"
            >
              <ShoppingCart className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop View (Logo - Links - Button) */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Logo Left */}
          <div className="flex items-center">
            <Link
              href="#hero"
              className="relative flex items-center h-10 w-24 overflow-visible"
            >
              <div className="absolute inset-0 flex items-center justify-start">
                <Image
                  src="/RufinoLogoBranca.svg"
                  alt="Rufino Baterias"
                  width={120}
                  height={40}
                  className="-rotate-90 h-auto w-[110px] hover:scale-105 transition-transform"
                />
              </div>
            </Link>
          </div>

          {/* Links + Button Right */}
          <div className="flex items-center gap-12">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-zinc-700 hover:text-[#1B1545] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gold px-6 py-3 hover:scale-105 text-sm font-bold text-black hover:bg-gold/90 transition-all active:scale-95 shadow-lg shadow-gold/20"
            >
              Peça já sua bateria
              <ShoppingCart className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-lg font-bold text-zinc-900 border-b border-zinc-100 last:border-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gold py-4 rounded-xl font-bold text-black"
                >
                  Falar com especialista
                  <ShoppingCart className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

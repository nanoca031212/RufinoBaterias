"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9997] transition-colors ${scrolled ? "nav-glass" : "bg-transparent"}`}
      aria-label="Navegação principal"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="inline-flex items-baseline gap-2" aria-label="Página inicial">
          <span className="text-white text-xl md:text-2xl font-[var(--font-playfair)]">
            {SITE.escritorio}
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-zinc-200 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-black hover:bg-[var(--gold-600)] transition-colors"
            >
              {SITE.cta}
            </a>
          </li>
        </ul>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md px-2 py-2 ring-1 ring-white/15 text-white"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <X className={`absolute inset-0 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="px-6 py-4 space-y-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-zinc-200 hover:text-white py-1.5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="inline-flex rounded-full bg-gold px-5 py-2 text-sm font-medium text-black hover:bg-[var(--gold-600)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {SITE.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


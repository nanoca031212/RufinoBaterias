"use client";

import Link from "next/link";
import { SITE, AREAS } from "@/lib/constants";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300" aria-labelledby="rodape-title">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 id="rodape-title" className="text-white text-xl font-[var(--font-playfair)]">
              {SITE.escritorio}
            </h3>
            <p className="mt-2 text-sm">{SITE.slogan}</p>
            <p className="mt-4 text-sm">OAB: {SITE.oab}</p>
          </div>
          <div>
            <div className="text-white font-semibold">Áreas de Atuação</div>
            <ul className="mt-3 space-y-2 text-sm">
              {AREAS.map((a) => (
                <li key={a.title}><a href="#areas" className="hover:text-white">{a.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Contato</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>{SITE.cidade}</li>
              <li><a href="tel:+5500000000000" className="hover:text-white">+55 (00) 00000-0000</a></li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link href="#" aria-label="Instagram">
                <Instagram className="hover:text-white" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="hover:text-white" />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <MessageCircle className="hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} {SITE.escritorio}. Todos os direitos reservados.
        </div>
      </div>
      <div className="h-64 w-full">
        <iframe
          title="Localização no Google Maps"
          aria-label="Mapa com localização do escritório"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9185064011375!2d-46.6388!3d-23.5021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRXN0csOjaW8!5e0!3m2!1spt-BR!2sBR!4v1700000000000"
        />
      </div>
    </footer>
  );
}


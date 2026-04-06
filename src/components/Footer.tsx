"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-zinc-600 py-16 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="inline-block relative h-10 w-24 overflow-visible"
            >
              <div className="absolute inset-0 flex items-center">
                <Image
                  src="/RufinoLogoBranca.svg"
                  alt="Rufino Baterias"
                  width={120}
                  height={40}
                  className="-rotate-90 h-auto w-[100px] "
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
              Especialistas em baterias automotivas com entrega rápida e
              instalação profissional em toda a região.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rufinobateriaspl/"
                className="text-zinc-400 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-900 font-bold tracking-tight">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-gold transition-colors font-medium"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#baterias"
                  className="hover:text-gold transition-colors font-medium"
                >
                  Baterias
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-gold transition-colors font-medium"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#entrega"
                  className="hover:text-gold transition-colors font-medium"
                >
                  Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-900 font-bold tracking-tight">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href="https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-gold transition-colors"
                >
                  (31) 9650-7294
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="font-medium">
                  contato@rufinobaterias.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="font-medium">
                  Praça Doutor Senra, 18 - Centro
                  <br />
                  Pedro leopoldo - MG
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-900 font-bold tracking-tight">Horário</h4>
            <div className="text-sm">
              <p className="mb-2 font-medium">Segunda a Sexta: 07:30 - 18:00</p>
              <p className="mb-2 font-medium">Sábado: 08:00 - 14:00</p>
              <p className="text-gold font-bold mt-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Atendimento de Emergência 24h
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} Rufino Baterias. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

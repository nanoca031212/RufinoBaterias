"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "5500000000000";
  const url = `https://wa.me/${phone}?text=Olá, gostaria de uma consulta gratuita.`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="pulse fixed right-4 bottom-4 z-[9996] inline-flex items-center justify-center rounded-full bg-[#25D366] text-white w-14 h-14 shadow-lg hover:scale-105 transition"
    >
      <MessageCircle />
    </a>
  );
}

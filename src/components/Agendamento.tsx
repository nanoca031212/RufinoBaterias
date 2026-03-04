"use client";

import { useState } from "react";

export default function Agendamento() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section id="contato" aria-labelledby="cta-title" className="bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="cta-title" className="font-[var(--font-playfair)] text-3xl md:text-4xl">
          Pronto para Defender seus Direitos?
        </h2>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2" aria-label="Formulário de agendamento">
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm text-zinc-300">Nome</label>
            <input id="nome" name="nome" required className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3" />
          </div>
          <div>
            <label htmlFor="whats" className="mb-2 block text-sm text-zinc-300">WhatsApp</label>
            <input id="whats" name="whats" required className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="area" className="mb-2 block text-sm text-zinc-300">Área jurídica</label>
            <select id="area" name="area" className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3">
              <option>Direito Civil</option>
              <option>Trabalhista</option>
              <option>Família</option>
              <option>Imobiliário</option>
              <option>Consumidor</option>
              <option>Empresarial</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="descricao" className="mb-2 block text-sm text-zinc-300">Descreva seu caso</label>
            <textarea id="descricao" name="descricao" rows={5} className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3" />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              aria-label="Quero Consulta Gratuita"
              className="rounded-full bg-gold px-6 py-3 text-black hover:bg-[var(--gold-600)] transition-colors disabled:opacity-60"
              disabled={sending}
            >
              {sending ? "Enviando..." : "Quero Consulta Gratuita"}
            </button>
            <a
              href="https://wa.me/5500000000000?text=Olá, gostaria de uma consulta gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 hover:bg-white/10"
              aria-label="Falar pelo WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}


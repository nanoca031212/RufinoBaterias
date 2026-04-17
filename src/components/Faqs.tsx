"use client";

const FAQS = [
  {
    question: "Como saber se a bateria do carro está ruim?",
    answer:
      "Os sinais mais comuns são dificuldade para dar partida, luzes fracas no painel, falhas elétricas e necessidade de chupeta com frequência. Se você está com esse problema, a Rufino Baterias faz atendimento rápido com bateria em Pedro Leopoldo para avaliar e indicar a troca correta.",
  },
  {
    question: "Vocês fazem entrega e instalação de bateria em Pedro Leopoldo?",
    answer:
      "Sim. Fazemos entrega rápida com instalação gratuita em Pedro Leopoldo e região. Você entra em contato, informamos a bateria ideal para o veículo e nossa equipe vai até o local para realizar a troca com segurança.",
  },
  {
    question: "Qual a melhor bateria para carro em Pedro Leopoldo?",
    answer:
      "A melhor bateria depende do modelo do veículo, da amperagem recomendada e do uso diário. Trabalhamos com marcas como Moura, Heliar, Zetta, Tudor, Delcar e Kondor para indicar a opção certa para carro, moto e veículos a diesel.",
  },
  {
    question: "Vocês atendem emergência 24h para bateria automotiva?",
    answer:
      "Sim. Se o veículo parar e você precisar de ajuda urgente, a Rufino Baterias oferece atendimento de emergência 24h, para bateria automotiva em Pedro Leopoldo, com agilidade para colocar você de volta na rota. Conforme a disponibilidade do entregador",
  },
  {
    question:
      "Além da troca, vocês fazem teste de carga e verificação do alternador?",
    answer:
      "Sim. Além da venda e instalação, realizamos teste de carga, limpeza de terminais e verificação de alternador. Isso ajuda a confirmar se o problema está mesmo na bateria e evita uma troca desnecessária.",
  },
  {
    question: "Quanto tempo dura uma bateria automotiva?",
    answer:
      "A durabilidade pode variar conforme uso, clima e manutenção, mas muitas baterias duram entre 2 e 3 anos. Se a sua já apresenta falhas, vale pedir uma avaliação para encontrar a melhor solução de bateria em Pedro Leopoldo.",
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-zinc-900 md:text-5xl">
            Dúvidas frequentes sobre bateria automotiva
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Respostas rápidas para as principais dúvidas de quem procura bateria
            em Pedro Leopoldo com entrega, instalação e atendimento de
            emergência.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition-colors open:border-gold/40 open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-zinc-900 md:text-lg">
                <span>{item.question}</span>
                <span className="text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-relaxed text-zinc-600 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

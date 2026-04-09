"use client";

import Image from "next/image";

const SERVICOS = [
  {
    title: "Troca de Bateria",
    image: "/trocar.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Verificação de carga do alternador",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Limpeza de terminais e cabos",
    image: "/Limpeza.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
  {
    title: "Teste de carga da bateria",
    image: "/testebatera.jpg",
    link: "https://api.whatsapp.com/send/?phone=553196507294&text&type=phone_number&app_absent=0",
  },
];

export default function ServicosAdicionais() {
  return (
    <section id="servicos" className="py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            Outros serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Outros serviços que oferecemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICOS.map((servico, index) => (
            <div
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-[32px] border-2 border-gold/20 hover:border-gold transition-all shadow-2xl"
            >
              <Image
                src={servico.image}
                alt={servico.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradiente denso conforme design */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold mb-6 max-w-[80%] leading-tight group-hover:text-gold transition-colors">
                  {servico.title}
                </h3>
                <a
                  href={servico.link}
                  className="inline-flex items-center gap-3 bg-[#25D366] px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebe5d] transition-all active:scale-95 shadow-[0_4px_15px_rgba(37,211,102,0.35)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agende sua Bateria
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

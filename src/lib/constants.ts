import { ReactNode } from "react";
import { Scale, Briefcase, Home, Users, Shield, FileText } from "lucide-react";

export const SITE = {
  nome: "Dr. Rafael Mendes",
  escritorio: "Mendes Advocacia",
  cidade: "[cidade]",
  oab: "OAB/XX XXXXX",
  cta: "Consulta Gratuita",
  slogan: "Defendendo seus direitos com excelência",
};

export const TRUST_METRICS = [
  { label: "Casos Resolvidos", from: 0, to: 300, suffix: "+", description: "300+ Casos Resolvidos" },
  { label: "Anos de Experiência", from: 0, to: 15, suffix: "+", description: "15+ Anos de Experiência" },
  { label: "Índice de Êxito", from: 0, to: 98, suffix: "%", description: "98% de Êxito" },
  { label: "Atendimento Estratégico", from: 0, to: 1, suffix: "", description: "Atendimento Estratégico" },
];

export const AREAS = [
  { icon: Scale, title: "Direito Civil", desc: "Contratos, responsabilidade civil e indenizações." },
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Defesa de direitos de empregados e empregadores." },
  { icon: Users, title: "Família e Sucessões", desc: "Divórcios, guarda, inventários e testamentos." },
  { icon: Home, title: "Direito Imobiliário", desc: "Locação, compra e venda, usucapião e posse." },
  { icon: Shield, title: "Direito do Consumidor", desc: "Cobranças indevidas, vícios de produtos e serviços." },
  { icon: FileText, title: "Direito Empresarial", desc: "Societário, contratos e consultoria estratégica." },
];

export const CASOS_SUCESSO = [
  {
    area: "Direito Trabalhista",
    inicio: "Cliente demitido sem verbas rescisórias",
    resultado: "Recebeu R$45.000 em indenização",
  },
  {
    area: "Direito Civil",
    inicio: "Ação de indenização por danos morais",
    resultado: "Acordo favorável de R$25.000",
  },
  {
    area: "Direito do Consumidor",
    inicio: "Cobrança indevida e negativações",
    resultado: "Cancelamento e restituição em dobro",
  },
];

export const DEPOIMENTOS = [
  {
    nome: "A. S.",
    texto:
      "Atendimento humano e resolutivo. O Dr. Rafael conduziu meu caso com transparência e estratégia.",
  },
  {
    nome: "M. P.",
    texto:
      "Profissional excelente e comprometido. Resultado acima do esperado.",
  },
  {
    nome: "R. L.",
    texto:
      "Comunicação clara e eficiente. Recomendo pela seriedade e competência.",
  },
  {
    nome: "L. G.",
    texto:
      "Fui muito bem assessorado do início ao fim. Resultado comprovado.",
  },
  {
    nome: "J. C.",
    texto:
      "Transparência total em cada etapa. Minha melhor experiência com advocacia.",
  },
  {
    nome: "P. N.",
    texto:
      "Escritório de alto padrão, atendimento exclusivo e estratégico.",
  },
];


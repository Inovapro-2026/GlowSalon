export interface Plan {
  name: string;
  price: string;
  period: string;
  badge: string | null;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "0",
    period: "/mês",
    badge: null,
    description: "Perfeito para profissionais autônomos começando agora.",
    features: [
      "1 Profissional",
      "Até 50 agendamentos/mês",
      "Agenda Online",
      "Lembretes por E-mail",
      "Relatórios Básicos"
    ],
    cta: "Começar Grátis",
    ctaLink: "/register",
    highlighted: false
  },
  {
    name: "Premium",
    price: "97",
    period: "/mês",
    badge: "MAIS POPULAR",
    description: "A solução completa para salões em crescimento.",
    features: [
      "Profissionais ilimitados",
      "Agendamentos ilimitados",
      "WhatsApp Automático",
      "Gestão Financeira Completa",
      "Split de Pagamentos",
      "Suporte Prioritário"
    ],
    cta: "Assinar Agora",
    ctaLink: "/register",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Consultar",
    period: "",
    badge: null,
    description: "Para redes de salões e franquias com necessidades customizadas.",
    features: [
      "Múltiplas Unidades",
      "API de Integração",
      "Gerente de Conta Dedicado",
      "Treinamento VIP",
      "Customizações Exclusivas",
      "SLA Garantido"
    ],
    cta: "Falar com Consultor",
    ctaLink: "/register",
    highlighted: false
  }
];

export const site = {
  name: "Dr. Carlos Arthur Athayde",
  shortName: "Dr. Carlos Arthur",
  specialty: "Dermatologia Oncológica",
  tagline: "Especialista em câncer de pele, mapeamento e dermatoscopia.",
  crm: "CRM RJ: 52.101.999-6",
  description:
    "Dermatologia oncológica dedicada ao diagnóstico precoce do câncer de pele. Mapeamento corporal total, dermatoscopia digital e cirurgia dermatológica em Ipanema e Niterói.",
  url: "https://drcarlosarthur.com.br",
  locale: "pt_BR",
  phone: "+5521995718080",
  phoneLabel: "(21) 99571-8080",
  photo: "/brand/dr-carlos-arthur.jpg",
} as const;

/**
 * Redes sociais. Preencher com os perfis reais — os itens sem URL
 * simplesmente não são renderizados no menu e no rodapé.
 */
export const social: { id: string; label: string; href: string }[] = [
  { id: "instagram", label: "Instagram", href: "" },
  { id: "youtube", label: "YouTube", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "" },
];

export type Clinic = {
  id: string;
  name: string;
  city: string;
  street: string;
  suite: string;
  district: string;
  addressLocality: string;
  /** Como o endereço é lido na tela (evita repetir bairro e cidade) */
  displayLocality: string;
  region: string;
  postalCode: string;
  /** Consulta do Google Maps — usada no embed e no botão de rota */
  mapQuery: string;
};

export const clinics: Clinic[] = [
  {
    id: "ipanema",
    name: "Clínica Ipanema",
    city: "Ipanema",
    street: "Rua Visconde de Pirajá, 608",
    suite: "sala 605",
    district: "Ipanema",
    addressLocality: "Rio de Janeiro",
    displayLocality: "Ipanema",
    region: "RJ",
    postalCode: "22410-002",
    mapQuery: "Rua Visconde de Pirajá 608, Ipanema, Rio de Janeiro, RJ, 22410-002",
  },
  {
    id: "niteroi",
    name: "Clínica Niterói",
    city: "Niterói",
    street: "Rua Miguel de Frias, 150",
    suite: "sala 1212",
    district: "Icaraí",
    addressLocality: "Niterói",
    displayLocality: "Icaraí, Niterói",
    region: "RJ",
    postalCode: "24220-001",
    mapQuery: "Rua Miguel de Frias 150, Icaraí, Niterói, RJ, 24220-001",
  },
];

/** Endereço em duas linhas: rua e sala em cima, bairro e CEP embaixo. */
export function formatAddress(c: Clinic): [string, string] {
  return [
    `${c.street} · ${c.suite}`,
    `${c.displayLocality}/${c.region} · CEP ${c.postalCode}`,
  ];
}

/** Link do WhatsApp com mensagem pré-preenchida. */
export function whatsapp(local: string, origem = "site") {
  const text = encodeURIComponent(
    `Olá, vim através do ${origem} e gostaria de agendar uma consulta em ${local}`,
  );
  return `https://api.whatsapp.com/send?phone=5521995718080&text=${text}`;
}

export function mapsEmbed(c: Clinic) {
  return `https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed&z=16`;
}

export function mapsDirections(c: Clinic) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.mapQuery)}`;
}

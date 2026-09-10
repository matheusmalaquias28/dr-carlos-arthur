export const site = {
  name: "Dr. Carlos Arthur Athayde",
  shortName: "Dr. Carlos Arthur",
  specialty: "Dermatologia Oncológica",
  tagline: "Especialista em câncer de pele, mapeamento e dermatoscopia.",
  crm: "CRM RJ: 52.101.999-6",
  description:
    "Especialista em câncer de pele, mapeamento e dermatoscopia. Atendimento em Ipanema e Niterói, Rio de Janeiro. Agende sua consulta.",
  url: "https://drcarlosarthur.com.br",
  locale: "pt_BR",
  phone: "+5521995718080",
  photo: "/brand/dr-carlos-arthur.jpg",
} as const;

export type Clinic = {
  id: string;
  city: string;
  street: string;
  suite: string;
  district: string;
  addressLocality: string;
  /** Como o endereço é lido na página (evita repetir bairro e cidade) */
  displayLocality: string;
  region: string;
  postalCode: string;
};

export const clinics: Clinic[] = [
  {
    id: "ipanema",
    city: "Ipanema",
    street: "Rua Visconde de Pirajá, 608",
    suite: "sala 605",
    district: "Ipanema",
    addressLocality: "Rio de Janeiro",
    displayLocality: "Ipanema",
    region: "RJ",
    postalCode: "22410-002",
  },
  {
    id: "niteroi",
    city: "Niterói",
    street: "Rua Miguel de Frias, 150",
    suite: "sala 1212",
    district: "Icaraí",
    addressLocality: "Niterói",
    displayLocality: "Icaraí, Niterói",
    region: "RJ",
    postalCode: "24220-001",
  },
];

/**
 * Endereço quebrado em duas linhas: rua e sala em cima,
 * bairro/cidade e CEP embaixo.
 */
export function formatAddress(c: Clinic): [string, string] {
  return [
    `${c.street} · ${c.suite}`,
    `${c.displayLocality}/${c.region} · CEP ${c.postalCode}`,
  ];
}

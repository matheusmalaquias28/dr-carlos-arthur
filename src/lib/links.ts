export type LinkItem = {
  /** Identificador estável, usado como key e para associar ao consultório */
  id: string;
  /** Rótulo do botão */
  label: string;
  /** Segunda linha, menor, abaixo do rótulo */
  sublabel?: string;
  /** Destino. `null` quando o link ainda não existe (estado "em breve") */
  href: string | null;
  /** Ícone renderizado à esquerda */
  icon: "whatsapp" | "globe";
  /** Variante visual */
  variant: "primary" | "soft";
  /** Selo exibido à direita do rótulo */
  badge?: string;
  /** Consultório correspondente em `clinics` — exibe o endereço abaixo do botão */
  clinicId?: string;
};

const WHATSAPP = "https://api.whatsapp.com/send?phone=5521995718080&text=";

const message = (local: string) =>
  encodeURIComponent(
    `Olá, vim através do link da bio e gostaria de agendar uma consulta em ${local}`,
  );

export const links: LinkItem[] = [
  {
    id: "agendamento-ipanema",
    label: "Clínica Ipanema",
    sublabel: "Agendar pelo WhatsApp",
    href: `${WHATSAPP}${message("Ipanema")}`,
    icon: "whatsapp",
    variant: "primary",
    clinicId: "ipanema",
  },
  {
    id: "agendamento-niteroi",
    label: "Clínica Niterói",
    sublabel: "Agendar pelo WhatsApp",
    href: `${WHATSAPP}${message("Niterói")}`,
    icon: "whatsapp",
    variant: "primary",
    clinicId: "niteroi",
  },
  {
    id: "site",
    label: "Meu site",
    // Assim que o site institucional estiver no ar, basta preencher a URL aqui
    // e o botão deixa de ser "em breve" automaticamente.
    href: null,
    icon: "globe",
    variant: "soft",
    badge: "Novidades em breve",
  },
];

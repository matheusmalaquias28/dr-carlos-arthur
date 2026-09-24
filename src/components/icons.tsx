type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.4} aria-hidden className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9h17.6M3.2 15h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.4a12.5 12.5 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.7} aria-hidden className={className}>
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.7} aria-hidden className={className}>
      <path d="M9.5 5.5 16 12l-6.5 6.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden className={className}>
      <path d="M4 8h16M4 16h11" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

/* ---------------------- Ícones das características ---------------- */

function LensIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.4 15.4 4.1 4.1" />
      <circle cx="10.5" cy="10.5" r="2.4" />
    </svg>
  );
}

function CompareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <rect x="3" y="5" width="7.2" height="14" rx="1.8" />
      <rect x="13.8" y="5" width="7.2" height="14" rx="1.8" />
      <path d="M12 3.5v17" strokeDasharray="2 2.6" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <path d="M12 3 5 5.8v5.4c0 4.2 2.9 8 7 9.8 4.1-1.8 7-5.6 7-9.8V5.8L12 3Z" />
      <path d="m9.2 12 2 2 3.6-3.9" />
    </svg>
  );
}

function FeatherIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <path d="M19.5 4.5c-5 0-9 1.8-11.2 5.2C6.6 12.3 6.6 15.3 8 17l-3 3" />
      <path d="M9.5 15.5h5M11 11.5h4.5" />
    </svg>
  );
}

function ArchiveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <rect x="3.5" y="4.5" width="17" height="4" rx="1.4" />
      <path d="M5 8.5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
      <path d="M10 12.5h4" />
    </svg>
  );
}

function ReportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden className={className}>
      <path d="M6 3.5h7.5L18 8v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M13.2 3.6V8H18M8.6 13h6.8M8.6 16.4h4.4" />
    </svg>
  );
}

/* ----------------------------- Redes ------------------------------ */

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.4} aria-hidden className={className}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.4} aria-hidden className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.3 9.4 4.6 2.6-4.6 2.6V9.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.4} aria-hidden className={className}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.4" />
      <path d="M7.6 10.4v6.2M7.6 7.6v.1M11.6 16.6v-6.2M11.6 12.8c0-1.4.9-2.4 2.3-2.4s2.4 1 2.4 2.5v3.7" />
    </svg>
  );
}

export const featureIcons = {
  lens: LensIcon,
  compare: CompareIcon,
  shield: ShieldIcon,
  feather: FeatherIcon,
  archive: ArchiveIcon,
  report: ReportIcon,
} as const;

export const socialIcons = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
} as const;

export const iconMap = {
  whatsapp: WhatsAppIcon,
  globe: GlobeIcon,
} as const;

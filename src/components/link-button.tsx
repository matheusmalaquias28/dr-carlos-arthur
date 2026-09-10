import { iconMap, ArrowIcon } from "@/components/icons";
import type { LinkItem } from "@/lib/links";

const base =
  "group relative flex w-full items-center gap-3.5 overflow-hidden rounded-2xl border px-5 py-4 text-left " +
  "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-[var(--ease-out-soft)] " +
  "motion-safe:will-change-transform";

const variants = {
  /** Agendamento — fundo branco, borda cinza clara, conteúdo marrom. */
  primary:
    "border-brand-silver bg-white text-brand-brown " +
    "shadow-[0_1px_2px_rgba(84,65,49,0.05),0_10px_22px_-18px_rgba(84,65,49,0.35)] " +
    "hover:-translate-y-0.5 hover:border-brand-brown/35 " +
    "hover:shadow-[0_2px_4px_rgba(84,65,49,0.07),0_16px_30px_-18px_rgba(84,65,49,0.45)] " +
    "active:translate-y-0",
  /** Em breve — mesma base, com o azul claro da marca ao fundo. */
  soft:
    "border-brand-blue/15 bg-gradient-to-br from-white via-white to-brand-sky/60 text-brand-brown " +
    "shadow-[0_1px_2px_rgba(52,86,138,0.05),0_10px_24px_-18px_rgba(52,86,138,0.4)] " +
    "hover:-translate-y-0.5 hover:border-brand-blue/25 hover:to-brand-sky/80",
} as const;

const iconStyles = {
  primary: "bg-brand-brown text-white group-hover:bg-brand-brown/90",
  soft: "bg-brand-sky text-brand-brown ring-1 ring-brand-blue/10",
} as const;

export function LinkButton({ item }: { item: LinkItem }) {
  const Icon = iconMap[item.icon];
  const disabled = item.href === null;

  const content = (
    <>
      {/* Brilho que atravessa o botão no hover — micro-interação */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-brand-sky/70 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-safe:group-hover:animate-[sweep_0.95s_var(--ease-out-soft)]"
      />

      <span
        className={
          "relative grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-300 " +
          iconStyles[item.variant]
        }
      >
        <Icon className="size-[19px]" />
      </span>

      <span className="relative min-w-0 flex-1">
        <span className="block truncate text-[15px] leading-tight font-medium tracking-[0.01em]">
          {item.label}
        </span>
        {item.sublabel ? (
          <span className="mt-1 block truncate text-[11.5px] leading-tight font-light text-muted">
            {item.sublabel}
          </span>
        ) : null}
        {item.badge ? (
          <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-brand-sky px-2.5 py-1 text-[10.5px] font-medium tracking-[0.09em] text-brand-brown uppercase">
            <span aria-hidden className="dot-breathe size-1.5 rounded-full bg-brand-blue" />
            {item.badge}
          </span>
        ) : null}
      </span>

      {!disabled ? (
        <ArrowIcon className="relative size-[18px] shrink-0 opacity-40 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-hover:opacity-80" />
      ) : null}
    </>
  );

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        title="Site institucional em construção"
        className={`${base} ${variants[item.variant]} cursor-default select-none`}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={item.href!}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[item.variant]}`}
    >
      {content}
    </a>
  );
}

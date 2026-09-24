import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { about } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 lg:scroll-mt-[104px] w-full bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1600px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
            {about.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em] text-ink">
            {about.title}
          </h2>
          <p className="mt-3 text-[13px] font-medium tracking-[0.08em] text-muted uppercase">
            {site.crm}
          </p>

          <p className="mt-7 max-w-[54ch] text-[15px] leading-relaxed font-light text-muted">
            {about.text}
          </p>

          <p className="mt-10 text-[11px] font-medium tracking-[0.2em] text-muted/80 uppercase">
            {about.formationsLabel}
          </p>

          <ul className="mt-4 space-y-0">
            {about.formations.map((f, i) => (
              <li
                key={f.id}
                className="flex items-start gap-4 border-t border-line py-4 last:border-b"
              >
                <span className="mt-1 text-[11px] font-medium tabular-nums text-brand-blue/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-snug font-light text-ink">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>

          <SmartLink
            href="/#sobre"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
          >
            {about.cta}
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SmartLink>
        </Reveal>

        <Reveal delay={0} className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-surface-soft">
            <Image
              src={about.image}
              alt={`Retrato de ${site.name}`}
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

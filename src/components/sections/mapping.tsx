import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon, featureIcons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { mapping } from "@/lib/content";

export function Mapping() {
  return (
    <section id="mapeamento" className="scroll-mt-20 lg:scroll-mt-[104px] w-full bg-surface-soft">
      {/* Faixa de imagem em largura total, com o aparelho em destaque */}
      {/*
        Foto de produto sobre fundo branco: `object-contain` mantém o
        aparelho e o tablet inteiros. No mobile a faixa segue a proporção
        da imagem, no desktop vira uma faixa fixa e as laterais brancas se
        fundem com o fundo do bloco.
      */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white lg:aspect-auto lg:h-[58vh]">
        {/* `fill` ignora o padding do contêiner, então o respiro vem de um
            invólucro interno. */}
        <div className="absolute inset-0 p-5 sm:p-8 lg:p-12">
          <div className="relative size-full">
            <Image
              src="/images/dermatoscopio.webp"
              alt="FotoFinder medicam 1000 e a análise de dermatoscopia digital na tela"
              fill
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,248,252,0) 86%, #f6f8fc 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-5 pt-14 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pt-16 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
              {mapping.eyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em] text-ink">
              {mapping.title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed font-light text-muted">
              {mapping.text}
            </p>

            <SmartLink
              href="/#onde-estamos"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-[13.5px] font-semibold text-white transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:bg-[#2b4876] hover:shadow-[0_18px_34px_-20px_rgba(52,86,138,0.95)]"
            >
              Agendar mapeamento
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:content-start">
            {mapping.features.map((f, i) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons];
              return (
                <Reveal key={f.id} delay={i * 80}>
                  <div className="group h-full rounded-[22px] border border-white bg-white p-6 shadow-[0_1px_2px_rgba(18,32,58,0.04),0_14px_30px_-24px_rgba(18,32,58,0.35)] transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-sky hover:shadow-[0_2px_6px_rgba(18,32,58,0.05),0_24px_44px_-26px_rgba(52,86,138,0.55)]">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-sky text-brand-blue transition-all duration-400 ease-[var(--ease-out-soft)] group-hover:scale-105 group-hover:bg-brand-blue group-hover:text-white">
                      {Icon ? <Icon className="size-5" /> : null}
                    </span>
                    <h3 className="mt-5 text-[15px] leading-snug font-semibold tracking-[-0.01em] text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed font-light text-muted">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

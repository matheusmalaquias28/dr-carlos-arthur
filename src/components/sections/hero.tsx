import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-stretch overflow-hidden bg-navy lg:items-end">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay: escurece a base e a esquerda, onde fica o texto */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,18,32,0.90) 0%, rgba(10,18,32,0.74) 34%, rgba(10,18,32,0.34) 62%, rgba(10,18,32,0.16) 100%), linear-gradient(0deg, rgba(10,18,32,0.72) 0%, transparent 40%)",
        }}
      />

      {/* Retrato recortado — colado na base, apenas no desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 hidden h-[86%] w-[48%] max-w-[900px] lg:block xl:right-[5%] xl:h-[90%] xl:w-[46%] 2xl:right-[10%] 2xl:h-[92%] 2xl:w-[44%]"
      >
        <Image
          src="/brand/dr-carlos-recorte.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 0px, 48vw"
          className="animate-[rise_1.1s_var(--ease-premium)_both] object-contain object-bottom"
          style={{ animationDelay: "260ms" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col px-5 pt-20 pb-10 sm:px-8 sm:pb-14 lg:block lg:px-12 lg:pt-32 lg:pb-24">
        <div className="flex min-h-0 w-full flex-1 flex-col lg:block lg:max-w-[660px] lg:flex-none">
          {/*
            Retrato do mobile: `flex-1` faz ele ocupar toda a sobra vertical
            da hero, seja qual for a altura da tela.
            A caixa interna tem 117,65% da altura do contêiner e fica presa
            ao topo — o excedente de 17,65% que escapa por baixo equivale a
            exatamente 15% da altura total da imagem, que é a invasão pedida
            sobre o texto. (H / 0,85 = 1,1765 H)
          */}
          <div
            aria-hidden
            className="rise pointer-events-none relative z-0 min-h-0 w-full flex-1 lg:hidden"
            style={{ "--delay": "60ms" } as React.CSSProperties}
          >
            <div className="absolute inset-x-0 top-0 h-[117.65%]">
              <Image
                src="/brand/dr-carlos-hero-mobile.webp"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 0px, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <p className="rise relative z-10 text-[10px] font-medium tracking-[0.15em] text-brand-sky/80 uppercase sm:text-[11px] sm:tracking-[0.22em]">
            {hero.eyebrow}
          </p>

          <h1
            className="rise relative z-10 mt-4 text-[clamp(2.6rem,7.4vw,5.1rem)] leading-[0.98] font-light tracking-[-0.035em] whitespace-pre-line text-white lg:mt-6"
            style={{ "--delay": "110ms" } as React.CSSProperties}
          >
            {hero.title}
          </h1>

          <p
            className="rise relative z-10 mt-6 max-w-[520px] sm:mt-7 text-[15px] leading-relaxed font-light text-white/75 sm:text-base"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          >
            {hero.text}
          </p>

          <div
            className="rise relative z-10 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            style={{ "--delay": "320ms" } as React.CSSProperties}
          >
            <SmartLink
              href="/#onde-estamos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-ink transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(255,255,255,0.6)]"
            >
              {hero.primaryCta}
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>

            <SmartLink
              href="/#mapeamento"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[14px] font-medium text-white ring-1 ring-white/30 transition-all duration-300 ease-[var(--ease-out-soft)] hover:bg-white/10 hover:ring-white/60"
            >
              {hero.secondaryCta}
            </SmartLink>
          </div>
        </div>
      </div>

      {/* Indicador discreto de rolagem */}
      <div aria-hidden className="absolute bottom-6 left-12 hidden lg:block">
        <span className="block h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
}

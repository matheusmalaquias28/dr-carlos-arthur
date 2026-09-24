import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Carousel } from "@/components/carousel";
import { Reveal } from "@/components/reveal";
import { procedures, type Procedure } from "@/lib/content";

function Card({ item, priority = false }: { item: Procedure; priority?: boolean }) {
  return (
    <article className="group relative isolate flex h-[min(72vh,540px)] w-full flex-col justify-end overflow-hidden rounded-[26px] bg-navy">
      <Image
        src={item.image}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 1024px) 78vw, 33vw"
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.06]"
      />

      {item.texture ? (
        <div
          aria-hidden
          className={`absolute transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.06] ${item.texture.box ?? "inset-0"} ${item.texture.tone ?? "opacity-60"}`}
        >
          <Image
            src={item.texture.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 78vw, 33vw"
            className={item.texture.fit ?? "object-cover object-top"}
          />
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(0deg, rgba(9,17,30,0.92) 0%, rgba(9,17,30,0.62) 34%, rgba(9,17,30,0.12) 72%, rgba(9,17,30,0.05) 100%)",
        }}
      />

      <div className="relative p-7 sm:p-8">
        <h3 className="text-[22px] leading-tight font-light tracking-[-0.02em] whitespace-pre-line text-white sm:text-[25px]">
          {item.title}
        </h3>
        <p className="mt-3.5 max-w-[34ch] text-[13.5px] leading-relaxed font-light text-white/70">
          {item.text}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium tracking-[0.04em] text-brand-sky">
          Saiba mais
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <SmartLink href={`/#${item.id}`} className="absolute inset-0" aria-label={item.title.replace(/\n/g, " ")} />
    </article>
  );
}

export function Procedures() {
  return (
    <section id="procedimentos" className="scroll-mt-20 lg:scroll-mt-[104px] w-full bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-[640px]">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
            O que fazemos
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.06] font-light tracking-[-0.03em] text-ink">
            Três frentes, um mesmo objetivo: identificar antes.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed font-light text-muted">
            Do exame que acompanha sua pele ano a ano à cirurgia que remove uma
            lesão, cada etapa é conduzida pelo mesmo médico — e com o mesmo
            histórico em mãos.
          </p>
        </Reveal>
      </div>

      {/* Desktop: grade full width */}
      <div className="mx-auto mt-14 hidden w-full max-w-[1600px] gap-5 px-5 sm:px-8 lg:grid lg:grid-cols-3 lg:px-12">
        {procedures.map((item, i) => (
          <Reveal key={item.id} delay={i * 120}>
            <Card item={item} priority={i === 0} />
          </Reveal>
        ))}
      </div>

      {/* Mobile e tablet: carrossel com 1,5 card à vista */}
      <div className="mt-12 lg:hidden">
        <Carousel
          label="Procedimentos"
          railClassName="gap-4 scroll-px-5 px-5 pb-1 sm:scroll-px-8 sm:px-8"
          controlsClassName="px-5 sm:px-8"
        >
          {procedures.map((item) => (
            <div
              key={item.id}
              className="w-[68vw] max-w-[340px] shrink-0 snap-start sm:w-[54vw]"
            >
              <Card item={item} />
            </div>
          ))}
          <div aria-hidden className="w-1 shrink-0" />
        </Carousel>
      </div>
    </section>
  );
}

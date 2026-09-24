import { Carousel } from "@/components/carousel";
import { Reveal } from "@/components/reveal";
import { credentials } from "@/lib/content";

/**
 * Substitui a seção de depoimentos.
 * A Resolução CFM 2.336/2023 veda depoimento, agradecimento ou
 * testemunho de paciente na publicidade médica — aqui a autoridade vem
 * de títulos, vínculos e formação, que são permitidos.
 */
export function Credentials() {
  return (
    <section id="credenciais" className="scroll-mt-20 lg:scroll-mt-[104px] w-full bg-navy py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-[620px]">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-sky/70 uppercase">
            Formação e titulação
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em]">
            A segurança de quem estuda pele a vida inteira.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <Carousel
            label="Formação e titulação"
            tone="dark"
            railClassName="gap-4 pb-1"
            controlsClassName="justify-start"
          >
            {credentials.map((c) => (
              <article
                key={c.id}
                className="group flex w-[80vw] max-w-[360px] shrink-0 snap-start flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 ease-[var(--ease-out-soft)] hover:border-white/25 hover:bg-white/[0.07] sm:w-[46vw] lg:w-[30vw] lg:max-w-[400px]"
              >
                <p className="text-[12px] font-medium tracking-[0.14em] text-brand-sky/80 uppercase">
                  {c.title}
                </p>
                <p className="mt-5 text-[19px] leading-snug font-light tracking-[-0.015em] text-white">
                  {c.org}
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-[12.5px] font-light text-on-navy/70">
                  {c.detail}
                </p>
              </article>
            ))}
            <div aria-hidden className="w-1 shrink-0" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

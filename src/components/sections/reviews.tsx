import { Carousel } from "@/components/carousel";
import { Reveal } from "@/components/reveal";
import { reviews } from "@/lib/content";

/** Aspas decorativas do card. */
function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.2 0v8.4c0 6.3-3.4 11.6-9.4 15.6L0 20.2c3.6-2.4 5.8-5.2 6.6-8.4H0V0h13.2Zm18.8 0v8.4c0 6.3-3.4 11.6-9.4 15.6l-3.8-3.8c3.6-2.4 5.8-5.2 6.6-8.4h-6.6V0H32Z" />
    </svg>
  );
}

/**
 * Avaliações de pacientes.
 * A seção só é renderizada quando `reviews` tem itens — enquanto a lista
 * estiver vazia, a home simplesmente pula este bloco.
 */
export function Reviews() {
  if (!reviews.length) return null;

  return (
    <section
      id="avaliacoes"
      className="w-full scroll-mt-20 bg-navy py-24 text-white sm:py-28 lg:scroll-mt-[104px] lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-[620px]">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-sky/70 uppercase">
            Avaliações
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em]">
            O que dizem os pacientes.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <Carousel
            label="Avaliações de pacientes"
            tone="dark"
            railClassName="gap-4 pb-1"
            controlsClassName="justify-start"
          >
            {reviews.map((review) => (
              <figure
                key={review.id}
                className="group flex w-[80vw] max-w-[380px] shrink-0 snap-start flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 ease-[var(--ease-out-soft)] hover:border-white/25 hover:bg-white/[0.07] sm:w-[46vw] lg:w-[30vw] lg:max-w-[420px]"
              >
                <QuoteMark className="h-5 w-auto text-brand-sky/35 transition-colors duration-500 group-hover:text-brand-sky/55" />

                <blockquote className="mt-6 flex-1 text-[14.5px] leading-relaxed font-light text-white/85">
                  {review.text}
                </blockquote>

                <figcaption className="mt-7 border-t border-white/10 pt-5 text-[13px] font-medium tracking-[0.01em] text-brand-sky/90">
                  {review.name}
                </figcaption>
              </figure>
            ))}
            <div aria-hidden className="w-1 shrink-0" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

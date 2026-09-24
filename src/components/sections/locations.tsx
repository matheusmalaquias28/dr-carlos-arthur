import { ArrowUpRightIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { clinics, formatAddress, mapsDirections, mapsEmbed, whatsapp } from "@/lib/site";

export function Locations() {
  return (
    <section id="onde-estamos" className="scroll-mt-20 lg:scroll-mt-[104px] w-full bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-[620px]">
          <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
            Onde estamos
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em] text-ink">
            Duas unidades, dos dois lados da baía.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed font-light text-muted">
            Escolha a unidade mais perto de você e fale direto com a secretaria
            pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {clinics.map((clinic, i) => {
            const [line1, line2] = formatAddress(clinic);
            return (
              <Reveal key={clinic.id} delay={i * 130}>
                <div className="map-card group h-full overflow-hidden rounded-[26px] border border-line bg-white transition-all duration-500 ease-[var(--ease-out-soft)] hover:border-brand-sky hover:shadow-[0_24px_50px_-34px_rgba(18,32,58,0.5)]">
                  <div className="relative h-[240px] w-full overflow-hidden bg-surface-soft sm:h-[300px]">
                    <iframe
                      src={mapsEmbed(clinic)}
                      title={`Mapa — ${clinic.name}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="map-frame size-full border-0"
                    />
                  </div>

                  <div className="p-7 sm:p-8">
                    <h3 className="text-[20px] leading-tight font-light tracking-[-0.02em] text-ink">
                      {clinic.name}
                    </h3>

                    <p className="mt-4 flex items-start gap-2.5 text-[13.5px] leading-relaxed font-light text-muted">
                      <PinIcon className="mt-0.5 size-4 shrink-0 text-brand-blue/60" />
                      <span>
                        <span className="block">{line1}</span>
                        <span className="block">{line2}</span>
                      </span>
                    </p>

                    <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                      <a
                        href={whatsapp(clinic.city)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:bg-[#2b4876]"
                      >
                        <WhatsAppIcon className="size-4" />
                        Agendar pelo WhatsApp
                      </a>

                      <a
                        href={mapsDirections(clinic)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3.5 text-[13px] font-medium text-ink transition-all duration-300 ease-[var(--ease-out-soft)] hover:border-brand-blue hover:text-brand-blue"
                      >
                        Traçar rota
                        <ArrowUpRightIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

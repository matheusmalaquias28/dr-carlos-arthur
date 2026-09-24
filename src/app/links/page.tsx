import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/link-button";
import { Portrait } from "@/components/portrait";
import { PinIcon } from "@/components/icons";
import { links } from "@/lib/links";
import { clinics, formatAddress, site } from "@/lib/site";

const clinicById = new Map(clinics.map((c) => [c.id, c]));

export const metadata: Metadata = {
  title: "Links",
  description: site.tagline,
  robots: { index: false, follow: true },
};

/** Dados estruturados — ajuda o Google a entender consultórios e especialidade. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.name,
  description: site.tagline,
  medicalSpecialty: "Dermatology",
  url: site.url,
  image: `${site.url}${site.photo}`,
  telephone: site.phone,
  identifier: site.crm,
  address: clinics.map((c) => ({
    "@type": "PostalAddress",
    streetAddress: `${c.street}, ${c.suite}`,
    addressLocality: c.addressLocality,
    addressRegion: c.region,
    postalCode: c.postalCode,
    addressCountry: "BR",
  })),
};

/** Atraso da animação de entrada, em cascata. */
const rise = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="linkpage mx-auto flex min-h-dvh w-full max-w-[460px] flex-col items-center px-6 pt-14 pb-10 sm:pt-20">
        {/* ------------------------------ Retrato ------------------------------ */}
        <div className="rise" style={rise(0)}>
          <Portrait size={150} />
        </div>

        {/* ------------------------ Nome e apresentação ------------------------ */}
        <h1
          className="rise mt-7 text-center font-display text-[32px] leading-[1.16] font-normal text-balance text-brand-brown sm:text-[36px]"
          style={rise(90)}
        >
          {site.name}
        </h1>

        <p
          className="rise mt-3 max-w-[19rem] text-center text-[13px] leading-relaxed font-light text-muted"
          style={rise(150)}
        >
          {site.tagline}
        </p>

        <p
          className="rise mt-2.5 text-center text-[11px] font-medium tracking-[0.12em] text-muted/85 uppercase"
          style={rise(200)}
        >
          {site.crm}
        </p>

        {/* ------------------------------ Botões ------------------------------- */}
        <nav aria-label="Links principais" className="mt-9 w-full">
          <ul className="flex flex-col gap-3.5">
            {links.map((item, i) => {
              const clinic = item.clinicId ? clinicById.get(item.clinicId) : undefined;
              return (
                <li key={item.id} className="rise" style={rise(270 + i * 90)}>
                  <LinkButton item={item} />
                  {clinic ? (
                    <p className="mt-2 flex items-start gap-1.5 px-2 text-[11px] leading-relaxed font-light text-muted">
                      <PinIcon className="mt-px size-3 shrink-0 opacity-70" />
                      <span>
                        {formatAddress(clinic).map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --------------------- Assinatura da marca (logo) --------------------- */}
        <div className="rise mt-12 w-full" style={rise(600)}>
          <div
            aria-hidden
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-brown/18 to-transparent"
          />
          <Image
            src="/brand/logo.svg"
            alt={`${site.name} — ${site.specialty}`}
            width={6397}
            height={1902}
            unoptimized
            className="mx-auto mt-8 h-auto w-[232px] max-w-full opacity-95"
          />
        </div>

        {/* ------------------------------ Rodapé ------------------------------- */}
        <footer
          className="rise mt-auto pt-12 text-center text-[10.5px] font-light tracking-[0.08em] text-muted/80 uppercase"
          style={rise(680)}
        >
          © {new Date().getFullYear()} {site.name}
        </footer>
      </main>
    </>
  );
}

import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { PhoneIcon, PinIcon, WhatsAppIcon, socialIcons } from "@/components/icons";
import { nav } from "@/lib/nav";
import { clinics, formatAddress, site, social, whatsapp } from "@/lib/site";

export function SiteFooter() {
  const activeSocial = social.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy text-white">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Image
              src="/brand/logo-white.svg"
              alt={site.name}
              width={6397}
              height={1902}
              unoptimized
              className="h-12 w-auto lg:h-14"
            />
            <p className="mt-7 max-w-[34ch] text-[13.5px] leading-relaxed font-light text-on-navy/80">
              {site.description}
            </p>
            <p className="mt-6 text-[12px] tracking-[0.1em] text-white/45 uppercase">
              {site.crm}
            </p>

            {activeSocial.length ? (
              <div className="mt-7 flex items-center gap-2.5">
                {activeSocial.map((s) => {
                  const Icon = socialIcons[s.id as keyof typeof socialIcons];
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-10 place-items-center rounded-full text-white/65 ring-1 ring-white/15 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      {Icon ? <Icon className="size-[18px]" /> : null}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé" className="lg:col-span-3">
            <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Navegação
            </h2>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <SmartLink
                    href={item.href}
                    className="text-[14px] font-light text-on-navy transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Unidades */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Unidades
            </h2>
            <ul className="mt-6 space-y-6">
              {clinics.map((clinic) => {
                const [line1, line2] = formatAddress(clinic);
                return (
                  <li key={clinic.id}>
                    <p className="text-[14px] font-normal text-white">{clinic.name}</p>
                    <p className="mt-1.5 flex items-start gap-2 text-[12.5px] leading-relaxed font-light text-on-navy/75">
                      <PinIcon className="mt-0.5 size-3.5 shrink-0 text-white/35" />
                      <span>
                        <span className="block">{line1}</span>
                        <span className="block">{line2}</span>
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Contato
            </h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2.5 text-[14px] font-light text-on-navy transition-colors duration-300 hover:text-white"
                >
                  <PhoneIcon className="size-4 text-white/40" />
                  {site.phoneLabel}
                </a>
              </li>
              {clinics.map((clinic) => (
                <li key={clinic.id}>
                  <a
                    href={whatsapp(clinic.city)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[14px] font-light text-on-navy transition-colors duration-300 hover:text-white"
                  >
                    <WhatsAppIcon className="size-4 text-white/40" />
                    {clinic.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] font-light text-white/40">
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-[11.5px] font-light text-white/40">
            Responsável técnico: {site.name} — {site.crm}
          </p>
          <p className="text-[11.5px] font-light text-white/40">
            Desenvolvido por{" "}
            <a
              href="https://energymidia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors duration-300 hover:text-white"
            >
              Energy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

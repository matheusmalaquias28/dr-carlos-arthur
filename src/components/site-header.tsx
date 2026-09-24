"use client";

import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon, socialIcons } from "@/components/icons";
import { nav } from "@/lib/nav";
import { site, social } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  /** Só a home tem hero escura atrás do header; nas demais ele já nasce sólido. */
  const sobreHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Glassmorphism assim que sai do topo da hero */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* Trava o scroll do fundo e fecha no Esc */
  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeSocial = social.filter((s) => s.href);
  const light = sobreHero && !scrolled && !open; // sobre a hero: conteúdo claro

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ease-[var(--ease-out-soft)] " +
          (scrolled || !sobreHero
            ? "border-b border-white/60 bg-white/72 shadow-[0_1px_30px_-18px_rgba(18,32,58,0.5)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent")
        }
      >
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between gap-8 px-5 sm:px-8 lg:h-[104px] lg:px-12">
          <SmartLink href="/" aria-label={`${site.name} — início`} className="relative shrink-0">
            <Image
              src={light ? "/brand/logo-white.svg" : "/brand/logo.svg"}
              alt={site.name}
              width={6397}
              height={1902}
              priority
              unoptimized
              className="h-[38px] w-auto transition-opacity duration-300 lg:h-[58px]"
            />
          </SmartLink>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {nav.slice(1).map((item) => (
              <SmartLink
                key={item.href}
                href={item.href}
                className={
                  "group relative text-[13.5px] font-medium tracking-[0.01em] transition-colors duration-300 " +
                  (light ? "text-white/85 hover:text-white" : "text-ink/75 hover:text-brand-blue")
                }
              >
                {item.label}
                <span
                  aria-hidden
                  className={
                    "absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-400 ease-[var(--ease-out-soft)] group-hover:w-full " +
                    (light ? "bg-white" : "bg-brand-blue")
                  }
                />
              </SmartLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <SmartLink
              href="/#onde-estamos"
              className={
                "hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 sm:inline-flex " +
                (light
                  ? "bg-white/12 text-white ring-1 ring-white/35 backdrop-blur-sm hover:bg-white hover:text-ink hover:ring-white"
                  : "bg-brand-blue text-white shadow-[0_10px_24px_-14px_rgba(52,86,138,0.9)] hover:bg-[#2b4876]")
              }
            >
              Agendar consulta
              <ArrowUpRightIcon className="size-4" />
            </SmartLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className={
                "grid size-11 place-items-center rounded-full transition-colors duration-300 lg:hidden " +
                (light
                  ? "text-white ring-1 ring-white/30 hover:bg-white/10"
                  : "text-ink ring-1 ring-line hover:bg-surface-soft")
              }
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ----------------------- Menu mobile ----------------------- */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-navy text-white lg:hidden"
          style={{ animation: "menu-item-in 0.5s var(--ease-premium) both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(120% 60% at 80% -10%, rgba(52,86,138,0.55) 0%, transparent 62%), radial-gradient(90% 50% at 0% 105%, rgba(52,86,138,0.35) 0%, transparent 65%)",
            }}
          />

          <div className="relative flex h-20 shrink-0 items-center justify-between px-5 sm:px-8">
            <Image
              src="/brand/logo-white.svg"
              alt={site.name}
              width={6397}
              height={1902}
              unoptimized
              className="h-[38px] w-auto"
            />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid size-11 place-items-center rounded-full text-white ring-1 ring-white/25 transition-colors duration-300 hover:bg-white/10"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav
            aria-label="Navegação"
            className="relative flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8"
          >
            {nav.map((item, i) => (
              <SmartLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="menu-item group flex items-baseline justify-between gap-4 border-b border-white/10 py-4 text-[26px] leading-tight font-light tracking-[-0.02em] transition-colors duration-300 hover:text-brand-sky sm:text-[30px]"
                style={{ "--delay": `${120 + i * 70}ms` } as React.CSSProperties}
              >
                {item.label}
                <ArrowUpRightIcon className="size-5 shrink-0 text-white/30 transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-sky" />
              </SmartLink>
            ))}
          </nav>

          <div
            className="menu-item relative shrink-0 px-5 pb-10 sm:px-8"
            style={{ "--delay": `${120 + nav.length * 70 + 60}ms` } as React.CSSProperties}
          >
            <SmartLink
              href="/#onde-estamos"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[14px] font-semibold text-ink transition-transform duration-300 active:scale-[0.98]"
            >
              Agendar consulta
              <ArrowUpRightIcon className="size-4" />
            </SmartLink>

            <div className="mt-7 flex items-center justify-between gap-4">
              <a
                href={`tel:${site.phone}`}
                className="text-[13px] font-light text-on-navy transition-colors hover:text-white"
              >
                {site.phoneLabel}
              </a>

              {activeSocial.length ? (
                <div className="flex items-center gap-2.5">
                  {activeSocial.map((s) => {
                    const Icon = socialIcons[s.id as keyof typeof socialIcons];
                    return (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid size-10 place-items-center rounded-full text-white/70 ring-1 ring-white/15 transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        {Icon ? <Icon className="size-[18px]" /> : null}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <p className="mt-5 text-[11px] tracking-[0.1em] text-white/35 uppercase">{site.crm}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type CarouselProps = {
  children: React.ReactNode;
  /** Classes aplicadas ao trilho que rola */
  railClassName?: string;
  /** Rótulo acessível da região */
  label: string;
  /** Alinhamento dos controles */
  controlsClassName?: string;
  tone?: "light" | "dark";
};

/**
 * Trilho com scroll-snap nativo e botões de navegação.
 * O scroll é do próprio navegador — arrastar, roda do mouse e gesto de
 * swipe funcionam sem JavaScript; os botões apenas dão um empurrão.
 */
export function Carousel({
  children,
  railClassName = "",
  label,
  controlsClassName = "",
  tone = "light",
}: CarouselProps) {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft >= max - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  const btn =
    tone === "dark"
      ? "border-white/20 text-white/80 hover:border-white/45 hover:text-white disabled:border-white/10 disabled:text-white/25"
      : "border-line text-ink/70 hover:border-brand-blue/45 hover:text-brand-blue disabled:border-line/70 disabled:text-ink/20";

  return (
    <div className="relative">
      <div
        ref={rail}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={`snap-rail flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth ${railClassName}`}
      >
        {children}
      </div>

      <div className={`mt-7 flex items-center gap-2.5 ${controlsClassName}`}>
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Anterior"
          className={`grid size-11 place-items-center rounded-full border transition-all duration-300 ease-[var(--ease-out-soft)] disabled:cursor-not-allowed active:scale-95 ${btn}`}
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Próximo"
          className={`grid size-11 place-items-center rounded-full border transition-all duration-300 ease-[var(--ease-out-soft)] disabled:cursor-not-allowed active:scale-95 ${btn}`}
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}

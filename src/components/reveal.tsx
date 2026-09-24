"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Atraso da entrada, em ms — usado para escalonar itens de uma lista */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

/**
 * Anima a entrada do bloco quando ele aparece na viewport.
 * IntersectionObserver puro — sem biblioteca, ~30 linhas, e o estado
 * inicial já vem do CSS, então não há flash de conteúdo sem estilo.
 * Em `prefers-reduced-motion` o CSS neutraliza a animação.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}

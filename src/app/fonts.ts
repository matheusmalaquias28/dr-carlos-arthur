import localFont from "next/font/local";

/**
 * Delmon Delicate — fonte de títulos da marca.
 * Atenção: o arquivo enviado cobre apenas ASCII básico — não tem acentos,
 * travessão nem ponto médio. Por isso ela é aplicada somente a títulos sem
 * acentuação (o nome do doutor). Textos acentuados usam a Montserrat.
 */
export const display = localFont({
  src: [{ path: "./fonts/delmon-delicate.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  preload: true,
  adjustFontFallback: false,
});

/** Sans geométrica — interface, botões e textos de apoio. */
export const body = localFont({
  src: [
    { path: "./fonts/montserrat-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  preload: true,
});

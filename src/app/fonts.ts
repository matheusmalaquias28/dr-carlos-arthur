import localFont from "next/font/local";

/** Manrope — tipografia do site institucional (variável, 200–800). */
export const sans = localFont({
  src: [
    {
      path: "./fonts/manrope-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
  preload: true,
});

/**
 * Delmon Delicate — usada apenas na página de links (/links).
 * Cobre somente ASCII básico: sem acentos, travessão ou ponto médio.
 */
export const display = localFont({
  src: [{ path: "./fonts/delmon-delicate.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
});

/** Montserrat — usada apenas na página de links (/links). */
export const body = localFont({
  src: [
    { path: "./fonts/montserrat-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

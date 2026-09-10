import type { Metadata, Viewport } from "next";
import { display, body } from "./fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.specialty}`,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "dermatologia oncológica",
    "câncer de pele",
    "dermatologista Ipanema",
    "dermatologista Niterói",
    "Dr. Carlos Arthur Athayde",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.specialty}`,
    description: site.description,
    images: [{ url: site.photo, width: 1200, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.specialty}`,
    description: site.description,
    images: [site.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

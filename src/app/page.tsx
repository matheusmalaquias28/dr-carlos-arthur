import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Procedures } from "@/components/sections/procedures";
import { Mapping } from "@/components/sections/mapping";
import { About } from "@/components/sections/about";
import { Reviews } from "@/components/sections/reviews";
import { Locations } from "@/components/sections/locations";
import { Blog } from "@/components/sections/blog";
import { clinics, site } from "@/lib/site";

/** Dados estruturados — especialidade, CRM e as duas unidades. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.name,
  description: site.description,
  medicalSpecialty: "Dermatology",
  url: site.url,
  image: `${site.url}${site.photo}`,
  telephone: site.phone,
  identifier: site.crm,
  areaServed: ["Rio de Janeiro", "Niterói"],
  address: clinics.map((c) => ({
    "@type": "PostalAddress",
    streetAddress: `${c.street}, ${c.suite}`,
    addressLocality: c.addressLocality,
    addressRegion: c.region,
    postalCode: c.postalCode,
    addressCountry: "BR",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        <Hero />
        <Procedures />
        <Mapping />
        <About />
        <Reviews />
        <Locations />
        <Blog />
      </main>

      <SiteFooter />
    </>
  );
}

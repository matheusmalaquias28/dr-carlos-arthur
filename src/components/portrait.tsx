import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Retrato do doutor dentro de um anel com o espectro do Instagram.
 * O gradiente é cônico e gira lentamente (14s); para em
 * `prefers-reduced-motion`.
 */
export function Portrait({ size = 150 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div aria-hidden className="ig-ring absolute inset-0 rounded-full" />
      <div className="absolute inset-[4.5px] overflow-hidden rounded-full bg-white p-[4px] shadow-[0_16px_36px_-22px_rgba(84,65,49,0.55)]">
        <Image
          src="/brand/dr-carlos-arthur.jpg"
          alt={`Retrato de ${site.name}`}
          width={320}
          height={320}
          priority
          sizes="150px"
          className="size-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}

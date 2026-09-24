import type { Metadata } from "next";
import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PostCard } from "@/components/post-card";
import { formatDate, getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre câncer de pele, mapeamento corporal, dermatoscopia digital e cuidados diários com a pele, escritos por Dr. Carlos Arthur Athayde.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${site.url}/blog`,
    title: `Blog — ${site.name}`,
    description:
      "Artigos sobre câncer de pele, mapeamento corporal e cuidados diários com a pele.",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [destaque, ...demais] = posts;

  return (
    <>
      {/* ---------------------------- Cabeçalho ---------------------------- */}
      <section className="w-full bg-white pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-[720px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
              Blog
            </p>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.04] font-light tracking-[-0.035em] text-ink">
              Artigos sobre prevenção e saúde da pele.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed font-light text-muted">
              Publicações do Dr. Carlos Arthur Athayde sobre diagnóstico precoce
              do câncer de pele, mapeamento corporal total e cuidados
              dermatológicos de rotina.
            </p>
          </Reveal>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="w-full bg-white pb-32">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <div className="rounded-[26px] border border-dashed border-line px-8 py-20 text-center">
              <p className="text-[15px] font-light text-muted">
                Nenhum artigo publicado ainda.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ---------------------------- Destaque --------------------------- */}
          <section className="w-full bg-white pb-20">
            <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <SmartLink
                  href={`/blog/${destaque.slug}`}
                  className="group grid overflow-hidden rounded-[28px] border border-line bg-white transition-all duration-500 ease-[var(--ease-out-soft)] hover:border-brand-sky hover:shadow-[0_30px_60px_-40px_rgba(18,32,58,0.55)] lg:grid-cols-2"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface-soft lg:aspect-auto lg:min-h-[420px]">
                    <Image
                      src={destaque.cover}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] font-light text-muted">
                      {destaque.category ? (
                        <>
                          <span className="font-semibold tracking-[0.08em] text-brand-blue uppercase">
                            {destaque.category}
                          </span>
                          <span aria-hidden className="text-line">
                            ·
                          </span>
                        </>
                      ) : null}
                      <time dateTime={destaque.date}>{formatDate(destaque.date)}</time>
                      <span aria-hidden className="text-line">
                        ·
                      </span>
                      <span>{destaque.readingMinutes} min de leitura</span>
                    </p>

                    <h2 className="mt-5 text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.12] font-light tracking-[-0.025em] text-ink">
                      {destaque.title}
                    </h2>

                    <p className="mt-5 max-w-[46ch] text-[14.5px] leading-relaxed font-light text-muted">
                      {destaque.excerpt}
                    </p>

                    <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-[13.5px] font-semibold text-white transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:bg-[#2b4876]">
                      Ler artigo
                      <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </SmartLink>
              </Reveal>
            </div>
          </section>

          {/* ----------------------------- Demais ---------------------------- */}
          {demais.length ? (
            <section className="w-full bg-surface-soft py-20 lg:py-24">
              <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
                <Reveal>
                  <h2 className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
                    Todos os artigos
                  </h2>
                </Reveal>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {demais.map((post, i) => (
                    <Reveal key={post.slug} delay={i * 100}>
                      <PostCard post={post} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
    </>
  );
}

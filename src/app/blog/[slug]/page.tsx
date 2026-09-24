import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SmartLink } from "@/components/smart-link";
import {
  ArrowIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PostCard } from "@/components/post-card";
import { formatDate, getAllPosts, getNeighbours, getPost, getRelated } from "@/lib/posts";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Gera as rotas em build — o blog inteiro sai estático. */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Artigo não encontrado" };

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, width: 1200, height: 800, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { previous, next } = getNeighbours(slug);
  const relacionados = getRelated(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, identifier: site.crm },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ------------------------------ Topo ------------------------------ */}
      <article className="w-full bg-white pt-32 lg:pt-44">
        <header className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <SmartLink
            href="/blog"
            className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-muted transition-colors duration-300 hover:text-brand-blue"
          >
            <ArrowIcon className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para o blog
          </SmartLink>

          <div className="mt-8 max-w-[760px]">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] font-light text-muted">
              {post.category ? (
                <>
                  <span className="font-semibold tracking-[0.08em] text-brand-blue uppercase">
                    {post.category}
                  </span>
                  <span aria-hidden className="text-line">
                    ·
                  </span>
                </>
              ) : null}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden className="text-line">
                ·
              </span>
              <span>{post.readingMinutes} min de leitura</span>
            </p>

            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] font-light tracking-[-0.035em] text-ink">
              {post.title}
            </h1>

            <p className="mt-6 text-[16px] leading-relaxed font-light text-muted">
              {post.excerpt}
            </p>

            <p className="mt-8 flex items-center gap-3 border-t border-line pt-6 text-[13px] font-light text-muted">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-sky text-[12px] font-semibold text-brand-blue">
                CA
              </span>
              <span>
                <span className="block font-medium text-ink">{post.author}</span>
                <span className="block text-[12px]">{site.crm}</span>
              </span>
            </p>
          </div>
        </header>

        {/* ------------------------------ Capa ------------------------------ */}
        <div className="mx-auto mt-10 w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          {/* Largura alinhada à coluna de texto: a capa apresenta o artigo
              em vez de empurrar o começo da leitura para fora da tela. */}
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[920px] overflow-hidden rounded-[24px] bg-surface-soft">
            <Image
              src={post.cover}
              alt=""
              fill
              priority
              sizes="(max-width: 920px) 100vw, 920px"
              className="object-cover"
            />
          </div>
        </div>

        {/* ------------------------------ Corpo ----------------------------- */}
        <div className="mx-auto w-full max-w-[1600px] px-5 pt-16 pb-20 sm:px-8 lg:px-12 lg:pt-20">
          <div
            className="post-body mx-auto max-w-[720px]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* ----------------------- CTA de agendamento --------------------- */}
          <aside className="mx-auto mt-16 max-w-[720px] rounded-[26px] border border-line bg-surface-soft p-8 sm:p-10">
            <p className="text-[11px] font-medium tracking-[0.2em] text-brand-blue uppercase">
              Ficou com dúvida?
            </p>
            <p className="mt-4 text-[19px] leading-snug font-light tracking-[-0.015em] text-ink">
              Uma lesão que mudou merece ser avaliada — não esperar o próximo
              retorno.
            </p>
            <SmartLink
              href="/#onde-estamos"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-[13.5px] font-semibold text-white transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:bg-[#2b4876]"
            >
              <WhatsAppIcon className="size-4" />
              Agendar consulta
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
          </aside>

          {/* ------------------- Anterior / próximo artigo ------------------- */}
          {previous || next ? (
            <nav
              aria-label="Outros artigos"
              className="mx-auto mt-14 grid max-w-[720px] gap-3 border-t border-line pt-10 sm:grid-cols-2"
            >
              {previous ? (
                <SmartLink
                  href={`/blog/${previous.slug}`}
                  className="group rounded-2xl border border-line p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-blue"
                >
                  <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                    <ChevronLeftIcon className="size-3.5" />
                    Anterior
                  </span>
                  <span className="mt-3 block text-[14.5px] leading-snug font-normal text-ink group-hover:text-brand-blue">
                    {previous.title}
                  </span>
                </SmartLink>
              ) : (
                <span aria-hidden />
              )}

              {next ? (
                <SmartLink
                  href={`/blog/${next.slug}`}
                  className="group rounded-2xl border border-line p-6 text-right transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-blue"
                >
                  <span className="flex items-center justify-end gap-1.5 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                    Próximo
                    <ChevronRightIcon className="size-3.5" />
                  </span>
                  <span className="mt-3 block text-[14.5px] leading-snug font-normal text-ink group-hover:text-brand-blue">
                    {next.title}
                  </span>
                </SmartLink>
              ) : null}
            </nav>
          ) : null}
        </div>
      </article>

      {/* --------------------------- Continue lendo -------------------------- */}
      {relacionados.length ? (
        <section className="w-full bg-surface-soft py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <h2 className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
                Continue lendo
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

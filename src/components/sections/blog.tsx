import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export function Blog() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;

  return (
    <section
      id="blog"
      className="w-full scroll-mt-20 bg-surface-soft py-24 sm:py-28 lg:scroll-mt-[104px] lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[560px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand-blue uppercase">
              Conteúdo
            </p>
            <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-light tracking-[-0.03em] text-ink">
              Para entender sua pele antes da consulta.
            </h2>
          </div>

          <SmartLink
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 text-[13.5px] font-semibold text-ink transition-colors duration-300 hover:text-brand-blue"
          >
            Ver todos os artigos
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SmartLink>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 110}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

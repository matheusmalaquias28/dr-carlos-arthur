import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { ArrowUpRightIcon } from "@/components/icons";
import { formatDate, type PostMeta } from "@/lib/posts";

type Props = { post: PostMeta; priority?: boolean };

export function PostCard({ post, priority = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-sky hover:shadow-[0_26px_54px_-36px_rgba(18,32,58,0.55)]">
      <SmartLink
        href={`/blog/${post.slug}`}
        className="relative block aspect-[3/2] w-full overflow-hidden bg-surface-soft"
      >
        <Image
          src={post.cover}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
          className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
        />
        {post.category ? (
          <span className="absolute top-4 left-4 rounded-full bg-white/92 px-3 py-1.5 text-[10.5px] font-semibold tracking-[0.08em] text-brand-blue uppercase backdrop-blur-sm">
            {post.category}
          </span>
        ) : null}
      </SmartLink>

      <div className="flex flex-1 flex-col p-7">
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] font-light text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span>{post.readingMinutes} min de leitura</span>
        </p>

        <h3 className="mt-4 text-[18px] leading-snug font-normal tracking-[-0.015em] text-ink">
          <SmartLink href={`/blog/${post.slug}`} className="hover:text-brand-blue">
            {post.title}
          </SmartLink>
        </h3>

        <p className="mt-3 flex-1 text-[13.5px] leading-relaxed font-light text-muted">
          {post.excerpt}
        </p>

        <SmartLink
          href={`/blog/${post.slug}`}
          className="mt-7 inline-flex w-fit items-center gap-2 self-start rounded-full border border-line px-5 py-2.5 text-[12.5px] font-semibold text-ink transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:border-brand-blue group-hover:text-brand-blue"
        >
          Ler artigo
          <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </SmartLink>
      </div>
    </article>
  );
}

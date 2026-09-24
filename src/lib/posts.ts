import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO — usado no <time> e na ordenação */
  date: string;
  author: string;
  cover: string;
  /** Rótulo curto exibido sobre a capa */
  category?: string;
  /** Posts com draft: true ficam fora do ar em produção */
  draft?: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

const FORMATADOR = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(iso: string) {
  return FORMATADOR.format(new Date(`${iso}T12:00:00`));
}

function readingMinutes(markdown: string) {
  const palavras = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 200));
}

function listFiles() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
}

function parse(file: string) {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "Dr. Carlos Arthur Athayde"),
    cover: String(data.cover ?? "/images/blog/default.webp"),
    category: data.category ? String(data.category) : undefined,
    draft: Boolean(data.draft),
    readingMinutes: readingMinutes(content),
  };

  return { meta, content };
}

/** Rascunhos aparecem em `npm run dev`, mas nunca no build de produção. */
function visible(meta: PostMeta) {
  return !meta.draft || process.env.NODE_ENV === "development";
}

export function getAllPosts(): PostMeta[] {
  return listFiles()
    .map((f) => parse(f).meta)
    .filter(visible)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = `${slug}.md`;
  if (!listFiles().includes(file)) return null;

  const { meta, content } = parse(file);
  if (!visible(meta)) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return { ...meta, html: String(processed) };
}

/** Post anterior e próximo, para a navegação no rodapé do artigo. */
export function getNeighbours(slug: string) {
  const todos = getAllPosts();
  const i = todos.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? todos[i - 1] : null,
    next: i >= 0 && i < todos.length - 1 ? todos[i + 1] : null,
  };
}

/** Outros posts, para a seção "continue lendo". */
export function getRelated(slug: string, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

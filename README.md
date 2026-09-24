# Dr. Carlos Arthur Athayde — Site Institucional

Next.js na Vercel. Duas rotas no ar:

| Rota | O que é |
| --- | --- |
| `/` | Home do site institucional |
| `/blog` | Listagem de artigos |
| `/blog/[slug]` | Página do artigo |
| `/links` | Página de links provisória (bio do Instagram) |

## Stack

- **Next.js 16** — App Router, React Server Components
- **React 19** · **TypeScript** strict
- **Tailwind CSS v4** — tokens em `src/app/globals.css`
- **Manrope** self-hosted (variável, 200–800) via `next/font/local`
- Animações em CSS + um `IntersectionObserver` de ~30 linhas. Sem
  biblioteca de animação, sem biblioteca de carrossel.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Estrutura da home

| Seção | Componente |
| --- | --- |
| Hero 100vh | `components/sections/hero.tsx` |
| Procedimentos (carrossel no mobile) | `components/sections/procedures.tsx` |
| Mapeamento corporal | `components/sections/mapping.tsx` |
| Sobre o Dr. Carlos | `components/sections/about.tsx` |
| Formação e titulação (carrossel) | `components/sections/credentials.tsx` |
| Onde estamos (mapas) | `components/sections/locations.tsx` |
| Blog | `components/sections/blog.tsx` |
| Header + menu mobile | `components/site-header.tsx` |
| Rodapé | `components/site-footer.tsx` |

## Blog

Os posts são arquivos Markdown em `content/blog/`. **Um arquivo = um
post**, e o nome do arquivo vira a URL: `content/blog/meu-artigo.md`
publica em `/blog/meu-artigo`. Não há banco nem painel — é só criar o
arquivo e subir.

### Frontmatter

```yaml
---
title: "Título do artigo"
excerpt: "Uma ou duas frases que aparecem no card e abaixo do título."
date: "2026-08-14"          # AAAA-MM-DD, usado para ordenar
author: "Dr. Carlos Arthur Athayde"
cover: "/images/post-1.jpg" # 1200x800
category: "Prevenção"       # opcional, vira o selo sobre a capa
draft: true                 # opcional, ver abaixo
---
```

Abaixo do frontmatter, escreva em Markdown normal: `##` para títulos de
seção, `**negrito**`, listas, tabelas, `>` para citação destacada.

O tempo de leitura é calculado sozinho a partir do número de palavras.

### Rascunhos

`draft: true` deixa o post visível em `npm run dev` e **fora do build de
produção**. Serve para escrever com calma, ou para deixar um texto
pronto esperando a revisão do Dr. Carlos.

### Onde os posts aparecem

- `/blog` — o mais recente vira destaque, os demais entram na grade
- `/` — a seção de conteúdo da home mostra os 3 mais recentes
- No fim de cada artigo — navegação anterior/próximo e "continue lendo"

Tudo é gerado em build: o blog inteiro sai como HTML estático, sem
servidor.

### ⚠️ Revisão médica

Os três artigos que já estão em `content/blog/` foram escritos como
ponto de partida e saem publicados **sob o CRM do Dr. Carlos**. Ele
precisa ler e aprovar cada um antes de o site ir ao ar.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Toda a copy da home | `src/lib/content.ts` |
| Menu e rodapé (lista de páginas) | `src/lib/nav.ts` |
| Nome, CRM, telefone, redes, unidades | `src/lib/site.ts` |
| Cores e tipografia | `src/app/globals.css` → `@theme` |
| Artigos do blog | `content/blog/*.md` |
| Tipografia do corpo do post | `src/app/globals.css` → `.post-body` |
| Botões da página de links | `src/lib/links.ts` |
| Imagens | `public/images/` |
| Logo e foto | `public/brand/` |

### Ativar as páginas internas

`src/lib/nav.ts` alimenta o menu do desktop, o menu mobile e o rodapé de
uma vez só. Enquanto as páginas não existem, os itens apontam para
âncoras da home (`/#sobre`). Para publicar a página Sobre, crie
`src/app/sobre/page.tsx` e troque o `href` para `/sobre`.

## ⚠️ Pendências antes de publicar

1. **Formação do Dr. Carlos** (`content.ts` → `about.formations`) — os
   quatro itens estão com `(a confirmar)` na tela de propósito.
2. **Formação e titulação** (`content.ts` → `credentials`) — os cinco
   cards são exemplo; trocar por títulos e vínculos reais.
3. **Posts do blog** (`content.ts` → `posts`) — três artigos de exemplo.
4. **Redes sociais** (`site.ts` → `social`) — as URLs estão vazias e por
   isso os ícones não aparecem no menu nem no rodapé. Basta preencher.
5. **Domínio** (`site.ts` → `url`) — hoje `drcarlosarthur.com.br`.
6. **Imagens** — ver a tabela abaixo.

## Slots de imagem

Os arquivos em `public/images/` são placeholders em gradiente. Troque
mantendo o nome e a proporção e nada no layout se mexe.

| Arquivo | Proporção | O que entra |
| --- | --- | --- |
| `hero.jpg` | 2000×1400 | Foto de abertura. O texto fica na esquerda, então deixe o lado esquerdo limpo. |
| `procedimento-mapeamento.jpg` | 1200×1500 | Mapeamento corporal em andamento. |
| `procedimento-oncologica.jpg` | 1200×1500 | Consulta / avaliação de lesão. |
| `procedimento-cirurgia.jpg` | 1200×1500 | Ambiente cirúrgico. |
| `dermatoscopio.jpg` | 1600×1200 | **O aparelho em destaque** — faixa de largura total. |
| `dr-carlos-retrato.jpg` | 1200×1500 | Retrato vertical do Dr. |
| `post-1.jpg` … `post-3.jpg` | 1200×800 | Capas dos artigos. |

## Publicidade médica — o que ficou de fora

A Resolução CFM 2.336/2023 veda depoimento, agradecimento ou testemunho
de paciente na divulgação de serviços médicos. A seção de depoimentos do
site antigo foi substituída por **Formação e titulação**, que cumpre o
mesmo papel de autoridade sem expor o Dr. Carlos a representação no
CREMERJ. A copy também evita promessa de resultado e linguagem
sensacionalista pelo mesmo motivo.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `brand-blue` | `#34568A` | cor de ação do site |
| `brand-sky` | `#DEEAFA` | fundos suaves, selos, ícones |
| `ink` | `#12203A` | texto principal (16,2:1 no branco) |
| `muted` | `#56698A` | texto de apoio (5,5:1 no branco) |
| `navy` | `#0E1A2E` | seções escuras e rodapé |
| `brand-brown` | `#544131` | logo e página `/links` |

## Mapas

A seção "Onde estamos" usa embed do Google Maps com filtro CSS
(`.map-frame` em `globals.css`) para o visual preto e branco. Sem chave
de API e sem custo. O filtro suaviza no hover.

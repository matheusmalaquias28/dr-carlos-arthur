# Dr. Carlos Arthur Athayde — Site Institucional

Site institucional em Next.js, hospedado na Vercel.
**Fase atual:** página inicial provisória de links.

## Stack

- **Next.js 16** — App Router, React Server Components
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — tokens da marca em `src/app/globals.css`
- **Fontes self-hosted** via `next/font/local`
  — **Delmon Delicate** (títulos) + **Montserrat** (interface)
- **Zero JavaScript de cliente** — a página é 100% estática; todas as
  animações e micro-interações são CSS

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Deploy na Vercel

1. Suba a pasta para um repositório Git.
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. A Vercel detecta o Next.js sozinho — nenhuma configuração extra é necessária.
4. Aponte o domínio em **Settings → Domains** e atualize `site.url`
   em `src/lib/site.ts` para o domínio final.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Botões, links e selos | `src/lib/links.ts` |
| Nome, descrição, telefone, domínio | `src/lib/site.ts` |
| Endereços dos consultórios | `src/lib/site.ts` → `clinics` |
| Cores e tipografia | `src/app/globals.css` → bloco `@theme` |
| Aparência dos botões | `src/components/link-button.tsx` |
| Retrato e anel animado | `src/components/portrait.tsx` |
| Cores do anel do Instagram | `src/app/globals.css` → `--ig-1` … `--ig-5` |
| Logo, símbolo e foto | `public/brand/` |
| Favicon | `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png` |

### Ativar o botão "Meu site"

Em `src/lib/links.ts`, preencha a `href` do item `site` com a URL final.
O botão sai automaticamente do estado "em breve" e passa a ser clicável.

## Fontes

> **Atenção — Delmon Delicate não tem acentos.**
> O arquivo enviado cobre apenas ASCII básico: sem `á ã ç é í ó ú`, sem
> travessão (`—`) e sem ponto médio (`·`). Por isso ela é aplicada **somente
> ao nome do doutor** (`h1`), que não tem acentuação. Qualquer outro título
> em Delmon precisa ser conferido antes — se tiver acento, o navegador troca
> aquela letra por Georgia e a palavra fica com duas fontes misturadas.
> Se a cliente puder enviar a versão da fonte com acentuação latina, dá para
> ampliar o uso dela para o site inteiro.

## Paleta (manual da marca)

| Token | Hex | Uso |
| --- | --- | --- |
| `brand-brown` | `#544131` | cor principal, texto e botões de agendamento |
| `brand-blue` | `#34568A` | detalhes e anel de foco |
| `brand-sky` | `#DEEAFA` | fundos suaves e selos |
| `brand-cream` | `#EFEAE6` | base do gradiente |
| `brand-taupe` | `#B2A098` | apoio |
| `brand-mist` | `#EDEDED` | apoio |
| `brand-silver` | `#D1D0D1` | apoio |

## Assets

A logo foi vetorizada a partir do PNG original: `public/brand/logo.svg`
(lockup completo) e `public/brand/symbol.svg` (apenas o símbolo).
Ambas usam o marrom `#544131` da marca.
"# dr-carlos-arthur" 

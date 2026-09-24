export type NavItem = { label: string; href: string };

/**
 * Navegação principal.
 * Enquanto as páginas internas não existem, os itens apontam para as
 * âncoras da home. Para ativar uma página, troque o href por "/sobre",
 * "/procedimentos" etc. — o menu e o rodapé leem desta mesma lista.
 */
export const nav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Procedimentos", href: "/#procedimentos" },
  { label: "Mapeamento corporal", href: "/#mapeamento" },
  { label: "Sobre o Dr. Carlos", href: "/#sobre" },
  { label: "Onde estamos", href: "/#onde-estamos" },
  { label: "Blog", href: "/blog" },
];

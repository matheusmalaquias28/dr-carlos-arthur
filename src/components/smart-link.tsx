import Link from "next/link";

type Props = React.ComponentProps<"a"> & { href: string };

/**
 * Escolhe entre âncora nativa e `next/link`.
 *
 * Para destinos na própria página o `Link` do Next não repete o scroll
 * quando o hash já é o atual — o botão fica "morto" do segundo clique em
 * diante. A âncora nativa rola sempre, inclusive nesse caso.
 *
 * `href` que comece com "/#" ou "#" vira <a>; qualquer outra rota segue
 * pelo Link, com o pré-carregamento do Next.
 */
export function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith("/#") || href.startsWith("#")) {
    const hash = href.startsWith("/#") ? href.slice(1) : href;
    return (
      <a href={hash} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

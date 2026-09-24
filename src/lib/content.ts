/**
 * Conteúdo da home.
 *
 * ⚠️ Os blocos marcados com PENDENTE precisam ser confirmados com o
 * Dr. Carlos antes de publicar. Eles aparecem na tela com o texto
 * "(a confirmar)" justamente para não passarem despercebidos.
 */
export const PENDENTE = "(a confirmar)";

/* ------------------------------ Hero ------------------------------ */
export const hero = {
  eyebrow: "Dermatologia oncológica · Ipanema e Niterói",
  title: "Encontrar cedo\nmuda tudo.",
  text: "O câncer de pele dá sinais antes de dar sintomas. O mapeamento corporal total com dermatoscopia digital registra cada lesão da sua pele e acompanha o que muda ao longo do tempo — inclusive o que o olho não alcança.",
  primaryCta: "Agendar consulta",
  secondaryCta: "Como funciona o mapeamento",
};

/* -------------------------- Procedimentos ------------------------- */
export type Procedure = {
  id: string;
  title: string;
  text: string;
  image: string;
  /** Camada opcional sobreposta à imagem de fundo do card */
  texture?: {
    /** Arquivo com canal alpha (PNG/WebP) */
    src: string;
    /** Posição da camada dentro do card */
    box?: string;
    /** Enquadramento da imagem */
    fit?: string;
    /** Opacidade e modo de mistura */
    tone?: string;
  };
};

export const procedures: Procedure[] = [
  {
    id: "mapeamento",
    // O \n quebra o título no card; o alt/aria troca por espaço.
    title: "Mapeamento\ncorporal total",
    text: "Fotografamos e catalogamos cada lesão da sua pele em alta resolução. Na consulta seguinte, a comparação imagem a imagem revela mudanças pequenas demais para serem percebidas a olho nu.",
    image: "/images/procedimento-mapeamento.jpg",
    texture: {
      src: "/images/textura-corpo.webp",
      box: "inset-x-0 top-0 bottom-0",
      fit: "object-contain object-top",
      tone: "opacity-55",
    },
  },
  {
    id: "oncologica",
    title: "Dermatologia oncológica",
    text: "Investigação, tratamento e acompanhamento do câncer de pele. Uma consulta pensada para quem tem histórico pessoal ou familiar, muitas pintas ou uma lesão que mudou.",
    image: "/images/procedimento-oncologica.jpg",
    texture: {
      src: "/images/textura-celulas.webp",
      box: "inset-x-0 top-0 h-[66%]",
      fit: "object-cover object-top",
      tone: "opacity-60 mix-blend-screen",
    },
  },
  {
    id: "cirurgia",
    title: "Cirurgia dermatológica",
    text: "Remoção de lesões e tumores de pele com técnica precisa e atenção à cicatriz. Do diagnóstico ao retorno, o acompanhamento é feito pelo mesmo médico.",
    image: "/images/procedimento-cirurgia.jpg",
    texture: {
      src: "/images/textura-cirurgia.webp",
      box: "inset-0",
      fit: "object-contain object-left-top",
      tone: "opacity-70",
    },
  },
];

/* -------------------- Mapeamento / dermatoscopia ------------------ */
export const mapping = {
  eyebrow: "Mapeamento corporal e dermatoscopia digital",
  title: "Sua pele, registrada hoje para ser comparada amanhã.",
  text: "O exame fotografa toda a superfície da pele e amplia cada lesão em alta resolução. As imagens ficam arquivadas e servem de referência nas consultas seguintes — é essa comparação ao longo do tempo que permite identificar um melanoma ainda no início, quando o tratamento é mais simples.",
  features: [
    {
      id: "alta-resolucao",
      title: "Imagem ampliada de cada lesão",
      text: "A dermatoscopia digital revela estruturas invisíveis a olho nu.",
      icon: "lens",
    },
    {
      id: "comparacao",
      title: "Comparação entre consultas",
      text: "O sistema sobrepõe as imagens e evidencia o que mudou desde a última visita.",
      icon: "compare",
    },
    {
      id: "indicacao",
      title: "Indicado para quem tem muitas pintas",
      text: "E também para histórico familiar de melanoma ou pele muito clara.",
      icon: "shield",
    },
    {
      id: "conforto",
      title: "Exame sem dor e sem cortes",
      text: "Não invasivo, sem radiação e concluído na própria consulta.",
      icon: "feather",
    },
    {
      id: "arquivo",
      title: "Histórico que acompanha você",
      text: "O arquivo de imagens é mantido e revisto a cada retorno.",
      icon: "archive",
    },
    {
      id: "laudo",
      title: "Laudo detalhado ao final",
      text: "Com as lesões mapeadas, a conduta indicada e o prazo de retorno.",
      icon: "report",
    },
  ],
};

/* --------------------------- Sobre o Dr. -------------------------- */
export const about = {
  eyebrow: "Sobre",
  title: "Dr. Carlos Arthur Athayde",
  text: "Médico com residência médica em Dermatologia pelo Hospital Universitário Gaffrée e Guinle (HUGG), da UNIRIO. Atende em Ipanema e Niterói, com atuação dedicada ao diagnóstico precoce do câncer de pele, à cirurgia dermatológica e ao acompanhamento de pacientes com risco aumentado.",
  formationsLabel: "Formação e atuação",
  formations: [
    {
      id: "f1",
      label:
        "Residência médica em Dermatologia — Hospital Universitário Gaffrée e Guinle (HUGG/UNIRIO)",
    },
    { id: "f2", label: "Especialista em câncer de pele" },
    { id: "f3", label: "Cirurgia dermatológica" },
    { id: "f4", label: "Mapeamento corporal e dermatoscopia digital" },
  ],
  cta: "Conhecer a trajetória completa",
  image: "/images/dr-carlos-retrato.webp",
};

/* --------------------------- Avaliacoes ---------------------------- */
/**
 * Avaliacoes de pacientes exibidas na home.
 *
 * COMO PREENCHER: copie cada avaliacao para um item da lista abaixo,
 * seguindo o formato do exemplo comentado. A secao some da home enquanto
 * a lista estiver vazia e aparece sozinha assim que houver itens.
 *
 * Exemplo:
 *   { id: "identificador-curto", name: "Nome de quem avaliou", text: "Texto da avaliacao." },
 *
 * REGRA DE PUBLICIDADE MEDICA — Resolucao CFM 2.336/2023:
 * - Art. 14, II, "g": depoimentos sobre a atuacao do medico devem ser
 *   sobrios, sem adjetivos que denotem superioridade nem promessa de
 *   resultado.
 * - Art. 8, par. 4: elogios reiterados a tecnica e ao resultado podem ser
 *   investigados pela Codame.
 * Na pratica: descarte os textos que comparem o Dr. Carlos a outros
 * medicos, que prometam ausencia de dor ou resultado, e prefira os que
 * falam de atendimento, clareza e acolhimento.
 */
export type Review = {
  /** Identificador curto e unico, usado como key da lista */
  id: string;
  /** Nome de quem escreveu a avaliacao */
  name: string;
  /** Texto da avaliacao, transcrito sem alteracao */
  text: string;
};

export const reviews: Review[] = [];

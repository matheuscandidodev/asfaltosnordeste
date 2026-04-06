// ─────────────────────────────────────────────
// NAVEGAÇÃO
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Início",           href: "/" },
  { label: "Sobre nós",        href: "/sobre" },
  { label: "Produtos",         href: "/produtos" },
  { label: "Trabalhe conosco", href: "/trabalhe" },
] as const;

// ─────────────────────────────────────────────
// HERO (homepage)
// ─────────────────────────────────────────────
export const HERO = {
  label:    "Qualidade que sustenta o progresso",
  title:    "Soluções asfálticas",
  titleEM:  "de alto desempenho",
  titleEnd: "para obras que exigem resultado.",
  body:     "Desde 1997, atendemos grandes construtoras e órgãos públicos nas regiões Norte e Nordeste com tecnologia, controle rigoroso e logística própria.",
  cta1:     { label: "Conheça nossos produtos", href: "/produtos" },
  cta2:     { label: "Solicitar proposta",       href: "#contato" },
} as const;

// ─────────────────────────────────────────────
// ESTATÍSTICAS (homepage)
// ─────────────────────────────────────────────
export const STATS = [
  { num: "+27",  label: "Anos de operação" },
  { num: "2",    label: "Regiões atendidas" },
  { num: "100%", label: "Logística própria" },
  { num: "24/7", label: "Controle de qualidade" },
] as const;

// ─────────────────────────────────────────────
// SERVIÇOS (homepage)
// ─────────────────────────────────────────────
export const SERVICES = {
  label:   "Nossos serviços",
  title:   "Da matéria-prima",
  titleEM: "à entrega final",
  body:    "Controlamos toda a cadeia operacional — fabricação, ensaios laboratoriais e logística — para garantir conformidade em cada etapa do fornecimento.",
  items: [
    {
      title: "Fabricação",
      text:  "Produção com estrutura industrial, tecnologia de controle de processo e rastreabilidade completa por lote.",
    },
    {
      title: "Transporte",
      text:  "Frota própria com operação planejada para entregas dentro do prazo, sem dependência de terceiros.",
    },
  ],
} as const;

// ─────────────────────────────────────────────
// DIFERENCIAIS (homepage)
// ─────────────────────────────────────────────
export const DIFERENCIAIS = [
  { num: "01", title: "Assistência técnica",  desc: "Projetos de mistura sob medida e suporte especializado em todas as fases da obra." },
  { num: "02", title: "Laboratório próprio",  desc: "Ensaios internos que asseguram rastreabilidade e conformidade em cada lote produzido." },
  { num: "03", title: "Logística própria",    desc: "Frota dedicada com rotas planejadas para entregas pontuais no Norte e Nordeste." },
  { num: "04", title: "Cobertura regional",   desc: "Base em Maracanaú–CE, com capacidade de atendimento em todo o arco Norte-Nordeste." },
] as const;

// ─────────────────────────────────────────────
// CONTATO (homepage)
// ─────────────────────────────────────────────
export const CONTACT = {
  label:   "Contato",
  title:   "Vamos conversar sobre",
  titleEM: "a sua demanda",
  body:    "Atendimento especializado para construtoras, órgãos públicos e projetos que demandam precisão técnica e logística eficiente.",
  info: [
    { label: "Telefone",  value: "(85) 3311-2844" },
    { label: "WhatsApp",  value: "(85) 98174-9558" },
    { label: "E-mail",    value: "comercial@asfaltosnordeste.com.br" },
  ],
  mapSrc: "https://www.google.com/maps?q=Av.+Wilson+Camurça,+1998,+Maracanaú&output=embed",
} as const;

// ─────────────────────────────────────────────
// TICKER
// ─────────────────────────────────────────────
export const TICKER_TEXT =
  "Fabricação · Transporte · Controle de qualidade · Desde 1997 · Norte e Nordeste · Logística própria · Laboratório próprio ·";

// ─────────────────────────────────────────────
// SOBRE NÓS
// ─────────────────────────────────────────────
export const SOBRE = {
  hero: {
    label:   "Nossa história",
    title:   "Infraestrutura rodoviária",
    titleEM: "que move o Brasil",
    body:    "Desde 1997, a Asfaltos Nordeste lidera o desenvolvimento da infraestrutura rodoviária do Norte e Nordeste, entregando soluções asfálticas de alto desempenho para grandes construtoras e órgãos públicos.",
  },
  stats: [
    { num: "+27",   label: "Anos de mercado" },
    { num: "26mil", label: "m² de estrutura" },
    { num: "+30",   label: "Cavalos mecânicos" },
    { num: "55",    label: "Semirreboques" },
  ],
  pilares: [
    {
      num:   "01",
      title: "Assistência técnica personalizada",
      desc:  "Desenvolvimento de Projetos de Mistura (traço) sob medida, com ensaios em laboratório próprio e apoio direto na aplicação das emulsões em campo.",
    },
    {
      num:   "02",
      title: "Laboratório próprio",
      desc:  "Ensaios internos que asseguram rastreabilidade e conformidade em cada lote, com controle rigoroso de qualidade dos produtos e processos.",
    },
    {
      num:   "03",
      title: "Logística própria robusta",
      desc:  "Frota com mais de 30 cavalos mecânicos, 4 caminhões truck e 55 semirreboques, com monitoramento e padronização em todas as etapas.",
    },
    {
      num:   "04",
      title: "Localização estratégica",
      desc:  "Baseados no Distrito Industrial de Maracanaú–CE, garantimos agilidade e eficiência logística para todo o arco Norte-Nordeste.",
    },
    {
      num:   "05",
      title: "Compromisso ambiental",
      desc:  "Operação alinhada às normas reguladoras, reforçando qualidade, responsabilidade e parceria de longo prazo com nossos clientes.",
    },
  ],
} as const;

// ─────────────────────────────────────────────
// PRODUTOS
// ─────────────────────────────────────────────
export const PRODUTOS = {
  hero: {
    label:   "Nosso portfólio",
    title:   "Produtos desenvolvidos",
    titleEM: "para cada aplicação",
    body:    "Linha completa de cimentos asfálticos, emulsões e aditivos com tecnologia de ponta e rastreabilidade de processo para obras de qualquer escala.",
  },
  categorias: [
    {
      id:    "cap",
      tag:   "CAP",
      image: "/cap-50-70.png",
      title: "Cimento Asfáltico de Petróleo",
      desc:  "Ligante asfáltico convencional e modificado por polímeros, com controle rigoroso de viscosidade e penetração para diferentes condições de obra.",
      items: [
        { cod: "CAP 50-70",       desc: "Formulação padrão para pavimentação convencional." },
        { cod: "CAP 50-70 D7",    desc: "Com DOPE de adesividade incorporado." },
        { cod: "AMP 55/75-E",     desc: "Modificado por polímeros elastoméricos — alta resistência à deformação permanente." },
        { cod: "AMP 60/85-E",     desc: "Faixa intermediária para tráfego pesado e clima quente." },
        { cod: "AMP 65/90-E",     desc: "Formulação de alta rigidez para pavimentos de alto desempenho." },
      ],
    },
    {
      id:    "emulsoes",
      tag:   "Emulsões",
      image: "/emulsoes.png",
      title: "Emulsões Asfálticas",
      desc:  "Emulsões catiônicas para pavimentação, revestimentos superficiais e microrevestimento, com ruptura controlada e excelente adesividade.",
      items: [
        { cod: "RR-1C / RR-2C",   desc: "Ruptura rápida para tratamentos superficiais." },
        { cod: "RM-1C / RM-2C",   desc: "Ruptura média para camadas de ligação." },
        { cod: "RL-1C",           desc: "Ruptura lenta para imprimação e reciclagem." },
        { cod: "LA-1C / LAN",     desc: "Lama asfáltica para manutenção preventiva." },
        { cod: "EAI / LARC",      desc: "Aplicações especiais e microrevestimento." },
        { cod: "RR1C-E → RL1C-E", desc: "Linha modificada por polímeros elastoméricos." },
      ],
    },
    {
      id:    "aditivos",
      tag:   "Aditivos",
      image: "/dope100.png",
      title: "Aditivos e Melhoradores",
      desc:  "Aditivos químicos para aumentar a adesividade, controlar a ruptura e melhorar o desempenho das misturas asfálticas em campo.",
      items: [
        { cod: "DOPE de Adesividade", desc: "Melhorador de adesividade para asfaltos e asfaltos modificados." },
        { cod: "DOPE M100",           desc: "Aditivo químico controlador de ruptura para microrevestimento." },
      ],
    },
  ],
} as const;

// ─────────────────────────────────────────────
// TRABALHE CONOSCO
// ─────────────────────────────────────────────
export const TRABALHE = {
  hero: {
    label:   "Faça parte do time",
    title:   "Construa sua carreira",
    titleEM: "na Asfaltos Nordeste",
    body:    "Somos uma empresa com mais de 27 anos de história, comprometida com pessoas que buscam crescimento profissional em um ambiente técnico, sólido e desafiador.",
  },
  valores: [
    { num: "01", title: "Excelência técnica",  desc: "Valorizamos profissionais que buscam o melhor resultado em cada processo e etapa da operação." },
    { num: "02", title: "Trabalho em equipe",  desc: "Acreditamos que grandes obras se constroem com colaboração, parceria e comunicação clara." },
    { num: "03", title: "Desenvolvimento",     desc: "Investimos no crescimento contínuo das pessoas que fazem parte do nosso time." },
    { num: "04", title: "Responsabilidade",    desc: "Operamos com ética, comprometimento e respeito às normas reguladoras e ao meio ambiente." },
  ],
  vagas: [] as { titulo: string; area: string; regime: string; local: string }[],
  banco: {
    title:  "Banco de talentos",
    body:   "Não há vagas abertas no momento. Mas se você tem perfil técnico e quer fazer parte de uma das maiores referências em infraestrutura asfáltica do Nordeste, envie seu currículo — entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.",
    email:  "comercial@asfaltosnordeste.com.br",
  },
} as const;

# Asfaltos Nordeste

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/licença-proprietária-red)

Site institucional da **Asfaltos Nordeste**, desenvolvido como projeto freelance com foco em performance, apresentação visual e experiência do usuário.

🌐 **[asfneteste.qzitosis.com](https://asfneteste.qzitosis.com)**

> ⚠️ **Projeto em desenvolvimento ativo.** Funcionalidades, estrutura e design ainda podem mudar até a entrega final.

---

## Sobre o projeto

A Asfaltos Nordeste precisava de uma presença digital que transmitisse credibilidade e profissionalismo. O site foi construído do zero com Next.js, priorizando carregamento rápido, animações fluidas e uma navegação simples, sem nada que distraia do que realmente importa: o negócio do cliente.

---

## Stack

| Tecnologia | Versão | Por quê |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | SSR/SSG, roteamento e otimizações de imagem out-of-the-box |
| [React](https://react.dev/) | 19 | Base do projeto |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática, menos bug em runtime |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária sem overhead de CSS customizado |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animações declarativas e performáticas |
| [Lucide React](https://lucide.dev/) | latest | Ícones consistentes e leves |
| [D3.js](https://d3js.org/) | 7 | Visualizações de dados customizadas |

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ e npm (ou yarn/pnpm/bun).

```bash
# Clone o repositório
git clone https://github.com/matheuscandidodev/asfaltosnordeste.git
cd asfaltosnordeste

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com hot reload
npm run build    # Build de produção
npm run start    # Inicia o servidor em modo produção
npm run lint     # Analisa o código com ESLint
```

---

## Estrutura do projeto

```
asfaltosnordeste/
├── public/          # Arquivos estáticos (imagens, fontes, favicon)
├── src/
│   ├── app/         # Rotas e layouts (App Router do Next.js)
│   ├── components/  # Componentes reutilizáveis
│   └── styles/      # Estilos globais
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## Licença e direitos autorais

Este é um projeto **proprietário** desenvolvido sob contrato de prestação de serviços.

Todo o código-fonte, design e demais ativos deste repositório são de propriedade do desenvolvedor e/ou do cliente contratante. **Nenhuma parte deste projeto pode ser copiada, reproduzida, distribuída ou utilizada, integral ou parcialmente, sem autorização expressa e por escrito.**

O repositório é público exclusivamente para fins de portfólio e demonstração técnica. Isso não configura licença de uso ou distribuição de qualquer natureza.

---

## Autor

Desenvolvido por **[Matheus Cândido](https://github.com/matheuscandidodev)**

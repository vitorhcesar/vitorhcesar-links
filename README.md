<div align="center">

# 🔗 Links — Vítor H. Cesar

Minha página de links (estilo Linktree), feita do zero: portfólio, redes sociais e canais de contato em um só lugar.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

**[🌐 Ver ao vivo](https://links.vitorhcesar.com.br)**

</div>

## ✨ Funcionalidades

- Cards de links e ícones de redes sociais (GitHub, LinkedIn, Instagram, TikTok, YouTube)
- Links opcionais configurados por variáveis de ambiente: só aparecem se definidos (LinkedIn, e-mail, WhatsApp)
- **SEO:** canonical, Open Graph, `robots.txt` e `sitemap.xml` gerados por rota
- Favicons e web manifest

## 🛠️ Stack

- **Framework:** TanStack Start (React + TanStack Router, SSR com Nitro)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS v4, Lucide Icons
- **Build e runtime:** Vite, Bun
- **Qualidade:** ESLint, Prettier, React Compiler

## 📁 Estrutura

```
src/
├── components/   # LinkCard, SocialLinks, fundo e ícones
├── lib/          # configuração do site e SEO
└── routes/       # página inicial, robots.txt e sitemap.xml
public/           # favicons e manifest
```

## 🚀 Como rodar

```bash
bun install
cp .env.example .env   # preencha as variáveis
bun --bun run dev      # http://localhost:3000
```

| Script | O que faz |
|---|---|
| `dev` | Servidor de desenvolvimento na porta 3000 |
| `build` | Build de produção |
| `preview` | Pré-visualiza o build |
| `generate-routes` | Gera a árvore de rotas do TanStack Router |
| `lint` / `format` / `check` | ESLint e Prettier |

## 🔐 Variáveis de ambiente

Veja `.env.example`.

| Variável | Uso |
|---|---|
| `VITE_SITE_URL` | URL pública (canonical, Open Graph, sitemap) |
| `VITE_PORTFOLIO_URL` | Link para o portfólio |
| `VITE_LINKEDIN_URL` | Link do LinkedIn (opcional) |
| `VITE_CONTACT_EMAIL` | Link de e-mail (opcional) |
| `VITE_WHATSAPP_NUMBER` | Link do WhatsApp |

## 📄 Licença

[MIT](LICENSE)

## 👤 Autor

Feito por **Vítor H. Cesar**, Desenvolvedor Full Stack.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitorhcesar/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vitorhcesar)

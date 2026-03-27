# Manivis

Landing page do projeto **Manivis** — soluções sustentáveis para tratamento e reaproveitamento da manipueira, em **Next.js** (App Router), com a mesma identidade visual (verdes, dourado, Bebas Neue / DM Sans).

## Conteúdo da página

- **Hero** — mensagem principal e chamada à ação  
- **Manipueira** — contexto sobre o resíduo  
- **Problemas** — impactos ambientais e sociais  
- **Produtos** — biodigestor, biogás, biofertilizante e transporte  
- **O que oferecemos** — pilares da solução  
- **Conheça nosso time** — integrantes e redes (LinkedIn / Instagram)  
- **Rodapé** — marca, copyright e créditos (GitHub)

## Estrutura do projeto

| Caminho | Descrição |
|--------|-----------|
| `app/page.tsx` | Página inicial (landing) |
| `app/layout.tsx` | Layout raiz e metadata |
| `app/globals.css` | Estilos globais (equivalente ao antigo `styles.css`) |
| `app/components/RevealOnScroll.tsx` | Efeito reveal ao scroll (client component) |
| `public/` | Imagens estáticas (`fota.jpg`, `1772452217816.jpg`) servidas em `/fota.jpg`, etc. |

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Deploy (Vercel)

Liga o repositório à Vercel: o preset **Next.js** é detetado automaticamente. **Root Directory** = raiz do projeto (onde está o `package.json`). Não é necessário `vercel.json` manual para este setup.

## Fotos do time

Ficheiros em `public/` — URLs na app: `/fota.jpg` e `/1772452217816.jpg`.

## Créditos

Desenvolvimento: **Gabriel Lucas** e **Antonio Kawan** (links no rodapé para o GitHub).

---

© Manivis — Transformando resíduo em riqueza.

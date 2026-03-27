# Manivis

Landing page do projeto **Manivis** — soluções sustentáveis para tratamento e reaproveitamento da manipueira, alinhadas à identidade visual em tons de verde, dourado e tipografia Bebas Neue / DM Sans.

## Conteúdo da página

- **Hero** — mensagem principal e chamada à ação  
- **Manipueira** — contexto sobre o resíduo  
- **Problemas** — impactos ambientais e sociais  
- **Produtos** — biodigestor, biogás, biofertilizante e transporte  
- **O que oferecemos** — pilares da solução  
- **Conheça nosso time** — integrantes com links para redes (LinkedIn e Instagram)  
- **Rodapé** — marca, copyright e créditos de desenvolvimento (GitHub)

## Estrutura do projeto

| Ficheiro    | Descrição                          |
|------------|-------------------------------------|
| `index.html` | Marcação HTML e script de animação ao scroll |
| `styles.css` | Estilos globais, secções e responsividade   |
| `vercel.json` | Configuração de deploy na Vercel (site estático) |

Fontes carregadas via Google Fonts (Bebas Neue, DM Sans).

## Deploy na Vercel

1. Envia este repositório para o GitHub (ou GitLab / Bitbucket).
2. Em [vercel.com](https://vercel.com) → **Add New Project** → importa o repositório.
3. Em **Configure Project**, deixa assim:
   - **Framework Preset:** `Other`
   - **Root Directory:** `.` (raiz), *a menos que* o projeto esteja dentro de uma subpasta — nesse caso escolhe essa pasta (onde está o `index.html`).
   - **Build Command:** *vazio*
   - **Output Directory:** *vazio* (não uses `dist` nem `build` — não há build)
4. **Deploy.**

O ficheiro `vercel.json` indica site estático (`framework: null`) e URLs limpas. Se ainda aparecer **NOT_FOUND**, confirma que o URL é o do deployment ativo e que o **Root Directory** aponta para a pasta que contém `index.html`.

## Como visualizar

Abra `index.html` no navegador (duplo clique ou arrastar o ficheiro para uma janela do browser). Para evitar limitações de alguns recursos em ambiente `file://`, pode usar um servidor estático local, por exemplo:

```bash
npx --yes serve .
```

Depois aceda ao URL indicado no terminal (geralmente `http://localhost:3000`).

## Fotos e redes na secção Time

As fotos estão em `public/` (`fota.jpg`, `1772452217816.jpg`) e são referenciadas em `index.html`. Os links do **LinkedIn** já apontam para os perfis indicados. Os perfis de **Instagram** estão configurados nos respetivos links.

## Créditos

Desenvolvimento: **Gabriel Lucas** e **Antonio Kawan** (links no rodapé para os perfis no GitHub).

---

© Manivis — Transformando resíduo em riqueza.

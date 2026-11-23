# Site — Camile Silva, Psicóloga (CRP-SC 26766)

Site de página única, estático (sem servidor e sem banco de dados).
Hospedagem gratuita no **Cloudflare Pages**, publicando automaticamente a cada
atualização enviada ao GitHub.

## Onde mudar as informações

- **Contato, WhatsApp, Instagram, e-mail, endereço:** `src/lib/site.js`
- **Textos de cada seção:** `src/components/site/` (um arquivo por seção)
- **Logo:** `src/components/site/Logo.jsx`
- **Cores:** `tailwind.config.js`
- **Ícone da aba:** `public/favicon.svg` e `public/apple-touch-icon.png`

## Publicar no Cloudflare Pages (uma vez só)

1. Crie uma conta gratuita em https://dash.cloudflare.com/sign-up
2. No painel: **Workers & Pages → Create → Pages → Connect to Git**.
3. Autorize o GitHub e escolha o repositório do site.
4. Configurações de build:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Clique em **Save and Deploy**. Em 1–2 minutos o site fica no ar num
   endereço `....pages.dev`.

## Ligar o domínio próprio

1. No projeto do Pages: **Custom domains → Set up a custom domain**.
2. Digite o domínio (ex.: `camilesilva.com.br`) e depois repita para `www.`.
3. Siga as instruções da tela:
   - **Mais simples:** mover o domínio para o Cloudflare (trocar os
     "servidores DNS" no Registro.br pelos que o Cloudflare indicar). O
     Cloudflare então configura tudo sozinho.
   - **Ou** manter o DNS onde está e criar o registro **CNAME** que o
     Cloudflare mostrar.
4. O certificado de segurança (HTTPS) é criado automaticamente.
5. Depois, preencha `url` em `src/lib/site.js` com o endereço final.

## Atualizações

Cada envio (commit) para a branch principal do GitHub publica o site
automaticamente.

## Rodar no computador (opcional)

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final em dist/
```

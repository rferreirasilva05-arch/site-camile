// Título, descrição, prévia para redes sociais e dados para o Google.
// Altere os textos em src/lib/site.js; aqui só montamos as tags.
import { images, site } from "@/lib/site";

export const pageTitle = `${site.name} | ${site.role} — ${site.crp}`;
export const pageDescription =
  "Psicóloga Camile Silva (CRP-SC 26766). Um espaço de escuta, acolhimento e transformação. Psicoterapia online e presencial para adolescentes e adultos. Particular e convênios Unimed, SC Saúde e Elo.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: `${site.name} — ${site.role}`,
  description: pageDescription,
  image: images.portrait,
  identifier: site.crp,
  areaServed: "BR",
  ...(site.url ? { url: site.url } : {}),
  sameAs: [site.instagram].filter(Boolean),
  ...(site.whatsappNumber ? { telephone: `+${site.whatsappNumber}` } : {}),
  ...(site.email ? { email: site.email } : {}),
  ...(site.address
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: site.city,
          addressRegion: "SC",
          addressCountry: "BR",
        },
      }
    : {}),
};

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function renderHead() {
  const meta = [
    ["name", "description", pageDescription],
    ["property", "og:type", "website"],
    ["property", "og:locale", "pt_BR"],
    ["property", "og:title", pageTitle],
    ["property", "og:description", pageDescription],
    ["property", "og:image", images.portrait],
    ["name", "twitter:card", "summary_large_image"],
  ];
  return [
    `<title>${esc(pageTitle)}</title>`,
    ...meta.map(([k, n, c]) => `<meta ${k}="${n}" content="${esc(c)}" />`),
    site.url ? `<link rel="canonical" href="${esc(site.url)}" />` : "",
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

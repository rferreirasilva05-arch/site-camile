export const site = {
  name: "Camile Silva",
  role: "Psicóloga",
  crp: "CRP-SC 26766",
  // Apenas dígitos, com DDI + DDD. Ex.: "5548999999999"
  whatsappNumber: "5548988210954",
  whatsappMessage:
    "Olá, Camile! Vim pelo seu site e gostaria de saber mais sobre a psicoterapia.",
  instagram: "https://www.instagram.com/psicologacamilesilva",
  // Endereço do site depois de publicado, ex.: "https://www.camilesilva.com.br"
  url: "https://psicologacamilesilva.com.br",
  email: "",
  // Endereço do consultório (atendimento presencial). Deixe vazio para não exibir.
  address: "",
  city: "",
};

// Número formatado para exibição: 5548988210954 → (48) 98821-0954
export const whatsappDisplay = site.whatsappNumber
  ? site.whatsappNumber.replace(/^55(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3")
  : "";

export const whatsappHref = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "#contato";

export const navLinks = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Como posso ajudar", href: "#ajuda" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const images = {
  hero: "https://media.base44.com/images/public/6afd07e55a9eef5e1a2c971b/7a4aa663d_generated_5a380884.png",
  online: "https://media.base44.com/images/public/6afd07e55a9eef5e1a2c971b/b57d1aab1_generated_9cb806bd.png",
  office: "https://media.base44.com/images/public/6afd07e55a9eef5e1a2c971b/72bcc5d7b_generated_e631dbb9.png",
  portrait:
    "https://media.base44.com/images/public/user_6a765b68f74c4caa8331f5fb/2d56b5478_WhatsAppImage2026-11-17at212915.jpeg",
};
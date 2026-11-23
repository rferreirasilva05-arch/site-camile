import { ArrowUpRight, Instagram, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { site, whatsappDisplay, whatsappHref } from "@/lib/site";

const instagramHandle = site.instagram
  ? `@${site.instagram.replace(/\/+$/, "").split("/").pop()}`
  : "";

export default function Contact() {
  return (
    <section id="contato" className="bg-ink py-[clamp(3.5rem,8vw,7.5rem)] text-mist">
      <div className="mx-auto grid max-w-[72rem] gap-10 px-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel className="text-steel">Vamos conversar</SectionLabel>
            <h2 className="mt-6 font-heading text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.03] tracking-[-0.02em] text-mist">
              Buscar ajuda é um gesto de{" "}
              <em className="italic text-steel">cuidado</em> consigo.
            </h2>
            <p className="mt-6 max-w-md text-haze">
              Buscar ajuda psicológica é uma possibilidade de olhar para suas
              experiências com mais atenção e cuidado. Se você sente que este é
              o momento de cuidar de si, estou à disposição para conversar.
            </p>
            <p className="mt-4 max-w-md text-haze">
              Para informações sobre horários, disponibilidade e agendamento,
              é só me chamar.
            </p>

            {(site.email || site.address) && (
              <ul className="mt-10 space-y-3 text-[0.95rem] text-haze">
                {site.email && (
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-steel" strokeWidth={1.6} />
                    <a href={`mailto:${site.email}`} className="hover:text-mist">
                      {site.email}
                    </a>
                  </li>
                )}
                {site.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-steel" strokeWidth={1.6} />
                    <span>
                      {site.address}
                      {site.city ? ` — ${site.city}` : ""}
                    </span>
                  </li>
                )}
              </ul>
            )}
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl bg-abyss p-6 transition-colors duration-300 hover:bg-[#1F312E] sm:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#8FCBB0]">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.72rem] font-medium uppercase tracking-[0.18em] text-steel">
                    WhatsApp
                  </span>
                  <span className="mt-1.5 block font-heading text-[1.6rem] font-light leading-tight text-mist">
                    {whatsappDisplay || "Falar pelo WhatsApp"}
                  </span>
                  <span className="mt-1 block text-[0.95rem] text-haze">
                    Agendamentos e informações
                  </span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-steel transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>

              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-3xl bg-abyss p-6 transition-colors duration-300 hover:bg-[#1F312E] sm:p-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D8A0BE]/15 text-[#D8A0BE]">
                    <Instagram className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.72rem] font-medium uppercase tracking-[0.18em] text-steel">
                      Instagram
                    </span>
                    <span className="mt-1.5 block break-words font-heading text-[1.6rem] font-light leading-tight text-mist">
                      {instagramHandle}
                    </span>
                    <span className="mt-1 block text-[0.95rem] text-haze">
                      Acompanhe meu perfil
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-steel transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              )}

              <p className="px-2 pt-2 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-steel">
                {site.name} · {site.role} · {site.crp}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

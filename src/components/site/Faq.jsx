import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { whatsappHref } from "@/lib/site";

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um espaço de escuta: conversamos sobre o que te trouxe à terapia, compreendemos suas experiências e necessidades e alinhamos como o acompanhamento pode te ajudar. Também é o momento de tirar dúvidas e sentirmos como será a nossa parceria de trabalho.",
  },
  {
    q: "O atendimento é online ou presencial?",
    a: "As duas modalidades estão disponíveis. A psicoterapia online acontece por videochamada, com privacidade e comodidade. A presencial é realizada em consultório, em ambiente reservado e acolhedor.",
  },
  {
    q: "Você atende por convênio?",
    a: "Sim. Além do atendimento particular, atendo pelos convênios Unimed, SC Saúde e Elo. Para verificar disponibilidade, entre em contato.",
  },
  {
    q: "Para quem é o atendimento?",
    a: "O acompanhamento é voltado a adolescentes e adultos, considerando as demandas e o momento de vida de cada pessoa.",
  },
  {
    q: "O que é dito em sessão é confidencial?",
    a: "Sim. Todo o conteúdo trabalhado em sessão é protegido pelo sigilo profissional, que é um dos fundamentos éticos da Psicologia.",
  },
  {
    q: "Como faço para agendar?",
    a: "É só me chamar pelo WhatsApp. A partir disso combinamos horário, modalidade e as informações necessárias para começarmos.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="bg-mist py-[clamp(3.5rem,8vw,7.5rem)]">
      <div className="mx-auto grid max-w-[72rem] gap-10 px-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel>Dúvidas</SectionLabel>
              <h2 className="mt-6 font-heading text-[clamp(2rem,3.4vw,2.875rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                Antes de{" "}
                <em className="italic text-steel-mid">começar</em>
              </h2>
              <p className="mt-6 max-w-sm text-river">
                Algumas respostas para as perguntas mais comuns. Se a sua dúvida
                não estiver aqui, é só me escrever.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
                <p className="font-heading text-xl font-light leading-snug text-ink">
                  Ficou com alguma dúvida?
                </p>
                <p className="mt-2 text-[0.95rem] text-river">
                  Me escreva — respondo pessoalmente.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full border border-steel/50 px-5 py-3 text-[0.9rem] text-ink transition-colors duration-300 hover:bg-mist"
                >
                  Falar no WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.q} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-heading text-[1.25rem] font-light leading-snug text-ink sm:text-[1.5rem]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-steel/60 text-ink transition-transform duration-300",
                          isOpen && "rotate-45"
                        )}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.25} />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-500 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="min-h-0">
                        <p className="max-w-[60ch] pb-7 text-[1.0625rem] leading-relaxed text-river">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
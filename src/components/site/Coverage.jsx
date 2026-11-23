import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";

const options = ["Particular", "Convênio Unimed", "Convênio SC Saúde", "Convênio Elo"];

export default function Coverage() {
  return (
    <section className="py-[clamp(3.5rem,8vw,7.5rem)]">
      <div className="mx-auto grid max-w-[72rem] gap-10 px-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel>Agendamento</SectionLabel>
              <h2 className="mt-6 font-heading text-[clamp(2rem,3.4vw,2.875rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                Formas de{" "}
                <em className="italic text-steel-mid">atendimento</em>
              </h2>
              <p className="mt-6 max-w-md text-river">
                Para informações sobre horários, disponibilidade e agendamento,
                entre em contato.
              </p>
              <a
                href="#contato"
                className="group mt-8 inline-flex items-center gap-3 border-b border-ink/25 pb-1.5 text-[0.95rem] text-ink transition-colors duration-300 hover:border-ink"
              >
                Entrar em contato
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <ul className="border-t border-line">
              {options.map((option) => (
                <li
                  key={option}
                  className="flex items-center justify-between gap-6 border-b border-line py-6"
                >
                  <span className="font-heading text-[1.375rem] font-light text-ink sm:text-2xl">
                    {option}
                  </span>
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-steel" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
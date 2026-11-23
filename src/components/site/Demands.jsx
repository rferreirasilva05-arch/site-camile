import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { whatsappHref } from "@/lib/site";

const demands = [
  "Ansiedade e dificuldades emocionais",
  "Depressão e sofrimento psíquico",
  "Estresse e esgotamento emocional (burnout)",
  "Transições de carreira e mudanças profissionais",
  "Compulsões e comportamentos prejudiciais",
  "Hábitos que impactam o bem-estar e a qualidade de vida",
  "Dificuldades nos relacionamentos e questões pessoais",
  "Autoconhecimento e desenvolvimento emocional",
];

export default function Demands() {
  return (
    <section id="ajuda" className="py-[clamp(3.5rem,8vw,7.5rem)]">
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel>Como posso ajudar</SectionLabel>
                <h2 className="mt-6 font-heading text-[clamp(2rem,3.4vw,2.875rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                  O acompanhamento{" "}
                  <em className="italic text-steel-mid">psicológico</em>
                </h2>
                <p className="mt-6 max-w-md text-river">
                  Pode contribuir para compreender sentimentos, reconhecer
                  padrões de comportamento e desenvolver maneiras mais saudáveis
                  de lidar com as situações do cotidiano.
                </p>
                <p className="mt-8 text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-quiet">
                  Demandas com as quais trabalho
                  </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                  <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                  <p className="font-heading text-xl font-light leading-snug text-ink">
                    Não encontrou o que sente?
                  </p>
                  <p className="mt-2 text-[0.95rem] text-river">
                    Se a sua questão não estiver nesta lista, podemos conversar
                    sobre ela.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[0.9rem] text-ink transition-colors duration-300 hover:border-ink"
                  >
                    Falar comigo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  </div>
                  </Reveal>
                  </div>
                  </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-line">
              {demands.map((demand, index) => (
                <motion.li
                  key={demand}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline gap-5 border-b border-line py-6 transition-colors duration-300 hover:bg-surface"
                >
                  <span className="w-8 shrink-0 text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-steel transition-colors duration-300 group-hover:text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[1.375rem] font-light leading-snug text-ink sm:text-[1.75rem]">
                    {demand}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Compass, Heart, Repeat } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";

const benefits = [
  {
    icon: Heart,
    title: "Compreender o que você sente",
    text: "Reconhecer as emoções e nomear o que incomoda é o primeiro passo para lidar com isso de uma forma diferente.",
  },
  {
    icon: Repeat,
    title: "Reconhecer padrões",
    text: "Perceber repetições nos relacionamentos e nas escolhas abre espaço para decisões mais conscientes.",
  },
  {
    icon: Compass,
    title: "Construir novos caminhos",
    text: "Desenvolver recursos para atravessar as situações do cotidiano com mais leveza e autonomia.",
  },
];

export default function Benefits() {
  return (
    <section className="py-[clamp(3.25rem,7vw,6rem)]">
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <SectionLabel>Como a psicoterapia pode ajudar</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2rem,3.4vw,2.875rem)] font-light leading-[1.06] tracking-[-0.02em] text-ink">
            O que a psicoterapia pode{" "}
            <em className="italic text-steel-mid">mover</em> em você.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:mt-12 md:grid-cols-3 md:gap-12 md:pt-10">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <item.icon className="h-6 w-6 text-steel-mid" strokeWidth={1.25} />
              <h3 className="mt-5 font-heading text-[1.375rem] font-light leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-river">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
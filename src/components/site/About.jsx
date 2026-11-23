import Image from "@/components/site/Image";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { images, site } from "@/lib/site";

const facts = [
  { value: "20+", label: "anos de experiência em liderança, gestão e desenvolvimento de pessoas" },
  { value: "Clínica", label: "especialização em Psicologia Clínica" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-mist py-[clamp(3.5rem,8vw,7.5rem)]">
      <div className="mx-auto grid max-w-[72rem] gap-10 px-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="mx-auto aspect-[3/4] w-[70%] max-w-[18rem] overflow-hidden rounded-[999px_999px_24px_24px] bg-linen lg:w-[80%] lg:max-w-none">
                <Image
                  src={images.portrait}
                  alt="Camile Silva, psicóloga, sorrindo em retrato de estúdio"
                  className="h-full w-full"
                  fittingType="fit"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto mt-6 w-[70%] max-w-[18rem] rounded-2xl border border-line bg-surface p-5 lg:w-[80%] lg:max-w-none lg:p-6">
                <p className="text-[0.7rem] font-medium uppercase leading-none tracking-[0.18em] text-quiet">
                  Registro profissional
                </p>
                <p className="mt-2 font-heading text-2xl text-ink">{site.crp}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionLabel>Quem sou eu</SectionLabel>
            <h2 className="mt-6 font-heading text-[clamp(2rem,3.4vw,2.875rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              Sobre <em className="italic text-steel-mid">mim</em>
            </h2>

            <div className="mt-8 space-y-5 text-river">
              <p className="font-heading text-2xl font-light leading-snug text-ink">
                Sou Camile Silva, psicóloga, com formação em Psicologia e
                especialização em Psicologia Clínica.
              </p>
              <p>
                Minha trajetória profissional também é marcada por mais de 20
                anos de experiência em liderança, gestão e desenvolvimento de
                pessoas — experiência que ampliou meu olhar sobre as relações
                humanas, os desafios profissionais e os diferentes aspectos que
                atravessam a vida das pessoas.
              </p>
              <p>
                Acredito que cada história merece ser compreendida sem
                julgamentos, respeitando o tempo e as particularidades de cada
                indivíduo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-5 border-b border-line py-5"
                >
                  <dt className="max-w-[14rem] text-[0.72rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-quiet">
                    {fact.label}
                  </dt>
                  <dd className="shrink-0 text-right font-heading text-xl text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
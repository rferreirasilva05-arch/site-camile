import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";

const audiences = [
  {
    numeral: "I",
    title: "Adolescentes",
    text: "Espaço de escuta e acolhimento diante dos desafios emocionais, relacionais, familiares e das transformações dessa fase.",
  },
  {
    numeral: "II",
    title: "Adultos",
    text: "Acompanhamento voltado às questões emocionais, relacionamentos, trabalho, escolhas, mudanças e autoconhecimento.",
  },
];

export default function Audience() {
  return (
    <section className="bg-mist py-[clamp(3.5rem,8vw,7.5rem)]">
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <SectionLabel>Para quem é o atendimento</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Um cuidado que respeita a{" "}
            <em className="italic text-steel-mid">história</em> de cada pessoa.
          </h2>
        </Reveal>

        <div className="mt-14 grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
          {audiences.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.1 * index}
              className={index === 0 ? "py-10 md:py-3 md:pr-12" : "py-10 md:py-3 md:pl-12"}
            >
              <p className="text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-steel">
                {item.numeral}
              </p>
              <h3 className="mt-5 font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-river">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "@/components/site/Image";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { images, whatsappHref } from "@/lib/site";

const modalities = [
  {
    title: "Psicoterapia online",
    text: "Atendimento por videochamada, com privacidade, segurança e comodidade, permitindo o acompanhamento de diferentes lugares.",
    image: images.online,
    alt: "Notebook aberto sobre mesa de madeira, com xícara de cerâmica, caderno e uma pequena planta junto à janela",
    radius: "rounded-[200px_24px_200px_24px]",
    shift: 26,
  },
  {
    title: "Psicoterapia presencial",
    text: "Atendimento em consultório, em ambiente reservado e acolhedor.",
    image: images.office,
    alt: "Consultório com duas poltronas claras frente a frente e luz natural",
    radius: "rounded-[24px_200px_24px_200px]",
    shift: -26,
  },
];

function ModalidadeImage({ src, alt, radius, shift }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [shift, -shift]);

  return (
    <div ref={ref} className={`aspect-[4/5] w-[84%] overflow-hidden sm:w-[76%] ${radius}`}>
      <motion.div
        className="h-full w-full"
        style={reduceMotion ? undefined : { y, scale: 1.08 }}
      >
        <Image
          src={src}
          alt={alt}
          className="h-full w-full transition-transform duration-1000 ease-out hover:scale-[1.03]"
        />
      </motion.div>
    </div>
  );
}

export default function Modalities() {
  return (
    <section
      id="atendimento"
      className="bg-abyss py-[clamp(3.5rem,8vw,7.5rem)] text-mist"
    >
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <SectionLabel className="text-steel">Modalidades de atendimento</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-mist">
            Presença e cuidado,{" "}
            <em className="italic text-steel">onde você estiver</em>.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-14">
          {modalities.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.12 * index}
              className={index === 1 ? "md:mt-16" : ""}
            >
              <ModalidadeImage
                src={item.image}
                alt={item.alt}
                radius={item.radius}
                shift={item.shift}
              />
              <h3 className="mt-8 font-heading text-3xl font-light leading-tight text-mist">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-haze">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-24">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-mist px-8 py-4 text-[0.95rem] text-abyss transition-colors duration-300 hover:bg-white"
            >
              Agendar uma conversa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-steel/60 px-8 py-4 text-[0.95rem] text-mist transition-colors duration-300 hover:bg-steel hover:text-abyss"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
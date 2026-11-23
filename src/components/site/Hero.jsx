import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "@/components/site/Image";
import Reveal from "@/components/site/Reveal";
import { images, site, whatsappHref } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-28 lg:pb-32 lg:pt-40"
    >
      <div className="mx-auto grid max-w-[72rem] items-center gap-10 px-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-steel" />
              <p className="text-[0.75rem] font-medium uppercase leading-none tracking-[0.18em] text-quiet">
                Psicóloga clínica · {site.crp}
              </p>
            </div>

            <h1 className="mt-8 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
              Um espaço de escuta,{" "}
              <em className="italic text-steel-mid">acolhimento</em> e
              transformação.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-river">
              Cuidar da saúde emocional também é aprender a olhar para si,
              compreender suas experiências e encontrar novas possibilidades
              para lidar com os desafios da vida.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C23A20] px-8 py-4 text-[0.95rem] text-white transition-colors duration-300 hover:bg-[#A62F16]"
              >
                Agendar uma conversa
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 self-start rounded-full border border-ink/30 px-7 py-4 text-[0.95rem] text-ink transition-colors duration-300 hover:border-ink hover:bg-mist"
              >
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-10 text-[0.75rem] font-medium uppercase leading-relaxed tracking-[0.18em] text-quiet lg:mt-12">
              Atendimento online e presencial · Adolescentes e adultos
            </p>
          </Reveal>
        </div>

        <motion.div
          className="order-1 mx-auto w-[78%] max-w-[20rem] lg:order-2 lg:col-span-4 lg:w-full lg:max-w-none"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-6 aspect-square w-[88%] rounded-full bg-mist lg:-right-6 lg:-top-8"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_24px_24px]">
              <Image
                src={images.hero}
                alt="Canto de consultório com poltrona clara, cortina de linho e luz natural suave"
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
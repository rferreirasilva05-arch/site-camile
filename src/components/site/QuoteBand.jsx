import Reveal from "@/components/site/Reveal";

export default function QuoteBand() {
  return (
    <section className="border-y border-line py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-heading text-[clamp(1.5rem,2.4vw,2.125rem)] font-light leading-[1.3] tracking-[-0.01em] text-ink">
              “O curioso paradoxo é que, quando me aceito como sou, então posso{" "}
              <em className="italic text-steel-mid">mudar</em>.”
            </blockquote>
            <figcaption className="mt-8 text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-quiet">
              Carl R. Rogers
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
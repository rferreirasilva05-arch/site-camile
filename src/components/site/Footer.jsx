import { navLinks, site } from "@/lib/site";
import { LogoFull } from "@/components/site/Logo";

const partners = ["Particular", "Unimed", "SC Saúde", "Elo"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-river">
      <div className="mx-auto max-w-[72rem] px-[clamp(1.5rem,5vw,4rem)] pb-[calc(env(safe-area-inset-bottom)+3rem)] pt-12 lg:pb-20 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-[#C23A20]">
              Acolhimento e escuta
            </p>
            <LogoFull className="mt-6 h-32 w-auto text-[#D63422] sm:h-36" />
            <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-quiet">
              {site.crp}
            </p>
            <p className="mt-6 max-w-sm font-heading text-xl font-light leading-snug text-ink">
              Cada história merece ser compreendida sem julgamentos.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-[#C23A20]">
              Navegar
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] text-river transition-colors duration-300 hover:text-[#C23A20]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-[0.95rem] text-river transition-colors duration-300 hover:text-[#C23A20]"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-medium uppercase leading-none tracking-[0.18em] text-[#C23A20]">
              Formas de atendimento
            </p>
            <ul className="mt-5 space-y-3">
              {partners.map((partner) => (
                <li key={partner} className="text-[0.95rem] text-river">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 md:mt-14 md:pt-7 text-[0.8125rem] text-quiet sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name} · {site.role} · {site.crp}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
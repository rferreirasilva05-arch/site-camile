import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { LogoFull, LogoMark, LogoWordmarkLine } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import { navLinks, site, whatsappHref } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-colors duration-500",
          scrolled
            ? "border-line bg-[#F7F4F1]/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[72rem] lg:h-24 items-center gap-4 px-[clamp(1.5rem,5vw,4rem)]">
          <a
            href="#inicio"
            aria-label={`${site.name}, ${site.role} — voltar ao início`}
            className="mr-auto flex shrink-0 items-center"
          >
            <LogoFull className="h-14 w-auto text-[#D63422] lg:h-[4.5rem]" />
          </a>

          <nav className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[0.95rem] text-river transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 lg:pl-5 xl:pl-8">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-[#A8577E] transition-colors duration-300 hover:bg-mist sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-[#3E7D5F] transition-colors duration-300 hover:bg-mist sm:inline-flex lg:hidden xl:inline-flex"
            >
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
            </a>
            <a
              href="#contato"
              className="hidden whitespace-nowrap rounded-full bg-[#C23A20] px-6 py-3.5 text-[0.95rem] leading-none text-white transition-colors duration-300 hover:bg-[#A62F16] lg:inline-flex"
            >
              Agendar conversa
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="-mr-2 p-2 text-ink transition-opacity hover:opacity-70 lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto bg-abyss px-6 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-[calc(env(safe-area-inset-top)+1.5rem)] lg:hidden">
          <div className="flex items-center justify-between">
            <span className="flex shrink-0 items-center gap-3">
              <LogoMark className="h-12 w-auto text-[#D0D3CE]" />
              <span className="flex flex-col items-start">
                <LogoWordmarkLine className="h-[1.35rem] w-auto text-[#D0D3CE]" />
                <span className="mt-2 flex items-center gap-2 whitespace-nowrap text-[0.6rem] font-medium uppercase leading-none tracking-[0.14em]">
                  <span className="text-steel">{site.role}</span>
                  <span aria-hidden="true" className="h-px w-3 bg-steel/60" />
                  <span className="text-haze">{site.crp}</span>
                </span>
              </span>
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar menu"
              className="-mr-2 p-2 text-mist transition-opacity hover:opacity-70"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-heading text-[2.25rem] font-light leading-none text-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={close}
              className="font-heading text-[2.25rem] font-light leading-none text-steel"
            >
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            onClick={close}
            className="mt-auto flex items-center justify-center rounded-full bg-mist px-6 py-4 text-[0.95rem] text-ink"
          >
            Agendar conversa
          </a>
        </div>
      )}
    </>
  );
}
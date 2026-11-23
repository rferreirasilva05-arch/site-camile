import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-[#3E7D5F] shadow-[0_10px_26px_-12px_rgba(43,65,80,0.55)] transition-colors duration-300 hover:bg-mist sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-[1.4rem] sm:w-[1.4rem]" />
    </a>
  );
}
import { cn } from "@/lib/utils";

export default function SectionLabel({ children, className = "" }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 text-[0.75rem] font-medium uppercase leading-none tracking-[0.18em] text-quiet",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-10 bg-steel" />
      <span>{children}</span>
    </div>
  );
}
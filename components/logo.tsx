import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="DiGi Trend home">
      <span className="relative grid size-11 place-items-center overflow-hidden rounded-2xl bg-brand-red shadow-[0_10px_35px_rgba(239,51,64,.28)] transition-transform duration-300 group-hover:-rotate-3">
        <span className="absolute -left-1 top-1 h-7 w-7 rounded-full border-[5px] border-white/95" />
        <span className="absolute bottom-1 right-1 h-7 w-7 rounded-full border-[5px] border-brand-navy" />
      </span>
      <span className="leading-none">
        <span className={`block text-xl font-black tracking-[-0.05em] ${inverse ? "text-white" : "text-brand-navy"}`}>DiGi Trend</span>
        <span className={`mt-1 block font-inter text-[9px] font-bold uppercase tracking-[0.22em] ${inverse ? "text-white/55" : "text-slate-500"}`}>Digital. Smart. Trending.</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: { eyebrow?: string; title: ReactNode; description?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <p className={`mb-4 font-heading text-xs font-black uppercase tracking-[0.22em] ${light ? "text-red-300" : "text-brand-red"}`}>{eyebrow}</p>}
      <h2 className={`font-heading text-balance text-3xl font-black leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-brand-navy"}`}>{title}</h2>
      {description && <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg ${light ? "text-white/65" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}

export function PrimaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(239,51,64,.28)] transition hover:-translate-y-0.5 hover:bg-[#d92335] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red ${className}`}>{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>;
}

export function SecondaryButton({ href, children, inverse = false, className = "" }: { href: string; children: ReactNode; inverse?: boolean; className?: string }) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 ${inverse ? "border-white/20 bg-white/10 text-white hover:bg-white/15" : "border-slate-200 bg-white text-brand-navy hover:border-slate-300 hover:shadow-lg"} ${className}`}>{children}</Link>;
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute -left-40 top-16 size-[420px] rounded-full bg-blue-500/15 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 size-[360px] rounded-full bg-brand-red/20 blur-[100px]" />
      <Container className="relative z-10">
        <p className="mb-5 font-heading text-xs font-black uppercase tracking-[0.24em] text-red-300">{eyebrow}</p>
        <h1 className="font-heading max-w-4xl text-balance text-4xl font-black leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/65">{description}</p>
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">{children}</span>;
}

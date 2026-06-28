"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { serviceGroups, services, siteConfig } from "@/data/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-[1320px] rounded-[24px] border border-white/70 bg-white/90 px-4 shadow-[0_12px_40px_rgba(6,20,47,.08)] backdrop-blur-xl lg:px-6">
        <div className="flex h-[76px] items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {nav.map((item) => item.mega ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition ${pathname.startsWith("/services") ? "bg-slate-100 text-brand-red" : "text-slate-700 hover:bg-slate-100 hover:text-brand-navy"}`}>Services <ChevronDown className="size-4 transition-transform group-hover:rotate-180" /></Link>
                <div className="pointer-events-none absolute left-1/2 top-full w-[1050px] -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(6,20,47,.18)]">
                    <div className="grid grid-cols-5 gap-5 p-7">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-4 text-xs font-black uppercase tracking-[.16em] text-brand-red">{group.title}</p>
                          <div className="space-y-2.5">
                            {group.items.map((name) => {
                              const service = services.find((s) => s.title.includes(name) || name.includes(s.shortTitle));
                              return <Link key={name} href={service ? `/services/${service.slug}` : "/services"} className="block text-sm font-semibold text-slate-600 transition hover:translate-x-1 hover:text-brand-navy">{name}</Link>;
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/book-demo" className="flex items-center justify-between bg-brand-navy px-7 py-5 text-sm font-bold text-white transition hover:bg-[#0a1b3c]"><span>Not sure what your business needs?</span><span className="text-red-300">Get a free brand audit →</span></Link>
                  </div>
                </div>
              </div>
            ) : <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-bold transition ${pathname === item.href ? "bg-slate-100 text-brand-red" : "text-slate-700 hover:bg-slate-100 hover:text-brand-navy"}`}>{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-slate-200 text-brand-navy transition hover:border-green-200 hover:bg-green-50 hover:text-green-600" aria-label="Chat on WhatsApp"><MessageCircle className="size-5" /></a>
            <Link href="/book-demo" className="rounded-full bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(239,51,64,.25)] transition hover:-translate-y-0.5 hover:bg-[#d92335]">Book Free Consultation</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-slate-200 text-brand-navy lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="border-t border-slate-100 pb-5 pt-3 lg:hidden">
            <div className="space-y-1">
              {nav.map((item) => item.mega ? (
                <div key={item.href}>
                  <button onClick={() => setServiceOpen(!serviceOpen)} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-bold text-brand-navy">Services <ChevronDown className={`size-4 transition ${serviceOpen ? "rotate-180" : ""}`} /></button>
                  {serviceOpen && <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-3">{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="rounded-xl bg-white px-3 py-3 text-sm font-semibold text-slate-700">{s.shortTitle}</Link>)}</div>}
                </div>
              ) : <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-bold text-brand-navy">{item.label}</Link>)}
            </div>
            <Link href="/book-demo" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-brand-red px-5 py-3.5 text-center text-sm font-extrabold text-white">Book Free Consultation</Link>
          </div>
        )}
      </div>
    </header>
  );
}

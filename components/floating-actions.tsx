import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-green-500 text-white shadow-[0_16px_35px_rgba(34,197,94,.35)] transition hover:-translate-y-1 hover:bg-green-600 lg:grid" aria-label="WhatsApp DiGi Trend"><MessageCircle /></a>
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-[0_16px_45px_rgba(6,20,47,.2)] backdrop-blur lg:hidden">
        <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] font-bold text-green-600"><MessageCircle className="size-5" />WhatsApp</a>
        <a href={`tel:${siteConfig.phone}`} className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] font-bold text-brand-navy"><Phone className="size-5" />Call</a>
        <Link href="/book-demo" className="flex flex-col items-center gap-1 rounded-xl bg-brand-red px-2 py-2 text-[10px] font-bold text-white"><CalendarCheck className="size-5" />Book</Link>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-slate-200 border-y border-slate-200">{items.map((item,index)=><div key={item.q}><button onClick={()=>setOpen(open===index?-1:index)} className="flex w-full items-center justify-between gap-5 py-6 text-left" aria-expanded={open===index}><span className="text-base font-extrabold text-brand-navy sm:text-lg">{item.q}</span><span className={`grid size-9 shrink-0 place-items-center rounded-full border border-slate-200 transition ${open===index?"rotate-45 bg-brand-red text-white":"bg-white text-brand-navy"}`}><Plus className="size-4"/></span></button><div className={`grid transition-all duration-300 ${open===index?"grid-rows-[1fr] pb-6":"grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="max-w-3xl pr-12 text-sm leading-7 text-slate-600 sm:text-base">{item.a}</p></div></div></div>)}</div>;
}

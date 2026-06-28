"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const seen = sessionStorage.getItem("digi-lead-popup");
    if (seen) return;
    const timer = window.setTimeout(() => setOpen(true), 18000);
    return () => window.clearTimeout(timer);
  }, []);
  function close() { sessionStorage.setItem("digi-lead-popup", "1"); setOpen(false); }
  if (!open) return null;
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-brand-navy/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Free brand audit"><div className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-[32px] bg-white p-6 shadow-2xl sm:p-8"><button onClick={close} className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-slate-100 text-brand-navy" aria-label="Close popup"><X className="size-5"/></button><p className="text-xs font-black uppercase tracking-[.18em] text-brand-red">Free brand audit</p><h2 className="font-heading mt-3 pr-10 text-3xl font-black leading-none tracking-[-.05em] text-brand-navy">What is stopping your brand from looking premium?</h2><p className="mt-4 text-sm leading-6 text-slate-600">Share your details and start with a focused consultation.</p><div className="mt-6"><LeadForm compact /></div></div></div>;
}

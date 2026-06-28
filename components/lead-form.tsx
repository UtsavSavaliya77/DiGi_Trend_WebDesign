"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { services, siteConfig } from "@/data/site";

type Props = { variant?: "contact" | "demo"; compact?: boolean };

export function LeadForm({ variant = "contact", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="rounded-[28px] border border-green-200 bg-green-50 p-8 text-center"><CheckCircle2 className="mx-auto size-12 text-green-600"/><h3 className="font-heading mt-4 text-2xl font-black tracking-[-.04em] text-brand-navy">Thank you for reaching out.</h3><p className="mt-3 text-sm leading-6 text-slate-600">This frontend demo has captured your form locally. For an immediate response, continue on WhatsApp.</p><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white">Continue on WhatsApp</a></div>;
  return (
    <form onSubmit={submit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <Field label="Name" name="name" required />
      <Field label="Business Name" name="business" required />
      <Field label="Phone Number" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      {variant === "contact" && <Field label="City" name="city" />}
      <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-[.13em] text-slate-500">Service Required</span><select name="service" required className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand-red focus:ring-4 focus:ring-red-50"><option value="">Select a service</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></label>
      {variant === "contact" ? <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-[.13em] text-slate-500">Budget Range</span><select name="budget" className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand-red focus:ring-4 focus:ring-red-50"><option>Not decided</option><option>Below ₹25,000</option><option>₹25,000 – ₹75,000</option><option>₹75,000 – ₹2,00,000</option><option>₹2,00,000+</option></select></label> : <><Field label="Current Website / Instagram" name="link" /><Field label="Preferred Date" name="date" type="date" /><Field label="Preferred Time" name="time" type="time" /></>}
      <label className={`${compact ? "" : "sm:col-span-2"}`}><span className="mb-2 block text-xs font-black uppercase tracking-[.13em] text-slate-500">{variant === "demo" ? "Biggest Business Challenge" : "Message"}</span><textarea name="message" required rows={5} className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-red focus:ring-4 focus:ring-red-50" placeholder="Tell us a little about your goals…" /></label>
      <button type="submit" className={`${compact ? "" : "sm:col-span-2"} inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(239,51,64,.25)] transition hover:-translate-y-0.5 hover:bg-[#d92335]`}><Send className="size-4"/> {variant === "demo" ? "Book Free Consultation" : "Submit Inquiry"}</button>
      <p className={`${compact ? "" : "sm:col-span-2"} text-center text-xs leading-5 text-slate-400`}>Frontend-only form. Connect it to your preferred CRM, email service or API before production.</p>
    </form>
  );
}
function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-[.13em] text-slate-500">{label}</span><input name={name} type={type} required={required} className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand-red focus:ring-4 focus:ring-red-50" /></label>; }

import Link from "next/link";
import { AtSign, Camera, Globe2, MessageCircle, Play } from "lucide-react";
import { Logo } from "@/components/logo";
import { services, siteConfig } from "@/data/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-[#050f24] pb-28 pt-16 text-white lg:pb-0 lg:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">DiGi Trend is a branding and digital growth agency helping businesses build powerful identities through strategy, design, technology and marketing.</p>
            <div className="mt-6 flex gap-2">
              {[{ icon: Camera, href: siteConfig.instagram, label: "Instagram" }, { icon: Globe2, href: "#", label: "Facebook" }, { icon: AtSign, href: "#", label: "LinkedIn" }, { icon: Play, href: "#", label: "YouTube" }, { icon: MessageCircle, href: siteConfig.whatsapp, label: "WhatsApp" }].map(({ icon: Icon, href, label }) => <a key={label} href={href} target={href === "#" ? undefined : "_blank"} rel="noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/10 text-white/65 transition hover:border-brand-red hover:bg-brand-red hover:text-white"><Icon className="size-4" /></a>)}
            </div>
          </div>
          <div><h3 className="font-heading text-sm font-black uppercase tracking-[.18em] text-red-300">Services</h3><ul className="mt-5 space-y-3">{services.slice(0,8).map((s)=><li key={s.slug}><Link href={`/services/${s.slug}`} className="text-sm text-white/55 transition hover:text-white">{s.title}</Link></li>)}</ul></div>
          <div><h3 className="font-heading text-sm font-black uppercase tracking-[.18em] text-red-300">Company</h3><ul className="mt-5 space-y-3">{[["About Us","/about"],["Portfolio","/work"],["Case Studies","/case-studies"],["Pricing","/pricing"],["Insights","/insights"],["Careers","/careers"],["Contact","/contact"]].map(([n,h])=><li key={h}><Link href={h} className="text-sm text-white/55 transition hover:text-white">{n}</Link></li>)}</ul></div>
          <div><h3 className="font-heading text-sm font-black uppercase tracking-[.18em] text-red-300">Contact</h3><div className="mt-5 space-y-4 text-sm leading-6 text-white/55"><p><span className="block text-white">Phone</span><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></p><p><span className="block text-white">Website</span>www.digi-trend.com</p><p><span className="block text-white">Instagram</span>@digi_trend_rajkot</p><p><span className="block text-white">Location</span>{siteConfig.location}</p></div></div>
        </div>
        <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 DiGi Trend. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></div></div>
      </Container>
    </footer>
  );
}

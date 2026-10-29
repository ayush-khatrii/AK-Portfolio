import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/constants";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return <section aria-labelledby="hero-title" className="portfolio-hero flex min-h-svh min-h-dvh flex-col px-5 pb-5 pt-24 sm:px-8 sm:pb-8">
    <div className="flex items-center justify-between gap-4 font-mono text-[10px] text-muted-foreground sm:text-xs">
      <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-lime" />Available for new projects</span>
      <span className="flex items-center gap-1"><MapPin className="size-3" />Based in India</span>
    </div>
    <div className="flex flex-1 flex-col justify-center py-8 sm:py-12">
      <div className="mb-8 flex items-center gap-4"><span aria-hidden="true" className="flex size-14 items-center justify-center border border-primary/40 font-mono text-xl text-primary">AK<span className="text-sm">↗</span></span><div><p className="text-xs text-muted-foreground">Hey, I’m</p><p className="text-2xl font-medium tracking-tight">{aboutContent.name}.</p></div></div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">{aboutContent.role}</p>
      <h1 id="hero-title" className="max-w-[14ch] text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">Ideas into code.<br /><span className="text-lime">Code into impact.</span></h1>
      <div className="mt-7 grid gap-6 sm:grid-cols-1">
        <p className="max-w-[45ch] text-sm leading-6 text-muted-foreground">I build thoughtful web experiences and dependable backend services—turning complex requirements into applications that feel simple to use.</p>
        <div className="flex flex-wrap gap-2"><Button asChild><Link href="/projects">View projects <ArrowUpRight /></Link></Button><Button asChild variant="outline"><a href="/resume-ak.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight /></a></Button></div>
      </div>
    </div>
    <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"><ArrowDown className="size-3" aria-hidden="true" />Around the web</div>
    <SocialLinks />
  </section>;
}

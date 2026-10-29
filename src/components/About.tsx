import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import AboutProfile from "@/components/AboutProfile";
import Reveal from "@/components/Reveal";

export default function About() {
  return <section id="about" className="section-shell">
    <Reveal><SectionHeading title="About Me" /></Reveal>
    <AboutProfile />
    <div className="mt-4 flex flex-wrap items-center justify-start gap-3">
      <Button asChild variant="link" className="px-0"><Link href="/about">Know more about me <ExternalLink /></Link></Button>
      <span className="text-muted-foreground/50">/</span>
      <span className="text-sm text-muted-foreground">Check out my Resume here:</span>
      <Button asChild size="sm" variant="outline"><Link href="https://github.com/ayush-khatrii" target="_blank" rel="noopener noreferrer">Resume <ExternalLink /></Link></Button>
    </div>
  </section>;
}

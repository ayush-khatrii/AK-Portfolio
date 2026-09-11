import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/constants";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "X", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
];

const entrance = "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:fill-mode-both";

const Hero = () => (
  <section aria-labelledby="hero-title" className="relative isolate overflow-hidden px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-16 lg:pt-20">
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-primary),transparent_65%)] opacity-[0.07]" />
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <div className={`${entrance} mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-xs text-muted-foreground sm:mb-9 sm:text-xs`}>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
        {aboutContent.role}
        <span aria-hidden="true" className="mx-1 h-3 w-px bg-border" />
        <span className="inline-flex items-center gap-1"><MapPin className="size-3" aria-hidden="true" />India</span>
      </div>

      <p className={`${entrance} mb-4 text-sm font-medium tracking-tight text-muted-foreground [animation-delay:80ms] sm:text-base`}>
        Hey, I’m <span className="text-foreground">{aboutContent.name}</span><span className="text-primary">.</span>
      </p>
      <h1 id="hero-title" className={`${entrance} tracking-tighter max-w-[18ch] text-balance font-sans md:text-6xl text-3xl font-semibold leading-[1.08]  [animation-delay:140ms]`}>
        I Build things on the internet<br />
      </h1>
      <p className={`${entrance} mt-5 max-w-lg md:max-w-[50ch] text-pretty text-sm leading-7 text-muted-foreground [animation-delay:220ms] sm:text-base sm:leading-8`}>
        Engineering Functional Applications and solid Backend Services
      </p>

      <div className={`${entrance} mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 [animation-delay:300ms] min-[400px]:max-w-none min-[400px]:flex-row sm:mt-9`}>
        <Button asChild size="lg" className="group min-h-12 rounded-xl px-6 text-xs sm:text-sm">
          <Link href="/projects">View projects <ArrowRight className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="min-h-12 rounded-xl px-6 text-xs sm:text-sm">
          <a href="/resume-ak.pdf" download="Ayush-Khatri-Resume.pdf">Download résumé <ArrowDownToLine aria-hidden="true" /></a>
        </Button>
      </div>

      <div className={`${entrance} mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 [animation-delay:380ms]`}>
        <span className="text-xs text-muted-foreground">Find me on</span>
        <ul className="flex items-center gap-1">
          {socials.map(({ name, icon: Icon, url }) => (
            <li key={name}>
              <Button asChild variant="ghost" size="icon" className="size-11 rounded-xl text-muted-foreground hover:text-foreground">
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} title={name}><Icon className="size-4" aria-hidden="true" /></a>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${entrance} mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-border/60 pt-5 [animation-delay:440ms] sm:mt-14 sm:flex-row`}>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:text-xs">
          <span className="text-foreground">My everyday stack</span>
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            {["Next.js", "TypeScript", "Node.js", "PostgreSQL"].map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <Link href="/about" className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          More about me <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;

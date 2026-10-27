import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { aboutContent } from "@/constants";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ayush-khatrii",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ayushkhatrii",
  },
  {
    name: "X",
    icon: FaXTwitter,
    url: "https://x.com/khatri_ayush15",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/ayush.khatrii",
  },
];

const stack = ["Next.js", "TypeScript", "Node.js", "MongoDB"];

const entrance =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:fill-mode-both";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12 lg:pt-6"
    >
      {/* Soft ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        {/* Compact introduction */}
        <div
          className={`${entrance} flex flex-wrap items-center justify-between gap-x-4 gap-y-3`}
        >
          <div className="inline-flex min-h-8 items-center gap-2 rounded-full border border-border/70 bg-muted/30 px-3 py-1.5">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-primary/25 motion-safe:animate-ping" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>

            <span className="text-[10px] font-medium tracking-wide text-muted-foreground sm:text-xs">
              Available for new projects
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            Based in India
          </span>
        </div>

        <div className="pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
          <p
            className={`${entrance} flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground [animation-delay:70ms] sm:text-base`}
          >
            <span>Hey, I’m</span>

            <span className="font-medium text-foreground">
              {aboutContent.name}
              <span className="text-primary">.</span>
            </span>

            <span
              aria-hidden="true"
              className="mx-1 hidden h-px w-8 bg-border sm:block"
            />

            <span className="basis-full text-xs leading-6 sm:basis-auto">
              {aboutContent.role}
            </span>
          </p>

          <h1
            id="hero-title"
            className={`${entrance} mt-5 max-w-[15ch] text-balance text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-foreground [animation-delay:140ms]`}
          >
            Ideas into code.
            <br />
            <span className="text-muted-foreground">
              Code into impact.
            </span>
          </h1>

          <div className="mt-6 flex flex-col gap-7 sm:mt-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <p
              className={`${entrance} max-w-[48ch] text-pretty text-sm leading-7 text-muted-foreground [animation-delay:210ms] sm:text-base sm:leading-8`}
            >
              I build thoughtful web experiences and dependable backend
              services—turning complex requirements into applications
              that feel simple to use.
            </p>

            <div
              className={`${entrance} grid w-full grid-cols-1 gap-3 [animation-delay:280ms] min-[360px]:grid-cols-2 sm:flex sm:w-auto sm:items-center lg:shrink-0`}
            >
              <Button
                asChild
                size="lg"
                className="group min-h-12 w-full gap-3 rounded-xl px-5 text-sm sm:w-auto"
              >
                <Link href="/projects">
                  View projects
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group min-h-12 w-full gap-3 rounded-xl border-border/80 bg-background/50 px-5 text-sm hover:bg-muted sm:w-auto"
              >
                <a
                  href="/resume-ak.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom utility row */}
        <div
          className={`${entrance} flex flex-col gap-5 border-t border-border/70 pt-5 [animation-delay:350ms] sm:flex-row sm:items-center sm:justify-between sm:gap-6`}
        >
          <div className="min-w-0">
            <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Tools I work with
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border/60 bg-muted/25 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground sm:text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <span className="text-xs text-muted-foreground sm:sr-only">
              Around the web
            </span>

            <ul className="flex flex-wrap items-center gap-1">
              {socials.map(({ name, icon: Icon, url }) => (
                <li key={name}>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="size-11 rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} (opens in a new tab)`}
                      title={name}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { aboutContent } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import ShapeWaves from "@/components/ShapeWaves";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-6rem)] flex-col pb-8 sm:pb-6"
    >
      <div className="relative min-h-[200px] flex-1 overflow-hidden ">
        <div
          aria-hidden="true"
          className="hero-system-grid pointer-events-none absolute inset-0"
        />
        <div className="absolute inset-0 opacity-45">
          <ShapeWaves
            text="ak"
            fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
            fontWeight={500}
            textSize={0.7}
            shapes="mixed"
            cellSize={8}
            dotSize={0.75}
            color="#d4ff24"
            hoverColor="#eaff8b"
            backgroundColor="#000"
            speed={1}
            scale={1}
            contrast={1}
            brightness={0}
            flow={0}
            direction={0}
            fade={0.25}
            interactive
            splashRadius={45}
            splashStrength={2}
            glow={0.35}
            intro
            introDuration={2}
            paused={false}
          />
        </div>
      </div>

      <Reveal className="relative grid gap-3 py-4 sm:gap-5 sm:py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
        <div className="min-w-0">
          <div className="space-y-2 sm:space-y-3">
            <Badge
              variant="outline"
              className="gap-2 rounded-full py-1 pl-2 pr-3 font-mono text-[10px] font-normal uppercase tracking-wider text-muted-foreground"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Open to opportunities
            </Badge>

            <h1
              id="hero-title"
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl"
            >
              {aboutContent.name}
              <span className="text-muted-foreground">.</span>
            </h1>

            <p className="text-base font-medium tracking-tight text-foreground/80 sm:text-lg">
              {aboutContent.role}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Button asChild size="sm" className="h-9 gap-1.5 px-4">
                <Link href="/#about">
                  About me <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-9 gap-1.5 px-4 shadow-none"
              >
                <a
                  href="/resume-ak.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="size-3.5" /> Résumé
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-3 max-w-[52ch] text-pretty text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-[15px] sm:leading-7">
            I build thoughtful web experiences and dependable backend services
            that feel simple to use.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 ">
          <SocialLinks variant="icon" />
        </div>
      </Reveal>
    </section>
  );
}

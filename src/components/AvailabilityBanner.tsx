import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AvailabilityBanner = () => (
  <aside aria-labelledby="availability-title" className="relative border-x border-b border-primary/20 bg-primary/[0.04] px-4 py-6 sm:px-8 sm:py-7 lg:px-12">
    <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-primary/60" />
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="max-w-2xl">
        <Badge variant="outline" className="mb-3 gap-2 border-primary/30 bg-background/50 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-foreground">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </Badge>
        <h2 id="availability-title" className="text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Need a website or a developer?
        </h2>
        <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          I build business websites, full-stack apps, dashboards, and custom AI agents that automate everyday work and fit the way your business runs.
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Button asChild>
          <a href="#contact">Start a project <ArrowUpRight /></a>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/projects">View my work <ArrowRight /></Link>
        </Button>
      </div>
    </div>
  </aside>
);

export default AvailabilityBanner;

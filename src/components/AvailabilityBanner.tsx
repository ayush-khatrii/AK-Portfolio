"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/Contact";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AvailabilityBanner = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Sheet open={contactOpen} onOpenChange={setContactOpen}>
      <aside aria-labelledby="availability-title" className="relative border-x border-b border-primary/20 bg-primary/[0.04] px-4 py-6 sm:px-8 sm:py-7 lg:px-12">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-primary/60" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <SheetTrigger asChild>
            <button type="button" className="group max-w-2xl cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Badge variant="outline" className="mb-3 gap-2 border-primary/30 bg-background/50 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-foreground">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </Badge>
              <h2 id="availability-title" className="text-balance text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                Need a website or a developer?
              </h2>
              <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                I build business websites, full-stack apps, dashboards, and custom AI agents that automate everyday work and fit the way your business runs.
              </p>
            </button>
          </SheetTrigger>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <SheetTrigger asChild>
              <Button type="button">
                Start a project <ArrowUpRight />
              </Button>
            </SheetTrigger>
            <Button asChild variant="ghost">
              <Link href="/projects">View my work <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </aside>

      <SheetContent side="right" className="w-full max-w-full overflow-y-auto border-l border-border/40 bg-background px-4 py-6 sm:max-w-xl sm:px-6">
        <SheetHeader className="pr-8 text-left">
          <SheetTitle className="text-balance text-xl font-semibold tracking-tight sm:text-2xl">Start a project</SheetTitle>
          <SheetDescription className="text-pretty leading-relaxed">
            Tell me what you need and how I can reach you. I&apos;ll get back to you as soon as possible.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <ContactForm onSuccess={() => setContactOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AvailabilityBanner;

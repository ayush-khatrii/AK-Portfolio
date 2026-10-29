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
      <aside aria-labelledby="availability-title" className="relative border-t border-solid border-border/60 bg-transparent px-4 py-8 sm:px-8 sm:py-9 lg:px-12">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl text-left">
              <Badge variant="outline" className="mb-3 gap-2 border-primary/30 bg-background/50 font-mono text-xs font-normal uppercase tracking-[0.12em] text-foreground">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </Badge>
              <h2 id="availability-title" className="text-balance text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                Need a website or a developer?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                I build business websites, full-stack apps, dashboards, and custom AI agents that automate everyday work and fit the way your business runs.
              </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-center gap-2">
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
          <SheetTitle className="text-balance text-xl font-semibold tracking-tight sm:text-xl">Start a project</SheetTitle>
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

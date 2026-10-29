"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/Contact";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function AvailabilityBanner() {
  const [contactOpen, setContactOpen] = useState(false);
  return <Sheet open={contactOpen} onOpenChange={setContactOpen}>
    <aside aria-labelledby="availability-title" className="section-shell">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-6">
        <div className="text-left">
          <Badge variant="outline" className="mb-2 gap-2 border-primary/20 bg-primary/5 text-[10px] font-normal text-primary"><span aria-hidden="true" className="size-1 rounded-full bg-primary" />Available for new projects</Badge>
          <h2 id="availability-title" className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">Need a website or a developer?</h2>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">I build business websites, full-stack apps, dashboards, and custom AI agents that automate everyday work and fit the way your business runs.</p>
        </div>
        <div className="flex flex-wrap justify-start gap-3">
          <SheetTrigger asChild><Button>Start a project <ArrowUpRight /></Button></SheetTrigger>
          <Button asChild variant="ghost"><Link href="/projects">View my work <ArrowRight /></Link></Button>
        </div>
      </div>
    </aside>
    <SheetContent data-lenis-prevent side="right" className="w-full max-w-full overflow-y-auto overscroll-contain bg-card px-5 pb-5 pt-14 sm:max-w-xl sm:px-8">
      <SheetHeader className="pr-6 text-left">
        <SheetTitle className="text-3xl font-medium tracking-[-0.04em]">Start a project</SheetTitle>
        <SheetDescription className="!mt-2 text-sm leading-7">Tell me what you need and how I can reach you. I&apos;ll get back to you as soon as possible.</SheetDescription>
      </SheetHeader>
      <div className="mt-5"><ContactForm onSuccess={() => setContactOpen(false)} /></div>
    </SheetContent>
  </Sheet>;
}

"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { galleryImages } from "@/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function InteractiveGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const move = (step: number) => {
    const element = rail.current;
    if (!element) return;
    const child = element.children[Math.max(0, Math.min(galleryImages.length - 1, current + step))] as HTMLElement;
    element.scrollTo({ left: child.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return <div>
    <div className="mb-4 flex flex-wrap items-center justify-start gap-5">
      <p aria-live="polite" aria-atomic="true" className="eyebrow">{String(current + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</p>
      <TooltipProvider><div className="flex gap-2">
        {([{ step: -1, label: "Previous photo", Icon: ArrowLeft }, { step: 1, label: "Next photo", Icon: ArrowRight }]).map(({ step, label, Icon }) => <Tooltip key={step}>
          <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label={label} disabled={step === -1 ? current === 0 : current === galleryImages.length - 1} onClick={() => move(step)}><Icon /></Button></TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>)}
      </div></TooltipProvider>
    </div>
    <div ref={rail} data-lenis-prevent tabIndex={0} role="region" aria-label="Photo gallery" onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
    }} onScroll={() => {
      const element = rail.current;
      if (!element) return;
      const positions = Array.from(element.querySelectorAll("figure")).map(child => Math.abs((child as HTMLElement).offsetLeft - element.scrollLeft));
      setCurrent(positions.indexOf(Math.min(...positions)));
    }} className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:thin] sm:gap-4">
      {galleryImages.map(({ src, alt, title }, index) => <figure key={src} className="group w-[78%] shrink-0 snap-start sm:w-[38%] lg:w-[30%]">
        <a href={src} onClick={event => { event.preventDefault(); opener.current = event.currentTarget; setSelected(index); }} aria-label={`Expand ${title}`} className="relative block overflow-hidden rounded-xl border border-border bg-card">
          <img src={src} alt={alt} loading={index === 0 ? "eager" : "lazy"} className="aspect-[3/4] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground backdrop-blur-md"><Expand className="size-3.5" /></span>
        </a>
        <figcaption className="mt-2.5 flex items-center gap-4 text-sm"><span>{title}</span><span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></figcaption>
      </figure>)}
      <div aria-hidden="true" className="w-[22%] shrink-0 sm:w-[62%] lg:w-[70%]" />
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent data-lenis-prevent onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }} className="max-h-[95dvh] overflow-y-auto bg-card sm:max-w-3xl">
        <DialogTitle>{selected !== null ? galleryImages[selected].title : "Gallery"}</DialogTitle>
        <DialogDescription>{selected !== null ? galleryImages[selected].alt : ""}</DialogDescription>
        {selected !== null && <img src={galleryImages[selected].src} alt={galleryImages[selected].alt} className="max-h-[75dvh] w-full rounded-lg object-contain" />}
      </DialogContent>
    </Dialog>
  </div>;
}

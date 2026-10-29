"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { galleryImages } from "@/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export default function InteractiveGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const move = (step: number) => { const element = rail.current; if (!element) return; const child = element.children[Math.max(0, Math.min(galleryImages.length - 1, current + step))] as HTMLElement; element.scrollTo({ left: child.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); };
  return <div>
    <div className="mb-5 flex items-center justify-between gap-4"><p className="font-mono text-[10px] text-muted-foreground">{String(current + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</p><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous photo" disabled={current === 0} onClick={() => move(-1)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next photo" disabled={current === galleryImages.length - 1} onClick={() => move(1)}><ArrowRight /></Button></div></div>
    <div ref={rail} onScroll={() => { const element = rail.current; if (!element) return; const positions = Array.from(element.children).map(child => Math.abs((child as HTMLElement).offsetLeft - element.scrollLeft)); setCurrent(positions.indexOf(Math.min(...positions))); }} className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin]" aria-label="Photo gallery">
      {galleryImages.map(({ src, alt, title }, index) => <figure key={src} className="group w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[55%]">
        <a href={src} onClick={event => { event.preventDefault(); opener.current = event.currentTarget; setSelected(index); }} aria-label={`Expand ${title}`} className="relative block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-ring"><img src={src} alt={alt} loading={index === 0 ? "eager" : "lazy"} className="aspect-[3/4] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" /><span className="pointer-events-none absolute bottom-3 right-3 text-white drop-shadow-md"><Expand className="size-4" /></span></a>
        <figcaption className="mt-3 flex justify-between text-xs"><span>{title}</span><span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></figcaption>
      </figure>)}
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }} className="max-h-[95dvh] max-w-4xl overflow-y-auto"><DialogTitle>{selected !== null ? galleryImages[selected].title : "Gallery"}</DialogTitle><DialogDescription>{selected !== null ? galleryImages[selected].alt : ""}</DialogDescription>{selected !== null && <img src={galleryImages[selected].src} alt={galleryImages[selected].alt} className="max-h-[75dvh] w-full object-contain" />}</DialogContent></Dialog>
  </div>;
}

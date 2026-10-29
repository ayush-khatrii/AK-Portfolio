"use client";

import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SpotlightCard from "@/components/SpotlightCard";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectItem = (typeof project)[number];

export default function ProjectRepository({ items, headingLevel = "h3" }: { items: ProjectItem[]; headingLevel?: "h2" | "h3" }) {
  return <Accordion type="multiple" className="space-y-2">
    {items.map((item, index) => <AccordionItem key={item.title} value={item.title} className="border-0">
      <SpotlightCard spotlightColor="var(--primary)" intensity={0.035} borderGlow={0.15} proximity={0} flare={false} className="!rounded-xl !p-0" style={{ "--spotlight-card-surface": "var(--card)", "--spotlight-card-border": "var(--border)", "--spotlight-card-shadow": "none" } as React.CSSProperties}>
        <AccordionTrigger headingLevel={headingLevel} className="group gap-4 px-4 py-3 text-left hover:no-underline sm:gap-5 sm:px-5 sm:py-4 [&>svg]:text-muted-foreground">
          <span aria-hidden="true" className="self-start pt-1.5 font-mono text-[10px] text-primary/70">{String(index + 1).padStart(2, "0")}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-medium leading-snug tracking-[-0.025em] transition-colors group-hover:text-primary sm:text-xl">{item.title}</span>
            <span className="mt-1.5 block text-[11px] font-normal leading-5 text-muted-foreground">{item.techStack.slice(0, 3).join(" / ")}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 sm:px-5 sm:pl-[4rem]">
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">{item.desc}</p>
          <ul className="my-3 flex flex-wrap gap-2">{item.techStack.map(tech => <li key={tech}><Badge variant="secondary" className="rounded-md text-[10px] font-normal">{tech}</Badge></li>)}</ul>
          <div className="flex flex-wrap justify-start gap-3">
            {item.liveLink && <Button asChild size="sm"><a href={item.liveLink} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight /></a></Button>}
            {item.githubLink && <Button asChild variant="outline" size="sm"><a href={item.githubLink} target="_blank" rel="noopener noreferrer"><Github />Source</a></Button>}
          </div>
        </AccordionContent>
      </SpotlightCard>
    </AccordionItem>)}
  </Accordion>;
}

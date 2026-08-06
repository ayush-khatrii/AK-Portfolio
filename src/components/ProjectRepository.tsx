"use client";

import { project } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectItem = (typeof project)[number];

const ProjectRepository = ({ items }: { items: ProjectItem[] }) => (
  <Accordion type="multiple" className="border-t border-border/40">
    {items.map((item, index) => (
      <AccordionItem key={`${item.title}-${index}`} value={`project-${index}`} className="border-border/40 transition-colors duration-200 hover:border-primary/40">
        <AccordionTrigger className="group min-h-16 cursor-pointer gap-3 py-3.5 text-left hover:no-underline sm:py-4">
          <div className="grid min-w-0 flex-1 grid-cols-[2rem_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[2.5rem_minmax(11rem,1.2fr)_minmax(13rem,1fr)] sm:gap-4">
            <span className="font-mono text-[10px] text-muted-foreground/60">{String(index + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="text-balance text-base font-medium tracking-tight text-foreground sm:text-lg">{item.title}</h3>
            </div>
            <div className="hidden flex-wrap gap-1 sm:flex">
              {item.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-muted-foreground">{tech}</Badge>
              ))}
              {item.techStack.length > 3 && <Badge variant="outline" className="border-border/40 font-mono text-[10px] font-normal text-muted-foreground">+{item.techStack.length - 3}</Badge>}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-7 pt-2">
          <div className="ml-0 border-l-2 border-primary/30 pl-4 sm:ml-[3.5rem] sm:pl-6">
            <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-foreground/80">{tech}</Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/30 pt-4">
              {item.liveLink && (
                <Button asChild variant="outline" size="sm" className="h-9 border-border/40 bg-background hover:border-primary/40">
                  <a href={item.liveLink} target="_blank" rel="noopener noreferrer"><ExternalLink />Website</a>
                </Button>
              )}
              {item.githubLink && (
                <Button asChild variant="ghost" size="sm" className="h-9">
                  <a href={item.githubLink} target="_blank" rel="noopener noreferrer"><Github />Source</a>
                </Button>
              )}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default ProjectRepository;

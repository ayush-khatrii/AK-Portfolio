"use client";

import { project } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectItem = (typeof project)[number];

const badgeClassName =
  "max-w-full border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-muted-foreground";

const ProjectRepository = ({ items }: { items: ProjectItem[] }) => (
  <Accordion
    type="multiple"
    className="grid grid-cols-1 items-start border-l border-t border-dotted border-border/50 lg:grid-cols-2"
  >
    {items.map((item, index) => (
      <AccordionItem
        key={`${item.title}-${index}`}
        value={`project-${index}`}
        className="overflow-hidden  border border-dashed border-border bg-background/30 transition-colors duration-200 hover:border-primary/40 data-[state=open]:border-primary/40"
      >
        <AccordionTrigger className="group min-h-28 cursor-pointer items-start gap-3 px-4 py-4 text-left hover:bg-muted/30 hover:no-underline sm:px-5">
          <div className="flex min-w-0 flex-1 items-start gap-3 pr-1">
            <span className="mt-1 shrink-0 font-mono text-[10px] text-muted-foreground/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-pretty text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
                {item.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.techStack.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" className={badgeClassName}>
                    {tech}
                  </Badge>
                ))}
                {item.techStack.length > 3 && (
                  <Badge variant="outline" className={badgeClassName}>
                    +{item.techStack.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="border-t border-dotted border-border/40 px-4 pb-5 pt-5 sm:px-5">
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="max-w-full border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-foreground/80"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-dotted border-border/30 pt-4">
              {item.liveLink && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-border/40 hover:border-primary/40"
                >
                  <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    Website
                  </a>
                </Button>
              )}
              {item.githubLink && (
                <Button asChild variant="ghost" size="sm">
                  <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github />
                    Source
                  </a>
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

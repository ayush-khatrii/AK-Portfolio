"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { work } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const badgeClassName =
  "max-w-full border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-muted-foreground";

const Experience = () => (
  <section
    id="experience"
    className="scroll-mt-24 overflow-x-hidden border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
  >
    <SectionHeading title="Work Experience" description="Roles where I turned ideas into reliable products and practical solutions." />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Accordion
        type="multiple"
        className="grid grid-cols-1 items-start border-l border-t border-dotted border-border/50 lg:grid-cols-2"
      >
        {work.map((item, index) => (
          <AccordionItem
            key={`${item.title}-${index}`}
            value={`experience-${index}`}
            className="overflow-hidden border border-dashed border-border bg-background/30 transition-colors duration-200 hover:border-primary/40 data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="group min-h-36 cursor-pointer items-start gap-3 px-4 py-4 text-left hover:bg-muted/30 hover:no-underline sm:px-5">
              <div className="flex min-w-0 flex-1 items-start gap-3 pr-1">
                <span className="mt-1 shrink-0 font-mono text-[10px] text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-pretty text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
                        {item.position}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                        {item.title}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
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
                <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] text-primary sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    date = {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    location = {item.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.content.map((point, pointIndex) => (
                    <li
                      key={`${item.workId || item.title}-${point}-${pointIndex}`}
                      className="relative border-l-2 border-border/40 pl-5 text-pretty text-sm leading-relaxed text-muted-foreground transition-colors before:absolute before:left-2 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-primary hover:border-primary/40 hover:text-foreground/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

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

                <div className="mt-5 border-t border-dotted border-border/30 pt-4">
                  <Button asChild variant="ghost" size="sm" className="text-primary">
                    <Link
                      href={`/work/${item.workId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Know More
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default Experience;

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { work } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const Experience = () => (
  <section id="experience" className="scroll-mt-24 overflow-x-hidden py-12 sm:py-16">
    <SectionHeading index="04" label="Career Log" title="Work Experience" count={`${work.length} ENTRIES`} />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-rail">
      <Accordion type="multiple" className="border-t border-border/40">
        {work.map((item, index) => (
          <AccordionItem key={`${item.title}-${index}`} value={`experience-${index}`} className="border-border/40 transition-colors duration-200 hover:border-primary/40">
            <AccordionTrigger className="group min-h-16 cursor-pointer gap-3 py-3.5 text-left hover:no-underline sm:py-4">
              <div className="grid min-w-0 flex-1 grid-cols-[2rem_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[2.5rem_minmax(13rem,1.2fr)_minmax(13rem,1fr)_auto] sm:gap-4">
                <span className="font-mono text-[10px] text-muted-foreground/60">0{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-balance text-base font-medium tracking-tight sm:text-lg">{item.position}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{item.title}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground sm:hidden">{item.date}</p>
                </div>
                <div className="hidden flex-wrap gap-1 sm:flex">
                  {item.techStack.slice(0, 3).map((tech) => <Badge key={tech} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-muted-foreground">{tech}</Badge>)}
                  {item.techStack.length > 3 && <Badge variant="outline" className="border-border/40 font-mono text-[10px] font-normal text-muted-foreground">+{item.techStack.length - 3}</Badge>}
                </div>
                <span className="hidden whitespace-nowrap font-mono text-[10px] text-muted-foreground sm:block">{item.date}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-7 pt-2">
              <div className="ml-0 border-l-2 border-primary pl-4 sm:ml-[3.5rem] sm:pl-6">
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] text-primary sm:text-xs">
                  <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />date = {item.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="size-3.5" />location = {item.location}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {item.content.map((point, pointIndex) => (
                    <li key={`${item.workId || item.title}-${point}-${pointIndex}`} className="border-l-2 border-border/40 pl-3 text-pretty text-sm leading-relaxed text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground/80">{point}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => <Badge key={tech} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-foreground/80">{tech}</Badge>)}
                </div>
                <div className="mt-6 border-t border-border/30 pt-4">
                  <Button asChild variant="ghost" size="sm" className="h-9 text-primary">
                    <Link href={`/work/${item.workId}`} target="_blank">Know More <ArrowUpRight /></Link>
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

"use client";

import { motion } from "motion/react";
import { Building2, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type EducationItem = {
  id: number;
  date: string;
  course: string;
  institution: string;
  location: string;
  description: string;
};

const EducationTimeline = ({ items }: { items: EducationItem[] }) => (
  <section className="border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Education Timeline" description="The academic foundation that shaped my path into software development." />
    <motion.ol initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative space-y-0">
      <span aria-hidden="true" className="absolute bottom-7 left-[5px] top-7 border-l border-dotted border-border/70" />
      {items.map((item) => (
        <li key={item.id} className="relative border-b border-dotted border-border/50 py-5 pl-8 first:border-t sm:pl-10">
          <span aria-hidden="true" className="absolute left-0 top-7 size-3 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_var(--background)]" />
          <div className="grid gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8">
            <time className="h-fit w-fit border border-border/50 bg-muted/50 px-2 py-1 font-mono text-xs text-foreground sm:text-xs">{item.date}</time>
            <div>
              <h3 className="text-balance text-base font-semibold tracking-tight sm:text-lg">{item.course}</h3>
              <div className="mt-2 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <span className="flex items-center gap-2"><Building2 className="size-3.5 text-primary" />{item.institution}</span>
                <span className="flex items-center gap-2"><MapPin className="size-3.5 text-primary" />{item.location}</span>
              </div>
              <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </motion.ol>
  </section>
);

export default EducationTimeline;
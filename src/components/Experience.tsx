import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, CodeXml, Film, MapPin } from "lucide-react";
import { work } from "@/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";

const roleIcons = {
  "portlinks-india": BriefcaseBusiness,
  "self-employed": CodeXml,
  "freelance-video-editor": Film,
};

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading title="Work Experience" />
      <Accordion type="multiple" className="ml-4 border-l border-border">
        {work.map(item => {
          const id = item.workId ?? item.title;
          const Icon = roleIcons[item.workId as keyof typeof roleIcons] ?? BriefcaseBusiness;
          return (
            <AccordionItem key={id} value={id} className="relative border-0 pb-4 pl-7 last:pb-0 sm:pl-9">
              <span aria-hidden="true" className="absolute -left-4 top-3 flex size-8 items-center justify-center rounded-lg border border-border bg-background text-cobalt ring-4 ring-background dark:text-lime">
                <Icon className="size-4" strokeWidth={1.6} />
              </span>
              <AccordionTrigger className="gap-3 py-3 text-left hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&>svg]:text-muted-foreground">
                <span className="grid min-w-0 flex-1 gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[10px] font-normal leading-5 text-lime">{item.date}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-6 tracking-tight sm:text-base">{item.position}</span>
                    <span className="mt-1 block text-xs font-normal text-foreground">{item.title}</span>
                    <span className="mt-1 flex items-center gap-1.5 text-[11px] font-normal text-muted-foreground"><MapPin aria-hidden="true" className="size-3" />{item.location}</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 sm:pl-[10.5rem]">
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {item.content.map(point => <li key={point} className="flex gap-2"><span aria-hidden="true" className="text-lime">—</span><span>{point}</span></li>)}
                </ul>
                <ul className="my-4 flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                  {item.techStack.map(tech => <li key={tech} className="rounded-md border border-border px-2 py-1">{tech}</li>)}
                </ul>
                {item.workId && <Button asChild variant="outline" size="sm"><Link href={`/work/${item.workId}`}>Work details <ArrowUpRight /></Link></Button>}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

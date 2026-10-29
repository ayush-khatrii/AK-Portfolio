import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowUpRight, Github, FolderCode } from "lucide-react";
type ProjectItem = (typeof project)[number];
export default function ProjectRepository({ items }: { items: ProjectItem[] }) {
  return <Accordion type="multiple" className="border-t border-border">
    {items.map((item, index) => <AccordionItem key={item.title} value={item.title}>
      <AccordionTrigger className="gap-3 text-left hover:no-underline focus-visible:outline-2 focus-visible:outline-ring">
        <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center border border-border text-primary"><FolderCode className="size-4" /></span>
        <span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{item.title}</span><span className="mt-1 block font-mono text-[10px] font-normal text-muted-foreground">{item.techStack.slice(0, 3).join(" / ")}</span></span>
        <span aria-hidden="true" className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
      </AccordionTrigger>
      <AccordionContent className="sm:pl-12">
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">{item.desc}</p>
        <ul className="my-4 flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">{item.techStack.map(tech => <li key={tech} className="rounded-md border border-border px-2 py-1">{tech}</li>)}</ul>
        <div className="flex flex-wrap gap-2">{item.liveLink && <Button asChild size="sm"><a href={item.liveLink} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight /></a></Button>}{item.githubLink && <Button asChild variant="outline" size="sm"><a href={item.githubLink} target="_blank" rel="noopener noreferrer"><Github />Source</a></Button>}</div>
      </AccordionContent>
    </AccordionItem>)}
  </Accordion>;
}

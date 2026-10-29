import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
type ProjectItem = (typeof project)[number];
export default function ProjectRepository({ items }: { items: ProjectItem[] }) {
  return <div className="divide-y divide-border border-y border-border">
    {items.map((item, index) => <article key={`${item.title}-${index}`} className="group grid gap-4 py-6 sm:grid-cols-[2rem_1fr] sm:gap-6">
      <span className="font-mono text-[10px] leading-6 text-cobalt dark:text-lime">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0"><div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-lg font-medium tracking-[-0.035em]">{item.title}</h3><div className="flex flex-wrap gap-2">{item.liveLink && <Button asChild variant="outline" size="sm"><a href={item.liveLink} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight /></a></Button>}{item.githubLink && <Button asChild variant="ghost" size="sm"><a href={item.githubLink} target="_blank" rel="noopener noreferrer"><Github />Source</a></Button>}</div></div>
      <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground">{item.desc}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-muted-foreground">{item.techStack.map(tech => <li key={tech} className="transition-colors group-hover:text-foreground">{tech}</li>)}</ul></div>
    </article>)}
  </div>;
}

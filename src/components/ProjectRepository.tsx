import { project } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectItem = (typeof project)[number];

export default function ProjectRepository({ items }: { items: ProjectItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <Card key={`${item.title}-${index}`} className="group relative flex h-full min-w-0 flex-col gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-none transition-colors duration-300 hover:border-primary/70">
          <CardHeader className="relative flex min-h-36 flex-row items-start justify-between overflow-hidden border-b border-border bg-primary/[0.08] p-6 sm:min-h-44 sm:p-8">
            <span aria-hidden="true" className="absolute -bottom-7 right-3 select-none font-mono text-8xl font-medium tracking-tighter text-primary/15 transition-transform duration-300 motion-safe:group-hover:-translate-y-2">{String(index + 1).padStart(2, "0")}</span>
            <span className="relative rounded-full border border-primary/30 bg-background px-3 py-1 font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            <ArrowUpRight aria-hidden="true" className="relative size-6 text-cobalt dark:text-lime" />
          </CardHeader>
          <CardContent className="flex-1 p-6 sm:p-8">
            <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground">{item.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.techStack.map(tech => <Badge key={tech} variant="secondary" className="max-w-full rounded-md font-mono text-[10px] font-normal">{tech}</Badge>)}
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 border-t border-border px-6 py-4 sm:px-8">
            {item.liveLink && <Button asChild size="sm" className="rounded-full"><a href={item.liveLink} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight /></a></Button>}
            {item.githubLink && <Button asChild variant="ghost" size="sm" className="rounded-full"><a href={item.githubLink} target="_blank" rel="noopener noreferrer"><Github /> Source</a></Button>}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, CodeXml, Film, Layers3, MapPin, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TimelineAnimate } from "@/components/ui/timeline-animate";

export interface ExperienceStep {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  icon: "company" | "code" | "video";
  stack: string[];
  achievement: string;
  href?: string;
  remainingPoints: number;
}

const roleIcons = { company: BriefcaseBusiness, code: CodeXml, video: Film };

function ExperienceCard({ id, company, role, period, location, icon, stack, achievement, href, remainingPoints }: ExperienceStep) {
  const Icon = roleIcons[icon];
  const extraStack = stack.slice(4);
  return <article aria-labelledby={`experience-role-${id}`} className="min-w-0 text-left">
    <header className="flex items-start gap-3">
      <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
        <Icon className="size-[18px]" strokeWidth={1.7} />
      </span>
      <div className="min-w-0">
        <p className="text-xs leading-5 text-muted-foreground">{company}</p>
        <h3 id={`experience-role-${id}`} className="text-base font-medium leading-6 tracking-tight sm:text-lg">
          {href ? <Link href={href} className="transition-colors hover:text-primary">{role}</Link> : role}
        </h3>
      </div>
    </header>
    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] leading-5 text-muted-foreground">
      <p className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-3.5 shrink-0" /><span>{period}</span></p>
      <p className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-3.5 shrink-0" /><span>{location}</span></p>
    </div>
    {stack.length > 0 && <div className="mt-2.5 flex items-start gap-2">
      <Layers3 aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
      <ul aria-label="Technologies" className="flex min-w-0 flex-wrap gap-1.5">
        {stack.slice(0, 4).map(tech => <li key={tech}><Badge variant="secondary" className="rounded-md px-2 py-0.5 text-[10px] font-normal">{tech}</Badge></li>)}
        {extraStack.length > 0 && <li><Badge variant="outline" title={extraStack.join(", ")} aria-label={`${extraStack.length} more technologies: ${extraStack.join(", ")}`} className="rounded-md px-2 py-0.5 text-[10px] font-normal text-muted-foreground">+{extraStack.length}</Badge></li>}
      </ul>
    </div>}
    {achievement && <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
      <Trophy aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-primary/80" /><span>{achievement}</span>
    </p>}
    {href && <div className="mt-1 flex flex-wrap items-center gap-x-3">
      <Button asChild variant="link" size="sm" className="min-h-11 justify-start px-0">
        <Link href={href} aria-label={`View full experience at ${company}`}>View experience <ArrowUpRight className="size-3.5" /></Link>
      </Button>
      {remainingPoints > 0 && <span className="text-[11px] text-muted-foreground">{remainingPoints} more {remainingPoints === 1 ? "point" : "points"}</span>}
    </div>}
  </article>;
}

export default function Process({ data }: { data: ExperienceStep[] }) {
  return <TimelineAnimate data={data.map(step => ({ index: step.id, content: <ExperienceCard {...step} /> }))} />;
}

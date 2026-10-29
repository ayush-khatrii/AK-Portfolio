import { BookOpen, CalendarDays, GraduationCap, MapPin, School } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { TimelineAnimate } from "@/components/ui/timeline-animate";

type EducationItem = {
  id: number;
  date: string;
  course: string;
  institution: string;
  location: string;
  description: string;
};

function EducationCard({ id, date, course, institution, location, description }: EducationItem) {
  const Icon = course.toLowerCase().includes("bachelor") ? GraduationCap : School;

  return (
    <article aria-labelledby={`education-course-${id}`} className="min-w-0 text-left">
      <header className="flex items-start gap-3">
        <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
          <Icon className="size-[18px]" strokeWidth={1.7} />
        </span>
        <div className="min-w-0">
          <p className="text-xs leading-5 text-muted-foreground">{institution}</p>
          <h3 id={`education-course-${id}`} className="text-base font-medium leading-6 tracking-tight sm:text-lg">{course}</h3>
        </div>
      </header>
      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] leading-5 text-muted-foreground">
        <p className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-3.5 shrink-0" /><span>{date}</span></p>
        <p className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-3.5 shrink-0" /><span>{location}</span></p>
      </div>
      <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
        <BookOpen aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-primary/80" /><span>{description}</span>
      </p>
    </article>
  );
}

export default function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <section className="section-shell">
      <Reveal><SectionHeading title="Education Timeline" description="The academic foundation that shaped my path into software development." /></Reveal>
      <TimelineAnimate data={items.map(item => ({
        index: String(item.id).padStart(2, "0"),
        content: <EducationCard {...item} />,
      }))} />
    </section>
  );
}

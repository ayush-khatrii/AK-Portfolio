import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { work } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const generateStaticParams = () =>
  work.flatMap((item) => item.workId ? [{ workId: item.workId }] : []);

const WorkDetailPage = async ({
  params,
}: {
  params: Promise<{ workId: string }>;
}) => {
  const { workId } = await params;
  const item = work.find((entry) => entry.workId === workId);

  if (!item) notFound();

  return (
    <article className="min-h-[70svh] py-10 sm:py-16">
      <Button asChild variant="ghost" size="sm" className="mb-10 h-11 px-0 font-mono text-xs text-muted-foreground hover:bg-transparent hover:text-foreground">
        <Link href="/#experience"><ArrowLeft />Back to experience</Link>
      </Button>

      <header>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:text-xs">Work Experience / {item.workId}</p>
        <h1 className="mt-4 text-balance text-3xl font-medium tracking-[-0.045em] sm:text-5xl">{item.position}</h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">{item.title}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" />{item.date}</span>
          <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{item.location}</span>
        </div>
      </header>

      <Separator className="my-10 bg-border/40 sm:my-12" />

      <section aria-labelledby="work-details-title">
        <h2 id="work-details-title" className="text-xl font-medium tracking-tight sm:text-2xl">Work details</h2>
        <ul className="section-rail mt-6 space-y-5">
          {item.content.map((point, index) => (
            <li key={`${item.workId}-${index}`} className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{point}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="work-stack-title" className="mt-12 sm:mt-14">
        <h2 id="work-stack-title" className="text-xl font-medium tracking-tight sm:text-2xl">Tech Stack/Tools:</h2>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-foreground/80">{tech}</Badge>
          ))}
        </div>
      </section>
    </article>
  );
};

export default WorkDetailPage;

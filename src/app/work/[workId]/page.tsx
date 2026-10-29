import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { work } from "@/constants";
import { Button } from "@/components/ui/button";
export const generateStaticParams = () => work.flatMap(item => item.workId ? [{ workId: item.workId }] : []);
type Props = { params: Promise<{ workId: string }> };
export default function WorkDetailPage({ params }: Props) {
  return <Suspense fallback={<div className="page-shell" role="status" aria-label="Loading work details"><Skeleton className="mb-5 h-9 w-40" /><Skeleton className="h-14 w-3/4" /><Skeleton className="mt-5 h-40 w-full" /></div>}><WorkContent params={params} /></Suspense>;
}
async function WorkContent({ params }: Props) {
  const { workId } = await params;
  const item = work.find(entry => entry.workId === workId);
  if (!item) notFound();
  return <article className="page-shell">
    <Button asChild variant="ghost" size="sm"><Link href="/#experience"><ArrowLeft />Back to experience</Link></Button>
    <header className="border-b border-border pb-5 pt-5"><p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">Work Experience / {item.workId}</p><h1 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">{item.position}</h1><p className="mt-3 text-base text-muted-foreground">{item.title}</p><div className="mt-3 flex flex-wrap gap-4 font-mono text-[10px] text-muted-foreground"><span>{item.date}</span><span>{item.location}</span></div></header>
    <section className="grid gap-4 sm:gap-6 border-b border-border py-6 sm:grid-cols-[10rem_1fr]"><h2 className="text-sm font-medium">Work details</h2><ul className="space-y-2 text-base leading-7 text-muted-foreground">{item.content.map((point, i) => <li key={i} className="flex gap-3"><span aria-hidden="true" className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span><span>{point}</span></li>)}</ul></section>
    <section className="grid gap-4 sm:gap-6 py-6 sm:grid-cols-[8rem_1fr]"><h2 className="text-sm font-medium">Tech Stack/Tools:</h2><ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">{item.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul></section>
  </article>;
}

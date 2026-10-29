import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { work } from "@/constants";
import { Button } from "@/components/ui/button";
export const generateStaticParams = () => work.flatMap(item => item.workId ? [{ workId: item.workId }] : []);
export default async function WorkDetailPage({ params }: { params: Promise<{ workId: string }> }) {
  const { workId } = await params;
  const item = work.find(entry => entry.workId === workId);
  if (!item) notFound();
  return <article className="px-5 py-10 sm:px-8">
    <Button asChild variant="ghost" size="sm"><Link href="/#experience"><ArrowLeft />Back to experience</Link></Button>
    <header className="border-b border-border pb-7 pt-8"><p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-lime">Work Experience / {item.workId}</p><h1 className="max-w-xl text-3xl font-medium tracking-[-0.05em] sm:text-4xl">{item.position}</h1><p className="mt-3 text-base text-muted-foreground">{item.title}</p><div className="mt-5 flex flex-wrap gap-4 font-mono text-[10px] text-muted-foreground"><span>{item.date}</span><span>{item.location}</span></div></header>
    <section className="grid gap-5 border-b border-border py-7 sm:grid-cols-[8rem_1fr]"><h2 className="text-sm font-medium">Work details</h2><ul className="space-y-4 text-sm leading-7 text-muted-foreground">{item.content.map((point, i) => <li key={i} className="flex gap-3"><span aria-hidden="true" className="font-mono text-[10px] text-lime">{String(i + 1).padStart(2, "0")}</span><span>{point}</span></li>)}</ul></section>
    <section className="grid gap-5 py-7 sm:grid-cols-[8rem_1fr]"><h2 className="text-sm font-medium">Tech Stack/Tools:</h2><ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">{item.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul></section>
  </article>;
}

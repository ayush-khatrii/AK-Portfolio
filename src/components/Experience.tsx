import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/constants";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
export default function Experience() {
  return <section id="experience" className="section-shell"><SectionHeading title="Work Experience" /><Timeline entries={work.map(item => ({ id: item.workId ?? item.title, date: item.date, title: item.position, subtitle: item.title, location: item.location, content: <><ul className="space-y-2">{item.content.map(point => <li key={point} className="flex gap-2"><span aria-hidden="true" className="text-cobalt dark:text-lime">—</span><span>{point}</span></li>)}</ul><ul className="my-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px]">{item.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul>{item.workId && <Button asChild variant="outline" size="sm"><Link href={`/work/${item.workId}`}>Work details <ArrowUpRight /></Link></Button>}</> }))} /></section>;
}

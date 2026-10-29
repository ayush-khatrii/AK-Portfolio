import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return <section className="section-shell">
    <Reveal><SectionHeading title="Projects" /></Reveal>
    <ProjectRepository items={project} />
    <div className="mt-5 flex justify-start"><Button asChild variant="link" className="px-0"><Link href="/projects">View all <ArrowRight /></Link></Button></div>
  </section>;
}

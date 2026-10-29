"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => (
  <section className="overflow-x-hidden border-t border-solid border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Projects" description="" />
    <div>
      <ProjectRepository items={project} />
      <div className="mt-4 flex justify-end">
        <Button asChild variant="ghost" className="group h-11 font-mono text-xs">
          <Link href="/projects">View all <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;

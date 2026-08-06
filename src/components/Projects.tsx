"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { project } from "@/constants";
import { Button } from "@/components/ui/button";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => (
  <section className="overflow-x-hidden py-12 sm:py-16">
    <SectionHeading index="06" label="Repository" title="Projects" count={`03 / ${String(project.length).padStart(2, "0")}`} />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <ProjectRepository items={project.slice(0, 3)} />
      <div className="mt-5 flex justify-end">
        <Button asChild variant="ghost" className="group h-11 font-mono text-xs">
          <Link href="/projects">View all <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default Projects;

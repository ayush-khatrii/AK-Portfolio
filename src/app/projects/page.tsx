"use client";

import { motion } from "motion/react";
import { project } from "@/constants";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";

const Page = () => (
  <section className="min-h-[70svh] overflow-x-hidden py-10 sm:py-16">
    <SectionHeading index="01" label="Complete Repository" title="All Projects" count={`${String(project.length).padStart(2, "0")} ENTRIES`} />
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <ProjectRepository items={project} />
    </motion.div>
  </section>
);

export default Page;

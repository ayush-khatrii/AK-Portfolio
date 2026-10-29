"use client";


import { project } from "@/constants";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";

const Page = () => (
  <section className="min-h-[70svh] overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Projects" description="" />
    <div>
      <ProjectRepository items={project} />
    </div>
  </section>
);

export default Page;

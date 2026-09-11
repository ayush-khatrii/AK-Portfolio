"use client";

import { motion } from "motion/react";
import { work } from "@/constants";
import { WorkExperience, type ExperienceItemType } from "@/components/work-experience";
import SectionHeading from "@/components/SectionHeading";


const experiences: ExperienceItemType[] = work.map((item) => ({
  id: item.workId ?? item.title,
  companyName: item.title,
  location: item.location,
  isCurrentEmployer: !item.employmentPeriod.end,
  positions: [{
    id: `${item.workId ?? item.title}-role`,
    title: item.position,
    employmentPeriod: item.employmentPeriod,
    icon: item.icon ? <item.icon /> : undefined,
    description: item.content.map((point) => `- ${point}`).join("\n\n"),
    detailsHref: item.workId ? `/work/${item.workId}` : undefined,
    skills: item.techStack,
    isExpanded: false,
  }],
}));

const Experience = () => (
  <section
    id="experience"
    className="scroll-mt-24 overflow-x-hidden border-t border-border/60 py-8 font-sans sm:py-10"
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" description="" />
      </div>
      <WorkExperience
        className="border-t border-b w-full divide-y divide-border/60 px-4 sm:px-6 lg:px-8"
        experiences={experiences}
      />
    </motion.div>
  </section>
);

export default Experience;

import { work } from "@/constants";
import Process, { type ExperienceStep } from "@/components/shadcn-studio/blocks/timeline-component-07/timeline-component-07";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const experienceSteps: ExperienceStep[] = work.map((item, index) => ({
  id: String(index + 1).padStart(2, "0"),
  company: item.title,
  role: item.position,
  period: item.date,
  location: item.location,
  icon: item.workId === "freelance-video-editor" ? "video" : item.workId === "self-employed" ? "code" : "company",
  stack: item.techStack,
  achievement: item.content[0] ?? "",
  href: item.workId ? `/work/${item.workId}` : undefined,
  remainingPoints: Math.max(0, item.content.length - 1),
}));

export default function Experience() {
  return <section id="experience" className="section-shell">
    <Reveal><SectionHeading title="Work Experience" /></Reveal>
    <Process data={experienceSteps} />
  </section>;
}

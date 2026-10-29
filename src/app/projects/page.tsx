import { project } from "@/constants";
import ProjectRepository from "@/components/ProjectRepository";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
  return <section className="page-shell"><Reveal><SectionHeading as="h1" title="Projects" /></Reveal><ProjectRepository items={project} headingLevel="h2" /></section>;
}

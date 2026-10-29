import SectionHeading from "@/components/SectionHeading";
import AboutProfile from "@/components/AboutProfile";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return <section className="page-shell"><Reveal><SectionHeading as="h1" title="About Me" /></Reveal><AboutProfile /></section>;
}

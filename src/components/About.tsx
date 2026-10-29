import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import AboutProfile from "@/components/AboutProfile";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <SectionHeading title="About Me" description="" />
      <AboutProfile />
      <div className="mt-4">
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button asChild variant="link">
            <Link href="/about">Know more about me <ExternalLink /></Link>
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-muted-foreground">Check out my Resume here:</span>
          <Button asChild size="sm" variant="outline">
            <Link href="https://github.com/ayush-khatrii" target="_blank" rel="noopener noreferrer">Resume <ExternalLink /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

import About from "@/components/About";
import Experience from "@/components/Experience";
import GithubContribution from "@/components/GithubContributionSlot";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div className="h-full">
      <Hero />
      <About />
      <GithubContribution />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default page;

import SectionHeading from "@/components/SectionHeading";
import AboutProfile from "@/components/AboutProfile";

const AboutPage = () => (
  <section className="min-h-auto overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="About Me" description="" />
    <AboutProfile />
  </section>
);

export default AboutPage;
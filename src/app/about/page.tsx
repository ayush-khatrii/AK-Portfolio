import AboutPage from "@/components/AboutPage";
import EducationTimeline from "@/components/EducationTimeline";
import GithubContribution from "@/components/GithubContributionSlot";

const education = [
  {
    id: 1,
    date: "2021 - 2024",
    course: "Bachelor's in Computer Applications",
    institution: "DNV International College",
    location: "Gujarat, India",
    description: "Studied software development and web technologies at DNV International College.",
  },
  {
    id: 2,
    date: "2010 - 2021",
    course: "Primary & Higher Education",
    institution: "Modern School",
    location: "Gujarat, India",
    description: "Completed schooling at Modern School, building a strong academic foundation",
  },
];

const Page = () => (
  <div className="min-w-0">
    <AboutPage />
    <EducationTimeline items={education} />
    <GithubContribution />
  </div>
);

export default Page;

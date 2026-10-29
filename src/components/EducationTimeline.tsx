import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
type EducationItem = { id: number; date: string; course: string; institution: string; location: string; description: string };
export default function EducationTimeline({ items }: { items: EducationItem[] }) {
  return <section className="section-shell"><SectionHeading title="Education Timeline" description="The academic foundation that shaped my path into software development." /><Timeline entries={items.map(item => ({ id: String(item.id), date: item.date, title: item.course, subtitle: item.institution, location: item.location, content: <p>{item.description}</p> }))} /></section>;
}

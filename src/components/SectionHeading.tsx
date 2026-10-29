type Props = { title: string; description?: string };
const numbers: Record<string, string> = { "About Me": "01", "GitHub Graph": "02", "Work Experience": "03", Skills: "04", Projects: "05", "Education Timeline": "06", Gallery: "07", Blogs: "08", "Get in Touch": "09" };
export default function SectionHeading({ title, description }: Props) {
  if (!title && !description) return null;
  return <header className="mb-6">
    {title && <div className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-cobalt dark:text-lime">{numbers[title] ?? "↗"}</span><h2 className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">{title}</h2></div>}
    {description && <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>}
  </header>;
}

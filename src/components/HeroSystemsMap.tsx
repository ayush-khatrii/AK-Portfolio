import { ArrowUpRight, Database, Layers3, Radio, Workflow } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Interface",
    tools: "React / Next.js",
    description: "Fast, considered interfaces people can use with ease.",
    icon: Layers3,
    project: {
      title: "Srcmap",
      description: "Browse GitHub repositories without cloning.",
      href: "https://srcmap.cc",
    },
  },
  {
    number: "02",
    title: "Application logic",
    tools: "Node.js / APIs",
    description: "Business rules, authentication, and integrations.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Data",
    tools: "PostgreSQL / MongoDB",
    description: "Reliable models behind useful products.",
    icon: Database,
    project: {
      title: "LessonMap",
      description: "Build courses and track learning progress.",
      href: "https://lessonmap.vercel.app",
    },
  },
  {
    number: "04",
    title: "Realtime",
    tools: "Ably / Redis",
    description: "Live updates that keep people in sync.",
    icon: Radio,
    project: {
      title: "QChat",
      description: "Room chat with typing and presence.",
      href: "https://github.com/ayush-khatrii/q-chat",
    },
  },
] as const;

export default function HeroSystemsMap() {
  return (
    <div className="hero-system-map relative flex min-h-[300px] flex-1 flex-col overflow-hidden border-b border-line px-5 py-4 sm:px-8">
      <div
        aria-hidden="true"
        className="hero-system-grid pointer-events-none absolute inset-0"
      />
      <div className="relative flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="text-primary">How I build</span>
        <span className="hidden sm:inline">Representative tools / selected work</span>
      </div>

      <div className="relative my-auto py-2 sm:py-3">
        <div className="hero-system-rail" aria-hidden="true" />
        <ol className="relative grid grid-cols-2 gap-2 lg:grid-cols-4">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <li key={stage.number} className="hero-system-stop min-w-0">
                <div className="hero-system-stage flex h-full min-h-40 flex-col rounded-lg border border-border/80 bg-card/90 p-3 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-200 sm:min-h-44 sm:p-4">
                  <div className="mb-2 flex items-center justify-between text-muted-foreground sm:mb-4">
                    <span className="font-mono text-[10px] tracking-widest">
                      {stage.number} / 04
                    </span>
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {stage.title}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-primary/85">
                    {stage.tools}
                  </p>
                  <p className={`mt-2 text-xs leading-5 text-muted-foreground sm:mt-3 ${"project" in stage ? "hidden sm:block" : ""}`}>
                    {stage.description}
                  </p>
                  {"project" in stage && (
                    <a
                      className="hero-system-project mt-auto flex items-start justify-between gap-2 border-t border-border/80 pt-2 text-xs text-foreground transition-colors hover:text-primary focus-visible:text-primary sm:pt-3"
                      href={stage.project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${stage.project.title}: ${stage.project.description} (opens in a new tab)`}
                    >
                      <span className="min-w-0">
                        <span className="block font-medium">
                          {stage.project.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-4 text-muted-foreground">
                          {stage.project.description}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative flex items-center justify-between gap-3 font-mono text-[10px] text-muted-foreground">
        <span>From idea to working product</span>
        <span className="hidden sm:inline">UI → logic → data → live</span>
      </div>
    </div>
  );
}

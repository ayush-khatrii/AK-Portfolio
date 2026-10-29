import type { ReactNode } from "react";

type Entry = { id: string; date: string; title: string; subtitle: string; location?: string; content: ReactNode };

export default function Timeline({ entries }: { entries: Entry[] }) {
  return <ol className="relative ml-1 border-l border-border">
    {entries.map((entry, index) => <li key={entry.id} className="relative pb-5 pl-7 last:pb-0 sm:pl-12">
      <span aria-hidden="true" className={`absolute -left-1 top-2 size-2 rounded-full ring-8 ring-background ${index === 0 ? "bg-primary" : "border border-muted-foreground bg-background"}`} />
      <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
        <p className="pt-0.5 font-mono text-[10px] leading-6 text-primary/80">{entry.date}</p>
        <div className="min-w-0"><h3 className="text-lg font-medium leading-7 tracking-tight sm:text-xl">{entry.title}</h3>
          <p className="mt-1 text-sm">{entry.subtitle}</p>
          {entry.location && <p className="mt-1.5 text-xs text-muted-foreground">{entry.location}</p>}
          <div className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{entry.content}</div>
        </div>
      </div>
    </li>)}
  </ol>;
}

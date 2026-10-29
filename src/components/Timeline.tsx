import type { ReactNode } from "react";

type Entry = { id: string; date: string; title: string; subtitle: string; location?: string; content: ReactNode };
export default function Timeline({ entries }: { entries: Entry[] }) {
  return <ol className="relative ml-2 border-l border-border">
    {entries.map((entry, index) => <li key={entry.id} className="relative pb-8 pl-6 last:pb-0 sm:pl-8">
      <span aria-hidden="true" className={`absolute -left-[5px] top-1.5 size-[9px] rounded-full ring-4 ring-background ${index === 0 ? "bg-cobalt dark:bg-lime" : "border border-muted-foreground bg-background"}`} />
      <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
        <p className="pt-0.5 font-mono text-[10px] leading-5 text-cobalt dark:text-lime">{entry.date}</p>
        <div className="min-w-0"><h3 className="text-sm font-medium leading-6 tracking-tight sm:text-base">{entry.title}</h3><p className="mt-1 text-xs text-foreground">{entry.subtitle}</p>{entry.location && <p className="mt-1 text-[11px] text-muted-foreground">{entry.location}</p>}<div className="mt-3 text-sm leading-6 text-muted-foreground">{entry.content}</div></div>
      </div>
    </li>)}
  </ol>;
}

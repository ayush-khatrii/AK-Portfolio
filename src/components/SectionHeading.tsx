import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  count?: string;
};

const SectionHeading = ({ index, label, title, count }: SectionHeadingProps) => (
  <header className="mb-5 text-center sm:mb-6">
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px min-w-2 flex-1 border-t border-dotted border-border/60" />
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
        <span>{index} / {label}</span>
        {count && (
          <Badge variant="outline" className="border-border/50 bg-background font-mono text-[10px] font-normal text-muted-foreground">
            {count}
          </Badge>
        )}
      </div>
      <span aria-hidden="true" className="h-px min-w-2 flex-1 border-t border-dotted border-border/60" />
    </div>
    <h2 className="mt-3 text-balance text-2xl font-medium tracking-[-0.04em] sm:text-3xl">{title}</h2>
  </header>
);

export default SectionHeading;

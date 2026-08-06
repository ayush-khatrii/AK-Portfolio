import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  count?: string;
};

const SectionHeading = ({ index, label, title, count }: SectionHeadingProps) => (
  <header className="mb-6 sm:mb-8">
    <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
      <span>{index} / {label}</span>
      {count && <Badge variant="outline" className="border-border/40 font-mono text-[10px] font-normal text-muted-foreground">{count}</Badge>}
    </div>
    <Separator className="mb-5 bg-border/40" />
    <h2 className="text-balance text-2xl font-medium tracking-[-0.035em] sm:text-4xl">{title}</h2>
  </header>
);

export default SectionHeading;

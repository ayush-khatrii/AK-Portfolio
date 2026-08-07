type SectionHeadingProps = {
  title: string;
  description: string;
};

const SectionHeading = ({ title, description }: SectionHeadingProps) => (
  <header className="mb-5 text-center sm:mb-6">
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px min-w-2 flex-1 border-t border-dotted border-border/60" />
      <h2 className="text-balance text-2xl font-medium tracking-[-0.04em] sm:text-3xl">{title}</h2>
      <span aria-hidden="true" className="h-px min-w-2 flex-1 border-t border-dotted border-border/60" />
    </div>
    <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
      {description}
    </p>
  </header>
);

export default SectionHeading;

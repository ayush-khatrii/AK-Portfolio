type SectionHeadingProps = { title: string; description?: string };

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  if (!title && !description) return null;
  return (
    <header className="mb-8 sm:mb-12">
      {title && <div className="flex items-center gap-4"><span aria-hidden="true" className="h-7 w-1 rounded-full bg-cobalt dark:bg-lime" /><h2 className="text-balance text-3xl font-medium tracking-[-0.045em] sm:text-4xl lg:text-5xl">{title}</h2></div>}
      {description && <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>}
    </header>
  );
}

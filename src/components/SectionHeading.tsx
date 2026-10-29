type Props = { title: string; description?: string };
export default function SectionHeading({ title, description }: Props) {
  if (!title && !description) return null;
  return <header className="mb-6"><div className="flex items-center gap-3"><span aria-hidden="true" className="size-1.5 bg-primary" /><h2 className="text-lg font-semibold tracking-tight">{title}</h2><span aria-hidden="true" className="h-px flex-1 bg-border" /></div>{description && <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>}</header>;
}

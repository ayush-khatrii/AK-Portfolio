import type { ElementType, ReactNode } from "react";
type Props = {
  title: string;
  description?: string;
  as?: "h1" | "h2";
  meta?: ReactNode;
};
export default function SectionHeading({
  title,
  description,
  as = "h2",
  meta,
}: Props) {
  if (!title && !description) return null;
  const Heading: ElementType = as;
  return (
    <header className="mb-[var(--heading-space)] text-left">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Heading
          className={
            as === "h1"
              ? "text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl"
              : "section-title"
          }
        >
          {title}
          <span aria-hidden="true" className="text-primary">
            .
          </span>
        </Heading>
        {meta != null && (
          <span className="text-xs font-normal text-muted-foreground">{meta}</span>
        )}
      </div>
      {description && <p className="body-copy mt-2 max-w-xl">{description}</p>}
    </header>
  );
}

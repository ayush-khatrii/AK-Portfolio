import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ScalesProps {
  orientation?: "horizontal" | "vertical" | "diagonal";
  size?: number;
  className?: string;
  color?: string;
}

export const Scales = ({
  orientation = "diagonal",
  size = 10,
  className,
  color,
}: ScalesProps) => {
  const angle = orientation === "horizontal" ? "0deg" : orientation === "vertical" ? "90deg" : "315deg";

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 size-full overflow-hidden", className)}
      style={{
        "--scales-size": `${size}px`,
        "--scales-angle": angle,
        "--pattern-scales": color ?? "var(--border)",
      } as CSSProperties}
    >
      <div
        className="size-full bg-[repeating-linear-gradient(var(--scales-angle),var(--pattern-scales)_0,var(--pattern-scales)_1px,transparent_0,transparent_50%)]"
        style={{ backgroundSize: "var(--scales-size) var(--scales-size)" }}
      />
    </div>
  );
};

export const ScalesContainer = ({
  children,
  className,
  ...props
}: ScalesProps & { children?: ReactNode }) => (
  <div className={cn("relative", className)}>
    <Scales {...props} />
    <div className="relative z-10">{children}</div>
  </div>
);

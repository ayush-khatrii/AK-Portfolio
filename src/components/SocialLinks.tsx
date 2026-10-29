import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

export type Social = {
  name: string;
  icon: Icon;
  url: string;
  handle?: string;
};

export const socials: Social[] = [
  {
    name: "GitHub",
    icon: Github as Icon,
    url: "https://github.com/ayush-khatrii",
    handle: "@ayush-khatrii",
  },
  {
    name: "LinkedIn",
    icon: Linkedin as Icon,
    url: "https://www.linkedin.com/in/ayushkhatrii",
    handle: "in/ayushkhatrii",
  },
  {
    name: "Twitter",
    icon: FaXTwitter as Icon,
    url: "https://x.com/khatri_ayush15",
    handle: "@khatri_ayush15",
  },
  {
    name: "Instagram",
    icon: Instagram as Icon,
    url: "https://www.instagram.com/ayush.khatrii",
    handle: "@ayush.khatrii",
  },
  {
    name: "Email",
    icon: ArrowUpRight as Icon,
    url: "mailto:ayushkhatri.dev@gmail.com",
  },
];

const BUTTON_VARIANTS = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

type Props = {
  variant?: "grid" | "inline" | "icon";
  items?: Social[];
  /**
   * Background of every link: either a Button variant name ("outline",
   * "default", "secondary", "ghost", "link") or any CSS color ("#d4ff24").
   */
  backgroundColor?: ButtonVariant | (string & {});
  /** Show the handle under the name (grid variant only) */
  showHandle?: boolean;
  className?: string;
};

const rel = "noopener noreferrer";

export default function SocialLinks({
  variant = "grid",
  backgroundColor = "outline",
  items = socials,
  showHandle = false,
  className,
}: Props) {
  const tone = backgroundColor.trim() || "outline";
  const isNamedTone = (BUTTON_VARIANTS as readonly string[]).includes(tone);
  const buttonVariant = (isNamedTone ? tone : "outline") as ButtonVariant;
  const customBackground = isNamedTone ? undefined : tone;
  const customStyle = customBackground
    ? { backgroundColor: customBackground }
    : undefined;

  const isOutline = buttonVariant === "outline" && !customBackground;
  const accentFill = isOutline ? "hover:bg-accent press:bg-accent" : "";
  const accentBorder = isOutline
    ? "hover:border-foreground/30 press:border-foreground/30"
    : "";

  if (variant === "icon") {
    return (
      <TooltipProvider delayDuration={100}>
        <ul
          className={cn("flex flex-wrap items-center gap-1.5", className)}
          aria-label="Social links"
        >
          {items.map(({ name, icon: Icon, url }) => (
            <li key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant={buttonVariant}
                    size="icon"
                    style={customStyle}
                    className={cn(
                      "size-8 shadow-none transition-all hover:-translate-y-px",
                      accentFill,
                    )}
                  >
                    <a href={url} target="_blank" rel={rel} aria-label={name}>
                      <Icon aria-hidden="true" className="size-3.5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {name}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    );
  }

  const isGrid = variant === "grid";

  return (
    <ul
      aria-label="Social links"
      className={cn(
        isGrid
          ? "grid grid-cols-2 gap-2 sm:grid-cols-4"
          : "flex flex-wrap items-center gap-1.5",
        className,
      )}
    >
      {items.map(({ name, icon: Icon, url, handle }) => (
        <li key={name} className="min-w-0">
          <Button
            asChild
            variant={buttonVariant}
            size={isGrid ? "default" : "sm"}
            style={customStyle}
            className={cn(
              "group/social shadow-none transition-all hover:-translate-y-px",
              accentBorder,
              accentFill,
              isGrid
                ? "h-auto w-full justify-start gap-2.5 px-3 py-2.5"
                : "h-8 gap-1.5 px-3 text-xs",
            )}
          >
            <a
              href={url}
              target="_blank"
              rel={rel}
              aria-label={`${name} (opens in a new tab)`}
            >
              <Icon
                aria-hidden="true"
                className={cn("shrink-0", isGrid ? "size-4" : "size-3.5")}
              />
              <span className="flex min-w-0 flex-1 flex-col items-start text-left leading-tight">
                <span className="truncate text-sm font-medium">{name}</span>
                {isGrid && showHandle && handle && (
                  <span className="mt-0.5 w-full truncate font-mono text-[10px] font-normal text-muted-foreground">
                    {handle}
                  </span>
                )}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 text-muted-foreground opacity-60 transition-all group-hover/social:text-foreground group-hover/social:opacity-100 group-active/social:text-foreground group-active/social:opacity-100 motion-safe:group-hover/social:-translate-y-0.5 motion-safe:group-hover/social:translate-x-0.5"
              />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}

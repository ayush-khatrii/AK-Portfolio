import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform,scale] duration-[120ms] motion-safe:press:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 press:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 press:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary press:border-primary/40 press:bg-primary/5 press:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 press:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-primary press:bg-muted press:text-primary",
        link: "text-primary underline-offset-4 hover:underline press:underline",
      },
      size: {
        xs: "h-6 px-2",
        roundedSm: "h-8 rounded-full px-2.5 py-1.5 text-xs",
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md gap-2 px-3.5 text-xs",
        lg: "h-12 rounded-md px-6",
        icon: "size-11",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

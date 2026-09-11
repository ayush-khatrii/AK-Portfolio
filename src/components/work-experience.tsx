"use client"

import { useCallback, useRef, useState, type ComponentProps, type ComponentType, type SVGProps } from "react"
import { differenceInMonths, format, parse } from "date-fns"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import type { ChevronsUpDownIconHandle } from "@/components/chevrons-up-down-icon"
import { ChevronsUpDownIcon } from "@/components/chevrons-up-down-icon"
import { ArrowUpRight, BriefcaseBusinessIcon, InfinityIcon, Film, Sparkles, Palette, ListOrdered } from "lucide-react"
import {
  NextjsIcon, NodejsIcon, Python, Socketio, RedisIcon, MongodbIcon,
  Flask, TailwindIcon, _React as ReactIcon, VercelIcon, Git,
} from "@dev.icons/react/mono"
import { SiRazorpay, SiDavinciresolve } from "react-icons/si"
import { DiPhotoshop } from "react-icons/di"

const experienceSkillIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Next.js": NextjsIcon,
  "Node.js": NodejsIcon,
  Python,
  "Socket.IO": Socketio,
  Redis: RedisIcon,
  BullMQ: ListOrdered,
  MongoDB: MongodbIcon,
  Flask,
  "Tailwind CSS": TailwindIcon,
  React: ReactIcon,
  Razorpay: SiRazorpay,
  Vercel: VercelIcon,
  Git,
  "Adobe Premiere Pro": Film,
  "After Effects": Sparkles,
  Photoshop: DiPhotoshop,
  Canva: Palette,
  "DaVinci Resolve": SiDavinciresolve,
}

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string
  /** The job title or position name */
  title: string
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string
  detailsHref?: string
  /** A brief description of the position or responsibilities */
  description?: string
  /** An icon representing the position */
  icon?: React.ReactElement
  /** A list of skills associated with the position */
  skills?: string[]
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean
}

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string
  /** Name of the company where the experience was gained */
  companyName: string
  location?: string
  /** URL or path to the company's logo image */
  companyLogo?: string
  /** URL to the company's website. */
  companyWebsite?: string
  /**
   * List of positions held at the company
   * @fumadocsHref #experiencepositionitemtype
   * */
  positions: ExperiencePositionItemType[]
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean
}

export type WorkExperienceProps = {
  className?: string
  /** @fumadocsHref #experienceitemtype */
  experiences: ExperienceItemType[]
}

export function WorkExperience({
  className,
  experiences,
}: WorkExperienceProps) {
  return (
    <div className={cn("bg-background px-4 text-foreground", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  )
}

export type ExperienceItemProps = {
  experience: ExperienceItemType
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex flex-wrap items-center gap-x-3 gap-y-1">
        <div className="flex size-6 shrink-0 items-center justify-center">
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.companyName}
              className="size-6 rounded-full"
              aria-hidden
            />
          ) : (
            <span className="flex size-6 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground" aria-hidden>{experience.companyName.split(/\s+/).map((word) => word[0]).slice(0, 2).join("")}</span>
          )}
        </div>

        <h3 className="min-w-0 flex-1 text-lg leading-snug font-medium tracking-tight max-sm:text-base">
          {experience.companyWebsite ? (
            <a
              className="link"
              href={experience.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.location && (
          <span className="order-last w-full pl-9 text-xs text-muted-foreground sm:order-none sm:w-auto sm:pl-0 sm:text-sm">
            {experience.location}
          </span>
        )}

        {experience.isCurrentEmployer && (
          <span
            className="flex size-2 shrink-0 items-center justify-center"
            aria-label="Current Employer"
          >
            <span className="relative inline-flex size-1.5 rounded-full bg-sky-500" />
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}

export type ExperiencePositionItemProps = {
  position: ExperiencePositionItemType
}

export function ExperiencePositionItem({
  position,
}: ExperiencePositionItemProps) {
  const [isOpen, setIsOpen] = useState(position.isExpanded ?? false)
  const chevronsUpDownIconRef = useRef<ChevronsUpDownIconHandle>(null)

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open)
    const controls = chevronsUpDownIconRef.current
    if (!controls) return

    if (open) {
      controls.startAnimation()
    } else {
      controls.stopAnimation()
    }
  }, [])

  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const duration = formatDuration(start, end)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={handleOpenChange}
      disabled={!position.description && !position.detailsHref}
      asChild
    >
      <div className="group/experience-position relative before:pointer-events-none before:absolute before:bottom-2 before:left-3 before:top-6 before:w-4 before:rounded-bl-md before:border-b before:border-l before:border-border">
        <CollapsibleTrigger
          className={cn(
            "group not-prose block w-full cursor-pointer text-left select-none disabled:cursor-default",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/30",
            "data-disabled:before:content-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-lg max-sm:size-5 max-sm:rounded-md",
                "bg-muted text-muted-foreground",
                "border border-muted-foreground/15 ring-1 ring-border ring-offset-1 ring-offset-background",
                "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              )}
            >
              {position.icon ?? (
                <BriefcaseBusinessIcon
                />
              )}
            </div>

            <h4 className="min-w-0 flex-1 font-medium text-balance text-foreground max-sm:text-sm">
              {position.title}
            </h4>

            <div className="shrink-0 text-muted-foreground group-data-disabled:hidden [&_svg]:h-lh [&_svg]:w-4 max-sm:[&_svg]:size-3.5">
              <ChevronsUpDownIcon ref={chevronsUpDownIconRef} duration={0.15} />
            </div>
          </div>

          <dl className="relative z-1 flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground max-sm:gap-x-1.5 max-sm:pl-8 max-sm:text-[11px]">
            {position.employmentType && (
              <>
                <div>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </div>

                <Separator
                  className="h-4 self-center"
                  orientation="vertical"
                  aria-hidden
                />
              </>
            )}

            <div>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <span>{formatPeriodLabel(start)}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <InfinityIcon className="size-4.5 translate-y-[0.5px]" aria-label="Present" />
                ) : (
                  <span>{formatPeriodLabel(end)}</span>
                )}
              </dd>
            </div>

            {duration && (
              <>
                <Separator
                  className="h-4 self-center"
                  orientation="vertical"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Duration</dt>
                  <dd className="tabular-nums">{duration}</dd>
                </div>
              </>
            )}
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="experience-details overflow-hidden">
          {position.description && (
            <Prose className="pt-2 pl-9 max-sm:pl-8 max-sm:text-xs">
              <ReactMarkdown
                components={{
                  ul: ({ children, ...props }) => (
                    <ul className="list-disc space-y-2 pl-4 marker:text-muted-foreground" {...props}>
                      {children}
                    </ul>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="pl-1 leading-relaxed" {...props}>
                      {children}
                    </li>
                  ),
                }}
              >
                {position.description}
              </ReactMarkdown>
            </Prose>
          )}
          {position.detailsHref && (
            <Link
              href={position.detailsHref}
              className="relative ml-9 mt-3 inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline focus-visible:outline-ring"
            >
              Know More <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          )}
        </CollapsibleContent>

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="not-prose flex flex-wrap gap-1.5 pt-3 pl-9">
            {position.skills.map((skill, index) => (
              <li key={index} className="flex">
                <Skill skill={skill} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Collapsible>
  )
}

function Prose({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none prose-ncdai prose-zinc dark:prose-invert prose-p:my-2 prose-ul:my-2 prose-ul:list-disc prose-ul:pl-4 prose-li:my-1.5 prose-li:text-foreground/90 max-sm:prose-xs",
        className
      )}
      {...props}
    />
  )
}

function Skill({ skill }: { skill: string }) {
  const Icon = experienceSkillIcons[skill]

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/50 px-1.5 py-0.5 font-medium text-sm text-foreground/80">
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" focusable="false" />}
      <span>{skill}</span>
    </span>
  )
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".")
  const endHasMonth = end ? end.includes(".") : true

  // Both year-only: granularity is years, no month arithmetic needed.
  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10)
    if (years <= 0) {
      return ""
    }
    return `${years}y`
  }

  const startDate = parsePeriodDate(start, "first")
  const endDate = end ? parsePeriodDate(end, "last") : new Date()

  // +1 to count both the start and end months inclusively.
  const totalMonths = differenceInMonths(endDate, startDate) + 1
  if (totalMonths <= 0) {
    return ""
  }

  if (totalMonths < 12) {
    return `${totalMonths}m`
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  if (months === 0) {
    return `${years}y`
  }
  return `${years}y ${months}m`
}

function formatPeriodLabel(value: string): string {
  if (!value.includes(".")) return value
  return format(parse(value, "MM.yyyy", new Date()), "MMM yyyy")
}

function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    return parse(str, "MM.yyyy", new Date())
  }
  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date()
  )
}

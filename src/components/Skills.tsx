"use client";

import type { ComponentType, SVGProps } from "react";
import { FiCode } from "react-icons/fi";
import { SiShadcnui } from "react-icons/si";
import {
  AwsEc2,
  CPlusplus,
  Css3,
  Express,
  GithubIcon,
  GoogleGeminiIcon,
  Hono,
  Html5,
  Javascript,
  MongodbIcon,
  NextjsIcon,
  NodejsIcon,
  OpenaiIcon,
  Postgresql,
  PostmanIcon,
  Prisma,
  _React as ReactIcon,
  ReactQueryIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
  Zod,
  VisualStudioCode,
  CursorIcon,
  ClaudeIcon,
} from "@dev.icons/react/mono";
import { skills } from "@/constants";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const skillIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  HTML: Html5,
  CSS: Css3,
  JavaScript: Javascript,
  TypeScript: TypescriptIcon,
  "C/C++": CPlusplus,
  "Next.js": NextjsIcon,
  "React.js": ReactIcon,
  "Hono.js": Hono,
  "Express.js": Express,
  "Node.js": NodejsIcon,
  "Tailwind CSS": TailwindIcon,
  Zod: Zod,
  "React Query": ReactQueryIcon,
  "ShadCN UI": SiShadcnui,
  PostgreSQL: Postgresql,
  MongoDB: MongodbIcon,
  Prisma: Prisma,
  Redis: RedisIcon,
  "VS Code": VisualStudioCode,
  VSCode: VisualStudioCode,
  "Git/GitHub": GithubIcon,
  Postman: PostmanIcon,
  "AWS EC2": AwsEc2,
  Cursor: CursorIcon,
  ChatGPT: OpenaiIcon,
  Claude: ClaudeIcon,
  Gemini: GoogleGeminiIcon,
};

function SkillChip({ skill }: { skill: string }) {
  const Icon = skillIcons[skill] ?? FiCode;
  return (
    <li>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="h-7 cursor-default gap-1.5 rounded-md px-2.5 text-xs font-normal text-foreground/80 shadow-none transition-all hover:-translate-y-px hover:border-foreground/30 hover:bg-accent hover:text-foreground"
      >
        <span>
          <Icon className="size-3.5 shrink-0" aria-hidden="true" />
          {skill}
        </span>
      </Button>
    </li>
  );
}

export default function Skills() {
  const total = skills.reduce((n, c) => n + c.items.length, 0);

  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading title="Skills" meta={`${total} tools`} />
      </Reveal>

      <div className="divide-y divide-border/70 border-y border-border/70">
        {skills.map((category, index) => (
          <Reveal key={category.category} delay={index * 0.05}>
            <div className="grid gap-2.5 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <h3 className="flex items-baseline gap-2 text-sm font-medium sm:flex-col sm:gap-0.5">
                <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex items-baseline gap-1.5">
                  {category.category}
                  <span className="font-mono text-[10px] font-normal text-muted-foreground sm:hidden">
                    · {category.items.length}
                  </span>
                </span>
              </h3>
              <ul
                className="flex flex-wrap gap-1.5"
                aria-label={`${category.category} skills`}
              >
                {category.items.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import type { ComponentType, SVGProps } from "react";
import { FiCode } from "react-icons/fi";
import { GiBearFace } from "react-icons/gi";
import { SiShadcnui } from "react-icons/si";
import {
  AwsEc2, CPlusplus, Css3, Express, GithubIcon,
  GoogleGeminiIcon, Hono, Html5, Javascript, MongodbIcon,
  NextjsIcon, NodejsIcon, OpenaiIcon, Postgresql, PostmanIcon,
  Prisma, _React as ReactIcon, ReactQueryIcon, RedisIcon,
  TailwindIcon, TypescriptIcon, Zod, VisualStudioCode, CursorIcon, ClaudeIcon,
} from "@dev.icons/react/mono";
import { skills } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SectionHeading from "@/components/SectionHeading";

const skillIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  HTML: Html5,
  CSS: Css3,
  JavaScript: Javascript,
  TypeScript: TypescriptIcon,
  "C/C++": CPlusplus,
  "Next.js": NextjsIcon,
  "React.js": ReactIcon,
  // Zustand: GiBearFace,
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

function SkillBadge({ skill }: { skill: string }) {
  const Icon = skillIcons[skill] ?? FiCode;

  return (
    <Badge variant="outline" className="gap-2 border-border bg-muted/50 font-mono text-sm font-normal text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground">
      <Icon className="size-4 shrink-0" aria-hidden="true" focusable="false" />
      <span className="font-medium ">{skill}</span>
    </Badge>
  );
}

const Skills = () => (
  <section className="overflow-x-hidden border-t border-solid border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Skills" description="" />
    <div className="">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((category) => (
          <div key={category.category} className="rounded-2xl border border-border bg-card p-5 sm:p-7">
            <h3 className="mb-5 text-base font-medium tracking-tight">{category.category}</h3>
            <div className="flex flex-wrap gap-2">{category.items.map(skill => <SkillBadge key={skill} skill={skill} />)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

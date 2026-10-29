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
  return <li className="flex items-center gap-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"><Icon className="size-4 shrink-0 text-foreground" aria-hidden="true" /><span>{skill}</span></li>;
}
export default function Skills() {
  return <section className="section-shell"><SectionHeading title="Skills" /><div className="divide-y divide-border border-y border-border">{skills.map((category, index) => <div key={category.category} className="grid gap-3 py-5 sm:grid-cols-[13rem_1fr]"><h3 className="flex items-baseline gap-3 text-xs font-medium"><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>{category.category}</h3><ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">{category.items.map(skill => <SkillBadge key={skill} skill={skill} />)}</ul></div>)}</div></section>;
}

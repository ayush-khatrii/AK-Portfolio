"use client";

import { motion } from "motion/react";
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
  <section className="overflow-x-hidden border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="Skills" description="" />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-y border-dotted border-border/60">
      <Table>
        <TableBody>
          {skills.map((skillCategory) => (
            <TableRow key={skillCategory.category} className="border-border/40 align-top hover:bg-muted/40">
              <TableCell className="px-3 py-3">
                <p className="text-sm font-medium text-foreground">{skillCategory.category}</p>
                <div className="mt-2 flex flex-wrap gap-1 sm:hidden">
                  {skillCategory.items.map((skill) => <SkillBadge key={skill} skill={skill} />)}
                </div>
              </TableCell>
              <TableCell className="hidden px-3 py-3 sm:table-cell">
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => <SkillBadge key={skill} skill={skill} />)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  </section>
);

export default Skills;

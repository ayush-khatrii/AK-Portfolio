"use client";

import { motion } from "motion/react";
import { skills } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => (
  <section className="overflow-x-hidden py-12 sm:py-16">
    <SectionHeading index="05" label="Runtime Matrix" title="Skills" count={`${skills.length} GROUPS`} />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border border-border/30">
      <Table>
        <TableHeader>
          <TableRow className="border-border/40 hover:bg-transparent">
            <TableHead className="h-10 w-12 px-3 font-mono text-[10px] uppercase">ID</TableHead>
            <TableHead className="h-10 px-3 font-mono text-[10px] uppercase">Capability</TableHead>
            <TableHead className="hidden h-10 px-3 font-mono text-[10px] uppercase sm:table-cell">Runtime / Toolchain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.map((skillCategory, index) => (
            <TableRow key={skillCategory.category} className="border-border/40 align-top hover:bg-muted/50">
              <TableCell className="px-3 py-4 font-mono text-[10px] text-muted-foreground/60">0{index + 1}</TableCell>
              <TableCell className="px-3 py-4">
                <p className="text-sm font-medium text-foreground">{skillCategory.category}</p>
                <div className="mt-3 flex flex-wrap gap-1 sm:hidden">
                  {skillCategory.items.map((skill) => <Badge key={skill} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal">{skill}</Badge>)}
                </div>
              </TableCell>
              <TableCell className="hidden px-3 py-4 sm:table-cell">
                <div className="flex flex-wrap gap-1">
                  {skillCategory.items.map((skill) => <Badge key={skill} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{skill}</Badge>)}
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

"use client";

import { motion } from "motion/react";
import { skills } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => (
  <section className="overflow-x-hidden border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading index="05" label="Runtime Matrix" title="Skills" count={`${skills.length} GROUPS`} />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-y border-dotted border-border/60">
      <Table>
        <TableHeader>
          <TableRow className="border-border/40 bg-muted/20 hover:bg-muted/20">
            <TableHead className="h-10 w-12 px-3 font-mono text-[10px] uppercase">ID</TableHead>
            <TableHead className="h-10 px-3 font-mono text-[10px] uppercase">Capability</TableHead>
            <TableHead className="hidden h-10 px-3 font-mono text-[10px] uppercase sm:table-cell">Runtime / Toolchain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.map((skillCategory, index) => (
            <TableRow key={skillCategory.category} className="border-border/40 align-top hover:bg-muted/40">
              <TableCell className="px-3 py-3 font-mono text-[10px] text-muted-foreground/60">0{index + 1}</TableCell>
              <TableCell className="px-3 py-3">
                <p className="text-sm font-medium text-foreground">{skillCategory.category}</p>
                <div className="mt-2 flex flex-wrap gap-1 sm:hidden">
                  {skillCategory.items.map((skill) => <Badge key={skill} variant="outline" className="border-border/40 bg-muted/50 font-mono text-[10px] font-normal">{skill}</Badge>)}
                </div>
              </TableCell>
              <TableCell className="hidden px-3 py-3 sm:table-cell">
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

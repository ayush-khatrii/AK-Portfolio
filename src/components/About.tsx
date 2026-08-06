"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Code2, ExternalLink, Globe2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import SectionHeading from "@/components/SectionHeading";

const birthYear = 2003;

const infoData = [
  { icon: Mail, label: "Email", value: "ayushkhatri.dev@gmail.com", href: "mailto:ayushkhatri.dev@gmail.com" },
  { icon: Globe2, label: "Website", value: "ayushkhatri.in", href: "https://ayushkhatri.in" },
  { icon: MapPin, label: "Location", value: "India 🇮🇳" },
  { icon: Code2, label: "Role", value: "Full-Stack Developer" },
];

const About = ({ sectionIndex = "02" }: { sectionIndex?: string }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section id="about" className="overflow-x-hidden py-12 sm:py-16">
      <SectionHeading index={sectionIndex} label="Identity" title="About Me" />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-rail">
        <p className="max-w-full text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Hey there! I’m <span className="font-medium text-foreground">Ayush Khatri</span>, a {age}-year-old passionate <code className="rounded border border-border/60 bg-muted/70 px-1.5 py-0.5 font-mono text-[0.88em] font-medium text-foreground">Full-Stack Web Developer</code>. Passionate about crafting dynamic, responsive, and user-centric web apps. Always learning, always building — one project at a time.
          <br /><br />
          <span className="font-normal">Beyond coding, I enjoy editing and refining content that tells stories and connects ideas beautifully. I&apos;m constantly exploring new technologies and improving my skills to build impactful projects that make a difference.</span>
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Button asChild variant="link" className="h-11 px-0 text-primary">
            <Link href="/about">Know more about me <ExternalLink /></Link>
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-muted-foreground">Check out my Resume here:</span>
          <Button asChild size="sm" variant="outline" className="h-9 border-border/40 hover:border-primary/40">
            <Link href="https://github.com/ayush-khatrii" target="_blank" rel="noopener noreferrer">Resume <ExternalLink /></Link>
          </Button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 border-t border-border/40">
        <Table className="table-fixed">
          <TableBody>
            {infoData.map((item, index) => {
              const Icon = item.icon;
              return (
                <TableRow key={item.label} className="border-border/40 hover:bg-muted/50">
                  {/* <TableCell className="w-10 px-2 py-3.5 font-mono text-[10px] text-muted-foreground/60 sm:w-14 sm:px-4">0{index + 1}</TableCell> */}
                  <TableCell className="text-left w-8 px-1 py-3.5 sm:w-10"><Icon className="size-4 text-foreground/80" /></TableCell>
                  <TableCell className="text-left w-16 px-2 py-3.5 font-mono text-xs uppercase tracking-tight text-muted-foreground sm:w-36">{item.label}</TableCell>
                  <TableCell className=" break-words px-2 py-3.5 text-right text-sm font-medium text-foreground">
                    {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">{item.value}</a> : item.value}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </motion.div>
    </section>
  );
};

export default About;

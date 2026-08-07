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

const About = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section id="about" className="scroll-mt-24 overflow-x-hidden border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <SectionHeading title="About Me" description="A little about who I am, what I build, and what drives my work." />
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-l border-dotted border-border/60 pl-4 sm:pl-6">
          <p className="max-w-full text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Hey there! I’m <span className="font-medium text-foreground">Ayush Khatri</span>, a {age}-year-old passionate <code className="rounded border border-border/60 bg-muted/70 px-1.5 py-0.5 font-mono text-[0.88em] font-medium text-foreground">Full-Stack Web Developer</code>. Passionate about crafting dynamic, responsive, and user-centric web apps. Always learning, always building — one project at a time.
            <br /><br />
            <span className="font-normal">Beyond coding, I enjoy editing and refining content that tells stories and connects ideas beautifully. I&apos;m constantly exploring new technologies and improving my skills to build impactful projects that make a difference.</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
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

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-y border-dotted border-border/60">
          <Table className="table-fixed">
            <TableBody>
              {infoData.map((item) => {
                const Icon = item.icon;
                return (
                  <TableRow key={item.label} className="border-border/40 hover:bg-muted/40">
                    <TableCell className="w-8 px-1 py-3 text-left sm:w-10"><Icon className="size-4 text-foreground/80" /></TableCell>
                    <TableCell className="w-16 px-2 py-3 text-left font-mono text-[10px] uppercase tracking-tight text-muted-foreground sm:w-28">{item.label}</TableCell>
                    <TableCell className="break-words px-2 py-3 text-right text-xs font-medium text-foreground [overflow-wrap:anywhere] sm:text-sm">
                      {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">{item.value}</a> : item.value}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

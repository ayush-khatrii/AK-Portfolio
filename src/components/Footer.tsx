"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TextPressure from "./TextExpand";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "Twitter", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
];

const Footer = () => (
  <footer className="overflow-hidden pb-8 pt-12">
    <Separator className="bg-border/40" />
    <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Social endpoints</p>
      <div className="flex flex-wrap gap-1">
        {socials.map(({ name, icon: Icon, url }) => (
          <Button key={name} asChild variant="ghost" size="sm" className="group h-10 rounded-md text-xs text-muted-foreground hover:text-foreground">
            <a href={url} target="_blank" rel="noopener noreferrer" title={name}><Icon className="size-3.5" />{name}<ArrowUpRight className="size-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </Button>
        ))}
      </div>
    </div>
    <div className="relative h-24 opacity-50 sm:h-36">
      <TextPressure text="Ayush Khatri" flex alpha={false} stroke width weight textColor="currentColor" strokeColor="currentColor" className="text-foreground" />
    </div>
    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
      © {new Date().getFullYear()} Crafted with ❤️ and curiosity.
    </motion.p>
  </footer>
);

export default Footer;

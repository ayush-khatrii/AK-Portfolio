"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { MagicCard } from "@/components/magic-card";
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
    <div className="py-5">
      <div className="grid grid-cols-2 border-y border-border/40 sm:grid-cols-4">
        {socials.map(({ name, icon: Icon, url }, index) => (
          <MagicCard
            key={name}
            gradientSize={140}
            gradientColor="hsl(216 92% 64% / 0.14)"
            gradientFrom="hsl(216 92% 64%)"
            gradientTo="hsl(270 80% 68%)"
            gradientOpacity={1}
            className={`rounded-none border-0 ${index % 2 !== 0 ? "border-l border-border/40" : ""
              } ${index > 1 ? "border-t border-border/40 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-border/40" : ""
              }`}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="group flex min-h-14 items-center justify-between gap-3 px-3 text-xs text-muted-foreground transition-colors hover:text-foreground sm:min-h-16 sm:px-4"
            >
              <span className="flex items-center gap-2.5">
                <Icon className="size-4 text-foreground" aria-hidden="true" />
                {name}
              </span>
              <ArrowUpRight className="size-3.5 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </a>
          </MagicCard>
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

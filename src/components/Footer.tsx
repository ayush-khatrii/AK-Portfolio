"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { MagicCard } from "@/components/magic-card";
import TextPressure from "./TextExpand";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "Twitter", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
];

const Footer = () => (
  <footer className="relative border-t border-dotted border-border/60 pb-6">
    <div
      aria-hidden="true"
      className="opacity-50 pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-[28rem] max-w-5xl bg-[radial-gradient(ellipse_at_50%_100%,color-mix(in_oklab,var(--primary)_20%,transparent)_0%,color-mix(in_oklab,var(--primary)_9%,transparent)_38%,transparent_52%)]"
    />
    <div className="relative z-10 grid grid-cols-2 border-y border-dotted border-border/60 sm:grid-cols-4">
      {socials.map(({ name, icon: Icon, url }, index) => (
        <MagicCard
          key={name}
          gradientSize={140}
          gradientColor="var(--muted)"
          gradientFrom="var(--primary)"
          gradientTo="var(--border)"
          gradientOpacity={1}
          className={`rounded-none border-0 ${index % 2 !== 0 ? "border-l border-dotted border-border/60" : ""
            } ${index > 1 ? "border-t border-dotted border-border/60 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-dotted sm:border-border/60" : ""
            }`}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="group relative flex min-h-14 items-center justify-center gap-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:min-h-16"
          >
            <span className="flex items-center gap-2.5">
              <Icon className="size-4 text-foreground" aria-hidden="true" />
              {name}
            </span>
            <ArrowUpRight className="absolute right-2 size-3.5 opacity-40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:right-4" aria-hidden="true" />
          </a>
        </MagicCard>
      ))}
    </div>
    <div className="relative z-10 mt-6 mb-10 h-20 px-10 opacity-40 sm:h-40 sm:opacity-50 lg:h-48">
      <TextPressure text="Ayush Khatri" flex alpha={false} stroke width weight textColor="currentColor" strokeColor="currentColor" className="text-foreground" />
    </div>
    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 mt-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
      © {new Date().getFullYear()} Crafted with ❤️ and curiosity.
    </motion.p>
  </footer>
);

export default Footer;

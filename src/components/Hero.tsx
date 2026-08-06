"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magic-card";
import ScalesWithImage from "@/components/ScalesWithImage";

const socials = [
  { name: "X", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="relative min-h-[calc(100svh-6rem)] overflow-hidden border-x border-border/30">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="flex min-h-[calc(100svh-6rem)] flex-col justify-between px-4 py-8 sm:px-8 sm:py-10 lg:px-12"
      >
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
          <span>Fullstack Developer / India</span>
        </motion.div>

        <div className="my-auto grid items-center gap-6 py-10 sm:py-14 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div className="min-w-0 text-left w-full">
            <motion.h1 id="hero-title" variants={itemVariants} className="whitespace-nowrap text-[clamp(2.25rem,9vw,5rem)] font-medium leading-[0.95] tracking-[-0.075em]">
              Ayush Khatri<span className="animate-pulse text-primary motion-reduce:animate-none">_</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Engineering fast web applications and solid backend services.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-2.5">
              <Button asChild variant="default" size="lg">
                <Link href="/projects">
                  Explore <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume-ak.pdf" target="_blank" rel="noreferrer">
                  Résumé <ArrowDown />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="min-w-0">
            <ScalesWithImage />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 border-y border-border/40 sm:grid-cols-4">
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

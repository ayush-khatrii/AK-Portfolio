"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magic-card";
import Scanner from "@/components/ScannerWaves";

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
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[clamp(34rem,72svh,42rem)] overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Scanner
          color1="#7ccf00"
          color2="#7ccf00"
          color3="#7ccf00"
          speed={0.5}
          sweepSpeed={0.25}
          sweepWidth={1.6}
          sweepFalloff={6}
          scale={1.25}
          frequency={2}
          ripple={0.1}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.22}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1}
          contrast={1.15}
          softness={5}
          vignette={1}
          scanline
          grain
          grainIntensity={0}
          opacity={1}
          mouseInteraction
          mouseRadius={1.5}
          mouseStrength={0.5}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="relative z-10 flex min-h-[clamp(34rem,72svh,42rem)] flex-col"
      >
        <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="w-full min-w-0 max-w-4xl text-center">
            <motion.div variants={itemVariants} className="mb-7 flex justify-center sm:mb-9">
              <div className="inline-flex min-h-9 items-center gap-2.5 rounded-full border border-dotted border-border/70 bg-background/70 px-3 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground backdrop-blur-sm sm:text-xs">
                <Code2 className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Fullstack Developer / India</span>
                <span aria-hidden="true" className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="whitespace-nowrap text-[clamp(2rem,9.25vw,6.75rem)] font-medium leading-[0.86] tracking-[-0.075em]"
            >
              Ayush Khatri<span className="animate-pulse text-primary motion-reduce:animate-none">_</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-7 flex flex-col items-center gap-6 sm:mt-9">
              <p className="max-w-2xl text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:text-lg">
                Engineering <span className="bg-primary px-1.5 py-0.5 font-medium text-primary-foreground">fast web applications</span> and solid backend services.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5">
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
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid w-full shrink-0 grid-cols-2 border-t border-dotted border-border/60 sm:grid-cols-4"
        >
          {socials.map(({ name, icon: Icon, url }, index) => (
            <MagicCard
              key={name}
              gradientSize={140}
              gradientColor="color-mix(in srgb, var(--primary) 14%, transparent)"
              gradientFrom="var(--primary)"
              gradientTo="var(--ring)"
              gradientOpacity={1}
              className={`rounded-none border-0 ${index % 2 !== 0 ? "border-l border-dotted border-border/50" : ""
                } ${index > 1 ? "border-t border-dotted border-border/50 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-dotted sm:border-border/50" : ""
                }`}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

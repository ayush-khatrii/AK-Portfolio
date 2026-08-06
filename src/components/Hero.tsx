"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/ayush-khatrii" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ayushkhatrii",
  },
  { name: "X", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/ayush.khatrii",
  },
];

const nameLines = ["AYUSH", "KHATRI."];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.06, staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-8rem)] flex-col justify-center py-8 md:min-h-[calc(100svh-9rem)] md:py-12"
    >
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="w-full"
      >
        <motion.p
          variants={itemVariants}
          className="mb-7 text-center text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:mb-9 sm:text-xs"
        >
          <span className="text-primary">Fullstack Developer</span>
          <span className="mx-2.5 text-border" aria-hidden="true">
            /
          </span>
          India
        </motion.p>

        <motion.h1
          id="hero-title"
          aria-label="Ayush Khatri"
          variants={itemVariants}
          className="text-center text-[clamp(4rem,17vw,8.5rem)] font-bold leading-[0.74] tracking-[-0.095em] text-foreground"
        >
          {nameLines.map((word, lineIndex) => (
            <span
              key={word}
              aria-hidden="true"
              className={`block whitespace-nowrap ${lineIndex === 1 ? "text-primary" : ""}`}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${letter}-${letterIndex}`}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, rotate: letterIndex % 2 ? 2 : -2 }
                  }
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="inline-block cursor-default"
                >
                  {letter}
                </motion.span>
              ))}
              {lineIndex === 1 && (
                <span
                  className="ml-[0.07em] inline-block h-[0.7em] w-[0.055em] animate-pulse bg-primary align-[-0.02em] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-md text-center text-sm leading-6 text-muted-foreground sm:mt-10 sm:text-base"
        >
          I design and build thoughtful digital products.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:mt-8"
        >
          <Link
            href="/projects"
            className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Selected work
            <span className="text-[0.65rem] opacity-60">06</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <a
            href="/resume-ak.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 px-2 text-sm text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Résumé
            <ArrowDown
              className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <motion.nav
          variants={itemVariants}
          aria-label="Social links"
          className="mt-10 grid grid-cols-2 border-y border-border/70 sm:mt-14 sm:grid-cols-4"
        >
          {socials.map(({ name, icon: Icon, url }, index) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-14 items-center justify-between gap-3 px-3 text-xs text-muted-foreground transition-colors hover:text-foreground sm:min-h-16 sm:px-4 ${
                index % 2 !== 0 ? "border-l border-border/70" : ""
              } ${index > 1 ? "border-t border-border/70 sm:border-t-0" : ""} ${
                index > 0 ? "sm:border-l sm:border-border/70" : ""
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="size-4 text-foreground" aria-hidden="true" />
                {name}
              </span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default Hero;

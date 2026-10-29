"use client";

import { useEffect, useState, type ReactNode } from "react";
import AnimatedContent from "@/components/AnimatedContent";

type RevealProps = { children: ReactNode; className?: string; delay?: number };

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <AnimatedContent key={reduced ? "static" : "motion"} distance={16} duration={0.65} delay={reduced ? 0 : delay} initialOpacity={0.35} threshold={0.04} once className={className}>{children}</AnimatedContent>;
}

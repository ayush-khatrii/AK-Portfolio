"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface TimelineAnimateEntry {
  index: string;
  content: ReactNode;
}

interface TimelineAnimateProps {
  data: TimelineAnimateEntry[];
  className?: string;
}

type Segment = { start: number; end: number };

function TimelineAnimateRow({
  index, content, isLast, rowRef, indexRef,
}: TimelineAnimateEntry & {
  isLast: boolean;
  rowRef: (node: HTMLLIElement | null) => void;
  indexRef: (node: HTMLSpanElement | null) => void;
}) {
  const localRowRef = useRef<HTMLLIElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: localRowRef,
    offset: ["start 90%", "start 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.5 });
  // Content stays visible in the initial HTML and throughout the scroll reveal.
  const opacity = useTransform(progress, [0, 1], [0.75, 1]);
  const y = useTransform(progress, [0, 1], [8, 0]);

  return <li ref={node => { localRowRef.current = node; rowRef(node); }}
    className={cn("relative min-w-0 pl-11 text-left sm:pl-12", !isLast && "pb-5")}>
    <span ref={indexRef} aria-hidden="true" className="absolute left-0 top-1 flex size-7 items-center justify-center rounded-md border border-border bg-background font-mono text-[10px] text-primary">
      {index}
    </span>
    <motion.div style={reduced ? undefined : { opacity, y }} className="min-w-0">
      {content}
    </motion.div>
  </li>;
}

function TimelineAnimateSegment({ start, end, revealed, reduced }: {
  start: number; end: number; revealed: MotionValue<number>; reduced: boolean;
}) {
  const height = useTransform(revealed, value => Math.min(Math.max(value - start, 0), end - start));
  return <span aria-hidden="true" style={{ top: start, height: end - start }}
    className="pointer-events-none absolute left-3.5 w-px -translate-x-1/2 overflow-hidden bg-border">
    {!reduced && <motion.span style={{ height }} className="absolute inset-x-0 top-0 w-px bg-primary/50" />}
  </span>;
}

/** Compact adaptation of the supplied shadcn studio numbered timeline. */
export function TimelineAnimate({ data, className }: TimelineAnimateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const rowNodes = useRef<Array<HTMLLIElement | null>>([]);
  const indexNodes = useRef<Array<HTMLSpanElement | null>>([]);
  const [segments, setSegments] = useState<Segment[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const bounds = data.map((_, index) => {
        const row = rowNodes.current[index];
        const marker = indexNodes.current[index];
        if (!row || !marker) return null;
        const top = row.offsetTop + marker.offsetTop;
        return { top, bottom: top + marker.offsetHeight };
      }).filter((bound): bound is { top: number; bottom: number } => bound !== null);
      setSegments(bounds.slice(0, -1).map((bound, index) => ({
        start: bound.bottom + 6,
        end: Math.max(bound.bottom + 6, bounds[index + 1].top - 6),
      })));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [data]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 85%", "end 55%"] });
  const revealed = useTransform(scrollYProgress, [0, 1], [0, segments.at(-1)?.end ?? 0]);

  return <div ref={containerRef} className={cn("relative w-full text-left", className)}>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {segments.map((segment, index) => <TimelineAnimateSegment key={index} {...segment} revealed={revealed} reduced={!!reduced} />)}
    </div>
    <ol ref={listRef} className="relative m-0 list-none p-0">
      {data.map((item, index) => <TimelineAnimateRow key={item.index} {...item} isLast={index === data.length - 1}
        rowRef={node => { rowNodes.current[index] = node; }}
        indexRef={node => { indexNodes.current[index] = node; }} />)}
    </ol>
  </div>;
}

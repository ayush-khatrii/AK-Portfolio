"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const formatDate = (dateString: string) => new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  weekday: "short",
}).format(new Date(dateString));

const GithubContribution = ({ sectionIndex = "03" }: { sectionIndex?: string }) => (
  <section className="overflow-x-hidden py-12 sm:py-16">
    <SectionHeading index={sectionIndex} label="Activity Stream" title="GitHub Graph" />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full border border-border/30 bg-muted/20 p-4 sm:p-6">
      <GitHubCalendar
        blockSize={14}
        blockMargin={3}
        blockRadius={3}
        fontSize={13}
        style={{ width: "100%" }}
        showWeekdayLabels={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
        weekStart={1}
        username="ayush-khatrii"
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "github-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${formatDate(activity.date)}`,
          })
        }
      />
      <ReactTooltip
        id="github-tooltip"
        clickable
        openOnClick
        opacity={1}
        arrowColor="var(--popover)"
        border="1px solid var(--border)"
        className="!z-50 !rounded-md !bg-popover !px-3 !py-1.5 !font-mono !text-xs md:!text-sm !text-popover-foreground !shadow-md"
      />
    </motion.div>
  </section>
);

export default GithubContribution;

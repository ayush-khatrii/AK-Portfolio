"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ][Number(month) - 1];

  return `${monthName} ${day}, ${year}`;
};

const GithubContribution = () => (
  <section className="overflow-x-hidden border-t border-dotted border-border/60 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <SectionHeading title="GitHub Graph" description="" />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full border-y border-dotted border-border/60 bg-muted/20 px-2 py-5 sm:px-4">
      <GitHubCalendar
        blockSize={15}
        blockMargin={4}
        blockRadius={3}
        fontSize={12}
        style={{ width: "100%" }}
        theme={{
          light: ["var(--muted)", "var(--primary)"],
          dark: ["var(--muted)", "var(--primary)"],
        }}
        showWeekdayLabels={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
        weekStart={1}
        username="ayush-khatrii"
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "github-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${formatDate(activity.date)}`,
            "data-tooltip-place": "top",
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

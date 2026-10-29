"use client";

import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Skeleton } from "@/components/ui/skeleton";

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][Number(month) - 1];
  return `${monthName} ${day}, ${year}`;
};

export default function GithubContribution() {
  const [palette, setPalette] = useState<
    [string, string, string, string, string] | null
  >(null);
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    setPalette(
      [1, 2, 3, 4, 5].map((index) =>
        css.getPropertyValue(`--chart-${index}`).trim(),
      ) as [string, string, string, string, string],
    );
  }, []);
  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeading title="GitHub Graph" />
      </Reveal>
      <div
        data-lenis-prevent
        className="w-auto sm:w-full overflow-x-auto rounded-xl border border-border bg-card px-4 py-4 sm:px-5"
      >
        {palette ? (
          <GitHubCalendar
            blockSize={11}
            blockMargin={4}
            blockRadius={2}
            fontSize={11}
            style={{ width: "100%" }}
            colorScheme="dark"
            theme={{ dark: palette }}
            showWeekdayLabels={[
              "sun",
              "mon",
              "tue",
              "wed",
              "thu",
              "fri",
              "sat",
            ]}
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
        ) : (
          <Skeleton className="h-40 w-full" />
        )}
        <ReactTooltip
          id="github-tooltip"
          clickable
          openOnClick
          opacity={1}
          arrowColor="var(--popover)"
          border="1px solid var(--border)"
          className="!z-50 !rounded-md !bg-popover !px-3 !py-2 !text-xs !text-popover-foreground !shadow-md"
        />
      </div>
    </section>
  );
}

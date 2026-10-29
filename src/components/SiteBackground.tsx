"use client";

import { useEffect, useState } from "react";
import GradientASCII from "@/components/GradientASCII";

export default function SiteBackground() {
  const [colors, setColors] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    // Canvas needs resolved colors rather than CSS var() expressions.
    const theme = getComputedStyle(document.documentElement);
    setColors(
      ["--accent", "--foreground", "--primary", "--aurora-mid"].map((token) =>
        theme.getPropertyValue(token).trim(),
      ),
    );
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="site-ambient pointer-events-none fixed inset-x-0 top-0 -z-10 h-[min(600px,100svh)] overflow-hidden"
    >
      {!reducedMotion && colors.length > 0 && (
        <GradientASCII
          colors={colors}
          className="opacity-20"
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.2}
          glow={1}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={0.5}
          gradientOpacity={0.9}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
          dpr={1}
        />
      )}
      <div className="site-ascii-scrim absolute inset-0" />
    </div>
  );
}

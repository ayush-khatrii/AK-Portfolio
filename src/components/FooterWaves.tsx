"use client";

import { useEffect, useState } from "react";
import ShapeWaves from "@/components/ShapeWaves";

const MOBILE_QUERY = "(max-width: 639px)";

/**
 * The footer waves use the same props on every viewport; only the grid density
 * changes so the `</>` glyph keeps the same look on narrow screens.
 */
export default function FooterWaves() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <ShapeWaves
      text="</>"
      fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
      fontWeight={500}
      textSize={compact ? 0.58 : 0.62}
      shapes="mixed"
      cellSize={compact ? 6 : 11}
      dotSize={compact ? 0.72 : 0.7}
      color="#d4ff24"
      hoverColor="#eaff8b"
      backgroundColor="#050608"
      speed={0.55}
      scale={1}
      contrast={1}
      brightness={compact ? 0.46 : 0.36}
      flow={0}
      direction={0}
      fade={0.35}
      interactive={false}
      splashRadius={32}
      splashStrength={0.25}
      glow={0.2}
      intro={false}
      introDuration={1.6}
      paused={false}
    />
  );
}

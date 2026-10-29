"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
    let destroy: (() => void) | undefined;
    const setup = () => {
      destroy?.();
      destroy = undefined;
      if (media.matches) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -96 },
        prevent: node => !!node.closest('[data-lenis-prevent], [role="dialog"], [data-radix-scroll-area-viewport]'),
      });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      destroy = () => { gsap.ticker.remove(tick); lenis.destroy(); };
    };
    setup();
    media.addEventListener("change", setup);
    return () => { media.removeEventListener("change", setup); destroy?.(); };
  }, []);
  return null;
}

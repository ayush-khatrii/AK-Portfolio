"use client";

import { useEffect } from "react";

const PRESSABLE = 'button, a[href], [role="button"]';

/**
 * Adds an instant `data-pressed` state on pointer down so tap feedback on touch
 * devices does not wait for the browser's delayed `:active` / click synthesis.
 */
export default function PressFeedback() {
  useEffect(() => {
    let pressed: HTMLElement | null = null;

    const release = () => {
      pressed?.removeAttribute("data-pressed");
      pressed = null;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        PRESSABLE,
      );
      if (!target || target.matches(":disabled, [aria-disabled='true']")) return;
      release();
      pressed = target;
      target.setAttribute("data-pressed", "true");
    };

    // A passive touchstart listener stops iOS from deferring :active styles.
    const noop = () => {};

    document.addEventListener("touchstart", noop, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", release, { passive: true });
    document.addEventListener("pointercancel", release, { passive: true });
    window.addEventListener("scroll", release, { passive: true });

    return () => {
      release();
      document.removeEventListener("touchstart", noop);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
      window.removeEventListener("scroll", release);
    };
  }, []);

  return null;
}

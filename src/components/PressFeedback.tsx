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
    let pressedAt = 0;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;

    const clear = () => {
      clearTimeout(releaseTimer);
      pressed?.removeAttribute("data-pressed");
      pressed = null;
    };

    const release = () => {
      if (!pressed) return;
      // Keep even a very quick tap visible for a frame, without delaying clicks.
      const remaining = 80 - (performance.now() - pressedAt);
      if (remaining > 0) releaseTimer = setTimeout(clear, remaining);
      else clear();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        PRESSABLE,
      );
      if (!target || target.matches(":disabled, [aria-disabled='true']")) return;
      clear();
      pressed = target;
      pressedAt = performance.now();
      target.setAttribute("data-pressed", "true");
    };

    // A passive touchstart listener stops iOS from deferring :active styles.
    const noop = () => {};

    document.addEventListener("touchstart", noop, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { capture: true, passive: true });
    document.addEventListener("pointerup", release, { capture: true, passive: true });
    document.addEventListener("pointercancel", clear, { capture: true, passive: true });
    window.addEventListener("scroll", clear, { capture: true, passive: true });
    window.addEventListener("blur", clear);

    return () => {
      clear();
      document.removeEventListener("touchstart", noop);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerup", release, true);
      document.removeEventListener("pointercancel", clear, true);
      window.removeEventListener("scroll", clear, true);
      window.removeEventListener("blur", clear);
    };
  }, []);

  return null;
}

"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const ElectricLogo = dynamic(() => import("@/components/ElectricLogo"), {
  ssr: false,
});

export default function HeroLogo() {
  const [animate, setAnimate] = useState(false);
  const [ready, setReady] = useState(false);
  const rendered = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setAnimate(!preference.matches);
      setReady(false);
      rendered.current = false;
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const onRender = useCallback((canvas: HTMLCanvasElement) => {
    if (rendered.current) return;
    rendered.current = true;
    setReady(true);
    canvas.addEventListener("webglcontextlost", () => {
      setAnimate(false);
      setReady(false);
    }, { once: true });
  }, []);

  return (
    <span
      aria-hidden="true"
      className="relative block size-14 shrink-0 rounded-full bg-primary/[0.025] ring-1 ring-primary/10 sm:size-18 md:size-22"
    >
      <Image
        src="/ak-logo-transparent.svg"
        alt=""
        width={500}
        height={500}
        unoptimized
        className={`absolute inset-[18%] size-[64%] object-contain drop-shadow-[0_0_5px_#d4ff2440] transition-opacity duration-500 motion-reduce:transition-none ${ready ? "opacity-20" : "opacity-80"}`}
      />
      {animate && (
        <span className="absolute -inset-[18%] block">
          <ElectricLogo
            src="/ak-logo-transparent.svg"
            color="#e4ff8a"
            glowColor="#d4ff24"
            scale={0.45}
            intensity={0.7}
            glow={0.65}
            thickness={0.8}
            strands={2}
            bend={0.15}
            crackle={0.35}
            arcs={0.12}
            flicker={0.15}
            fill={0.04}
            speed={0.7}
            interactive={false}
            theme="dark"
            onRender={onRender}
          />
        </span>
      )}
    </span>
  );
}

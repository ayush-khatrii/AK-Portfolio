"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/draggable-card";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

const placements = [
  "absolute left-[calc(50%-7rem)] top-10 rotate-[-4deg] sm:left-[5%] sm:top-14 lg:left-[8%]",
  "absolute left-[calc(50%-7rem)] top-20 rotate-[5deg] sm:left-auto sm:right-[5%] sm:top-40 lg:right-[8%]",
  "absolute left-[calc(50%-7rem)] top-14 rotate-[3deg] sm:left-[36%] sm:top-6",
  "absolute left-[calc(50%-7rem)] top-28 rotate-[-6deg] sm:left-[22%] sm:top-64",
  "absolute left-[calc(50%-7rem)] top-24 rotate-[7deg] sm:left-auto sm:right-[24%] sm:top-72",
  "absolute left-[calc(50%-7rem)] top-16 rotate-[-2deg] sm:left-[47%] sm:top-48",
  "absolute left-[calc(50%-7rem)] top-32 rotate-[4deg] sm:left-[10%] sm:top-80",
  "absolute left-[calc(50%-7rem)] top-12 rotate-[-7deg] sm:left-auto sm:right-[7%] sm:top-6",
  "absolute left-[calc(50%-7rem)] top-36 rotate-[2deg] sm:left-[40%] sm:top-80",
  "absolute left-[calc(50%-7rem)] top-20 rotate-[-3deg] sm:left-[2%] sm:top-44",
  "absolute left-[calc(50%-7rem)] top-28 rotate-[6deg] sm:left-auto sm:right-[2%] sm:top-80",
  "absolute left-[calc(50%-7rem)] top-8 rotate-[-5deg] sm:left-[58%] sm:top-16",
];

const DraggableGallery = ({ images }: { images: GalleryImage[] }) => (
  <DraggableCardContainer className="relative min-h-[34rem] w-full overflow-clip border-y border-border/40 bg-muted/10 sm:min-h-[44rem] lg:min-h-[48rem]">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/30 sm:text-sm"
    >
      Drag to explore
    </motion.p>

    {images.map((image, index) => (
      <DraggableCardBody
        key={image.src}
        className={`${placements[index % placements.length]} min-h-0 w-56 touch-none rounded-md border border-border/40 bg-background/95 p-3 shadow-2xl shadow-black/20 backdrop-blur sm:w-64 sm:p-4 lg:w-72`}
      >
        <div className="relative z-10 aspect-[4/5] w-full overflow-hidden border border-border/30 bg-muted/50">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
            className="pointer-events-none object-cover object-top select-none"
          />
        </div>
        <div className="relative z-10 mt-3 flex items-center justify-between gap-3">
          <h3 className="truncate text-sm font-medium text-foreground sm:text-base">{image.title}</h3>
          <span className="shrink-0 font-mono text-[9px] text-muted-foreground/60">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </DraggableCardBody>
    ))}
  </DraggableCardContainer>
);

export default DraggableGallery;

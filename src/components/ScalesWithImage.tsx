import Image from "next/image";
import { Scales } from "@/components/ui/scales";
import { cn } from "@/lib/utils";

const maskVertical = "[mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]";
const maskHorizontal = "[mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]";

const ScalesWithImage = ({ className }: { className?: string }) => (
  <div className={cn("relative flex w-full items-center justify-center py-10 sm:py-14 md:justify-end md:py-0", className)}>
    <div className="relative size-[15rem] sm:size-[17rem] lg:size-[19rem]">
      <div className={cn("absolute -inset-y-[22%] -left-8 w-7", maskVertical)}>
        <Scales size={8} />
      </div>
      <div className={cn("absolute -inset-y-[22%] -right-8 w-7", maskVertical)}>
        <Scales size={8} />
      </div>
      <div className={cn("absolute -inset-x-[22%] -top-8 h-7", maskHorizontal)}>
        <Scales size={8} />
      </div>
      <div className={cn("absolute -inset-x-[22%] -bottom-8 h-7", maskHorizontal)}>
        <Scales size={8} />
      </div>

      <div className="relative z-10 size-full overflow-hidden border border-border/40 bg-muted/50 shadow-2xl shadow-primary/5 transition-colors duration-300 hover:border-primary/40">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--primary),transparent_68%)] opacity-[0.08]" />
        <Image
          src="/profile-pic.png"
          alt="Portrait of Ayush Khatri"
          fill
          priority
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 272px, 304px"
          className="scale-[1.12] object-contain object-bottom transition-transform duration-500 hover:scale-[1.16]"
        />
      </div>
    </div>
  </div>
);

export default ScalesWithImage;

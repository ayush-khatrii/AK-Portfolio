import { aboutContent } from "@/constants";
import FooterWaves from "@/components/FooterWaves";
import SocialLinks from "@/components/SocialLinks";

export default function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[78%] opacity-30 sm:w-[48%]">
        <FooterWaves />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,var(--background)_32%,transparent_100%)] sm:bg-[linear-gradient(90deg,var(--background)_0%,var(--background)_52%,transparent_100%)]"
      />

      <div className="relative flex min-h-56 flex-col justify-between gap-8 px-1 py-7 sm:min-h-64 sm:py-9">
        <div className="max-w-md">
          <p className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
            {aboutContent.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {aboutContent.role} building thoughtful, dependable digital
            experiences.
          </p>
        </div>

        <SocialLinks backgroundColor="secondary" variant="grid" className="max-w-xl" />
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-border/70 px-1 py-4 text-xs text-muted-foreground">
        <p>© {currentYear} {aboutContent.name}</p>
        <p>Built with curiosity ❤️</p>
      </div>
    </footer>
  );
}

import { Code2, Globe2, Mail, MapPin } from "lucide-react";

import Age from "@/components/AgeSlot";

import { aboutContent, aboutInfo } from "@/constants";

const infoIcons = {
  mail: Mail,
  website: Globe2,
  location: MapPin,
  role: Code2,
} as const;

const AboutProfile = () => (
  <div className="grid items-center gap-6 lg:gap-10">
    <div>
      <p className="max-w-full text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {aboutContent.greeting}{" "}
        <span className="font-medium text-foreground">{aboutContent.name}</span>, a <Age />-year-old{" "}
        <code className="rounded border border-border/60 bg-muted/70 px-1.5 py-0.5 font-mono text-[0.88em] font-medium text-foreground">
          {aboutContent.role}
        </code>
        . {aboutContent.introduction}
        <br />
        <br />
        <span className="font-normal">{aboutContent.interests}</span>
      </p>
    </div>

    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
      {aboutInfo.map((item) => {
        const Icon = infoIcons[item.icon as keyof typeof infoIcons];

        const content = (
          <>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm ring-1 ring-border/50 sm:size-9">
              <Icon className="size-3.5 sm:size-4" />
            </span>

            <span className="min-w-0">
              <span className="block font-mono text-[9px] uppercase leading-none tracking-wider text-muted-foreground sm:text-xs">
                {item.label}
              </span>

              <span className="mt-1 block max-w-[14rem] truncate text-xs font-medium leading-none text-foreground sm:max-w-[18rem] sm:text-sm">
                {item.value}
              </span>
            </span>
          </>
        );

        const className =
          "group inline-flex min-w-0 max-w-full items-center gap-2.5 rounded-full border border-border/60 bg-muted/30 px-2 py-1.5 pr-4 transition-all duration-200 hover:border-border hover:bg-muted/60 sm:gap-3 sm:px-2.5 sm:py-1.5 sm:pr-5";

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        ) : (
          <div key={item.label} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  </div>
);

export default AboutProfile;
import { Code2, Globe2, Mail, MapPin } from "lucide-react";
import Age from "@/components/AgeSlot";
import { aboutContent, aboutInfo } from "@/constants";

const icons = { mail: Mail, website: Globe2, location: MapPin, role: Code2 } as const;

export default function AboutProfile() {
  return <div className="grid gap-5 md:grid-cols-[1.35fr_1fr] md:gap-8">
    <div className="body-copy">
      <p>{aboutContent.greeting} <span className="font-medium text-foreground">{aboutContent.name}</span>, a <Age />-year-old <span className="text-foreground">{aboutContent.role}</span>. {aboutContent.introduction}</p>
      <p className="mt-3">{aboutContent.interests}</p>
    </div>
    <dl className="grid content-start grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
      {aboutInfo.map(item => { const Icon = icons[item.icon as keyof typeof icons]; return <div key={item.label} className="flex min-w-0 gap-4 border-b border-border py-2.5 first:pt-0 sm:odd:pr-4 md:odd:pr-0">
        <Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary/80" />
        <div className="min-w-0"><dt className="eyebrow !text-[9px]">{item.label}</dt>
          <dd className="mt-1.5 break-words text-sm leading-6">{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{item.value}</a> : item.value}</dd>
        </div>
      </div>; })}
    </dl>
  </div>;
}

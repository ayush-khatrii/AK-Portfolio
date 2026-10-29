import { Code2, Globe2, Mail, MapPin } from "lucide-react";
import Age from "@/components/AgeSlot";
import { aboutContent, aboutInfo } from "@/constants";
const icons = { mail: Mail, website: Globe2, location: MapPin, role: Code2 } as const;
export default function AboutProfile() {
  return <div className="grid gap-6 ">
    <div className="text-sm leading-7 text-muted-foreground"><p>{aboutContent.greeting} <span className="font-medium text-foreground">{aboutContent.name}</span>, a <Age />-year-old <span className="text-foreground">{aboutContent.role}</span>. {aboutContent.introduction}</p><p className="mt-4">{aboutContent.interests}</p></div>
    <dl className="grid grid-cols-1 border-y border-border sm:grid-cols-2">{aboutInfo.map(item => { const Icon = icons[item.icon as keyof typeof icons]; return <div key={item.label} className="flex gap-3 border-b border-border py-3"><Icon aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-lime" /><div className="min-w-0"><dt className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{item.label}</dt><dd className="mt-1 break-words text-xs leading-5">{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{item.value}</a> : item.value}</dd></div></div>; })}</dl>
  </div>;
}

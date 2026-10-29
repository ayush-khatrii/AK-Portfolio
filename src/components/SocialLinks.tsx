import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "Twitter", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
];

export default function SocialLinks() {
  return <ul className="grid grid-cols-2 divide-x divide-y divide-border border-y border-border sm:grid-cols-4 sm:divide-y-0">
    {socials.map(({ name, icon: Icon, url }) => <li key={name} className="min-w-0">
      <a href={url} target="_blank" rel="noopener noreferrer" className="group flex min-h-12 items-center gap-2 px-3 text-xs text-muted-foreground transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-ring dark:hover:text-lime sm:px-4">
        <Icon aria-hidden="true" className="size-3.5 shrink-0" /><span>{name}</span><ArrowUpRight aria-hidden="true" className="ml-auto size-3 opacity-50 transition-transform motion-safe:group-hover:-translate-y-0.5" />
      </a>
    </li>)}
  </ul>;
}

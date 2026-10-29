import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/ayush-khatrii" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayushkhatrii" },
  { name: "Twitter", icon: FaXTwitter, url: "https://x.com/khatri_ayush15" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayush.khatrii" },
];

export default function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="mt-8 border-t border-border px-5 pb-8 pt-12 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {socials.map(({ name, icon: Icon, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="group flex min-h-14 items-center gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
            <Icon className="size-4" /><span>{name}</span><ArrowUpRight aria-hidden="true" className="ml-auto size-4 transition-transform motion-safe:group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
      <p className="my-10 text-[clamp(2.7rem,10.5vw,8rem)] font-semibold leading-none tracking-[-0.065em] text-foreground">Ayush Khatri<span className="text-cobalt dark:text-lime">.</span></p>
      <p className="border-t border-border pt-6 font-mono text-xs leading-6 text-muted-foreground">© {currentYear} Crafted with ❤️ and curiosity.</p>
    </footer>
  );
}

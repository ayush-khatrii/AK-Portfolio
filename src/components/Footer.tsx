import SocialLinks from "@/components/SocialLinks";

export default function Footer({ currentYear }: { currentYear: number }) {
  return <footer className="px-5 pb-6 pt-12 sm:px-8">
    <div className="mb-5 flex items-end justify-between gap-4"><span className="text-2xl font-medium tracking-[-0.05em]">Ayush Khatri<span className="text-cobalt dark:text-lime">.</span></span><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Around the web</span></div>
    <SocialLinks />
    <p className="mt-5 font-mono text-[10px] leading-5 text-muted-foreground">© {currentYear} Crafted with ❤️ and curiosity.</p>
  </footer>;
}

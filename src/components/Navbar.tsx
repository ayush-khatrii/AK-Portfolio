"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, ArrowRight, House, UserRound, FolderOpen, Images, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: UserRound },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Gallery", path: "/gallery", icon: Images },
  { name: "Blogs", path: "/blogs", icon: BookOpen },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 mx-auto w-full max-w-4xl px-3 sm:px-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-500">
      <nav aria-label="Primary navigation" className={cn(
        "pointer-events-auto rounded-2xl border border-border/60 bg-background/90 p-1.5 shadow-sm backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none supports-[backdrop-filter]:bg-background/75",
        scrolled && "border-border bg-background/95 shadow-lg supports-[backdrop-filter]:bg-background/90",
      )}>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 font-mono text-sm font-semibold transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Ayush Khatri — Home">AK</Link>
          <span className="text-sm font-medium tracking-tight md:hidden">Ayush Khatri<span className="text-primary">.</span></span>
          <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} aria-current={isActive(item.path) ? "page" : undefined} className={cn(
                  "flex min-h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive(item.path) ? "bg-muted text-foreground" : "text-muted-foreground",
                )}>
                  {isActive(item.path) && <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex shrink-0 items-center gap-1">
            <Button asChild size="sm" className="hidden rounded-lg text-xs md:inline-flex">
              <a href="mailto:ayushkhatri.dev@gmail.com">Contact <ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
            </Button>
            <ThemeButton />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-11 rounded-xl md:hidden" aria-label="Open navigation"><Menu className="size-5" aria-hidden="true" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="group/nav inset-y-2 right-2 flex h-[calc(100dvh-1rem)] w-[min(88vw,22rem)] flex-col gap-0 overflow-y-auto rounded-3xl border border-border/70 bg-background p-0 shadow-2xl data-[state=open]:duration-300 data-[state=closed]:duration-200">
                <div className="border-b border-border/60 px-5 pb-5 pt-7">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-mono text-sm font-semibold" aria-hidden="true">AK</div>
                  <SheetTitle className="text-lg font-semibold tracking-tight">Ayush Khatri<span className="text-primary">.</span></SheetTitle>
                  <SheetDescription className="mt-1 text-xs">A little more about me and my work.</SheetDescription>
                </div>
                <nav aria-label="Mobile navigation" className="px-3 py-5">
                  <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
                  <ul className="space-y-1">
                    {navItems.map((item, index) => (
                      <li key={item.path} style={{ animationDelay: `${60 + index * 40}ms` }} className="motion-safe:group-data-[state=open]/nav:animate-in motion-safe:group-data-[state=open]/nav:fade-in-0 motion-safe:group-data-[state=open]/nav:slide-in-from-right-3 motion-safe:duration-300 motion-safe:fill-mode-both">
                        <SheetClose asChild>
                          <Link href={item.path} aria-current={isActive(item.path) ? "page" : undefined} className={cn(
                            "group/item flex min-h-12 items-center gap-3 rounded-xl border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActive(item.path) ? "border-primary/20 bg-primary/10 text-foreground" : "border-transparent text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                          )}>
                            <item.icon className="size-4" aria-hidden="true" />
                            <span className="flex-1">{item.name}</span>
                            {isActive(item.path) ? <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" /> : <ArrowRight className="size-3.5 opacity-40 transition-transform group-hover/item:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-sm font-medium">Have something in mind?</p>
                    <p className="mb-4 mt-1 text-xs text-muted-foreground">Let’s make it happen.</p>
                    <SheetClose asChild>
                      <Button asChild className="min-h-11 w-full justify-between rounded-xl text-xs"><a href="mailto:ayushkhatri.dev@gmail.com">Let’s talk <ArrowUpRight className="size-4" aria-hidden="true" /></a></Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

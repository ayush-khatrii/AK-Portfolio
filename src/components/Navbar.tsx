"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, Terminal, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex h-14 w-full max-w-5xl items-center justify-between border border-border/30 bg-background/75 px-3 backdrop-blur-xl transition-all duration-300 sm:px-4",
          scrolled && "border-border/60 bg-background/90 shadow-lg shadow-background/50",
        )}
      >
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-2.5 font-mono text-xs font-medium tracking-tight"
          aria-label="Ayush Khatri — Home"
        >
          <span className="flex size-7 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
            <Terminal className="size-3.5" aria-hidden="true" />
          </span>
          <span>AK<span className="text-muted-foreground">.DEV</span></span>
        </Link>

        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item, index) => {
              const active = pathname === item.path;
              return (
                <NavigationMenuItem key={item.path}>
                  <Link
                    href={item.path}
                    className={cn(
                      "relative flex min-h-11 items-center gap-2 px-3 font-mono text-xs transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="text-[9px] text-muted-foreground/50">0{index + 1}</span>
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 bottom-1 h-px bg-primary"
                      />
                    )}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <Button asChild variant="outline" size="sm" className="h-9 border-border/40 bg-background/40 font-mono text-xs hover:border-primary/40">
              <a href="mailto:ayushkhatri.dev@gmail.com">
                Contact <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>

          <ThemeButton />

          <Sheet>
            <SheetTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="icon" className="size-11" aria-label="Open navigation">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)] border-l border-border/40 bg-background p-0 pt-14">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="p-3">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "flex min-h-14 items-center justify-between border-b border-border/30 px-3 font-mono text-sm transition-colors hover:bg-muted/50",
                        pathname === item.path && "bg-primary/10 text-primary",
                      )}
                    >
                      <span><span className="mr-3 text-xs text-muted-foreground/50">0{index + 1}</span>{item.name}</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

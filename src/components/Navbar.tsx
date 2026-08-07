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
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 max-w-4xl mx-auto  w-full px-3 sm:px-4">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "pointer-events-auto mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-border/50 bg-background/80 shadow-sm backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-background/70",
          scrolled && "border-border/70 bg-background/95 shadow-lg supports-[backdrop-filter]:bg-background/85",
        )}
      >
        <div className="flex h-12 items-stretch">
          <div className="flex shrink-0 items-center px-3 sm:px-4 lg:pr-6">
            <Link
              href="/"
              className="group flex min-h-11 items-center gap-2.5 font-mono text-xs font-medium tracking-tight"
              aria-label="Ayush Khatri — Home"
            >
              <span className="flex size-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                <Terminal className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                AK<span className="text-muted-foreground">.DEV</span>
              </span>
            </Link>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center border-x border-dotted border-border/50 md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {navItems.map((item) => {
                  const active = pathname === item.path;
                  return (
                    <NavigationMenuItem key={item.path}>
                      <Link
                        href={item.path}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative flex min-h-11 items-center rounded-md px-3 font-mono text-xs transition-colors hover:text-primary lg:px-4",
                          active ? "text-foreground" : "text-muted-foreground",)}
                      >
                        {item.name}
                        {active && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-x-3 bottom-1.5 h-px bg-primary"
                          />
                        )}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 px-1.5 sm:px-2">
            <div className="hidden md:block">
              <Button asChild size="xs" className="font-mono text-xs">
                <a href="mailto:ayushkhatri.dev@gmail.com">
                  Contact <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            </div>

            <ThemeButton />

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="size-11" aria-label="Open navigation">
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(88vw,22rem)] border-l border-border/40 bg-background p-0 pt-14">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="p-3">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <Link
                        href={item.path}
                        aria-current={pathname === item.path ? "page" : undefined}
                        className={cn(
                          "flex min-h-14 items-center justify-between border-b border-dotted border-border/40 px-3 font-mono text-sm transition-colors hover:bg-muted/50",
                          pathname === item.path && "bg-primary/10 text-primary",
                        )}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Link>
                    </SheetClose>
                  ))}

                  <SheetClose asChild>
                    <Button asChild className="mt-4 min-h-11 w-full font-mono text-xs">
                      <a href="mailto:ayushkhatri.dev@gmail.com">
                        Contact <ArrowUpRight className="size-3.5" />
                      </a>
                    </Button>
                  </SheetClose>
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

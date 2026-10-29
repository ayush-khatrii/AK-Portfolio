"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FolderOpen,
  House,
  Images,
  Menu,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: UserRound },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Gallery", path: "/gallery", icon: Images },
  { name: "Blogs", path: "/blogs", icon: BookOpen },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ||
    (path !== "/" && pathname.startsWith(path + "/"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");

    const closeOnDesktop = () => {
      if (desktop.matches) {
        setOpen(false);
      }
    };

    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-background/80 px-3 pb-0 pt-2 backdrop-blur-xl sm:px-4">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto w-full max-w-6xl rounded-2xl border border-border/60 bg-background/90 p-2 shadow-sm",
          "transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
          "supports-[backdrop-filter]:bg-background/75 sm:px-3",
          scrolled &&
            "border-border bg-background/95 shadow-lg supports-[backdrop-filter]:bg-background/90",
        )}
      >
        <div className="flex min-w-0 items-center gap-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Ayush Khatri — Home"
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-xl",
              "border border-primary/20 bg-primary/10 font-mono text-xs font-semibold",
              "transition-colors hover:bg-primary/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            AK
          </Link>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="min-w-0 flex-1 truncate rounded-md text-sm font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            Ayush Khatri
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 text-sm font-medium",
                      "transition-colors hover:bg-muted hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full bg-primary"
                      />
                    )}

                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <Button
              asChild
              size="sm"
              className="hidden min-h-9 gap-2 rounded-xl px-3 text-xs md:inline-flex"
            >
              <a href="mailto:ayushkhatri.dev@gmail.com">
                Contact
                <ArrowUpRight
                  className="size-3.5"
                  aria-hidden="true"
                />
              </a>
            </Button>



            {/* Mobile navigation */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation"
                  className="size-11 rounded-xl md:hidden"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className={cn(
                  "inset-y-2 right-2 flex h-[calc(100dvh-1rem)]",
                  "w-[calc(100%-1rem)] max-w-sm flex-col gap-0",
                  "overflow-y-auto overscroll-contain rounded-3xl",
                  "border border-border/70 bg-background p-0 shadow-2xl",
                  "data-[state=open]:duration-300 data-[state=closed]:duration-200",
                  "motion-reduce:animate-none",
                )}
              >
                <div className="border-b border-border/60 px-5 pb-5 pt-6">
                  <div
                    aria-hidden="true"
                    className="mb-4 flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-mono text-sm font-semibold"
                  >
                    AK
                  </div>

                  <SheetTitle className="text-lg font-semibold tracking-tight">
                    Ayush Khatri
                    <span className="text-primary">.</span>
                  </SheetTitle>

                  <SheetDescription className="mt-1 text-xs leading-6">
                    A little more about me and my work.
                  </SheetDescription>
                </div>

                <nav
                  aria-label="Mobile navigation"
                  className="px-3 py-5"
                >
                  <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Explore
                  </p>

                  <ul className="space-y-1">
                    {navItems.map((item) => {
                      const active = isActive(item.path);
                      const Icon = item.icon;

                      return (
                        <li key={item.path}>
                          <SheetClose asChild>
                            <Link
                              href={item.path}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "group flex min-h-12 items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium",
                                "transition-colors",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                active
                                  ? "border-primary/20 bg-primary/10 text-foreground"
                                  : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                              )}
                            >
                              <Icon
                                className="size-4 shrink-0"
                                aria-hidden="true"
                              />

                              <span className="min-w-0 flex-1">
                                {item.name}
                              </span>

                              {active ? (
                                <span
                                  aria-hidden="true"
                                  className="size-1.5 shrink-0 rounded-full bg-primary"
                                />
                              ) : (
                                <ArrowRight
                                  aria-hidden="true"
                                  className="size-3.5 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                                />
                              )}
                            </Link>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-sm font-medium">
                      Have something in mind?
                    </p>

                    <p className="mb-4 mt-1 text-xs leading-6 text-muted-foreground">
                      Let’s make it happen.
                    </p>

                    <SheetClose asChild>
                      <Button
                        asChild
                        className="min-h-11 w-full justify-between rounded-xl text-xs"
                      >
                        <a href="mailto:ayushkhatri.dev@gmail.com">
                          Let’s talk
                          <ArrowUpRight
                            className="size-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
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
}

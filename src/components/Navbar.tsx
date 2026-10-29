"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/Contact";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
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

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path + "/"));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onResize);
    };
  }, []);
  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-5xl sm:top-3 sm:w-full md:w-full">
      <div className="w-full">
        <nav
          aria-label="Primary navigation"
          data-scrolled={scrolled}
          className="bg-background border pointer-events-auto flex min-h-14 items-center gap-3 rounded-none px-3 py-1.5 sm:rounded-full md:gap-4"
        >
          <Link
            href="/"
            aria-label="Ayush Khatri — Home"
            className="flex shrink-0 items-center gap-2 text-sm font-medium tracking-tight"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/og-image.png"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              preload
              className="size-8 shrink-0 rounded-full object-cover ring-1 ring-primary/20"
            />
            <span>
              Ayush Khatri<span className="text-primary">.</span>
            </span>
          </Link>
          <ul className="ml-auto hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={cn(
                    "relative flex min-h-9 items-center gap-1.5 rounded-full border border-transparent px-2.5 text-xs transition-colors hover:bg-foreground/5 hover:text-foreground press:bg-foreground/5 press:text-foreground",
                    isActive(item.path)
                      ? "border-foreground/10 bg-foreground/5 text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {isActive(item.path) && (
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-full bg-primary"
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            size="sm"
            variant="outline"
            onClick={openContact}
            className="hidden h-9 shrink-0 rounded-full border-foreground/15 bg-foreground/5 px-3 md:inline-flex"
          >
            Contact <ArrowUpRight className="size-3.5" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation"
                className="ml-auto rounded-full md:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              data-lenis-prevent
              side="right"
              className="liquid-sheet inset-y-3 right-3 flex h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] flex-col overflow-y-auto rounded-3xl border px-5 pb-5 pt-14 sm:max-w-sm"
            >
              <SheetTitle className="text-2xl tracking-tight">
                Ayush Khatri<span className="text-primary">.</span>
              </SheetTitle>
              <SheetDescription></SheetDescription>
              <nav aria-label="Mobile navigation" className="mt-5">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={item.path} className="border-b border-border">
                      <SheetClose asChild>
                        <Link
                          href={item.path}
                          aria-current={
                            isActive(item.path) ? "page" : undefined
                          }
                          className={cn(
                            "flex items-center gap-4 py-3 text-lg",
                            isActive(item.path)
                              ? "text-primary"
                              : "text-foreground",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="font-mono text-[10px] text-muted-foreground"
                          >
                            0{index + 1}
                          </span>
                          {item.name}
                          <ArrowRight
                            aria-hidden="true"
                            className="ml-auto size-4"
                          />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-base">Have something in mind?</p>
                <p className="mb-5 mt-2 text-sm text-muted-foreground">
                  Let’s make it happen.
                </p>
                <Button onClick={openContact}>
                  Let’s talk <ArrowUpRight />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
      </header>

      <Sheet open={contactOpen} onOpenChange={setContactOpen}>
        <SheetContent
          data-lenis-prevent
          side="right"
          className="w-full max-w-full overflow-y-auto overscroll-contain bg-card px-5 pb-5 pt-14 sm:max-w-xl sm:px-8"
        >
          <SheetHeader className="pr-6 text-left">
            <SheetTitle className="text-3xl font-medium tracking-[-0.04em]">
              Start a project
            </SheetTitle>
            <SheetDescription className="!mt-2 text-sm leading-7">
              Tell me what you need and how I can reach you. I&apos;ll get back
              to you as soon as possible.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-5">
            <ContactForm onSuccess={() => setContactOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

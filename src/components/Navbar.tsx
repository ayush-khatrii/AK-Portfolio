"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, House, UserRound, FolderOpen, Images, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";

const links = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: UserRound },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Gallery", path: "/gallery", icon: Images },
  { name: "Blogs", path: "/blogs", icon: BookOpen },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur-md">
      <nav aria-label="Primary navigation" className="mx-auto flex h-full max-w-5xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Ayush Khatri — Home" className="mr-auto font-mono text-sm font-semibold tracking-tight">AK<span className="text-cobalt dark:text-lime">↗</span></Link>
        <ul className="hidden items-center gap-5 md:flex">
          {links.map(({ name, path }) => <li key={path}><Link href={path} aria-current={active(path) ? "page" : undefined} className={`text-xs transition-colors hover:text-foreground ${active(path) ? "text-cobalt dark:text-lime" : "text-muted-foreground"}`}>{name}</Link></li>)}
        </ul>
        <ThemeButton />
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
            <SheetContent side="right" className="inset-y-3 right-3 flex h-[calc(100dvh-1.5rem)] w-[calc(100%-2rem)] max-w-xs flex-col gap-0 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-14 shadow-2xl sm:max-w-xs">
              <div className="border-b border-border pb-5 text-center">
                <span aria-hidden="true" className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-border font-mono text-xs text-cobalt dark:text-lime">AK↗</span>
                <SheetTitle className="text-base font-medium tracking-tight">Ayush Khatri.</SheetTitle>
                <SheetDescription className="mt-1 text-xs leading-5">A little more about me and my work.</SheetDescription>
              </div>
              <nav aria-label="Mobile navigation" className="flex flex-1 items-center justify-center py-6">
                <ul className="flex w-full flex-col gap-2">
                  {links.map(({ name, path, icon: Icon }) => (
                    <li key={path} className="relative flex min-h-10 items-center justify-center">
                      {active(path) && <span aria-hidden="true" className="absolute left-3 size-1 rounded-full bg-cobalt dark:bg-lime" />}
                      <SheetClose asChild><Button asChild variant={active(path) ? "secondary" : "ghost"}><Link href={path} aria-current={active(path) ? "page" : undefined}><Icon aria-hidden="true" />{name}</Link></Button></SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex justify-center border-t border-border pt-5"><SheetClose asChild><Button asChild><a href="mailto:ayushkhatri.dev@gmail.com">Let’s talk <ArrowUpRight /></a></Button></SheetClose></div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

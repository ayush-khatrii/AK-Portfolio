"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";

const links = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Gallery", path: "/gallery" }, { name: "Blogs", path: "/blogs" }];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur-md">
    <nav aria-label="Primary navigation" className="mx-auto flex h-full max-w-5xl items-center gap-4 px-5 sm:px-8">
      <Link href="/" aria-label="Ayush Khatri — Home" className="mr-auto font-mono text-sm font-semibold tracking-tight">AK<span className="text-cobalt dark:text-lime">↗</span></Link>
      <ul className="hidden items-center gap-5 md:flex">{links.map(({ name, path }) => <li key={path}><Link href={path} aria-current={pathname === path ? "page" : undefined} className={`text-xs transition-colors hover:text-foreground ${pathname === path ? "text-cobalt dark:text-lime" : "text-muted-foreground"}`}>{name}</Link></li>)}</ul>
      <ThemeButton />
      <div className="md:hidden"><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent><SheetTitle>Ayush Khatri.</SheetTitle><SheetDescription>A little more about me and my work.</SheetDescription><nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-2">{links.map(({ name, path }) => <SheetClose asChild key={path}><Button asChild variant={pathname === path ? "secondary" : "ghost"}><Link href={path}>{name}</Link></Button></SheetClose>)}</nav><div className="mt-8"><Button asChild><a href="mailto:ayushkhatri.dev@gmail.com">Let’s talk <ArrowUpRight /></a></Button></div></SheetContent></Sheet></div>
    </nav>
  </header>;
}

"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AtlasLogo } from "./atlas-logo";
import { SITE_NAV, SITE_TAIL_NAV } from "@/lib/atlas-content";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full nav-atlas",
        "border-b transition-[border-color,backdrop-filter] duration-300",
        scrolled ? "border-cloud/10" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center"
          aria-label="AtlasHub Editions — início"
        >
          <AtlasLogo variant="full" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {SITE_NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-[0.82rem] font-medium text-steel transition-colors hover:text-cloud after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan-signal after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Tail actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-steel transition-colors hover:bg-cloud/5 hover:text-cloud"
            aria-label="Pesquisar"
          >
            <Search className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          </button>
          <span className="h-5 w-px bg-cloud/15" aria-hidden />
          <div className="flex items-center gap-4">
            {SITE_TAIL_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[0.82rem] font-medium text-steel transition-colors hover:text-cloud"
              >
                {item.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-cyan-signal/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cloud lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(86vw,22rem)] border-l-cloud/10 bg-ink-soft p-0"
          >
            <SheetTitle className="sr-only">Navegação AtlasHub Editions</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-cloud/10 px-5 py-4">
                <AtlasLogo variant="compact" markSize={28} />
                <SheetClose asChild>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md text-steel hover:text-cloud"
                    aria-label="Fechar menu"
                  >
                    <span className="text-xl leading-none" aria-hidden>×</span>
                  </button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile">
                {SITE_NAV.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-cloud/90 transition-colors hover:bg-cloud/5 hover:text-cloud"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t border-cloud/10 px-5 py-4">
                <div className="flex flex-col gap-2">
                  {SITE_TAIL_NAV.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-sm font-medium text-steel hover:text-cloud"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 text-cyan-signal/70" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-steel-dim">
                  People · Technology · Results
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

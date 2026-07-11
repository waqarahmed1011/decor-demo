"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/content";
import { ChevronDownIcon } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white shadow-[0_2px_18px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1425px] items-center justify-between px-5 transition-all duration-300 lg:px-10",
          solid ? "h-[84px]" : "h-[100px] lg:h-[118px]"
        )}
      >
        {/* Logo */}
        <a href="#home" className="relative block shrink-0" aria-label="The Perfect Affair — home">
          <Image
            src="/images/tpa-logo-circle.png"
            alt="The Perfect Affair"
            width={128}
            height={128}
            priority
            className={cn(
              "w-auto transition-all duration-300",
              solid ? "h-14" : "h-[74px] lg:h-[88px]"
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={cn(
                    "flex items-center gap-1 text-[16px] font-medium transition-colors",
                    solid ? "text-black hover:text-brand" : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 min-w-[190px] -translate-x-1/2 translate-y-2 rounded-md bg-white py-3 opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2 text-[16px] font-medium text-black transition-colors hover:text-brand"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[16px] font-medium transition-colors",
                  solid ? "text-black hover:text-brand" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className={cn(
            "flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden",
            solid || menuOpen ? "text-black" : "text-white"
          )}
        >
          <span
            className={cn(
              "h-[2px] w-6 bg-current transition-transform duration-300",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn("h-[2px] w-6 bg-current transition-opacity duration-300", menuOpen && "opacity-0")}
          />
          <span
            className={cn(
              "h-[2px] w-6 bg-current transition-transform duration-300",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-[520px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 pb-6">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-black/5 py-3 text-[16px] font-medium text-black"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="flex flex-col pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-black/5 py-2.5 text-[15px] text-black/70"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

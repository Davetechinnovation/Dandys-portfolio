"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop rail: vertical text nav */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 hidden md:flex w-14 flex-col items-center justify-between border-r border-hair bg-paper py-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold"
          aria-label="Home"
        >
          D.
        </Link>
        <nav aria-label="Main" className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-display text-[10.5px] font-medium transition-colors [writing-mode:vertical-rl] ${
                isActive(item.href)
                  ? "text-blue"
                  : "text-dim hover:text-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span aria-hidden className="font-display text-[10px] text-dim">
          ©25
        </span>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-hair bg-paper px-5 md:hidden">
        <Link href="/" className="font-display text-lg font-extrabold">
          D.
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="fixed top-14 left-0 right-0 z-50 border-b border-hair bg-paper md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border-b border-hair px-5 py-3.5 font-display text-[15px] ${
                isActive(item.href)
                  ? "text-blue"
                  : "text-dim active:text-ink"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

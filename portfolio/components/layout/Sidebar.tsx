"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Briefcase, User, FileText, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Work", href: "/work" },
  { icon: User, label: "About", href: "/about" },
  { icon: FileText, label: "Resume", href: "/resume" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-16 bg-background border-r border-border items-center justify-between py-8 px-3 z-50">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 hover:opacity-75 transition-opacity"
            aria-label="Home"
          >
            <span className="text-2xl font-bold">D.</span>
          </Link>

          {/* Icons */}
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-opacity ${
                  isActive(item.href)
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <item.icon size={20} strokeWidth={1.5} />
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b border-border flex items-center justify-between px-4 z-50">
        <Link href="/" className="text-xl font-bold">
          D.
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden fixed top-16 left-0 right-0 bg-background border-b border-border z-40">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 border-b border-border hover:bg-card transition-colors ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={16} strokeWidth={1.5} />
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

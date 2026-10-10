"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setTheme(
      (document.documentElement.dataset.theme as "light" | "dark") || "light",
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("dandy-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-[2px] border border-hair bg-paper text-ink transition-colors hover:border-blue hover:text-blue"
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}

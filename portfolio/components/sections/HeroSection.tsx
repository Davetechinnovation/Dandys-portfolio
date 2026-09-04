import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-0">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-20 md:py-0 w-full">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            01 // SOFTWARE ENGINEERING — FULL STACK
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
            Udoka Dandave
          </h1>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            a.k.a. Dandy — full stack software engineer
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {profile.summary}
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/work"
            className="px-8 py-3 bg-foreground text-background hover:opacity-90 transition-opacity font-semibold uppercase tracking-wider text-sm"
          >
            VIEW WORK
          </Link>
          <Link
            href={profile.cv}
            download
            className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground/5 transition-colors font-semibold uppercase tracking-wider text-sm"
          >
            DOWNLOAD CV
          </Link>
        </div>

        <div className="mt-24 flex items-center gap-3 text-muted-foreground">
          <ArrowDown size={16} className="animate-bounce" />
          <p className="text-xs uppercase tracking-widest">
            Based in Enugu, Nigeria — working worldwide
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/common/ProjectCard";
import type { Project } from "@/lib/data";

const allFilters = ["All", "Fintech", "SaaS", "Streaming", "Web"];

export function WorkPageClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase()),
          ),
        );

  return (
    <main className="md:ml-14">
      <div className="mx-auto max-w-[72rem] px-6 pb-24 pt-28 md:px-16 md:pt-24">
        <p className="mb-5 font-display text-xs font-medium tracking-[0.06em] text-dim">
          Project archive
        </p>
        <h1 className="max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)]">
          Real products, <span className="text-blue">shipped.</span>
        </h1>
        <p className="mt-8 max-w-[34rem]">
          Fintech, streaming, B2B automation and enterprise operations. Every
          entry here ran in production, not on a laptop.
        </p>

        {/* Filters: understated text buttons, not chips */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-hair pb-5">
          {allFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-display text-[14.5px] transition-colors ${
                filter === f
                  ? "font-semibold text-blue underline decoration-blue underline-offset-8"
                  : "text-dim hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects: editorial rows with images */}
        <section className="pt-4">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-dim">
              Nothing in this category yet. Check the others.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/common/ProjectCard";
import type { Project } from "@/lib/data";

const allFilters = ["ALL", "FINTECH", "SAAS", "STREAMING", "WEB"];

export function WorkPageClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <main className="md:ml-16">
      {/* Header */}
      <div className="sticky top-0 md:static md:pt-8 bg-background/80 md:bg-transparent backdrop-blur md:backdrop-blur-none z-40 border-b md:border-b-0 border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 md:py-0">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            01 // PROJECT ARCHIVE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SELECTED WORK</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Real products shipped across fintech, streaming, B2B automation and
            enterprise operations. Emphasizing precision, performance, and
            purpose.
          </p>

          {/* Filters */}
          <div className="flex gap-4 flex-wrap pb-6 md:pb-0">
            {allFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-4 py-2 uppercase tracking-widest transition-all ${
                  filter === f
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground hover:bg-card/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              NO PROJECTS IN THIS CATEGORY YET.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

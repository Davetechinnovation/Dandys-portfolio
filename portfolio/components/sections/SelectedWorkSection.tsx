import Link from "next/link";
import { ProjectCard } from "@/components/common/ProjectCard";
import type { Project } from "@/lib/data";

export function SelectedWorkSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            02 // SELECTED WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Built for production.
          </h2>
          <p className="text-muted-foreground">// 2024 — 2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} showImage={false} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/work"
            className="text-xs uppercase tracking-widest text-foreground underline underline-offset-8 hover:opacity-70 transition-opacity"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>
      </div>
    </section>
  );
}

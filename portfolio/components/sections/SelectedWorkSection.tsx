import Link from "next/link";
import { ProjectCard } from "@/components/common/ProjectCard";
import type { Project } from "@/lib/data";

export function SelectedWorkSection({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-[72rem] px-6 py-24 md:px-16 md:py-32">
      <div className="mb-6 flex items-baseline justify-between border-b border-hair pb-4">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05]">
          Selected work
        </h2>
        <span className="text-[15px] text-dim">2024-2026</span>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} showImage={false} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/work"
          className="font-display text-[15px] font-medium underline decoration-hair underline-offset-8 transition-colors hover:text-blue hover:decoration-blue"
        >
          All projects
        </Link>
      </div>
    </section>
  );
}

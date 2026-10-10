import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  showImage = true,
}: {
  project: Project;
  showImage?: boolean;
}) {
  return (
    <article>
      {showImage && project.image && (
        <div className="relative h-64 w-full overflow-hidden border border-ink">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}
      {/* editorial row: no box, hairline beneath */}
      <div
        className={`group border-b border-hair py-7 transition-[padding] duration-300 hover:pl-3.5 ${
          showImage && project.image ? "pt-5" : ""
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-[-0.015em] transition-colors group-hover:text-blue">
            {project.title}
          </h3>
          <span className="font-display text-[13px] text-dim">
            {project.status === "IN DEVELOPMENT" ? "In development" : ""}
          </span>
        </div>
        <p className="mt-1.5 max-w-[52ch] text-[15.5px] leading-relaxed text-dim">
          {project.description}
        </p>
        {/* tags as plain italic text, not chips */}
        <p className="mt-2 text-[14.5px] italic text-dim">
          {project.tags.join(", ")}
        </p>
        {project.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[14px] font-medium underline decoration-hair underline-offset-4 transition-colors hover:text-blue hover:decoration-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

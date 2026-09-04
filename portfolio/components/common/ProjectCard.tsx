import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  showImage = true,
}: {
  project: Project;
  showImage?: boolean;
}) {
  return (
    <article className="border border-border rounded-none overflow-hidden transition-all hover:opacity-80 flex flex-col">
      {showImage && project.image && (
        <div className="w-full h-64 bg-muted/20 overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.status && (
            <span className="text-xs px-3 py-1 border border-foreground/60 text-foreground uppercase tracking-wider">
              {project.status}
            </span>
          )}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 border border-border text-foreground/70 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

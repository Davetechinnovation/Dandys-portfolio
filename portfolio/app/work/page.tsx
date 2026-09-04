import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { WorkPageClient } from "@/components/sections/WorkPageClient";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Work — Udoka Dandave, Web Developer",
  description:
    "Selected projects by Udoka Dandave (Dandy): fintech, streaming, B2B automation and operations platforms built with React, Next.js, Node.js, Laravel and React Native.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <WorkPageClient projects={projects} />
      <Footer />
    </div>
  );
}

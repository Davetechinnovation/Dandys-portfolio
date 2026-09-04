import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ResumePageClient } from "@/components/sections/ResumePageClient";
import { experience, education, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — Udoka Dandave, Software Engineer",
  description:
    "Resume of Udoka Dandave (Dandy) — software engineer with 4+ years across fintech, B2B automation and enterprise systems.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <ResumePageClient
        experience={experience}
        education={education}
        profile={profile}
      />
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { AboutPageClient } from "@/components/sections/AboutPageClient";
import { profile, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Udoka Dandave (Dandy) — Software Engineer",
  description:
    "Who is Udoka Dandave? Full stack software engineer (aka Dandy) from Enugu, Nigeria — React, Next.js, Node.js and Laravel. 4+ years building for fintech, streaming and B2B.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <AboutPageClient profile={profile} skills={skills} />
      <Footer />
    </div>
  );
}

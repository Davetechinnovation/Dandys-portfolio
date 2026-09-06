import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { AboutPageClient } from "@/components/sections/AboutPageClient";
import { profile, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Udoka Dandave (Dandy) — Software Engineer",
  description:
    "Who is Udoka Dandave? Full name Udoka Dandave Chibuzor (Daniel David), aka Dandy — full stack engineer from Enugu, Nigeria. React, Next.js, Node.js, Laravel.",
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

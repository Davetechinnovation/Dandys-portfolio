import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ContactPageClient } from "@/components/sections/ContactPageClient";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Hire Udoka Dandave, Web Developer",
  description:
    "Hire Udoka Dandave (Dandy) — full stack engineer for freelance, contracts and remote roles. Replies within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <ContactPageClient profile={profile} />
      <Footer />
    </div>
  );
}

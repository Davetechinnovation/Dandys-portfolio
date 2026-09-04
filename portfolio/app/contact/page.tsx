import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ContactPageClient } from "@/components/sections/ContactPageClient";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Hire Udoka Dandave, Web Developer",
  description:
    "Hire Udoka Dandave (Dandy): full stack software engineer available for freelance, contracts and full-time remote roles. Response within 24 hours — hello@dandaveudoka.com.ng.",
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

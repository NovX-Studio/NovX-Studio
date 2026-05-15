import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import SplineSection from "@/components/sections/SplineSection";
import ServicesOrbital from "@/components/sections/ServicesOrbital";
import ProyectosSection from "@/components/sections/ProyectosSection";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "NovX Studio — Code that connects.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SplineSection />
      <ServicesOrbital />
      <ProyectosSection />
      <HomeCTA />
    </>
  );
}

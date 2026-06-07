"use client";

import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TrustedByLogos from "@/components/home/TrustedByLogos";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <StatsSection />
      <TrustedByLogos />
      <ServicesOverview />
      <FeaturesSection />
      <TestimonialsSlider />
      <CTABanner />
    </div>
  );
}

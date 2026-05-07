"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTABanner from "@/components/home/CTABanner";

const sectionVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,  // Add 'as const'
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const hoverEffect = {
  whileHover: { y: -5, transition: { duration: 0.3 } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="overflow-hidden relative">
      {/* Professional Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />

      <Hero />
      
      <motion.div {...sectionVariants} {...hoverEffect}>
        <StatsSection />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        {...hoverEffect}
      >
        <ServicesOverview />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        {...hoverEffect}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, rotate: -1, scale: 0.9 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
        {...hoverEffect}
      >
        <TestimonialsSlider />
      </motion.div>

      <motion.div {...sectionVariants} {...hoverEffect}>
        <CTABanner />
      </motion.div>
    </div>
  );
}

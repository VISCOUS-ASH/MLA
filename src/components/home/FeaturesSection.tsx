"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    title: "100% Trusted Agency",
    description: "We are recognized for our transparency and commitment to client success, ensuring every partnership is built on trust.",
    icon: ShieldCheck,
  },
  {
    title: "Data-Driven Strategies",
    description: "Our decisions are backed by thorough market research and analytics, ensuring high precision in every campaign.",
    icon: Zap,
  },
  {
    title: "ROI-Focused Campaigns",
    description: "We don't just focus on likes and clicks; we prioritize measurable business growth and return on investment.",
    icon: TrendingUp,
  },
  {
    title: "Digital Transformation",
    description: "We help traditional businesses transition into the digital age with cutting-edge tools and methodologies.",
    icon: CheckCircle2,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="We Drive Results That Matter to Your Business"
              description="At Media Lift Advisor, we combine creativity with technical expertise to deliver outstanding digital experiences."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt="Our Team Collaborating"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

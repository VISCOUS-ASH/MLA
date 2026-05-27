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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/10">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                  className="group relative space-y-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg"
                >
                  {/* Icon with gradient background */}
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <feature.icon className="relative z-10 w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500" />
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
            {/* Image with gradient overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt="Our Team Collaborating"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Enhanced decorative blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl opacity-60 z-0 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-purple-400/30 to-pink-400/30 rounded-full blur-3xl opacity-60 z-0 animate-pulse delay-1000" />
            
            {/* Floating gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
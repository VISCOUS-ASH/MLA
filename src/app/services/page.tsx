"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Search, Share2, FileText, Users, Globe, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "SEO Optimization",
    slug: "seo",
    description: "Drive more organic traffic with our comprehensive SEO strategies, from technical audits to keyword research.",
    icon: Search,
    features: ["Technical SEO", "On-Page Optimization", "Backlink Strategy", "Keyword Research"],
    color: "blue",
  },
  {
    title: "Social Media Management",
    slug: "smm",
    description: "Build a strong social presence and engage with your audience where they are most active.",
    icon: Share2,
    features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social Ads"],
    color: "indigo",
  },
  {
    title: "Content Marketing",
    slug: "content",
    description: "Create high-value content that attracts, engages, and converts your target audience effectively.",
    icon: FileText,
    features: ["Blog Strategy", "Copywriting", "Video Content", "Email Marketing"],
    color: "purple",
  },
  {
    title: "Paid Advertising",
    slug: "paid-ads",
    description: "Maximize your ROI with targeted PPC campaigns on Google, Meta, and other premium networks.",
    icon: BarChart3,
    features: ["Google Ads", "Meta Ads", "Retargeting", "Conversion Tracking"],
    color: "pink",
  },
  {
    title: "Web Design & Development",
    slug: "web-dev",
    description: "Convert visitors into customers with high-performance, mobile-first, and SEO-friendly websites.",
    icon: Globe,
    features: ["React/Next.js", "E-commerce", "Performance Tuning", "UI/UX Design"],
    color: "cyan",
  },
  {
    title: "Brand Strategy",
    slug: "branding",
    description: "Define your unique brand voice and positioning to stand out in a crowded digital marketplace.",
    icon: Users,
    features: ["Brand Identity", "Market Research", "Positioning", "Visual Branding"],
    color: "orange",
  },
];

const colorVariants: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  indigo: "from-indigo-500 to-indigo-600",
  purple: "from-purple-500 to-purple-600",
  pink: "from-pink-500 to-pink-600",
  cyan: "from-cyan-500 to-cyan-600",
  orange: "from-orange-500 to-orange-600",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Solutions for Your Success"
        subtitle="Our Services"
        description="Comprehensive digital marketing services tailored to your business goals. We combine data, creativity, and technology to drive results."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorVariants[service.color]} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between px-6 py-4 bg-gray-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                >
                  <span className="font-bold">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Our Strategic Approach"
            subtitle="How We Work"
            centered
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-600/30 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Discovery", desc: "We learn your business, goals, and target audience." },
              { step: "02", title: "Strategy", desc: "Crafting a data-driven roadmap for success." },
              { step: "03", title: "Execution", desc: "Implementing campaigns with precision and care." },
              { step: "04", title: "Analysis", desc: "Continuous monitoring and optimization for ROI." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors group text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-4 font-poppins opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3 font-poppins">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Users, Share2, FileText, Palette, Video, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Business Consultancy",
    slug: "business-consultancy",
    description: "Expert business consultancy to optimize operations, improve strategy, and drive sustainable growth for your organization.",
    icon: Users,
    features: ["Business Strategy", "Operations Optimization", "Market Analysis", "Growth Planning"],
    color: "blue",
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Comprehensive social media management to build your brand presence, engage your audience, and drive conversions.",
    icon: Share2,
    features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social Campaigns"],
    color: "indigo",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Strategic content creation that educates, entertains, and converts your target audience into loyal customers.",
    icon: FileText,
    features: ["Content Strategy", "Copywriting", "Blog Writing", "Email Marketing"],
    color: "purple",
  },
  {
    title: "Branding & Designing",
    slug: "branding-designing",
    description: "Complete branding solutions to create a unique and memorable identity that sets you apart from the competition.",
    icon: Palette,
    features: ["Brand Identity", "Visual Identity", "Style Guides", "Brand Messaging"],
    color: "pink",
  },
  {
    title: "Graphic Design & Video Editing",
    slug: "graphic-design-video-editing",
    description: "High-impact graphic design and professional video editing to communicate your personalized message visually.",
    icon: Video,
    features: ["Graphic Design", "Video Editing", "Motion Graphics", "Creative Direction"],
    color: "orange",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Custom web development solutions using modern technologies to build fast, secure, and scalable websites.",
    icon: Monitor,
    features: ["Custom Development", "Responsive Design", "Performance Tuning", "CMS Integration"],
    color: "cyan",
  },
];

const colorVariants: Record<string, string> = {
  blue: "from-[#C9A227] to-[#B98100]",
  indigo: "from-[#0B1120] to-[#1a2540]",
  purple: "from-[#C9A227] to-[#F97316]",
  pink: "from-[#C9A227] to-[#E8970A]",
  orange: "from-[#0B1120] to-[#1a2540]",
  cyan: "from-[#C9A227] to-[#B98100]",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Solutions for Your Success"
        description="Comprehensive digital solutions to help your business grow and succeed in the modern marketplace."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white rounded-[2rem] p-8 border border-gray-100 interactive-card mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex-row gap-8 items-center`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorVariants[service.color]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl group-hover:bg-[#C9A227] group-hover:text-[#0B1120] transition-colors duration-300 font-bold"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

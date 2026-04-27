"use client";

import { motion } from "framer-motion";
import { Search, Share2, FileText, Users, Globe, BarChart3, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your organic visibility and drive targeted traffic to your website with our data-driven SEO strategies.",
    icon: Search,
    color: "blue",
    href: "/services/seo"
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build a loyal community across all major social platforms with creative content.",
    icon: Share2,
    color: "indigo",
    href: "/services/smm"
  },
  {
    title: "Content Marketing",
    description: "We create compelling stories that resonate with your audience and convert visitors into loyal customers.",
    icon: FileText,
    color: "purple",
    href: "/services/content"
  },
  {
    title: "Influencer Marketing",
    description: "Partner with the right influencers to amplify your brand voice and reach new heights in engagement.",
    icon: Users,
    color: "pink",
    href: "/services/influencer"
  },
  {
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built with the latest technologies for seamless user experience.",
    icon: Globe,
    color: "blue",
    href: "/services/web-dev"
  },
  {
    title: "Brand Strategy",
    description: "Develop a unique brand identity and positioning that sets you apart from the competition.",
    icon: BarChart3,
    color: "indigo",
    href: "/services/branding"
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
  purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Our Expertise"
          title="Digital Solutions for Business Growth"
          description="We provide a comprehensive suite of digital marketing services to help your brand thrive in the modern landscape."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${colorClasses[service.color]}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:gap-2 transition-all gap-1"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,  // Add 'as const' here
      stiffness: 100, 
      damping: 20 
    }
  },
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Our Expertise"
          title="Digital Solutions for Business Growth"
          description="We provide a comprehensive suite of digital marketing services to help your brand thrive in the modern landscape."
          centered
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100 overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${colorClasses[service.color]}`}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-bold text-blue-600 gap-1 group/link"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

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

"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Search, Share2, CheckCircle2, ArrowLeft, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceInfo {
  title: string;
  icon: LucideIcon;
  description: string;
  content: string;
  features: string[];
  image: string;
}

const servicesData: Record<string, ServiceInfo> = {
  seo: {
    title: "SEO Optimization",
    icon: Search,
    description: "Dominate search engine results and drive sustainable organic growth.",
    content: "Our search engine optimization strategy is built on data, not guesswork. We perform deep technical audits, comprehensive keyword research, and build high-quality backlink profiles that help your brand stay ahead of the competition.",
    features: [
      "Technical SEO Audit & Cleanup",
      "On-Page Content Optimization",
      "Strategic Keyword Research",
      "High-Authority Link Building",
      "Local SEO Optimization",
      "Performance Monitoring & Reporting",
    ],
    image: "https://images.unsplash.com/photo-1571786256220-4cf2ebe45c60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  },
  smm: {
    title: "Social Media Marketing",
    icon: Share2,
    description: "Build a community, foster engagement, and turn followers into customers.",
    content: "We create compelling social media campaigns that resonate with your audience on a personal level. From content creation to community management, we ensure your brand&apos;s voice is heard across all major platforms.",
    features: [
      "Platform-Specific Strategy",
      "Creative Content Production",
      "Paid Social Advertising",
      "Community Management",
      "Influencer Outreach",
      "Detailed Analytics & Insights",
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug as string] || servicesData.seo; // Fallback to SEO for demo

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle="Service Detail"
        description={service.description}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#B98100] font-semibold mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-xl shadow-[#FFB800]/20">
                <service.icon className="w-10 h-10 text-[#081120]" />
              </div>
              <h2 className="text-4xl font-bold font-poppins text-gray-900 leading-tight">
                Transforming Your Digital Presence through <br />
                <span className="text-[#B98100]">{service.title}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.content}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#B98100]" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="px-10 py-5 gold-button font-bold rounded-full inline-block"
                >
                  Request a Custom Strategy
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-[#FFB800]/10 mix-blend-multiply" />
              </div>
              
              {/* Floating Benefit Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px]"
              >
                <p className="text-3xl font-bold text-[#B98100] mb-2 font-poppins">100%</p>
                <p className="text-sm text-gray-500 font-medium">Transparency in reporting and campaign execution.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

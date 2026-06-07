"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Share2, FileText, Users, Globe, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "seo",
    label: "SEO",
    title: "Dominate search results and drive organic traffic",
    description:
      "Boost your organic visibility with data-driven SEO strategies. From technical audits to content optimization, we help you rank higher and convert better.",
    icon: Search,
    href: "/services/seo",
    highlights: ["Keyword research & strategy", "Technical SEO audits", "Link building campaigns", "Monthly ranking reports"],
    image: "https://images.unsplash.com/photo-1571715268978-353edd72f32a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "smm",
    label: "Social Media",
    title: "Build a loyal audience across every platform",
    description:
      "Engage your target audience with creative content and consistent posting. We manage your social presence so you can focus on your business.",
    icon: Share2,
    href: "/services/smm",
    highlights: ["Content calendars", "Community management", "Paid social campaigns", "Performance analytics"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "content",
    label: "Content",
    title: "Stories that resonate and convert visitors",
    description:
      "Compelling blog posts, videos, and copy that attract, engage, and convert. We craft content that positions you as an authority in your industry.",
    icon: FileText,
    href: "/services/content",
    highlights: ["Blog writing & strategy", "Video scripts & production", "Email newsletters", "Landing page copy"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "influencer",
    label: "Influencer",
    title: "Amplify your brand with the right voices",
    description:
      "Connect with influencers who truly align with your brand. We handle outreach, campaign management, and performance tracking end-to-end.",
    icon: Users,
    href: "/services/influencer",
    highlights: ["Creator discovery & vetting", "Campaign briefs & coordination", "UGC content strategy", "ROI reporting"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "web",
    label: "Web Dev",
    title: "High-performance websites that convert visitors",
    description:
      "Beautiful, fast, and conversion-optimized websites. We build with the latest technologies for seamless user experiences across all devices.",
    icon: Globe,
    href: "/services/web-dev",
    highlights: ["Custom design & development", "Core Web Vitals optimization", "CMS & e-commerce", "Ongoing maintenance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "brand",
    label: "Branding",
    title: "Build a brand that stands out and sticks",
    description:
      "Develop a unique identity and positioning strategy. From logo to messaging, we craft brands that create lasting impressions.",
    icon: BarChart3,
    href: "/services/branding",
    highlights: ["Brand identity design", "Messaging & positioning", "Style guide creation", "Competitive analysis"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;
  const Icon = current.icon;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-sm mb-3">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Stop juggling agencies — get{" "}
            <span className="text-[#FFB800]">everything in one place</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From SEO to social media, content to branding — we handle every channel while keeping everything organized.
          </p>
        </div>

        {/* Tab Nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === s.id
                    ? "bg-[#FFB800] text-[#111827] shadow-[0_4px_14px_rgba(255,184,0,0.35)]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#FFB800]" />
                </div>
                <span className="text-sm font-bold text-[#FFB800] uppercase tracking-wide">
                  {current.label}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                {current.title}
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed">
                {current.description}
              </p>

              <ul className="space-y-3">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#FFB800]/15 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={current.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFB800] text-[#111827] font-bold rounded-full hover:bg-[#ffca28] transition-all shadow-[0_4px_20px_rgba(255,184,0,0.3)] group active:scale-95 text-sm"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="relative h-105 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative yellow circle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB800]/15 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFB800]/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom link */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-gray-900 border border-gray-200 px-7 py-3 rounded-full hover:border-gray-300 transition-all"
          >
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

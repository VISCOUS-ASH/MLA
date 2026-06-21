"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Share2, FileText, Palette, Video, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "consultancy",
    label: "Consultancy",
    title: "Strategic Guidance for Growth",
    description:
      "Expert business consultancy to optimize operations, improve strategy, and drive sustainable growth for your organization.",
    icon: Users,
    href: "/services/business-consultancy",
    highlights: ["Business Strategy", "Operations Optimization", "Market Analysis", "Growth Planning"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "social",
    label: "Social Media",
    title: "Connect, Engage, Grow",
    description:
      "Comprehensive social media management to build your brand presence, engage your audience, and drive conversions.",
    icon: Share2,
    href: "/services/social-media-management",
    highlights: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social Campaigns"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "content",
    label: "Content",
    title: "Stories That Convert",
    description:
      "Strategic content creation that educates, entertains, and converts your target audience into loyal customers.",
    icon: FileText,
    href: "/services/content-marketing",
    highlights: ["Content Strategy", "Copywriting", "Blog Writing", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "branding",
    label: "Branding",
    title: "Identity That Resonates",
    description:
      "Complete branding solutions to create a unique and memorable identity that sets you apart from the competition.",
    icon: Palette,
    href: "/services/branding-designing",
    highlights: ["Brand Identity Design", "Visual Identity", "Style Guides", "Brand Messaging"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "design",
    label: "Design",
    title: "Visuals That Captivate",
    description:
      "High-impact graphic design and professional video editing to communicate your personalized message visually.",
    icon: Video,
    href: "/services/graphic-design-video-editing",
    highlights: ["Graphic Design", "Video Editing", "Motion Graphics", "Creative Direction"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "web",
    label: "Web Dev",
    title: "Digital Experiences Built to Last",
    description:
      "Custom web development solutions using modern technologies to build fast, secure, and scalable websites.",
    icon: Monitor,
    href: "/services/web-development",
    highlights: ["Custom Development", "Responsive Design", "Performance Tuning", "CMS Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;
  const Icon = current.icon;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-sm mb-3">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Comprehensive digital solutions to help your business grow and succeed
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From business consultancy to web development, we offer end-to-end digital solutions tailored to your needs.
          </p>
        </div>

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

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB800]/15 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFB800]/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>

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

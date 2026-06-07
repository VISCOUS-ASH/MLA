"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blocks = [
  {
    tag: "Why Choose Us",
    title: "Add scroll-stopping results without switching tools",
    description:
      "Our team handles every piece of your digital marketing — so you never have to juggle multiple agencies or track down reports. One team, one strategy, one point of contact.",
    highlights: [
      { icon: ShieldCheck, text: "100% transparent reporting every month" },
      { icon: Zap, text: "Data-driven decisions, not guesswork" },
      { icon: TrendingUp, text: "ROI-focused campaigns from day one" },
      { icon: CheckCircle2, text: "Dedicated account manager for your brand" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    imageLeft: false,
    cta: { label: "Learn about our process", href: "/about" },
  },
  {
    tag: "Content Creation",
    title: "Optimize for each channel — automatically",
    description:
      "We craft platform-specific content that performs. From short-form video scripts to long-form SEO articles, every asset is built to engage your exact audience and convert them into customers.",
    highlights: [
      { icon: CheckCircle2, text: "Platform-native content formats" },
      { icon: CheckCircle2, text: "A/B tested copy & creative" },
      { icon: CheckCircle2, text: "Consistent brand voice across channels" },
      { icon: CheckCircle2, text: "Rapid turnaround with quality review" },
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
    imageLeft: true,
    cta: { label: "See content samples", href: "/portfolio" },
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f7] overflow-hidden">
      {blocks.map((block, index) => {
        return (
          <div
            key={index}
            className={`py-20 ${index % 2 === 0 ? "bg-[#f5f5f7]" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  block.imageLeft ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text — order swaps on desktop based on imageLeft */}
                <div className={`space-y-7 ${block.imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-sm mb-3">
                      {block.tag}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                      {block.title}
                    </h2>
                  </div>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    {block.description}
                  </p>

                  <ul className="space-y-4">
                    {block.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-[#FFB800]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <h.icon className="w-3.5 h-3.5 text-[#FFB800]" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium leading-relaxed">
                          {h.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={block.cta.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFB800] text-[#111827] font-bold rounded-full hover:bg-[#ffca28] transition-all shadow-[0_4px_20px_rgba(255,184,0,0.3)] group active:scale-95 text-sm"
                  >
                    {block.cta.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative ${block.imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {/* Yellow sparkle decoration (like SocialBee's star shapes) */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 text-[#FFB800]/30">
                    <svg viewBox="0 0 60 60" fill="currentColor">
                      <path d="M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z" />
                    </svg>
                  </div>
                  <div className="absolute -top-3 -left-3 w-10 h-10 text-[#FFB800]/20">
                    <svg viewBox="0 0 60 60" fill="currentColor">
                      <path d="M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Branding", "Print", "Billboard", "Packaging", "Social Media"];

const projects = [
  {
    title: "Ajaram Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    result: "Complete Brand Identity",
  },
  {
    title: "Firehawk Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    result: "Brand Refresh & Strategy",
  },
  {
    title: "Corporate Identity Suite",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    result: "Full Branding Package",
  },
  {
    title: "Logo & Business Cards",
    category: "Print",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
    result: "Professional Identity",
  },
  {
    title: "Wedding Invitation Suite",
    category: "Print",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    result: "Elegant Print Design",
  },
  {
    title: "Food Packaging Suite",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    result: "Shelf-Ready Design",
  },
  {
    title: "Product Box Design",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1200&auto=format&fit=crop",
    result: "Premium Packaging",
  },
  {
    title: "Billboard Mockup",
    category: "Billboard",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
    result: "High-Impact OOH",
  },
  {
    title: "Promotional Flex Banner",
    category: "Billboard",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
    result: "Event & Outdoor",
  },
  {
    title: "Instagram Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    result: "Social Engagement",
  },
  {
    title: "Facebook Ad Creatives",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
    result: "Conversion-Focused",
  },
  {
    title: "Aprajita Event Materials",
    category: "Print",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    result: "Event Branding",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Creative Work"
        subtitle="Portfolio"
        description="Explore our creative work across branding, print, digital, and beyond."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#FFB800] text-[#0B1120] shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-gray-50 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow duration-500 border border-gray-100"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent">
                    <motion.div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFB800] text-[#0B1120] text-xs font-bold uppercase tracking-widest">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white font-poppins">{project.title}</h3>
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <p className="text-[#FFB800] text-sm font-bold">{project.result}</p>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-24 bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
              Want to see similar results for your business?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can tailor our digital strategies to meet your unique needs and drive your brand forward.
            </p>
            <Link
              href="/contact"
              className="px-10 py-5 bg-[#FFB800] text-[#0B1120] font-bold rounded-full hover:bg-[#ffca28] transition-all shadow-xl active:scale-95 inline-flex items-center gap-3 group"
            >
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

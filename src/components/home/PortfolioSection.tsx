"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Brand Identity", "Print Design", "Billboard & Flex", "Packaging", "Social Media"];

const projects = [
  {
    title: "Ajaram Brand Identity",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    result: "Complete Brand Identity",
    client: "Ajaram Industries",
  },
  {
    title: "Sankatmochan Branding",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    result: "Healthcare Brand Identity",
    client: "Sankatmochan Therapy",
  },
  {
    title: "Dreamyug Corporate Suite",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    result: "Real Estate Branding",
    client: "Dreamyug Developers",
  },
  {
    title: "Bandhan Events Invitation",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    result: "Luxury Wedding Suite",
    client: "Bandhan Events",
  },
  {
    title: "Prithvi Homes Brochure",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
    result: "Property Brochure Design",
    client: "Prithvi Homes",
  },
  {
    title: "Laxmi Namkeen Packaging",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    result: "FMCG Packaging Design",
    client: "Laxmi Namkeen Bhandar",
  },
  {
    title: "EELCO Natural Product Box",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=800&auto=format&fit=crop",
    result: "Nutrition Packaging",
    client: "EELCO Natural",
  },
  {
    title: "Bhoomeez Group Billboard",
    category: "Billboard & Flex",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    result: "High-Impact OOH Campaign",
    client: "Bhoomeez Group",
  },
  {
    title: "Human Honor Flex Banner",
    category: "Billboard & Flex",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop",
    result: "Corporate Outdoor Campaign",
    client: "Human Honor",
  },
  {
    title: "Maurpankh Instagram Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    result: "Social Engagement Boost",
    client: "Maurpankh",
  },
  {
    title: "Prithvi Homes Facebook Ads",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
    result: "Lead Generation Campaign",
    client: "Prithvi Homes",
  },
  {
    title: "Bandhan Event Materials",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    result: "Event Branding Suite",
    client: "Bandhan Events",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F3D3E] tracking-[-1px] mb-4">
            Portfolio
          </h2>
          <p className="text-[#5A7A7B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our creative work across branding, print, digital, and beyond.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0F3D3E] text-white shadow-lg"
                  : "bg-gray-100 text-[#5A7A7B] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="group relative bg-gray-50 rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end bg-gradient-to-t from-[#0F3D3E]/90 via-[#0F3D3E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#C9A227] text-[#0F3D3E] text-xs font-bold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-[#C9A227] text-sm font-semibold">{project.result}</p>
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#0F3D3E] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0F3D3E] font-bold rounded-full hover:bg-[#e6a600] transition-all shadow-lg active:scale-95 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
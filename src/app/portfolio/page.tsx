"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "SEO", "Social Media", "Web Design", "Branding"];

const projects = [
  {
    title: "Global Tech Expansion",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    result: "300% Traffic Growth",
  },
  {
    title: "Luxe Fashion Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1523381235312-da4bdf4919a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    result: "Brand Equity Up 45%",
  },
  {
    title: "E-com Platform Build",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    result: "12% Conversion Rate",
  },
  {
    title: "Eco-Friendly Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    result: "1.2M Impressions",
  },
  {
    title: "Fintech SEO Strategy",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    result: "#1 Rank for Top Keywords",
  },
  {
    title: "Gourmet App Launch",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    result: "50k App Downloads",
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
        title="Our Success Stories"
        subtitle="Portfolio"
        description="Explore how we've helped businesses across industries scale their digital presence and achieve measurable growth."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent">
                    <motion.div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white font-poppins">{project.title}</h3>
                      <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div>
                          <p className="text-blue-400 text-sm font-bold uppercase tracking-wide">Result</p>
                          <p className="text-white text-lg font-semibold">{project.result}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                          <ExternalLink className="w-6 h-6" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <div className="mt-24 bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
              Want to see similar results for your business?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can tailor our digital strategies to meet your unique needs and drive your brand forward.
            </p>
            <Link
              href="/contact"
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl active:scale-95 inline-flex items-center gap-3 group"
            >
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

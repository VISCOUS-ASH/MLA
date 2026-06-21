"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    {
      tag: "Elevate Your Digital Presence",
      title: "Build Scalable Solutions",
      description: "Modern web and mobile applications tailored to your business needs with cutting-edge technology.",
      link: "/services/web-development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      tag: "",
      title: "Design That Inspires",
      description: "Creative branding and graphics that tell your story and captivate your audience.",
      link: "/services/branding-designing",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 bg-white">
                {card.tag && (
                  <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-xs mb-3">
                    {card.tag}
                  </span>
                )}
                <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#FFB800] transition-colors group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-16 leading-relaxed"
        >
          We are a digital marketing agency that helps businesses grow and strengthen their digital presence through strategic planning, creative execution, and performance-driven solutions. Our focus is on building visibility, credibility, and measurable growth across digital platforms.
        </motion.p>
      </div>
    </section>
  );
}

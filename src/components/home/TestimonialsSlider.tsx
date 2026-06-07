"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content:
      "Working with Media Lift Advisor has been a game-changer for our business. Our organic traffic increased by 200% within just 6 months.",
    avatar: "https://i.pravatar.cc/150?u=11",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director at Innovate",
    content:
      "Their team is incredibly professional and data-driven. The ROI we've seen on our paid campaigns is far beyond our expectations.",
    avatar: "https://i.pravatar.cc/150?u=12",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder of StyleCo",
    content:
      "The brand strategy they developed for us perfectly captured our essence. We've received so many compliments on our new digital presence.",
    avatar: "https://i.pravatar.cc/150?u=13",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "Head of Growth at ScaleUp",
    content:
      "From zero to 50k monthly visitors in four months. The SEO and content team really knows what they're doing. Highly recommend.",
    avatar: "https://i.pravatar.cc/150?u=21",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Co-founder of GreenBite",
    content:
      "Our social media following grew by 3x and engagement tripled. They truly understand audiences and know how to create content that converts.",
    avatar: "https://i.pravatar.cc/150?u=31",
    rating: 5,
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-sm mb-3">
          Success Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          What our clients say
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          We take pride in delivering results for businesses across every industry.
        </p>
      </div>

      {/* Scrolling row */}
      <div className="relative flex overflow-hidden select-none group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-4"
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="w-80 md:w-96 shrink-0 bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Quote icon */}
              <div className="w-9 h-9 rounded-full bg-[#FFB800]/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#FFB800]" />
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &quot;{t.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FFB800]/30"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-[#FFB800] font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

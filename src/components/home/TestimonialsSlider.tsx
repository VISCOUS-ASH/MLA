"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Working with Media Lift Advisor has been a game-changer for our business. Our organic traffic increased by 200% within just 6 months.",
    avatar: "https://i.pravatar.cc/150?u=11",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director at Innovate",
    content: "Their team is incredibly professional and data-driven. The ROI we've seen on our paid campaigns is far beyond our expectations.",
    avatar: "https://i.pravatar.cc/150?u=12",
  },
  {
    name: "Emma Williams",
    role: "Founder of StyleCo",
    content: "The brand strategy they developed for us perfectly captured our essence. We've received so many compliments on our new digital presence.",
    avatar: "https://i.pravatar.cc/150?u=13",
  },
];

export default function TestimonialsSlider() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionHeader
          subtitle="Success Stories"
          title="What Our Clients Say"
          description="We take pride in delivering exceptional results for businesses across various industries."
          centered
        />
      </div>

      <div className="flex overflow-hidden group select-none relative">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 px-4"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:border-blue-200 transition-colors"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600 fill-blue-600" />
                </div>
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

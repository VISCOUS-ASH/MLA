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
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Success Stories"
          title="What Our Clients Say"
          description="We take pride in delivering exceptional results for businesses across various industries."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600 fill-blue-600" />
                </div>
                <p className="text-gray-600 italic leading-relaxed">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

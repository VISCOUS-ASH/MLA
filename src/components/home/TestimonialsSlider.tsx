"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Working with Media Lift Advisor has been a game-changer for our business. Our organic traffic increased by 200% within just 6 months.",
    avatar: "https://i.pravatar.cc/150?u=11",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director at Innovate",
    content: "Their team is incredibly professional and data-driven. The ROI we've seen on our paid campaigns is far beyond our expectations.",
    avatar: "https://i.pravatar.cc/150?u=12",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder of StyleCo",
    content: "The brand strategy they developed for us perfectly captured our essence. We've received so many compliments on our new digital presence.",
    avatar: "https://i.pravatar.cc/150?u=13",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/40" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1300" />
      </div>

      {/* Moving Gradient Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-shimmer delay-1000" />
      </div>

      {/* Curved Wave Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-24 text-blue-200/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M0,0V15.81c13,21.11,27.64,41.05,47.69,56.24C99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <SectionHeader
          subtitle="Success Stories"
          title="What Our Clients Say"
          description="We take pride in delivering exceptional results for businesses across various industries."
          centered
        />
      </div>

      <div className="relative flex overflow-hidden group select-none">
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
              className="relative w-[350px] md:w-[450px] flex-shrink-0 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-300 hover:scale-105 flex flex-col justify-between group/card"
            >
              {/* Card Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-indigo-50/0 rounded-2xl group-hover/card:from-blue-50/50 group-hover/card:to-indigo-50/50 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              
              <div className="relative z-10 mt-8 flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Enhanced Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-purple-50 via-purple-50/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
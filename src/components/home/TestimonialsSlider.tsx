"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Director, Human Honor",
    content:
      "Media Lift Advisor completely transformed our brand presence. Their strategic approach to digital marketing helped us reach new audiences we never thought possible. Exceptional work!",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Founder, Sankatmochan Therapy Center",
    content:
      "The team at Media Lift Advisor understood our healthcare brand perfectly. They created sensitive, impactful campaigns that built trust with our patients. Our appointment bookings increased by 250%.",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Anita Verma",
    role: "CEO, Maurpankh",
    content:
      "From logo refinement to complete brand storytelling, Media Lift Advisor gave Maurpankh a voice that resonates with our audience. Their creative team truly understands Indian aesthetics.",
    avatar: "https://ui-avatars.com/api/?name=Anita+Verma&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Managing Director, Dreamyug",
    content:
      "Media Lift Advisor designed our property brochures, hoardings, and digital campaigns. The quality of their visual work helped us sell out our first project phase within 3 months.",
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Suresh Bhoomeez",
    role: "Founder, Bhoomeez Group",
    content:
      "Working with Media Lift Advisor was the best decision for our real estate brand. They created a cohesive identity across all channels that positioned us as a premium player in the market.",
    avatar: "https://ui-avatars.com/api/?name=Suresh+Bhoomeez&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Event Director, Bandhan Events",
    content:
      "As an event company, visual appeal is everything. Media Lift Advisor delivered stunning creatives for our campaigns that consistently wow our clients. They are our go-to creative partner.",
    avatar: "https://ui-avatars.com/api/?name=Neha+Gupta&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "CEO, Prithvi Homes",
    content:
      "Media Lift Advisor built our entire digital ecosystem — from website to social media. Their technical expertise combined with creative excellence is rare to find. Highly recommended!",
    avatar: "https://ui-avatars.com/api/?name=Arjun+Patel&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Ramesh Laxmi",
    role: "Owner, Laxmi Namkeen Bhandar",
    content:
      "We are a traditional brand, but Media Lift Advisor helped us go digital without losing our roots. Our online orders have grown 4x since they took over our marketing. Truly outstanding!",
    avatar: "https://ui-avatars.com/api/?name=Ramesh+Laxmi&background=FFB800&color=fff",
    rating: 5,
  },
  {
    name: "Meera Reddy",
    role: "Marketing Head, EELCO Natural",
    content:
      "Media Lift Advisor's content strategy for our nutrition brand was spot-on. They understand the wellness market deeply and created campaigns that educated and converted our audience.",
    avatar: "https://ui-avatars.com/api/?name=Meera+Reddy&background=FFB800&color=fff",
    rating: 5,
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-block text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3">
          What Our Clients Say
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Don&apos;t just take our word for it
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Trusted by leading brands across India.
        </p>
      </div>

      <div className="relative flex overflow-hidden select-none group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-4"
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="w-80 md:w-96 shrink-0 bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>

              <div className="w-9 h-9 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#C9A227]" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#C9A227]/30"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-[#C9A227] font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
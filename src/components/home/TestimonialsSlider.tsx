"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Founder & CEO",
    role: "TechStart Solutions",
    content:
      "Media Lift transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team was professional and delivered on time.",
    avatar: "https://i.pravatar.cc/150?u=41",
    rating: 5,
  },
  {
    name: "Marketing Director",
    role: "GreenLeaf Organics",
    content:
      "Working with Media Lift was a game-changer for our social media presence. Our engagement increased by 300% within just 2 months. Highly recommend their services!",
    avatar: "https://i.pravatar.cc/150?u=42",
    rating: 5,
  },
  {
    name: "Operations Manager",
    role: "Verma Enterprises",
    content:
      "The packaging design they created for our products was outstanding. It helped us stand out on retail shelves and boosted our sales significantly.",
    avatar: "https://i.pravatar.cc/150?u=43",
    rating: 5,
  },
  {
    name: "Managing Director",
    role: "Singh Real Estate",
    content:
      "Media Lift helped us create impactful billboard campaigns that generated quality leads. Their understanding of visual marketing is exceptional.",
    avatar: "https://i.pravatar.cc/150?u=44",
    rating: 5,
  },
  {
    name: "CEO",
    role: "Firehawk Solutions",
    content:
      "The branding and corporate identity work Media Lift delivered gave us a professional edge. They understood our vision and brought it to life perfectly.",
    avatar: "https://i.pravatar.cc/150?u=45",
    rating: 5,
  },
  {
    name: "Creative Head",
    role: "Ajaram Creations",
    content:
      "From print design to digital campaigns, Media Lift delivers consistent quality. Their creative team is exceptional and always meets deadlines.",
    avatar: "https://i.pravatar.cc/150?u=46",
    rating: 5,
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-block text-[#FFB800] font-bold tracking-wider uppercase text-sm mb-3">
          What Our Clients Say
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Don&apos;t just take our word for it
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Here&apos;s what our clients have to say about working with us.
        </p>
      </div>

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
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              <div className="w-9 h-9 rounded-full bg-[#FFB800]/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#FFB800]" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &quot;{t.content}&quot;
              </p>

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

        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

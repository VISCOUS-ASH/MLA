"use client";

import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const allTestimonials = [
  {
    name: "Founder & CEO",
    role: "TechStart Solutions",
    content: "Media Lift transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team was professional and delivered on time.",
    avatar: "https://i.pravatar.cc/150?u=41",
    rating: 5,
  },
  {
    name: "Marketing Director",
    role: "GreenLeaf Organics",
    content: "Working with Media Lift was a game-changer for our social media presence. Our engagement increased by 300% within just 2 months. Highly recommend their services!",
    avatar: "https://i.pravatar.cc/150?u=42",
    rating: 5,
  },
  {
    name: "Operations Manager",
    role: "Verma Enterprises",
    content: "The packaging design they created for our products was outstanding. It helped us stand out on retail shelves and boosted our sales significantly.",
    avatar: "https://i.pravatar.cc/150?u=43",
    rating: 5,
  },
  {
    name: "Managing Director",
    role: "Singh Real Estate",
    content: "Media Lift helped us create impactful billboard campaigns that generated quality leads. Their understanding of visual marketing is exceptional.",
    avatar: "https://i.pravatar.cc/150?u=44",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="What Our Clients Say"
        subtitle="Testimonials"
        description="Don't just take our word for it. Here's what our clients have to say about working with us."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-gray-100 flex flex-col justify-between interactive-card group shadow-sm hover:shadow-lg"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFB800] fill-[#FFB800]" />
                    ))}
                  </div>
                  <div className="w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-[#0B1120] fill-[#0B1120]" />
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-lg">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 font-poppins">{testimonial.name}</h4>
                    <p className="text-sm text-[#B98100] font-semibold uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-12 bg-[#0B1120] rounded-[3rem] text-white shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                <div>
                  <p className="text-5xl font-bold font-poppins text-[#FFB800] mb-2">300%</p>
                  <p className="text-gray-400 font-medium">Avg. Engagement Increase</p>
                </div>
                <div>
                  <p className="text-5xl font-bold font-poppins text-[#FFB800] mb-2">50+</p>
                  <p className="text-gray-400 font-medium">Brands Served</p>
                </div>
                <div>
                  <p className="text-5xl font-bold font-poppins text-[#FFB800] mb-2">98%</p>
                  <p className="text-gray-400 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

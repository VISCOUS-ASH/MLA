"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const allTestimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Working with Media Lift Advisor has been a game-changer for our business. Our organic traffic increased by 200% within just 6 months. Their attention to detail and strategic approach is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=11",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director at Innovate",
    content: "Their team is incredibly professional and data-driven. The ROI we've seen on our paid campaigns is far beyond our expectations. They really understand how to scale a digital brand.",
    avatar: "https://i.pravatar.cc/150?u=12",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder of StyleCo",
    content: "The brand strategy they developed for us perfectly captured our essence. We've received so many compliments on our new digital presence. It's been a truly transformative experience.",
    avatar: "https://i.pravatar.cc/150?u=13",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "COO at Global Logistics",
    content: "We were struggling with our digital transformation until we met the team at Media Lift. They streamlined our processes and helped us reach a global audience effectively.",
    avatar: "https://i.pravatar.cc/150?u=14",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "E-commerce Manager at Bloom",
    content: "The new website they built for us is not only beautiful but also highly functional. Our conversion rates have improved by 35% since the launch.",
    avatar: "https://i.pravatar.cc/150?u=15",
    rating: 5,
  },
  {
    name: "Robert Taylor",
    role: "Founder of FitLife",
    content: "Their social media management is top-notch. They've built an engaged community around our brand that translates into real sales every single month.",
    avatar: "https://i.pravatar.cc/150?u=16",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="What Our Clients Say"
        subtitle="Testimonials"
        description="We take pride in our clients' success. Hear directly from the brands we've helped empower and grow."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white fill-white" />
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
                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Callout */}
          <div className="mt-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-12 bg-gray-900 rounded-[3rem] text-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                <div>
                  <p className="text-5xl font-bold font-poppins text-blue-500 mb-2">98%</p>
                  <p className="text-gray-400 font-medium">Client Retention Rate</p>
                </div>
                <div>
                  <p className="text-5xl font-bold font-poppins text-blue-500 mb-2">500+</p>
                  <p className="text-gray-400 font-medium">Successful Projects</p>
                </div>
                <div>
                  <p className="text-5xl font-bold font-poppins text-blue-500 mb-2">4.9/5</p>
                  <p className="text-gray-400 font-medium">Average Client Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

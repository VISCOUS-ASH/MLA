"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      value: "10+",
      label: "Years of Experience",
      desc: "Decades of combined expertise in business strategy and digital marketing",
    },
    {
      value: "250+",
      label: "Brands Transformed",
      desc: "Businesses across industries trust Media Lift Advisor for digital growth",
    },
    {
      value: "300%",
      label: "Avg. Engagement Growth",
      desc: "Consistent results in social media and brand visibility",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      desc: "Long-term partnerships built on trust and measurable outcomes",
    },
  ];

  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Trusted by Leading Brands
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              We've helped businesses across industries achieve their digital goals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  {stat.value}
                </p>
                <div className="w-10 h-0.5 bg-[#C9A227] my-3 mx-auto" />
                <p className="text-sm font-bold text-gray-900 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "2,500+", suffix: "" },
  { label: "Happy Clients", value: "1,200+", suffix: "" },
  { label: "Revenue Growth", value: "150", suffix: "%" },
  { label: "Years Experience", value: "12+", suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 2500, suffix: "+", icon: Briefcase },
  { label: "Happy Clients", value: 1200, suffix: "+", icon: Users },
  { label: "Revenue Growth", value: 150, suffix: "%", icon: TrendingUp },
  { label: "Years Experience", value: 12, suffix: "+", icon: Award },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Yellow icon badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/15 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#FFB800]" />
                </div>

                {/* Number */}
                <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#FFB800] my-4" />

                {/* Label */}
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

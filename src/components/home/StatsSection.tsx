"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  {
    label: "Projects Completed",
    value: 2500,
    suffix: "+",
    icon: Briefcase,
  },
  {
    label: "Happy Clients",
    value: 1200,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Revenue Growth",
    value: 150,
    suffix: "%",
    icon: TrendingUp,
  },
  {
    label: "Years Experience",
    value: 12,
    suffix: "+",
    icon: Award,
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
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
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a0f2a] to-[#020617]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold uppercase tracking-[2px] text-blue-300">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-2px]">
            Numbers That Define
            <span className="block text-blue-500">
              Digital Excellence
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
            We help brands scale faster with innovative strategies,
            measurable growth, and exceptional digital experiences.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06]"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_45%)]" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                {/* Number */}
                <div className="relative z-10 text-5xl lg:text-6xl font-black text-white tracking-[-2px]">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Divider */}
                <div className="relative z-10 w-16 h-[2px] bg-gradient-to-r from-blue-500 to-transparent my-6" />

                {/* Label */}
                <p className="relative z-10 text-base font-medium text-slate-300 tracking-wide">
                  {stat.label}
                </p>

                {/* Corner Gradient */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
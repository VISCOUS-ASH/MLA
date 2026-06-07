"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-24 bg-[#081120] overflow-hidden">
      <div className="absolute inset-0 soft-grid opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,184,0,0.16)_0%,rgba(255,255,255,0)_32%,rgba(14,165,233,0.12)_100%)]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute left-1/2 top-24 h-px w-[min(860px,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFB800]/70 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          {subtitle && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB800]/25 bg-[#FFB800]/10 px-4 py-2 text-[#FFB800] font-bold tracking-wider uppercase text-xs mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {["Strategy first", "Conversion focused", "Measurable growth"].map((item) => (
            <div key={item} className="glass-panel rounded-2xl px-4 py-3 text-sm font-semibold text-white/80">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

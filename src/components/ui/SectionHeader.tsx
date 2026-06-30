"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        centered ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/12 px-4 py-2 text-[#B98100] font-bold tracking-wider uppercase text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight",
          className?.includes("text-white") ? "text-white" : "text-[#081120]"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed",
            className?.includes("text-white") ? "text-white/65" : "text-gray-600"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

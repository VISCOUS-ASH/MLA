"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "No long-term contracts",
  "Free strategy call",
  "Results in 90 days",
];

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#FFB800]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Bee / brand icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a0f1e] mx-auto">
            <span className="text-2xl font-black text-[#FFB800]">M</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0f1e] leading-tight tracking-tight">
            Ready to accelerate your
            <br />
            digital growth?
          </h2>

          <p className="text-lg text-[#0a0f1e]/65 max-w-xl mx-auto leading-relaxed">
            Join 1,200+ businesses that scaled their brand with proven digital strategies and a team that treats your growth like their own.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0a0f1e] text-white font-bold rounded-full hover:bg-[#1a243a] transition-all shadow-xl flex items-center gap-2 group active:scale-95 text-base"
            >
              Get free consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-[#0a0f1e]/25 text-[#0a0f1e] font-bold rounded-full hover:bg-[#0a0f1e]/8 transition-all text-base active:scale-95"
            >
              Our services
            </Link>
          </div>

          {/* Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[#0a0f1e]/60">
            {perks.map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0a0f1e]" />
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

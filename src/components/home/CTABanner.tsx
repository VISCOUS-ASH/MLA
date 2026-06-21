"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-8 text-white/75">
            Let&apos;s work together to take your business to the next level. Get in touch with us today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-semibold rounded-full border-2 border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#0B1120] px-8 py-4 text-lg transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  // "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
  "/images/logos/logo10.png",
];

const duplicated = [...logos, ...logos];

export default function TrustedByLogos() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by Leading Brands
        </p>
        <p className="text-sm text-gray-400 mt-2">
          We&apos;ve helped businesses across industries achieve their digital goals
        </p>
      </div>

      <div className="relative flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-16 px-8"
        >
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-32 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Client logo ${(i % logos.length) + 1}`}
                width={128}
                height={48}
                className="object-contain h-18 w-auto"
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const clientBrands = [
  "Acme Corp", "Globex", "Soylent Corp", "Initech", 
  "Umbrella Corp", "Stark Industries", "Wayne Enterprises", "Oscorp",
  "Cyberdyne", "Aperture Science", "Wonka Industries", "Hooli", 
  "Prestige Worldwide", "Massive Dynamic", "Sterling Cooper"
];

const duplicated = [...clientBrands, ...clientBrands];

export default function TrustedByLogos() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
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
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center px-8"
        >
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 md:mx-8 h-10 flex items-center justify-center"
            >
              <span className="text-lg font-bold text-gray-400 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

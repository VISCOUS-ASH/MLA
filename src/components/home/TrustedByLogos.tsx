"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "HubSpot", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Salesforce", src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
];

const duplicated = [...logos, ...logos];

export default function TrustedByLogos() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          We&apos;re a trusted partner of all your favorite platforms
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center px-8"
        >
          {duplicated.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-10 w-32 shrink-0 grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-8 max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

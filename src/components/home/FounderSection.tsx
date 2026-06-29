"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Linkedin, Twitter } from "lucide-react";

const founder = {
  name: "Prashant",
  role: "Founder & CEO",
  image: "/images/cofounderPrashant.jpeg",
  bio: "With over 15 years of experience in digital transformation, Prashant leads our vision to redefine how brands interact with their customers in the digital age.",
  skills: ["Strategic Planning", "Digital Transformation", "Leadership"],
  socials: { linkedin: "#", twitter: "#" }
};

export default function FounderSection() {
  return (
    <section className="relative bg-[#0F3D3E] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Subtle gradient overlay to match the desaturated look */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D3E]/30 to-transparent z-10 rounded-lg" />
              <Image
                src={founder.image}
                alt={founder.name}
                width={500}
                height={600}
                className="object-cover rounded-lg grayscale-[30%] contrast-[1.1]"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-5 py-2 border border-[#ffb800]/40 rounded-full text-[#ffb800] text-xs font-bold tracking-[2px] uppercase mb-6"
            >
              Expert Business Consultancy
            </motion.span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-[-2px] mb-6">
              Scale Smarter with{" "}
              <span className="text-[#ffb800]">{founder.name}</span>
            </h2>

            {/* Bio */}
            <p className="text-[#B8D4D4] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              With <span className="text-white font-bold">15+ years</span> of hands-on experience in business strategy, brand building, and digital growth, {founder.name} helps businesses unlock their true potential — from startup hustle to enterprise scale.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {founder.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-[#B8D4D4] text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#ffb800] rounded-full" />
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffb800] opacity-[80%] text-white font-semibold rounded-full hover:bg-[#FF5252] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Connect with {founder.name}
              </motion.a>

              <motion.a
                href={founder.socials.linkedin}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8D4D4]/30 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
                View LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
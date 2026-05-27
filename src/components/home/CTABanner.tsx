"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Main Gradient Background - Deep rich colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />
      
      {/* Secondary gradient overlay for warmth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#312e81]/30 via-transparent to-[#4c1d95]/30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1300" />
        <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Moving Gradient Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-shimmer" />
        <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent animate-shimmer delay-2000" />
        <div className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-shimmer delay-4000" />
      </div>

      {/* Curved Wave Pattern at Top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-32 text-blue-500/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" fillOpacity="0.5"/>
        </svg>
      </div>

      {/* Curved Wave Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-32 text-indigo-500/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,21.11,27.64,41.05,47.69,56.24C99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Subtle star/dot decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl"
        >
          {/* Animated background circles inside CTA */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-white/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-l from-white/20 to-transparent rounded-full blur-3xl"
          />
          
          {/* Floating orbs inside CTA */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-bl from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl"
          />

          {/* Glassmorphism overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-[3rem]" />

          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Ready to Accelerate Your Digital Growth?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              Join hundreds of successful brands that have scaled their business with our proven digital strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl active:scale-95 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm hover:border-white/50"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0f1e] pt-32 pb-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FFB800]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFB800]/25 bg-[#FFB800]/8 text-sm font-semibold text-[#FFB800] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
          Results-Driven Digital Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black text-white leading-[1.0] tracking-[-3px] max-w-5xl mx-auto"
        >
          Architect success across every{" "}
          <span className="text-[#FFB800]"> digital layer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          Drive traffic, build your brand, and scale revenue. Strategy, execution, and measurable results — all in one agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FFB800] text-[#0a0f1e] font-bold rounded-full hover:bg-[#ffca28] transition-all shadow-[0_0_40px_rgba(255,184,0,0.25)] flex items-center gap-2 group active:scale-95 text-base"
          >
            Get free consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all text-base active:scale-95"
          >
            View our work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          {[
            "No long-term contracts",
            "Free strategy call",
            "ROI guaranteed",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 left-4 md:left-12 bg-white rounded-2xl shadow-2xl p-4 w-44 z-20 text-left hidden sm:block"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FFB800]/15 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#FFB800]" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Monthly Growth</p>
            </div>
            <p className="text-2xl font-black text-gray-900">+125%</p>
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#FFB800] rounded-full w-4/5" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 right-4 md:right-12 bg-white rounded-2xl shadow-2xl p-4 w-48 z-20 text-left hidden sm:block"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Client Rating</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">4.9/5 from 1,200+ clients</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="grid grid-cols-3 divide-x divide-white/10">
              {[
                { value: "2,500+", label: "Campaigns Launched", icon: "🚀" },
                { value: "1,200+", label: "Happy Clients", icon: "⭐" },
                { value: "150%", label: "Avg. Revenue Growth", icon: "📈" },
              ].map((item, i) => (
                <div key={i} className="py-10 px-6 text-center">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-sm text-white/40 mt-2 font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-8 py-5 flex items-center justify-center gap-3 flex-wrap">
              <p className="text-white/35 text-xs font-medium mr-2">We grow you on:</p>
              {["Google", "Meta", "Instagram", "LinkedIn", "TikTok", "YouTube"].map((p, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/55 font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

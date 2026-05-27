"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Empowering Brands with Digital Excellence",
    subtitle:
      "Innovative strategies, creative marketing, and measurable business growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    title: "Scale Your Business with Smart Marketing",
    subtitle:
      "SEO optimization, paid campaigns, and performance-driven solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    title: "Creative Solutions for Modern Businesses",
    subtitle:
      "Transforming ideas into powerful digital experiences that convert.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fbff] pt-28 lg:pt-32">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.08,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Theme Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172acc] via-[#0f172ab3] to-[#2563eb99]" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-semibold tracking-wide uppercase">
                Digital Marketing Excellence
              </span>
            </motion.div>

            <motion.h1
              key={slides[current].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[82px] font-bold font-poppins leading-[0.95] tracking-[-2px] max-w-[700px]"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              key={slides[current].subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-blue-50/90 max-w-2xl leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-2xl flex items-center gap-2 group active:scale-95"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2 group active:scale-95">
                <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Play className="w-4 h-4 text-white fill-white" />
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* Clients */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  10k+ Happy Clients
                </p>

                <div className="flex items-center text-yellow-400">
                  {"★".repeat(5)}
                  <span className="ml-2 text-blue-100 text-xs font-medium">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Floating Cards */}
          <div className="relative hidden lg:flex justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl w-[260px]"
            >
              <p className="text-4xl font-bold text-white">+125%</p>
              <p className="text-blue-100 mt-2">
                Monthly Revenue Growth
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl w-[240px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-100 font-bold">
                  SEO
                </div>

                <div>
                  <p className="text-white font-bold text-lg">
                    Optimization
                  </p>
                  <p className="text-blue-100 text-sm">
                    Ranked #1 on Google
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-blue-500"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
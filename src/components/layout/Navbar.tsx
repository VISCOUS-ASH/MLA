"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/smm" },
      { name: "Content Marketing", href: "/services/content" },
      { name: "Influencer Marketing", href: "/services/influencer" },
      { name: "Web Development", href: "/services/web-dev" },
      { name: "Brand Strategy", href: "/services/branding" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={cn(
          "max-w-400 mx-auto flex items-center justify-between rounded-4xl border transition-all duration-300 px-6 lg:px-10",
          scrolled
            ? "bg-white/92 border-gray-200 shadow-lg backdrop-blur-xl py-3"
            : "bg-[#081120]/60 border-white/10 backdrop-blur-xl py-4"
        )}
      >
        <Link href="/" className="flex items-center space-x-2">
          <span
            className={cn(
              "text-[28px] font-extrabold tracking-[-1px] transition-colors duration-300",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            MEDIA{" "}
            <span className="text-[#FFB800]">LIFT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-all duration-300 flex items-center gap-1",
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-0 mt-5 w-64 bg-white rounded-2xl border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#FFB800] text-[#111827] text-sm font-bold rounded-full hover:bg-[#ffca28] transition-all duration-300 shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:scale-[1.03] active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors duration-300",
            scrolled ? "text-gray-700" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border border-gray-100 rounded-2xl mt-2 mx-0 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-gray-800 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-500 hover:text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="w-full py-3 bg-[#FFB800] text-[#111827] text-center font-bold rounded-full hover:bg-[#ffca28] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-5">
      <div
  className={cn(
    "max-w-[1600px] mx-auto flex items-center justify-between rounded-[32px] border transition-all duration-300 px-6 lg:px-10",
    scrolled
      ? "bg-[#081120]/90 border-white/10 backdrop-blur-2xl shadow-2xl py-4"
      : "bg-[#081120]/55 border-white/15 backdrop-blur-xl py-5"
  )}
>
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-[34px] font-extrabold tracking-[-1px] text-white">
  MEDIA <span className="text-blue-500">LIFT</span>
</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-[17px] font-medium text-white/80 hover:text-white transition-all duration-300 flex items-center gap-1"
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-0 mt-5 w-64 bg-[#0f172a]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
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
            className="px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.45)] hover:scale-[1.03] active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-gray-800"
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
                          className="block text-sm text-gray-500"
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
                className="w-full py-3 bg-blue-600 text-white text-center font-semibold rounded-xl"
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

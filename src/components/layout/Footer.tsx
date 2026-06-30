'use client'
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";



const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Business Consultancy", href: "/services/business-consultancy" },
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Branding & Designing", href: "/services/branding-designing" },
      { name: "Graphic Design & Video Editing", href: "/services/graphic-design-video-editing" },
      { name: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

  // const [isOpen, setIsOpen] = useState(false);
 

export default function Footer() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bg-[#081120] text-gray-300 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 soft-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand and Contact */}
          <div className="lg:col-span-2 space-y-6">
                  <Link href="/" className="flex items-center space-x-2">
  <Image
    src="/images/logos/logo1.png"
    alt="MediaLift Logo"
    width={60}
    height={60}
    className="object-contain rounded-full"
  />
  <span
    className={cn(
      "text-[28px] font-extrabold tracking-[-1px] transition-colors duration-300",
      "text-white"
    )}
  >
    MEDIA{" "}
    <span className="text-[#C9A227]">LIFT</span>
    {" "}ADVISOR
  </span>
</Link>
            <p className="text-gray-400 max-w-sm">
              Empowering brands through innovative digital strategies and data-driven marketing solutions. Your growth is our priority.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A227]" />
                <span>info@medialiftadvisor.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A227]" />
                <span>9610193337</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A227]" />
                <div className="flex flex-col">
                <span>Branch Office - Behror, 301701</span>

                <span>Head Office - Hari Om Apartment, Near Hotel KPL Prime, Sohan Nagar Mansarovar, Jaipur 302020</span>
              </div>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#081120] transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#081120] transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#081120] transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#081120] transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group inline-flex items-center gap-1 hover:text-[#C9A227] transition-colors">
                      {link.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Media Lift Advisor. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

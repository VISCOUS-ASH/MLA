"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Users, Share2, FileText, Palette, Video, Monitor, LucideIcon } from "lucide-react";

interface ServiceInfo {
  title: string;
  icon: LucideIcon;
  description: string;
  content: string;
  features: string[];
  image: string;
}

const servicesData: Record<string, ServiceInfo> = {
  "business-consultancy": {
    title: "Business Consultancy",
    icon: Users,
    description: "Strategic business guidance to optimize operations and drive sustainable growth.",
    content: "Our business consultancy services are designed to help you identify opportunities, overcome challenges, and build a roadmap for long-term success. We work closely with your leadership team to analyze operations, refine strategy, and implement sustainable growth initiatives that move the needle.",
    features: [
      "Business Strategy & Planning",
      "Operations Optimization",
      "Market Research & Analysis",
      "Growth Roadmap Development",
      "Financial Planning Support",
      "Performance Tracking",
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
  },
  "social-media-management": {
    title: "Social Media Management",
    icon: Share2,
    description: "Build a loyal community and drive engagement across all major platforms.",
    content: "We manage your social media presence end-to-end — from content calendars and creative production to community engagement and paid amplification. Our data-informed approach ensures every post, story, and ad contributes to your brand goals.",
    features: [
      "Platform-Specific Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer Collaboration",
      "Performance Analytics",
    ],
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
  },
  "content-marketing": {
    title: "Content Marketing",
    icon: FileText,
    description: "Compelling stories and strategic content that educates, engages, and converts.",
    content: "Great content is the backbone of any successful digital strategy. We create blog posts, whitepapers, email newsletters, video scripts, and landing page copy that position your brand as an authority and drive measurable conversions.",
    features: [
      "Content Strategy & Editorial Calendars",
      "SEO-Optimized Blog Writing",
      "Website Copy & Landing Pages",
      "Email Marketing Campaigns",
      "Video Scripts & Storyboards",
      "Content Performance Analysis",
    ],
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1200&auto=format&fit=crop",
  },
  "branding-designing": {
    title: "Branding & Designing",
    icon: Palette,
    description: "A unique and memorable brand identity that sets you apart from the competition.",
    content: "Your brand is more than a logo — it is the complete experience your audience has with your business. From visual identity systems and typography to tone of voice and brand guidelines, we craft cohesive identities that resonate and last.",
    features: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Brand Style Guides",
      "Packaging Design",
      "Stationery & Collateral",
      "Brand Messaging & Voice",
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
  },
  "graphic-design-video-editing": {
    title: "Graphic Design & Video Editing",
    icon: Video,
    description: "High-impact visuals and professional video editing that captivate your audience.",
    content: "From eye-catching social media creatives to polished corporate videos, our design and editing team brings your ideas to life. We blend aesthetics with strategy to ensure every visual asset supports your marketing objectives.",
    features: [
      "Social Media Creatives",
      "Advertisement Design",
      "Corporate Video Editing",
      "Motion Graphics & Animation",
      "Presentation Design",
      "Print & Digital Assets",
    ],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  },
  "web-development": {
    title: "Web Development",
    icon: Monitor,
    description: "Fast, secure, and scalable websites built with modern technologies.",
    content: "We design and develop custom websites that look stunning and perform flawlessly. Using modern frameworks and best practices, we build responsive, SEO-friendly, and high-converting digital experiences tailored to your business needs.",
    features: [
      "Custom Website Design",
      "React / Next.js Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
      "Ongoing Maintenance & Support",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug as string] || servicesData["business-consultancy"];

  const ServiceIcon = service.icon;

  return (
    <div className="overflow-hidden">
      <PageHeader
        title={service.title}
        subtitle="Service Detail"
        description={service.description}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#B98100] font-semibold mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#C9A227] flex items-center justify-center shadow-xl shadow-[#C9A227]/20">
                <ServiceIcon className="w-10 h-10 text-[#081120]" />
              </div>
              <h2 className="text-4xl font-bold font-poppins text-gray-900 leading-tight">
                Transforming Your Digital Presence through <br />
                <span className="text-[#B98100]">{service.title}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.content}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#B98100]" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-[#C9A227] text-[#081120] font-bold rounded-full hover:bg-[#ffca28] transition-all shadow-xl active:scale-95 inline-block"
                >
                  Request a Custom Strategy
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-[#C9A227]/10 mix-blend-multiply" />
              </div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px]"
              >
                <p className="text-3xl font-bold text-[#B98100] mb-2 font-poppins">100%</p>
                <p className="text-sm text-gray-500 font-medium">Transparency in reporting and campaign execution.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

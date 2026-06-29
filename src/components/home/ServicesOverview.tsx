"use client";

import { motion, Variants } from "framer-motion";
import { 
  Users, 
  Share2, 
  FileText, 
  Palette, 
  Video, 
  Code2, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Businesses Consultancy",
    description: "Expert business consultancy to optimize operations, improve strategy, and drive sustainable growth for your organization.",
    link: "#"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media management to build your brand presence, engage your audience, and drive meaningful interactions.",
    link: "#"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Strategic content creation that educates, entertains, and converts your target audience into loyal customers.",
    link: "#"
  },
  {
    icon: Palette,
    title: "Branding And Designing",
    description: "Complete branding solutions to create a unique and memorable identity that sets you apart from the competition.",
    link: "#"
  },
  {
    icon: Video,
    title: "Graphic Design And Video Editing",
    description: "High-impact graphic design and professional video editing to communicate your personalized message effectively.",
    link: "#"
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web development solutions using modern technologies to build fast, secure, and scalable websites.",
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ServicesSection() {
  return (
    <section className="bg-[#B8CFC4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F3D3E] tracking-[-1px] mb-4">
            Our Services
          </h2>
          <p className="text-[#3D5A5B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFB800]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#FFB800]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F3D3E] mb-3 tracking-[-0.5px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#5A7A7B] text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#FFB800] font-semibold text-sm group/link hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
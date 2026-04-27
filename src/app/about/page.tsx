"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Target, Eye, Users, Rocket, Heart } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?u=alex",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    image: "https://i.pravatar.cc/300?u=sarah",
  },
  {
    name: "David Chen",
    role: "SEO Specialist",
    image: "https://i.pravatar.cc/300?u=david",
  },
  {
    name: "Maria Garcia",
    role: "Creative Director",
    image: "https://i.pravatar.cc/300?u=maria",
  },
];

const values = [
  {
    title: "Our Mission",
    description: "To empower brands with innovative digital strategies that drive sustainable growth and excellence.",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Our Vision",
    description: "To be the global leader in digital transformation, setting new standards for creativity and ROI.",
    icon: Eye,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Our Values",
    description: "Integrity, innovation, and impact are at the heart of everything we do for our clients.",
    icon: Heart,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story & Mission"
        subtitle="About Media Lift Advisor"
        description="We are a team of digital enthusiasts dedicated to helping businesses navigate the complex digital landscape and achieve extraordinary results."
      />

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold font-poppins mb-1">12+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <SectionHeader
                title="Driving Digital Transformation Since 2012"
                subtitle="Who We Are"
              />
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded with a vision to bridge the gap between brands and their digital potential, Media Lift Advisor has grown from a small consultancy to a full-service digital marketing powerhouse.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every brand has a unique story to tell. Our mission is to amplify that story through data-driven strategies, cutting-edge technology, and unparalleled creativity. We don&apos;t just provide services; we build partnerships that foster long-term success.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Fast Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-8`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Meet the Minds Behind the Magic"
            subtitle="Our Team"
            centered
            description="A diverse group of strategists, creators, and technologists united by a passion for digital excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white font-poppins">{member.name}</h4>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                      <span className="text-[10px] text-white">LN</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                      <span className="text-[10px] text-white">TW</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

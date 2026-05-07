"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Users, Rocket, Heart, ArrowRight, X } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?u=alex",
    bio: "With over 15 years of experience in digital transformation, Alex leads our vision to redefine how brands interact with their customers in the digital age.",
    skills: ["Strategic Planning", "Digital Transformation", "Leadership"],
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    image: "https://i.pravatar.cc/300?u=sarah",
    bio: "Sarah is a data-driven strategist who has helped hundreds of brands scale their operations through innovative marketing frameworks.",
    skills: ["Market Analysis", "Growth Hacking", "Brand Positioning"],
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Chen",
    role: "SEO Specialist",
    image: "https://i.pravatar.cc/300?u=david",
    bio: "David's technical SEO expertise ensures that our clients stay at the top of search results, driving sustainable organic growth.",
    skills: ["Technical SEO", "Content Strategy", "Link Building"],
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Maria Garcia",
    role: "Creative Director",
    image: "https://i.pravatar.cc/300?u=maria",
    bio: "Maria brings stories to life through compelling visual design and creative direction, ensuring every brand touchpoint is memorable.",
    skills: ["UX/UI Design", "Creative Direction", "Brand Identity"],
    socials: { linkedin: "#", twitter: "#" }
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring" as const,  // Add 'as const' to narrow the type
      stiffness: 100, 
      damping: 20 
    }
  },
};

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(null);

  return (
    <div className="overflow-hidden">
      {/* ... (Hero, Story, Values sections) ... */}
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 bg-[#0B1120] overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" 
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6"
              >
                Our Journey & Legacy
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white leading-tight mb-8"
              >
                Crafting Digital <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10"
              >
                We are a team of visionary strategists and creators dedicated to helping businesses navigate the complex digital landscape with precision and passion.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-300 text-sm font-medium">100+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-gray-300 text-sm font-medium">98% Client Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-none">250%</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Growth Boost</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="client" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-900">Joined by <br/><span className="text-blue-600">50+ Brands</span></p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block z-20"
              >
                <p className="text-4xl font-bold font-poppins mb-1">12+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</p>
              </motion.div>

              {/* Decorative background element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title="Driving Digital Transformation Since 2012"
                  subtitle="Who We Are"
                />
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed text-lg">
                Founded with a vision to bridge the gap between brands and their digital potential, Media Lift Advisor has grown from a small consultancy to a full-service digital marketing powerhouse.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed">
                We believe that every brand has a unique story to tell. Our mission is to amplify that story through data-driven strategies, cutting-edge technology, and unparalleled creativity. We don&apos;t just provide services; we build partnerships that foster long-term success.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Rocket className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Fast Growth</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Expert Team</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-8 transition-colors`}
                >
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(member)}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg cursor-pointer"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white font-poppins">{member.name}</h4>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                    {/* Social Icons */}
  <div className="flex items-center gap-3 mt-4">
    <a
      href={member.socials.linkedin}
      onClick={(e) => e.stopPropagation()}
      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
    >
      <FaLinkedin className="w-4 h-4" />
    </a>

    <a
      href={member.socials.twitter}
      onClick={(e) => e.stopPropagation()}
      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-all duration-300"
    >
      <FaXTwitter className="w-4 h-4" />
    </a>
  </div>
                  
                  {/* <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-4 flex items-center text-white text-xs font-bold uppercase tracking-widest gap-2"
                  >
                    View Profile <ArrowRight className="w-4 h-4" />
                  </motion.div> */}
                </div>

                {/* Decorative border reveal on hover */}
                <div className="absolute inset-0 border-2 border-blue-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                <div className="md:w-2/5 aspect-[4/5] md:aspect-auto relative">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                  <div className="absolute bottom-6 left-6 text-white md:hidden">
                    <h2 className="text-3xl font-bold font-poppins">{selectedMember.name}</h2>
                    <p className="text-blue-400 font-medium">{selectedMember.role}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="hidden md:block mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-2">{selectedMember.name}</h2>
                    <p className="text-blue-600 font-semibold text-lg">{selectedMember.role}</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">About</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedMember.bio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Key Expertise</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedMember.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center flex-col items-start gap-6">
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connect</h3>
                      <div className="flex gap-4">
                        <a
  href={selectedMember.socials.linkedin}
  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
>
  <FaLinkedin className="w-5 h-5 text-black" />
</a>

<a
  href={selectedMember.socials.twitter}
  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"
>
  <FaXTwitter className="w-5 h-5 text-black" />
</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

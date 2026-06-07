"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Heart, Coffee, Globe } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Senior SEO Strategist",
    type: "Full-time",
    location: "Remote / New York",
    category: "Strategy",
  },
  {
    title: "Full Stack Developer (Next.js)",
    type: "Full-time",
    location: "Remote / London",
    category: "Development",
  },
  {
    title: "Creative Content Lead",
    type: "Full-time",
    location: "Remote / Dubai",
    category: "Creative",
  },
  {
    title: "Paid Media Specialist",
    type: "Contract",
    location: "Remote",
    category: "Marketing",
  },
];

const perks = [
  { title: "Remote First", icon: Globe, desc: "Work from anywhere in the world with our global team." },
  { title: "Health & Wellness", icon: Heart, desc: "Comprehensive health insurance and mental health support." },
  { title: "Learning Budget", icon: Zap, desc: "Annual stipend for courses, books, and conferences." },
  { title: "Flexible Hours", icon: Clock, desc: "We value output over hours. Manage your own schedule." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join the Digital Revolution"
        subtitle="Careers"
        description="Help us shape the future of digital marketing. We're looking for passionate, innovative minds to join our global team."
      />

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader
                title="Why Work With Us?"
                subtitle="Our Culture"
                description="At Media Lift Advisor, we believe in fostering a culture of continuous learning, creativity, and mutual respect."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {perks.map((perk, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFB800]/12 flex items-center justify-center">
                      <perk.icon className="w-6 h-6 text-[#B98100]" />
                    </div>
                    <h4 className="font-bold text-gray-900 font-poppins">{perk.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Our Culture"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
                <Coffee className="w-10 h-10 text-[#B98100] mb-4" />
                <p className="font-bold text-gray-900">Great Coffee & <br /> Even Better People.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Current Openings"
            subtitle="Job Board"
            centered
            description="Find your next challenge and help us build something extraordinary."
          />

          <div className="mt-16 space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 interactive-card group"
              >
                <div className="space-y-4">
                  <span className="px-4 py-1.5 bg-[#FFB800]/12 text-[#B98100] text-xs font-bold rounded-full uppercase tracking-wider">
                    {job.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins group-hover:text-[#B98100] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FFB800]" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FFB800]" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 dark-button font-bold rounded-full group-hover:bg-[#FFB800] group-hover:text-[#081120]"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Don&apos;t see a role that fits? <Link href="#" className="text-[#B98100] font-bold hover:underline">Send us your CV</Link> for future consideration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

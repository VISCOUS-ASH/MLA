"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. While some improvements can be seen within 2-3 months, significant results typically take 6-12 months of consistent effort and optimization.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with a diverse range of industries including Tech, E-commerce, Fashion, Healthcare, and Finance. Our data-driven approach allows us to tailor strategies to any market.",
  },
  {
    question: "Do you offer custom marketing packages?",
    answer: "Absolutely. We understand that every business is unique. We build custom packages based on your specific goals, budget, and current digital maturity.",
  },
  {
    question: "How do you measure campaign success?",
    answer: "We use a variety of KPIs including ROI, conversion rates, organic traffic growth, engagement metrics, and cost-per-acquisition, providing transparent monthly reports.",
  },
];

// ✅ Paste your Web3Forms Access Key here
const WEB3FORMS_KEY = "d6c9d2f2-a694-4e8e-b0a6-1dbb089768eb";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[MediaLift] ${formData.subject}`,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        title="Let's Start a Conversation"
        subtitle="Contact Us"
        description="Have a project in mind or want to learn more about our services? Reach out to us, and let's build something extraordinary together."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-gray-900">Contact Information</h2>
                <p className="text-gray-600">
                  Our team is ready to help you navigate your digital growth journey.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email Us", value: "info@medialiftadvisor.com", color: "bg-[#FFB800]/12 text-[#B98100]" },
                  { icon: Phone, label: "Call Us", value: "9610193337", color: "bg-[#081120] text-white" },
                  { icon: MapPin, label: "Visit Us", value: "Hari Om Apartment, Near Hotel KPL Prime, Sohan Nagar Mansarovar, Jaipur 302020 101", color: "bg-gray-100 text-[#081120]" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Link Placeholder */}
              <div className="pt-8">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow Our Journey</p>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#FFB800] hover:text-[#081120] transition-all cursor-pointer flex items-center justify-center text-gray-600">
                      <span className="font-bold text-xs">S{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 interactive-card"
              >
                {/* Success State */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins">Message Sent!</h3>
                      <p className="text-gray-600 max-w-sm">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 px-8 py-3 bg-[#FFB800] text-[#081120] font-bold rounded-2xl hover:bg-[#ffca28] transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                {status !== "success" && (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/25 focus:border-[#FFB800] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/25 focus:border-[#FFB800] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/25 focus:border-[#FFB800] transition-all appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>SEO Services</option>
                        <option>Social Media Marketing</option>
                        <option>Website Development</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/25 focus:border-[#FFB800] transition-all resize-none"
                      />
                    </div>

                    {/* Error Banner */}
                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">Something went wrong. Please try again or email us directly at info@medialiftadvisor.com</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-5 bg-[#FFB800] text-[#081120] font-bold rounded-2xl hover:bg-[#ffca28] transition-all shadow-xl shadow-[#FFB800]/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            title="Common Questions"
            subtitle="FAQ"
            centered
            description="Quick answers to common questions about our agency and process."
          />

          <div className="mt-16 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm interactive-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 font-poppins">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B98100] transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#FFB800]/12 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#B98100]" />
              </div>
              <p className="text-gray-600 font-medium">
                Still have questions?{" "}
                <Link href="#" className="text-[#B98100] font-bold hover:underline">
                  Chat with us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
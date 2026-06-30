"use client";

import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "10 SEO Trends You Can't Ignore in 2026",
    excerpt: "Discover the latest shifts in search engine algorithms and how to stay ahead of the competition.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "April 15, 2026",
    author: "Alex Rivera",
    category: "SEO",
    slug: "seo-trends-2026",
  },
  {
    title: "The Power of Storytelling in Content Marketing",
    excerpt: "Learn how to build a deeper connection with your audience through authentic brand stories.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "April 10, 2026",
    author: "Maria Garcia",
    category: "Content",
    slug: "storytelling-marketing",
  },
  {
    title: "Maximizing ROI on Social Media Ads",
    excerpt: "A comprehensive guide to optimizing your ad spend across Meta, LinkedIn, and TikTok.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "April 05, 2026",
    author: "David Chen",
    category: "Ads",
    slug: "social-ads-roi",
  },
  {
    title: "Why Minimalist Web Design is Still King",
    excerpt: "Explore how clean, minimalist designs improve user experience and boost conversion rates.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "March 28, 2026",
    author: "Sarah Jenkins",
    category: "Design",
    slug: "minimalist-web-design",
  },
  {
    title: "Influencer Marketing: Beyond the Follower Count",
    excerpt: "Why engagement and niche relevance matter more than just raw reach in today's market.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "March 20, 2026",
    author: "Emma Williams",
    category: "Influencer",
    slug: "influencer-marketing-tips",
  },
  {
    title: "The Future of AI in Digital Transformation",
    excerpt: "How artificial intelligence is reshaping customer interactions and business operations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    date: "March 15, 2026",
    author: "Alex Rivera",
    category: "AI",
    slug: "ai-digital-transformation",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Insights & Strategies"
        subtitle="Our Blog"
        description="Stay updated with the latest trends, tips, and case studies from the world of digital marketing."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 interactive-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-[#C9A227] text-[#081120] text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#C9A227]" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-[#B98100] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[#B98100] transition-all"
                    >
                      Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-24 bg-[#081120] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 soft-grid opacity-15" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="w-16 h-16 bg-[#C9A227]/12 border border-[#C9A227]/25 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                <Tag className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins">Subscribe for Digital Mastery</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Join 5,000+ marketing professionals and business owners. Get our best insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-8 py-4 rounded-full bg-white text-gray-900 focus:outline-none shadow-lg text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 gold-button font-bold rounded-full"
                >
                  Join Now
                </button>
              </form>
              <p className="text-xs text-white/45">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

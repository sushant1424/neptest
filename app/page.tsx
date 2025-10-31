"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { ProductCard } from "@/components/product-card";
import { Signature } from "@/components/signature";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any
    }
  }
};

export default function Home() {
  return (
    <div className="font-(--font-body)">
      <Navbar />
      <Hero />
      <WhyChoose />

      <section className="py-20 bg-[#f0ebe5] overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px", amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold text-[#2d2520] mb-3" style={{fontFamily:"var(--font-display)"}}>FEATURED COLLECTION</h2>
            <p className="text-center text-sm text-neutral-600 mb-12">Discover our most beloved pieces, each crafted with centuries of tradition</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px", amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <ProductCard 
                title="Traditional Weave Tote" 
                price="300" 
                img="/hemp-bag-1%201.png" 
                tag="Best Seller" 
                description="Handwoven with traditional patterns"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductCard 
                title="Minimalist Hemp Bag" 
                price="300" 
                img="/hemp-bag-2%201.png" 
                tag="New" 
                description="Clean lines, maximum durability"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductCard 
                title="Mountain Explorer Pack" 
                price="300" 
                img="/hemp-bag-3%201.png" 
                tag="Popular" 
                description="Perfect for your adventures"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 rounded-lg bg-[#6b4a32] text-white px-6 py-3 text-sm font-medium shadow-md group cursor-pointer"
              whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(107,74,50,0.4)", y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Full Collection
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Signature />
    </div>
  );
}

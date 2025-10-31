"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Heart, Star } from "lucide-react";

const features = [
  { 
    icon: Leaf, 
    title: "100% Natural Hemp",
    desc: "Sustainable and eco-friendly material sourced from the Himalayan region"
  },
  { 
    icon: Heart, 
    title: "100% Natural Hemp",
    desc: "Sustainable and eco-friendly material sourced from the Himalayan region"
  },
  { 
    icon: Star, 
    title: "100% Natural Hemp",
    desc: "Sustainable and eco-friendly material sourced from the Himalayan region"
  },
];

export function Signature() {
  return (
    <section className="py-20 bg-[#f9f6f3] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold text-[#2d2520] mb-3" style={{fontFamily:"var(--font-display)"}}>Our Signature Collection</h3>
          <p className="text-center text-sm text-neutral-600 mb-12">Every piece tells a story of heritage, sustainability, and craftsmanship</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div 
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-white p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-full">
              <Image 
                src="/hemp-bag-1%201.png" 
                alt="Signature bag" 
                fill 
                className="object-contain" 
              />
            </div>
          </motion.div>

          {/* Features */}
          <div className="flex flex-col gap-5">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="rounded-xl bg-white border border-[#e0d5c7] p-5 flex items-start gap-4 shadow-sm hover:shadow-lg transition-all group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <motion.div 
                  className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#2d7a5f] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-5 w-5 text-white"/>
                </motion.div>
                <div>
                  <h4 className="text-base font-semibold text-[#2d2520] mb-1">{feature.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Box */}
        <motion.div 
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="rounded-2xl bg-gradient-to-r from-[#5a7d8c] to-[#4a7c59] text-white text-center py-8 px-6 shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg sm:text-xl font-light italic leading-relaxed">
              "Every bag carries the spirit of the mountains and the warmth of Nepali craftsmanship."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



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
    <section className="relative py-20 bg-[#f9f6f3] overflow-hidden">
      {/* Floating Leaves */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-600/20"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </motion.div>
      ))}
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Hemp & Nature Elements */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Mountain Range Left */}
            <motion.svg 
              width="45" 
              height="45" 
              viewBox="0 0 24 24" 
              className="text-slate-700"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M2,20 L6,10 L10,15 L14,5 L18,12 L22,20 Z" fill="currentColor" opacity="0.4"/>
              <path d="M4,20 L7,13 L10,17 L14,9 L17,15 L20,20 Z" fill="currentColor" opacity="0.2"/>
              <circle cx="14" cy="5" r="1.5" fill="white" opacity="0.6"/>
            </motion.svg>
            
            {/* Hemp Plant Left */}
            <motion.svg 
              width="35" 
              height="35" 
              viewBox="0 0 24 24" 
              className="text-emerald-600"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12,2 L12,22 M12,5 L8,9 M12,5 L16,9 M12,9 L7,13 M12,9 L17,13 M12,13 L6,17 M12,13 L18,17" 
                    stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <circle cx="8" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
              <circle cx="16" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
              <circle cx="7" cy="13" r="2" fill="currentColor" opacity="0.6"/>
              <circle cx="17" cy="13" r="2" fill="currentColor" opacity="0.6"/>
            </motion.svg>
            
            <h3 className="text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold text-[#2d2520]" style={{fontFamily:"var(--font-display)"}}>Our Signature Collection</h3>
            
            {/* Hemp Plant Right */}
            <motion.svg 
              width="35" 
              height="35" 
              viewBox="0 0 24 24" 
              className="text-emerald-600"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <path d="M12,2 L12,22 M12,5 L8,9 M12,5 L16,9 M12,9 L7,13 M12,9 L17,13 M12,13 L6,17 M12,13 L18,17" 
                    stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <circle cx="8" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
              <circle cx="16" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
              <circle cx="7" cy="13" r="2" fill="currentColor" opacity="0.6"/>
              <circle cx="17" cy="13" r="2" fill="currentColor" opacity="0.6"/>
            </motion.svg>
            
            {/* Mountain Range Right */}
            <motion.svg 
              width="45" 
              height="45" 
              viewBox="0 0 24 24" 
              className="text-slate-700"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <path d="M2,20 L6,10 L10,15 L14,5 L18,12 L22,20 Z" fill="currentColor" opacity="0.4"/>
              <path d="M4,20 L7,13 L10,17 L14,9 L17,15 L20,20 Z" fill="currentColor" opacity="0.2"/>
              <circle cx="14" cy="5" r="1.5" fill="white" opacity="0.6"/>
            </motion.svg>
          </div>
          <p className="text-center text-sm text-neutral-600 mb-12">Every piece tells a story of heritage, sustainability, and craftsmanship</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div 
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-white p-6 cursor-pointer"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: "-100px", amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
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
                className="rounded-xl bg-white border border-[#e0d5c7] p-5 flex items-start gap-4 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ x: 10, scale: 1.03, borderColor: "#2d7a5f" }}
              >
                <motion.div 
                  className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#2d7a5f] flex items-center justify-center"
                  whileHover={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
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
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="rounded-2xl bg-gradient-to-r from-[#5a7d8c] to-[#4a7c59] text-white text-center py-8 px-6 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.25)", y: -5 }}
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



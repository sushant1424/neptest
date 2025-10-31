"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Heart, Star } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

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
  const { theme } = useTheme();
  
  return (
    <section className={`relative py-20 overflow-hidden ${
      theme === "dark"
        ? "bg-[#0a0a0a]"
        : "bg-[#faf8f5]"
    }`}>
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
              className="text-slate-400"
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
              className="text-emerald-400"
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
            
            <h3 className={`text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold ${
              theme === "dark" ? "text-white" : "text-[#2d2520]"
            }`} style={{fontFamily:"var(--font-display)"}}>Our Signature Collection</h3>
            
            {/* Hemp Plant Right */}
            <motion.svg 
              width="35" 
              height="35" 
              viewBox="0 0 24 24" 
              className="text-emerald-400"
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
              className="text-slate-400"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <path d="M2,20 L6,10 L10,15 L14,5 L18,12 L22,20 Z" fill="currentColor" opacity="0.4"/>
              <path d="M4,20 L7,13 L10,17 L14,9 L17,15 L20,20 Z" fill="currentColor" opacity="0.2"/>
              <circle cx="14" cy="5" r="1.5" fill="white" opacity="0.6"/>
            </motion.svg>
          </div>
          <p className={`text-center text-sm mb-12 ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
          }`}>Every piece tells a story of heritage, sustainability, and craftsmanship</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 max-w-sm lg:max-w-none mx-auto">
          {/* Image */}
          <motion.div 
            className={`relative aspect-square rounded-2xl overflow-hidden shadow-xl p-4 sm:p-6 cursor-pointer scale-90 sm:scale-100 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-white/10"
                : "bg-white border border-[#e0d5c7]"
            }`}
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
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className={`rounded-xl p-3 sm:p-4 lg:p-5 flex items-start gap-3 sm:gap-4 shadow-lg hover:shadow-xl transition-all group cursor-pointer ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-white/10 hover:border-emerald-500/30 hover:shadow-emerald-500/10"
                    : "bg-white border border-[#e0d5c7] hover:border-emerald-500/50"
                }`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ x: 10, scale: 1.03, borderColor: "#2d7a5f" }}
              >
                <motion.div 
                  className={`flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-emerald-500/20 border border-emerald-500/30"
                      : "bg-[#2d7a5f] border border-emerald-600"
                  }`}
                  whileHover={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${
                    theme === "dark" ? "text-emerald-400" : "text-white"
                  }`}/>
                </motion.div>
                <div>
                  <h4 className={`text-sm sm:text-base font-semibold mb-1 ${
                    theme === "dark" ? "text-white" : "text-[#2d2520]"
                  }`}>{feature.title}</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                  }`}>{feature.desc}</p>
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
            className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center py-8 px-6 shadow-xl shadow-emerald-500/20 border border-emerald-400/20 cursor-pointer"
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



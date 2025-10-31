"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Users, Gem, Globe, Heart } from "lucide-react";

const items = [
  { icon: Leaf, title: "Eco-Friendly Materials", desc: "100% natural hemp grown without pesticides or harmful chemicals in the Himalayan region" },
  { icon: Recycle, title: "Zero Waste Process", desc: "Every part of the hemp plant is utilized, ensuring minimal environmental impact" },
  { icon: Users, title: "Artisan Communities", desc: "Supporting over 200 skilled artisan families across rural Nepal" },
  { icon: Gem, title: "Premium Quality", desc: "Each bag undergoes rigorous quality checks to ensure lasting durability" },
  { icon: Globe, title: "Global Impact", desc: "Bringing traditional Nepali craftsmanship to conscious consumers worldwide" },
  { icon: Heart, title: "Made with Love", desc: "Every stitch carries the dedication and pride of our master craftspeople" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export function WhyChoose() {
  return (
    <section className="relative py-20 bg-[#f9f6f3] overflow-hidden">
      {/* Traditional Nepali Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nepaliPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M50,20 L50,80 M20,50 L80,50" stroke="currentColor" strokeWidth="1"/>
              <path d="M35,35 L65,65 M65,35 L35,65" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nepaliPattern)" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Hemp Plant & Mountain Elements */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Hemp Leaf Left */}
            <motion.svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              className="text-emerald-700"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12,2 L12,22 M12,6 L8,10 M12,6 L16,10 M12,10 L7,14 M12,10 L17,14 M12,14 L6,18 M12,14 L18,18" 
                    stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="7" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
              <circle cx="17" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
              <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.6"/>
            </motion.svg>
            
            {/* Mountain Icon */}
            <motion.svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              className="text-slate-600"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M3,20 L9,8 L12,13 L15,6 L21,20 Z" fill="currentColor" opacity="0.5"/>
              <path d="M5,20 L9,12 L12,16 L15,10 L19,20 Z" fill="currentColor" opacity="0.3"/>
            </motion.svg>
            
            <h2 className="text-center text-3xl sm:text-4xl tracking-[0.12em] font-semibold text-[#2d2520]" style={{fontFamily:"var(--font-display)"}}>Why Choose Antique Nepal</h2>
            
            {/* Mountain Icon Right */}
            <motion.svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              className="text-slate-600"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <path d="M3,20 L9,8 L12,13 L15,6 L21,20 Z" fill="currentColor" opacity="0.5"/>
              <path d="M5,20 L9,12 L12,16 L15,10 L19,20 Z" fill="currentColor" opacity="0.3"/>
            </motion.svg>
            
            {/* Hemp Leaf Right */}
            <motion.svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              className="text-emerald-700"
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <path d="M12,2 L12,22 M12,6 L8,10 M12,6 L16,10 M12,10 L7,14 M12,10 L17,14 M12,14 L6,18 M12,14 L18,18" 
                    stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="7" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
              <circle cx="17" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
              <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.6"/>
            </motion.svg>
          </div>
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div 
              className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-600/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <div className="w-2 h-2 rounded-full bg-emerald-600/40" />
            <motion.div 
              className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-600/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <p className="text-center text-sm text-neutral-600 mb-12">Authenticity, sustainability, and craftsmanship in every bag</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px", amount: 0.2 }}
        >
          {items.map((it, index) => (
            <motion.div 
              key={it.title} 
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-xl bg-white border border-[#e8e0d8] p-8 shadow-sm hover:shadow-2xl text-center group cursor-pointer"
            >
              <motion.div 
                className="mx-auto mb-5 h-16 w-16 rounded-full bg-[#e8f3e8] flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <it.icon className="h-7 w-7 text-[#4a7c59] transition-transform group-hover:scale-110"/>
              </motion.div>
              <h3 className="font-semibold text-base text-[#2d2520] mb-2">{it.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



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
    <section className="py-20 bg-[#f9f6f3] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl tracking-[0.12em] font-semibold text-[#2d2520] mb-3" style={{fontFamily:"var(--font-display)"}}>Why Choose Antique Nepal</h2>
          <p className="text-center text-sm text-neutral-600 mb-12">Authenticity, sustainability, and craftsmanship in every bag</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((it, index) => (
            <motion.div 
              key={it.title} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-xl bg-white border border-[#e8e0d8] p-8 shadow-sm hover:shadow-xl text-center group"
            >
              <motion.div 
                className="mx-auto mb-5 h-16 w-16 rounded-full bg-[#e8f3e8] flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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



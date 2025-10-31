"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award } from "lucide-react";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/hero-mountains%201.png"
        alt="Himalayan mountains"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65"/>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col pt-24">
        {/* Banner at top */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-white/18 border border-white/35 text-white backdrop-blur-md px-6 py-2.5 inline-flex items-center gap-2 shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
            <Leaf className="h-4 w-4 text-emerald-300" />
            <span className="text-sm">100% Sustainable • Handcrafted in Nepal • Est. 2010</span>
          </div>
        </div>

        {/* Main content centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
          <div className="space-y-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]"
              style={{fontFamily:"var(--font-display)"}}
            >
              ANTIQUE NEPAL
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/95 font-medium"
            >
              Handcrafted Hemp Bags Woven with Himalayan Heritage
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 leading-relaxed px-4"
            >
              Every bag tells a story. Crafted by master artisans using centuries-old techniques, sustainable hemp, and adorned with traditional Nepali paper art. Experience the perfect blend of ancient wisdom and modern design.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="bg-[#8b5a3c] hover:bg-[#6a4a2f] rounded-md h-11 px-7 text-sm font-medium">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-md h-11 px-7 text-sm font-medium border-white/50 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              Discover Our Story
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="max-w-5xl w-full px-6 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white/10 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.3)] border border-white/20 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <div className="mb-3 h-12 w-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white"/>
              </div>
              <div className="text-white">
                <div className="text-base font-semibold text-white mb-1">100% Eco-Friendly</div>
                <div className="text-sm text-white/80">Sustainable hemp fiber</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white/10 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.3)] border border-white/20 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <div className="mb-3 h-12 w-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-white"/>
              </div>
              <div className="text-white">
                <div className="text-base font-semibold text-white mb-1">Fair Trade</div>
                <div className="text-sm text-white/80">Supporting local artisans</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white/10 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.3)] border border-white/20 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <div className="mb-3 h-12 w-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <Award className="h-6 w-6 text-white"/>
              </div>
              <div className="text-white">
                <div className="text-base font-semibold text-white mb-1">Quality Crafted</div>
                <div className="text-sm text-white/80">15+ years tradition</div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}



"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  price: string;
  img: string;
  tag?: string;
  description?: string;
};

export function ProductCard({ title, price, img, tag, description }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div 
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group perspective-1000"
    >
      <Card className="relative overflow-hidden border border-[#e0d5c7] shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 p-0" style={{ transformStyle: "preserve-3d" }}>
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={isHovered ? { x: ["-100%", "200%"] } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transform: "translateZ(1px)" }}
        />
        
        <div className="relative aspect-square bg-[#f5f0ea] overflow-hidden rounded-t-xl">
          <motion.div
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image 
              src={img} 
              alt={title} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
          </motion.div>
          {tag && (
            <motion.div 
              className="absolute left-4 top-4 rounded-full bg-[#c85a3c] text-white text-xs font-medium px-3 py-1 shadow-md flex items-center gap-1"
              animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-3 w-3" />
              {tag}
            </motion.div>
          )}
        </div>
        <CardContent className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-lg font-semibold text-[#2d2520] mb-1">{title}</h3>
          <p className="text-sm text-neutral-600 mb-4">{description || "Handwoven with traditional patterns"}</p>
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold text-[#2d2520]"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            >
              Rs. {price}
            </motion.div>
            <motion.button 
              className="group/btn relative overflow-hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium text-[#c85a3c] bg-white border border-[#c85a3c] hover:bg-[#c85a3c] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#c85a3c]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Details</span>
              <ArrowRight className="relative z-10 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}



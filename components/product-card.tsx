"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  price: string;
  img: string;
  tag?: string;
  description?: string;
};

export function ProductCard({ title, price, img, tag, description }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -8 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group"
    >
      <Card className="overflow-hidden border border-[#e0d5c7] shadow-sm rounded-xl hover:shadow-xl transition-shadow duration-300 p-0">
        <div className="relative aspect-square bg-[#f5f0ea] overflow-hidden rounded-t-xl">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
            <div className="absolute left-4 top-4 rounded-full bg-[#c85a3c] text-white text-xs font-medium px-3 py-1 shadow-md">
              {tag}
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#2d2520] mb-1">{title}</h3>
          <p className="text-sm text-neutral-600 mb-4">{description || "Handwoven with traditional patterns"}</p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-[#2d2520]">Rs. {price}</div>
            <button className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium text-[#c85a3c] bg-white border border-[#c85a3c] hover:bg-[#c85a3c] hover:text-white transition-all duration-300">
              View Details
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}



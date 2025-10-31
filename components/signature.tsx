import Image from "next/image";
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
    <section className="py-20 bg-[#f9f6f3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold text-[#2d2520] mb-3" style={{fontFamily:"var(--font-display)"}}>Our Signature Collection</h3>
        <p className="text-center text-sm text-neutral-600 mb-12">Every piece tells a story of heritage, sustainability, and craftsmanship</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-white p-6">
            <div className="relative w-full h-full">
              <Image 
                src="/hemp-bag-1%201.png" 
                alt="Signature bag" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-5">
            {features.map((feature, i) => (
              <div key={i} className="rounded-xl bg-white border border-[#e0d5c7] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#2d7a5f] flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#2d2520] mb-1">{feature.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Box */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#5a7d8c] to-[#4a7c59] text-white text-center py-8 px-6 shadow-lg">
            <p className="text-lg sm:text-xl font-light italic leading-relaxed">
              "Every bag carries the spirit of the mountains and the warmth of Nepali craftsmanship."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { ProductCard } from "@/components/product-card";
import { Signature } from "@/components/signature";

export default function Home() {
  return (
    <div className="font-(--font-body)">
      <Navbar />
      <Hero />
      <WhyChoose />

      <section className="py-20 bg-[#f0ebe5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl tracking-[0.08em] font-semibold text-[#2d2520] mb-3" style={{fontFamily:"var(--font-display)"}}>FEATURED COLLECTION</h2>
          <p className="text-center text-sm text-neutral-600 mb-12">Discover our most beloved pieces, each crafted with centuries of tradition</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Traditional Weave Tote" 
              price="300" 
              img="/hemp-bag-1%201.png" 
              tag="Best Seller" 
              description="Handwoven with traditional patterns"
            />
            <ProductCard 
              title="Minimalist Hemp Bag" 
              price="300" 
              img="/hemp-bag-2%201.png" 
              tag="New" 
              description="Clean lines, maximum durability"
            />
            <ProductCard 
              title="Mountain Explorer Pack" 
              price="300" 
              img="/hemp-bag-3%201.png" 
              tag="Popular" 
              description="Perfect for your adventures"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-[#6b4a32] text-white px-6 py-3 text-sm font-medium hover:bg-[#5a3d28] transition-colors shadow-md">
              View Full Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Signature />
    </div>
  );
}

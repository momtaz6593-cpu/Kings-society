import React from "react";
import Link from "next/link";
import TrendingSlider from "@/app/components/client/TrendingSlider";
import ProductCard from "@/app/components/client/ProductCard";
import { MEN_PANTS } from "@/Data/pants";

export default function PopularPantsSection() {
  return (
    <section className="w-full bg-[#0b0c10] py-10 xl:py-16 2xl:py-20 px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="border-b border-neutral-800 pb-4 xl:pb-6 mb-6 xl:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-black uppercase tracking-widest">
              POPULAR PANTS
            </h2>
            <p className="text-gray-400 text-xs xl:text-sm 2xl:text-base mt-1">
              Durable. Comfortable. Versatile.
            </p>
          </div>

          <Link
            href="/men/pants"
            className="text-xs xl:text-sm 2xl:text-base text-amber-400 hover:underline flex items-center gap-1 font-semibold pb-1"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Reusing Client Slider Component with Unified ProductCard */}
        <TrendingSlider>
          {MEN_PANTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="w-full lg:snap-start lg:flex-none lg:w-[calc(25%-12px)] xl:w-[calc(25%-16px)]"
            />
          ))}
        </TrendingSlider>
      </div>
    </section>
  );
}
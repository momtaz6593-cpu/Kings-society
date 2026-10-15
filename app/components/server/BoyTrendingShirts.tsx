// app/components/server/BoyTrendingShirts.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/components/client/AddToCartButton";
import TrendingSlider from "@/app/components/client/TrendingSlider";
import { BOYS_DATA } from "@/Data";

// Reusable Product Card Component to keep code clean
function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-neutral-900/60 border border-neutral-800/80 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between h-full">
      {/* Product Image */}
      <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 xl:p-5 2xl:p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-white font-semibold text-xs sm:text-sm xl:text-base 2xl:text-lg line-clamp-1 group-hover:text-amber-400 transition">
            {product.name}
          </h3>
          <p className="text-neutral-400 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm mt-1 line-clamp-1">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-2 sm:mt-3 xl:mt-4">
            <p className="text-amber-400 font-bold text-xs sm:text-sm xl:text-base 2xl:text-lg">
              {product.price}
            </p>
          </div>
        </div>

        <div className="mt-3 xl:mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default function BoyTrendingShirts() {
  const boysShirts = BOYS_DATA?.shirts || [];

  return (
    <section className="w-full bg-[#0b0c10] py-10 xl:py-16 2xl:py-20 px-4 md:px-8 xl:px-12 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="border-b border-neutral-800 pb-4 xl:pb-6 mb-6 xl:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-black uppercase tracking-widest">
              TRENDING SHIRTS
            </h2>
            <p className="text-gray-400 text-xs xl:text-sm 2xl:text-base mt-1">
              Premium fabric. Timeless designs for boys.
            </p>
          </div>

          <Link
            href="/boys/shirts"
            className="text-xs xl:text-sm 2xl:text-base text-amber-400 hover:underline flex items-center gap-1 font-semibold pb-1"
          >
            View All &rarr;
          </Link>
        </div>

        {/* 📱 Mobile/Tablet View (hidden on LG screens and above) */}
        {/* Shows a simple, scrollable grid without slider buttons */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {boysShirts.slice(0, 6).map((product: any) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* 💻 Desktop View (only visible on LG screens and above) */}
        {/* Reuses Client Slider Component which contains the Prev/Next buttons */}
        <div className="hidden lg:block">
          <TrendingSlider>
            {boysShirts.map((product: any) => (
              <div
                key={product.id}
                className="
                  w-full
                  lg:snap-start lg:flex-none lg:w-[calc(25%-12px)]
                  xl:w-[calc(25%-16px)]
                  h-full
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </TrendingSlider>
        </div>
      </div>
    </section>
  );
}
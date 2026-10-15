"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import AddToCartButton from "@/app/components/client/AddToCartButton";
import { MEN_DATA, BOYS_DATA } from "@/Data";

interface CollectionsGridProps {
  selectedCategory: string;
  selectedGender: string;
}

export default function CollectionsGrid({
  selectedCategory,
  selectedGender,
}: CollectionsGridProps) {
  // Logic to process and filter products
  const products = useMemo(() => {
    const categories = ["shirts", "pants", "jackets", "hoodies", "sneakers", "accessories"];

    // Function to get raw products array for given category & gender
    const getCategoryProducts = (catKey: string, genderKey: string) => {
      let list: any[] = [];
      if (genderKey === "men" || genderKey === "all") {
        const menList = (MEN_DATA[catKey] || []).map((item) => ({ ...item, gender: "men" }));
        list = [...list, ...menList];
      }
      if (genderKey === "boys" || genderKey === "all") {
        const boysList = (BOYS_DATA[catKey] || []).map((item) => ({ ...item, gender: "boys" }));
        list = [...list, ...boysList];
      }
      return list;
    };

    // Case 1: Specific Category selected
    if (selectedCategory !== "all") {
      return getCategoryProducts(selectedCategory, selectedGender);
    }

    // Case 2: All Categories selected -> Interleaved / Round-Robin Logic
    const categoryArrays = categories.map((catKey) =>
      getCategoryProducts(catKey, selectedGender)
    );

    const result: any[] = [];
    const maxLen = Math.max(...categoryArrays.map((arr) => arr.length), 0);

    for (let i = 0; i < maxLen; i++) {
      for (const catArray of categoryArrays) {
        if (catArray[i]) {
          result.push(catArray[i]);
        }
      }
    }

    return result;
  }, [selectedCategory, selectedGender]);

  return (
    <section className="w-full bg-[#0b0c10] min-h-[60vh] py-8 xl:py-12 px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        {/* Count Indicator */}
        <div className="mb-6 xl:mb-8 flex items-center justify-between">
          <p className="text-gray-400 text-xs xl:text-sm font-semibold uppercase tracking-wider">
            Showing <span className="text-amber-400">{products.length}</span> Products
          </p>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8">
            {products.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group bg-neutral-900/60 border border-neutral-800/80 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between"
              >
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
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-lg">
            <p className="text-gray-400 text-sm xl:text-base">No products found in this filter selection.</p>
          </div>
        )}
      </div>
    </section>
  );
}
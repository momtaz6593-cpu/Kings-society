"use client";

import React, { useMemo } from "react";
import ProductCard from "@/app/components/client/ProductCard";
import { MEN_DATA, BOYS_DATA } from "@/Data";

interface CollectionsGridProps {
  selectedCategory: string;
  selectedGender: string;
}

export default function CollectionsGrid({
  selectedCategory,
  selectedGender,
}: CollectionsGridProps) {
  const products = useMemo(() => {
    const categories = ["shirts", "pants", "jackets", "hoodies", "sneakers", "accessories"];

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

    if (selectedCategory !== "all") {
      return getCategoryProducts(selectedCategory, selectedGender);
    }

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
    /* 🔴 মোবাইলে px-2 এবং গ্রিডে gap-2 দিয়ে কার্ড চওড়া করা হয়েছে */
    <section className="w-full bg-[#0b0c10] min-h-[60vh] py-6 xl:py-12 px-2 sm:px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        {/* Count Indicator */}
        <div className="mb-4 xl:mb-8 flex items-center justify-between px-1">
          <p className="text-gray-400 text-xs xl:text-sm font-semibold uppercase tracking-wider">
            Showing <span className="text-amber-400">{products.length}</span> Products
          </p>
        </div>

        {/* Product Grid - Mobile view enhanced */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6 xl:gap-8">
            {products.map((product, idx) => (
              <ProductCard
                key={`${product.id}-${idx}`}
                product={product}
              />
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
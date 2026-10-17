"use client";

import React from "react";
import ProductCard from "@/app/components/client/ProductCard";
import { Product } from "@/Data";

interface SearchResultsGridProps {
  products: Product[];
}

export default function SearchResultsGrid({ products }: SearchResultsGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-neutral-800 rounded-lg">
        <p className="text-gray-400 text-sm sm:text-base">
          No products matched your search query.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6">
      {products.map((product, idx) => (
        <ProductCard key={`${product.id}-${idx}`} product={product} />
      ))}
    </div>
  );
}
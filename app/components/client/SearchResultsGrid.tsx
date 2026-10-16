"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/Data";
import { useProductModal } from "@/app/context/ProductModalContext";

interface SearchResultsGridProps {
  products: Product[];
}

export default function SearchResultsGrid({ products }: SearchResultsGridProps) {
  const { openModal } = useProductModal();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => openModal(product)}
          className="group bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-400/50 rounded-lg overflow-hidden transition duration-300 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h2 className="text-white text-xs sm:text-sm font-bold truncate group-hover:text-amber-400 transition">
                {product.name}
              </h2>
              <p className="text-gray-400 text-[11px] sm:text-xs font-light line-clamp-2 mt-1">
                {product.description}
              </p>
            </div>
          </div>
          
          <div className="p-3 sm:p-4 pt-0 flex items-center justify-between mt-2">
            <span className="text-amber-400 text-xs sm:text-sm font-black">
              {product.price}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // কার্ডের ক্লিক ইভেন্ট যেন ডাবল ট্রিগার না হয়
                openModal(product);
              }}
              className="text-[10px] sm:text-xs font-semibold uppercase bg-neutral-800 group-hover:bg-amber-400 group-hover:text-black text-white px-2.5 py-1.5 rounded-sm transition"
            >
              Quick View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
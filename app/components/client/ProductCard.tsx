"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/Data";
import ProductModal from "@/app/components/client/ProductModal";
import AddToCartButton from "@/app/components/client/AddToCartButton";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "w-full" }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Product Card Container */}
      <div
        onClick={() => setIsModalOpen(true)}
        className={`group bg-neutral-900/60 border border-neutral-800 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between cursor-pointer ${className}`}
      >
        <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* 🔴 মোবাইলের জন্য p-2.5 দেওয়া হলো যাতে টাইট ও চওড়া দেখায় */}
        <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm line-clamp-1 group-hover:text-amber-400 transition">
              {product.name}
            </h3>
            <p className="text-neutral-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1 line-clamp-1">
              {product.description}
            </p>
            <p className="text-amber-400 font-bold text-xs sm:text-sm mt-1 sm:mt-2">
              {product.price}
            </p>
          </div>

          <div onClick={(e) => e.stopPropagation()} className="mt-2 sm:mt-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
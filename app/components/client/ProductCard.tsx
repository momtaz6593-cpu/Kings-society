"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/Data";
import { useProductModal } from "@/app/context/ProductModalContext";
import AddToCartButton from "@/app/components/client/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openModal } = useProductModal();

  return (
    <div
      onClick={() => openModal(product)}
      className="w-full h-full cursor-pointer lg:snap-start lg:flex-none group bg-neutral-900/60 border border-neutral-800/80 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between"
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

        <div onClick={(e) => e.stopPropagation()} className="mt-3 xl:mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
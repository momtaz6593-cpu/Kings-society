"use client";

import React, { useState } from "react";
import { Product } from "@/Data/shirts";
import { useCart } from "@/app/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  variant?: "full" | "icon" | "compact";
}

export default function AddToCartButton({
  product,
  className,
  variant = "full",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleAdd}
        type="button"
        className={
          className ||
          `w-full mt-3 py-1.5 px-3 rounded text-[11px] font-bold uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            isAdded
              ? "bg-amber-400 text-black scale-[0.98]"
              : "bg-neutral-800 hover:bg-amber-400 hover:text-black text-white"
          }`
        }
      >
        {isAdded ? (
          <>
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Added</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      type="button"
      className={
        className ||
        `w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm ${
          isAdded
            ? "bg-amber-400 text-black shadow-amber-400/20 scale-[0.98]"
            : "bg-neutral-800 hover:bg-amber-400 hover:text-black text-white hover:shadow-amber-400/10"
        }`
      }
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Added To Cart!</span>
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          <span>Add To Cart</span>
        </>
      )}
    </button>
  );
}

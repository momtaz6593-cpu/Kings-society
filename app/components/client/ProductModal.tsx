"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, CheckCircle, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/Data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    // Add product to cart with selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-[#0b0c10] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl text-white my-auto max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-neutral-900/80 hover:bg-amber-400 hover:text-black text-white p-2 rounded-full transition duration-200 border border-neutral-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: Product Image */}
          <div className="relative aspect-square w-full bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800/80">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Details & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                KINGS SOCIETY PREMIUM
              </span>
              <h2 className="text-xl md:text-2xl font-black uppercase font-serif tracking-tight text-white mb-2">
                {product.name}
              </h2>

              <div className="text-xl md:text-2xl font-black text-amber-400 mb-4">
                {product.price}
              </div>

              <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed mb-6 border-t border-b border-neutral-800/80 py-4">
                {product.description}
              </p>

              {/* Tags List */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] text-neutral-400 font-semibold uppercase tracking-wider block mb-2">
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-800 uppercase"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Quantity:
                </span>
                <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-lg p-1">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-1.5 text-neutral-400 hover:text-amber-400 transition"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-1.5 text-neutral-400 hover:text-amber-400 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add To Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-3.5 px-6 rounded-lg font-black text-xs uppercase tracking-widest transition flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                  isAdded
                    ? "bg-green-500 text-black shadow-green-500/20"
                    : "bg-amber-400 hover:bg-amber-500 text-black shadow-amber-400/20"
                }`}
              >
                {isAdded ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Added To Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Cart</span>
                  </>
                )}
              </button>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-neutral-800/80 text-[10px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>100% Authentic Quality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Express Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
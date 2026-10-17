"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductModal from "@/app/components/client/ProductModal";

interface NewSeasonSliderProps {
  products: any[];
}

export default function NewSeasonSlider({ products }: NewSeasonSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= products.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, products.length - 2) : prev - 2));
  };

  return (
    <div className="w-full flex flex-col">
      {/* পিসি ভার্সনের জন্য প্রিভিয়াস ও নেক্সট কন্ট্রোল বাটন */}
      <div className="hidden lg:flex items-center justify-end gap-3 mb-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-white flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-white flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* মোবাইল ভিউ: ৪টি প্রোডাক্ট একসাথে ২x২ গ্রিডে দেখাবে */}
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="bg-neutral-900/60 border border-neutral-800 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between cursor-pointer p-2.5"
          >
            {/* স্কয়ার শেপ ইমেজ বক্স */}
            <div className="relative aspect-square w-full bg-neutral-950 rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.title || item.name}
                fill
                sizes="50vw"
                className="object-cover object-center group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-2 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-white font-semibold text-xs line-clamp-1">
                  {item.title || item.name}
                </h3>
                <p className="text-neutral-400 text-[10px] mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
                <p className="text-amber-400 font-bold text-xs mt-1">
                  {item.price}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(item);
                }}
                className="mt-2 w-full bg-neutral-800 hover:bg-amber-400 hover:text-black text-white text-[11px] font-semibold py-1.5 rounded transition uppercase flex items-center justify-center gap-1.5"
              >
                <span>🛒</span> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* পিসি/ল্যাপটপ ভিউ: স্লাইডার আকারে ২টি বড় প্রিমিয়াম কার্ড দেখাবে */}
      <div className="hidden lg:grid grid-cols-2 gap-6">
        {products.slice(currentIndex, currentIndex + 2).map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="bg-neutral-900/70 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-400/60 transition duration-300 flex flex-col justify-between cursor-pointer p-5 shadow-2xl group"
          >
            {/* স্কয়ার শেপ ইমেজ বক্স */}
            <div className="relative aspect-square w-full bg-neutral-950 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title || item.name}
                fill
                sizes="50vw"
                className="object-cover object-center group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition">
                  {item.title || item.name}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  {item.subtitle}
                </p>
                <p className="text-amber-400 font-extrabold text-xl mt-2">
                  {item.price}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(item);
                }}
                className="mt-4 w-full bg-neutral-800 hover:bg-amber-400 hover:text-black text-white text-sm font-bold py-2.5 rounded transition uppercase flex items-center justify-center gap-2"
              >
                <span>🛒</span> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* পপআপ মোডাল */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
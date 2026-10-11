"use client";

import React, { useRef } from "react";

interface TrendingSliderProps {
  children: React.ReactNode;
}

export default function TrendingSlider({ children }: TrendingSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Smooth 80% scroll
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scroll Navigation Buttons for Desktop */}
      <div className="hidden sm:flex justify-end items-center space-x-2 mb-4">
        <button
          onClick={() => handleScroll("left")}
          className="w-9 h-9 rounded-full border border-neutral-800 bg-neutral-900/90 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 flex items-center justify-center transition cursor-pointer"
          aria-label="Previous Products"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="w-9 h-9 rounded-full border border-neutral-800 bg-neutral-900/90 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 flex items-center justify-center transition cursor-pointer"
          aria-label="Next Products"
        >
          &#8594;
        </button>
      </div>

      {/* Responsive Container */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-2 gap-3 sm:gap-4
          md:grid-cols-3
          lg:flex lg:overflow-x-auto lg:scroll-smooth lg:snap-x lg:snap-mandatory lg:pb-4
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
      >
        {children}
      </div>
    </div>
  );
}
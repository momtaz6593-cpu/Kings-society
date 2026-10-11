"use client";

import { useRef } from "react";

export default function CategoryCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full">
      {/* Navigation Buttons for Laptop */}
      <div className="hidden lg:flex justify-end items-center space-x-2 mb-4">
        <button
          onClick={() => handleScroll("left")}
          className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 flex items-center justify-center transition cursor-pointer"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 flex items-center justify-center transition cursor-pointer"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-2 sm:grid-cols-3 gap-4 
          lg:flex lg:overflow-x-auto lg:scroll-smooth lg:snap-x lg:snap-mandatory
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
      >
        {children}
      </div>
    </div>
  );
}
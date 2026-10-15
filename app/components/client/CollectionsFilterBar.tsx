"use client";

import React from "react";

interface CollectionsFilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
}

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Shirts", value: "shirts" },
  { label: "Pants", value: "pants" },
  { label: "Jackets", value: "jackets" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Sneakers", value: "sneakers" },
  { label: "Accessories", value: "accessories" },
];

const GENDERS = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Boys", value: "boys" },
];

export default function CollectionsFilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
}: CollectionsFilterBarProps) {
  return (
    /* top-[84px] for Mobile & top-[92px] for Desktop keeps both perfectly aligned with zero overlapping */
    <div className="sticky top-[84px] md:top-[92px] z-30 w-full bg-[#0b0c10]/95 backdrop-blur-md border-b border-neutral-800 shadow-2xl transition-all duration-150">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-3 sm:px-6 xl:px-12 py-2.5 xl:py-4 flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
        
        {/* Left Side: Categories Horizontal Scrollable Bar */}
        <div className="w-full md:w-auto flex items-center gap-1.5 xl:gap-2.5 overflow-x-auto scrollbar-none py-1 min-w-0 scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex-shrink-0 px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-md transition duration-200 ${
                  isActive
                    ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20"
                    : "bg-neutral-900 text-gray-300 hover:bg-neutral-800 hover:text-white border border-neutral-800/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Right Side: Gender Filter */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 xl:gap-3 border-t md:border-t-0 border-neutral-800/70 pt-2 md:pt-0 shrink-0">
          <span className="text-[10px] sm:text-[11px] xl:text-xs text-gray-400 font-bold uppercase tracking-wider">
            Filter For:
          </span>
          <div className="flex items-center gap-1.5 xl:gap-2">
            {GENDERS.map((gender) => {
              const isActive = selectedGender === gender.value;
              return (
                <button
                  key={gender.value}
                  onClick={() => setSelectedGender(gender.value)}
                  className={`px-3 xl:px-4 py-1 xl:py-1.5 text-xs xl:text-sm font-bold rounded uppercase transition duration-200 ${
                    isActive
                      ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                      : "bg-neutral-900 text-gray-400 hover:text-amber-400 border border-neutral-800/80"
                  }`}
                >
                  {gender.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
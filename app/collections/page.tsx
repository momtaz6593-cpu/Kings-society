"use client";

import React, { useState } from "react";
import CollectionsFilterBar from "@/app/components/client/CollectionsFilterBar";
import CollectionsGrid from "@/app/components/client/CollectionsGrid";

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");

  return (
    <main className="min-h-screen bg-[#0b0c10]">
      {/* Header Banner */}
      <div className="bg-neutral-950 border-b border-neutral-800 py-8 xl:py-14 2xl:py-20 px-4 md:px-8 xl:px-12 text-center">
        <h1 className="text-white text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase tracking-widest text-amber-400">
          ALL COLLECTIONS
        </h1>
        <p className="text-gray-400 text-xs md:text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 max-w-xl xl:max-w-3xl mx-auto">
          Explore our complete range of premium streetwear, footwear, and accessories.
        </p>
      </div>

      {/* Sticky Filter Bar */}
      <div className="xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto xl:px-12">
        <CollectionsFilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
      </div>

      {/* Filtered Product Grid */}
      <div className="xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-4 md:px-8 xl:px-12">
        <CollectionsGrid
          selectedCategory={selectedCategory}
          selectedGender={selectedGender}
        />
      </div>
    </main>
  );
}
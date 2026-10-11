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
      <div className="bg-neutral-950 border-b border-neutral-800 py-8 px-4 md:px-8 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-black uppercase tracking-widest text-amber-400">
          ALL COLLECTIONS
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl mx-auto">
          Explore our complete range of premium streetwear, footwear, and accessories.
        </p>
      </div>

      {/* Sticky Filter Bar */}
      <CollectionsFilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />

      {/* Filtered Product Grid */}
      <CollectionsGrid
        selectedCategory={selectedCategory}
        setSelectedGender={selectedGender}
        selectedGender={selectedGender}
      />
    </main>
  );
}
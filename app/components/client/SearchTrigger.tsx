"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ALL_PRODUCTS, Product } from "../../../Data";
import ProductModal from "@/app/components/client/ProductModal";

export default function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // মোবাইল পপ-আপ ওপেন হলে অটোমেটিক ইনপুটে ফোকাস করা
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // লাইভ সার্চ ফিল্টারিং লজিক (Name, Description, and Tags)
  useEffect(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery.length > 0) {
      const filtered = ALL_PRODUCTS.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(trimmedQuery);
        const descMatch = product.description.toLowerCase().includes(trimmedQuery);
        const tagMatch = product.tags?.some((tag) =>
          tag.toLowerCase().includes(trimmedQuery)
        );
        return nameMatch || descMatch || tagMatch;
      });
      setResults(filtered.slice(0, 5)); // সেরা ৫টি রেজাল্ট দেখাবে
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  // ড্রপডাউনের বাইরে ক্লিক করলে বন্ধ হওয়ার লজিক
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // সার্চ সাবমিট হ্যান্ডলার (Enter প্রেস করলে /search?q=... এ নিয়ে যাবে এবং ইনপুট খালি হবে)
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowDropdown(false);
      setIsOpen(false);
      setQuery(""); // এন্টার প্রেস করার সাথে সাথে সার্চ বক্স খালি হয়ে যাবে
    }
  };

  // প্রোডাক্ট সিলেক্ট করলে পপআপ মোডাল ওপেন করা ও ড্রপডাউন বন্ধ করা
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDropdown(false);
    setIsOpen(false);
    setQuery(""); // প্রোডাক্টে ক্লিক করলেও সার্চ বক্স খালি হয়ে যাবে
  };

  return (
    <>
      <div className="relative" ref={containerRef}>
        {/* Search Bar / Trigger Wrapper */}
        <div className="flex items-center">
          {/* Desktop Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 w-64 focus-within:border-amber-500 transition relative">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query.trim() && setShowDropdown(true)}
              className="bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none w-full pr-6"
            />
            <button type="submit" aria-label="Submit search" className="absolute right-3 text-neutral-400 hover:text-amber-400 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Mobile Search Icon Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 transition"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Pop-up Search Input Bar */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 p-3 z-40 lg:hidden shadow-xl">
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search store..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.trim() && setShowDropdown(true)}
                className="bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none w-full"
              />
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setShowDropdown(false);
                  setQuery("");
                }}
                className="text-xs text-amber-400 font-semibold ml-2 uppercase"
              >
                CANCEL
              </button>
            </form>
          </div>
        )}

        {/* Live Dropdown Results Popup (Desktop & Mobile Unified) */}
        {showDropdown && query.trim().length > 0 && (
          <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 md:w-96 bg-neutral-950 border border-neutral-800 rounded-md shadow-2xl overflow-hidden z-50">
            {results.length > 0 ? (
              <div className="p-2 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider px-2 py-1 block border-b border-neutral-800/60">
                  Quick Results
                </span>
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex items-center gap-3 p-2 hover:bg-neutral-900 rounded-sm transition cursor-pointer group"
                  >
                    <div className="relative w-10 h-10 bg-neutral-900 rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate group-hover:text-amber-400 transition">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-amber-400 font-bold mt-0.5">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="w-full text-center text-xs font-bold text-black bg-amber-400 hover:bg-amber-500 py-2 rounded-sm transition uppercase tracking-wider mt-2 block"
                >
                  View All Results ({query}) &rarr;
                </button>
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-neutral-400">
                No products found matching &quot;{query}&quot;.
              </div>
            )}
          </div>
        )}
      </div>

      {/* প্রোডাক্টের পপআপ মোডাল */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
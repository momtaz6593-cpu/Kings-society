"use client";

import { useState, useRef, useEffect } from "react";

export default function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // Automatically focus mobile input
    }
  }, [isOpen]);
  return (
    <>
      {/* Search Icon / Desktop Search Bar Wrapper */}
      <div className="relative flex items-center">
        {/* Desktop Input */}
        <div className="hidden lg:flex items-center bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1.5 w-64 focus-within:border-amber-500 transition">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none w-full"
          />
          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

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
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search store..."
              className="bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none w-full"
            />
            <button onClick={() => setIsOpen(false)} className="text-xs text-amber-400 font-semibold ml-2">
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  );
}
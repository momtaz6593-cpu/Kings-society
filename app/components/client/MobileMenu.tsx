"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-white hover:text-amber-400 focus:outline-none"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Slide-over Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-xs bg-neutral-950 border-r border-neutral-800 p-6 flex flex-col justify-between z-10 text-white">
            <div>
          <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
            <span className="font-bold text-lg gold-text">KINGS SOCIETY</span>
                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 font-semibold uppercase text-sm tracking-wider">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">
                  HOME
                </Link>
                <Link href="/men" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">
                  MEN
                </Link>
                <Link href="/boys" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">
                  BOYS
                </Link>
                <Link href="/collections" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">
                  COLLECTIONS
                </Link>
                <Link href="/sale" onClick={() => setIsOpen(false)} className="text-amber-400 hover:text-amber-300 transition">
                  SALE
            </Link>
          </nav>
            </div>
            <div className="text-xs text-neutral-500 border-t border-neutral-800 pt-4">
              © Kings Society. Premium Fashion.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
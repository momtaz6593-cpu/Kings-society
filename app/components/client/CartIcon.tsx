"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartIcon() {
  const { totalCount } = useCart();

  return (
    <Link
      href="/cart"
      className="relative p-2 text-white hover:text-amber-400 transition flex items-center justify-center group"
      aria-label="Shopping Cart"
    >
      <svg
        className="w-5 h-5 group-hover:scale-105 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {totalCount > 0 ? (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-amber-400 text-black font-black text-[10px] rounded-full flex items-center justify-center shadow-md shadow-amber-400/30 transition-all duration-300 scale-100">
          {totalCount}
        </span>
      ) : (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-neutral-800 text-neutral-400 font-bold text-[9px] rounded-full flex items-center justify-center">
          0
        </span>
      )}
    </Link>
  );
}

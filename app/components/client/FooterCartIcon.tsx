"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function FooterCartIcon() {
  const { totalCount } = useCart();

  return (
    <Link
      href="/cart"
      className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition relative"
    >
      <div className="relative">
        <ShoppingBag className="w-5 h-5" />
        {totalCount > 0 ? (
          <span className="absolute -top-1.5 -right-2 bg-amber-400 text-black text-[9px] font-black rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow-sm">
            {totalCount}
          </span>
        ) : (
          <span className="absolute -top-1.5 -right-2 bg-neutral-800 text-neutral-400 text-[9px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        )}
      </div>
      <span className="text-[10px] mt-1 font-medium">Cart</span>
    </Link>
  );
}

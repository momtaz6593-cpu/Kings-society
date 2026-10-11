"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, formatPriceUSD, parsePriceToNumber } from "@/app/context/CartContext";
import { Calendar, Package, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SaleView() {
  const { saleHistory, clearSaleHistory, addToCart } = useCart();

  // Calculate total items and total spent across all sales
  const totalItemsCount = saleHistory.reduce((sum, item) => sum + item.quantity, 0);
  const totalSpent = saleHistory.reduce((sum, item) => {
    return sum + parsePriceToNumber(item.price) * item.quantity;
  }, 0);
  const formattedTotalSpent = formatPriceUSD(totalSpent);

  if (saleHistory.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-10 md:p-16">
          <div className="w-20 h-20 bg-amber-400/10 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
            NO ORDER ACTIVITY RECORDED
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2 mb-3 uppercase tracking-wide">
            NO PURCHASES / ADDED ITEMS YET
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mb-8 font-light">
            Whenever you click <span className="text-amber-400 font-semibold">"Add To Cart"</span> on any apparel item, its complete order information (date added, quantity, and total pricing) will automatically be saved and displayed here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/men/shirts"
              className="bg-amber-400 hover:bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition duration-200 shadow-lg shadow-amber-400/20"
            >
              Explore Shirts & Add To Cart
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
      {/* Breadcrumb & Header */}
      <div className="border-b border-neutral-800 pb-6 mb-8">
        <div className="flex items-center space-x-2 text-xs text-neutral-400 uppercase tracking-wider mb-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-amber-400 font-bold">Sale & Purchase Records</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-white text-2xl md:text-4xl font-serif font-black uppercase tracking-tight">
              MY PURCHASES & SALE RECORDS
            </h1>
            <p className="text-neutral-400 text-xs md:text-sm mt-1">
              Complete inventory of items added to cart and purchased, with date stamps and quantities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-right">
              <span className="text-[10px] text-neutral-400 uppercase block">Total Spent</span>
              <span className="text-amber-400 font-bold text-sm md:text-base">{formattedTotalSpent}</span>
            </div>

            <button
              onClick={clearSaleHistory}
              className="text-neutral-400 hover:text-red-400 text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5 p-2 bg-neutral-900/60 border border-neutral-800 rounded-lg cursor-pointer"
              title="Clear purchase history"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Clear List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saleHistory.map((item) => {
          const unitPrice = parsePriceToNumber(item.price);
          const itemTotal = formatPriceUSD(unitPrice * item.quantity);

          return (
            <div
              key={item.id}
              className="group bg-neutral-900/70 border border-neutral-800/90 hover:border-amber-400/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-amber-400/5"
            >
              {/* Top: Image & Status */}
              <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden border-b border-neutral-800">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Added / Ordered</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="text-white font-bold text-sm drop-shadow truncate pr-2">
                    {item.name}
                  </span>
                  <span className="text-amber-400 font-extrabold text-sm drop-shadow shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Middle: Details (Date, Quantity, Description) */}
              <div className="p-5 space-y-4 flex-grow">
                {item.description && (
                  <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-800/60">
                  {/* Quantity */}
                  <div className="bg-neutral-950/70 border border-neutral-800 rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-semibold">
                      <Package className="w-3.5 h-3.5 text-amber-400" />
                      <span>Quantity</span>
                    </div>
                    <p className="text-white font-bold text-sm mt-1">
                      {item.quantity} {item.quantity > 1 ? "Pieces" : "Piece"}
                    </p>
                  </div>

                  {/* Total Price */}
                  <div className="bg-neutral-950/70 border border-neutral-800 rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] uppercase font-semibold">
                      <span className="text-amber-400 font-bold">$</span>
                      <span>Total Value</span>
                    </div>
                    <p className="text-amber-400 font-bold text-sm mt-1">
                      {itemTotal}
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="bg-neutral-950/50 border border-neutral-800/80 rounded-lg px-3 py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Purchase Date:</span>
                  </div>
                  <span className="text-neutral-200 font-semibold text-[11px]">
                    {item.addedAt}
                  </span>
                </div>
              </div>

              {/* Bottom: Action Buttons */}
              <div className="p-4 pt-0 flex gap-2">
                <button
                  onClick={() => addToCart({ id: item.productId, name: item.name, price: item.price, image: item.image, description: item.description })}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold py-2 rounded uppercase transition cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>+ Add More</span>
                </button>

                <Link
                  href="/cart"
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-black text-xs font-black py-2 rounded uppercase tracking-wider transition text-center flex items-center justify-center gap-1 shadow-sm shadow-amber-400/10"
                >
                  <span>View Cart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

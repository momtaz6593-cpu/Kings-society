"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart, formatPriceUSD, parsePriceToNumber } from "@/app/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck, Truck, RefreshCw, CheckCircle2 } from "lucide-react";

export default function CartView() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalCount, subtotal, formattedSubtotal } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Free shipping on orders over $75, otherwise $9.99 standard delivery
  const deliveryFee = subtotal >= 75 || subtotal === 0 ? 0 : 9.99;
  const finalTotal = subtotal + deliveryFee;
  const formattedFinalTotal = formatPriceUSD(finalTotal);
  const formattedDelivery = deliveryFee === 0 ? "FREE" : formatPriceUSD(deliveryFee);

  const handleCheckout = () => {
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <div className="bg-neutral-900/80 border border-amber-400/40 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="w-16 h-16 bg-amber-400/10 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
            Order Confirmed
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-4 font-serif">
            THANK YOU FOR YOUR ORDER!
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8">
            Your luxury order of <span className="text-amber-400 font-semibold">{totalCount} item(s)</span> totaling{" "}
            <span className="text-amber-400 font-semibold">{formattedFinalTotal}</span> has been confirmed. A confirmation receipt has been sent to your registered account.
          </p>
          <div className="flex justify-center">
            <Link
              href="/collections"
              onClick={() => clearCart()}
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded transition cursor-pointer shadow-lg shadow-amber-400/20"
            >
              Order More Items
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-10 md:p-16">
          <div className="w-20 h-20 bg-neutral-800 text-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 uppercase tracking-wide">
            Your Shopping Cart is Empty
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 font-light">
            You haven't added any products to your cart yet. Discover our premium handcrafted apparel.
          </p>
          <div className="flex justify-center">
            <Link
              href="/collections"
              className="bg-amber-400 hover:bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition duration-200 shadow-lg shadow-amber-400/20"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
      {/* Breadcrumb & Title */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs text-neutral-400 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">Shopping Cart</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl font-serif font-black uppercase tracking-tight">
            YOUR CART <span className="text-amber-400 text-lg md:text-xl font-sans font-medium">({totalCount} items)</span>
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-neutral-400 hover:text-red-400 text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const itemPriceNumber = parsePriceToNumber(item.price);
            const itemTotal = formatPriceUSD(itemPriceNumber * item.quantity);

            return (
              <div
                key={item.id}
                className="bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 rounded-xl p-4 md:p-5 flex gap-4 md:gap-6 items-center transition"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-neutral-950 rounded-lg overflow-hidden shrink-0 border border-neutral-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-base truncate hover:text-amber-400 transition">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-neutral-400 text-xs line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  )}
                  <p className="text-amber-400 font-bold text-sm mt-1.5">
                    {item.price}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-1 shrink-0">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-neutral-400 hover:text-amber-400 p-1 transition cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-white font-bold text-xs min-w-[20px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-neutral-400 hover:text-amber-400 p-1 transition cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right hidden sm:block shrink-0 min-w-[80px]">
                  <span className="text-[11px] text-neutral-400 block uppercase">Total</span>
                  <span className="text-white font-bold text-sm">{itemTotal}</span>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-neutral-500 hover:text-red-400 p-2 transition shrink-0 cursor-pointer"
                  aria-label="Remove item"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}

          <div className="pt-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 lg:sticky lg:top-24 shadow-xl">
          <h2 className="text-white font-bold text-base uppercase tracking-wider border-b border-neutral-800 pb-3 mb-4 font-serif">
            ORDER SUMMARY
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-neutral-300">
              <span>Items Subtotal ({totalCount}):</span>
              <span className="font-semibold text-white">{formattedSubtotal}</span>
            </div>

            <div className="flex justify-between text-neutral-300">
              <span>Estimated Shipping:</span>
              <span className={`font-semibold ${deliveryFee === 0 ? "text-green-400" : "text-white"}`}>
                {formattedDelivery}
              </span>
            </div>

            {deliveryFee === 0 && (
              <p className="text-[11px] text-green-400/90 font-light">
                ✓ Free shipping unlocked on orders over $75!
              </p>
            )}

            <div className="border-t border-neutral-800 pt-3 mt-3 flex justify-between items-baseline">
              <span className="text-base font-bold text-white uppercase">Grand Total:</span>
              <span className="text-xl md:text-2xl font-black text-amber-400">
                {formattedFinalTotal}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-lg transition duration-200 cursor-pointer shadow-lg shadow-amber-400/20"
          >
            PROCEED TO CHECKOUT
          </button>

          {/* Value props */}
          <div className="mt-6 pt-5 border-t border-neutral-800/80 space-y-3 text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Authentic Handcrafted Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fast 2-3 Day Express Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-amber-400 shrink-0" />
              <span>30 Days Free Return Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
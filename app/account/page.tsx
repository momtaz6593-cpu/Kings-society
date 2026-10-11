"use client";

import React from "react";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { useCart } from "@/app/context/CartContext";
import { ShoppingBag, LogOut, ArrowRight, ShieldCheck, User as UserIcon } from "lucide-react";

export default function AccountPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const { totalCount, formattedSubtotal } = useCart();

  if (!isLoaded) {
    return (
      <div className="min-h-[70vh] bg-[#0b0c10] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <main className="min-h-[75vh] bg-[#0b0c10] flex items-center justify-center px-4 py-16">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 bg-neutral-800 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserIcon className="w-8 h-8" />
          </div>
          <h1 className="text-white text-2xl font-serif font-bold uppercase tracking-wide">
            ACCOUNT ACCESS
          </h1>
          <p className="text-neutral-400 text-xs mt-2 mb-6">
            Please sign in to view your profile, cart summary, and luxury orders.
          </p>
          <Link
            href="/sign-in"
            className="inline-block w-full bg-amber-400 hover:bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-lg transition duration-200 shadow-lg shadow-amber-400/20"
          >
            Sign In to Kings Society
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0c10] py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Title */}
        <div className="border-b border-neutral-800 pb-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
            MY ACCOUNT
          </span>
          <h1 className="text-white text-3xl md:text-4xl font-serif font-black uppercase tracking-tight mt-1">
            WELCOME BACK, <span className="text-amber-400">{user.firstName || "KING"}</span>
          </h1>
        </div>

        {/* Profile Info Card */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg shrink-0 bg-neutral-950">
              {/* Regular img tag avoids next.config domain restriction error */}
              <img
                src={user.imageUrl || "/avatar-placeholder.png"}
                alt={user.fullName || "User Profile"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white font-serif text-xl font-bold">
                {user.fullName || "Kings Society Member"}
              </h2>
              <p className="text-neutral-400 text-xs mt-0.5">
                {user.primaryEmailAddress?.emailAddress}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400/10 border border-amber-400/30 rounded text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Member</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="w-full md:w-auto flex items-center justify-center gap-2 border border-neutral-700 hover:border-red-500/50 text-neutral-300 hover:text-red-400 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cart Status Card */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  YOUR SHOPPING CART
                </span>
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-serif text-2xl font-bold">
                {totalCount} {totalCount === 1 ? "Item" : "Items"}
              </h3>
              <p className="text-neutral-400 text-xs mt-1">
                Subtotal Value: <span className="text-amber-400 font-bold">{formattedSubtotal}</span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition"
              >
                <span>View Full Shopping Cart</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Collections Quick Access Card */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">
                EXPLORE APPAREL
              </span>
              <h3 className="text-white font-serif text-2xl font-bold">
                Discover New Drops
              </h3>
              <p className="text-neutral-400 text-xs mt-1">
                Explore our newly arranged streetwear and accessories collection.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition"
              >
                <span>Browse All Collections</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
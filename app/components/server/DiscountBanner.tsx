import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DiscountBanner() {
  return (
    <section className="w-full bg-[#0b0c10] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-xl border border-neutral-800/80 bg-neutral-950 overflow-hidden shadow-2xl relative">
        
        {/* Mobile View: Background Image with Overlay (Aspect Ratio 16:9) */}
        <div className="block md:hidden relative w-full aspect-[16/9] min-h-[260px]">
          <Image
            src="/discount-img.png" // file extension jpeg ba png milaye niyo
            alt="Discount Offer"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 p-6 flex flex-col justify-end">
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">
              LIMITED TIME
            </span>
            <h2 className="text-white text-xl font-black tracking-tight leading-tight">
              UP TO 40% OFF
            </h2>
            <p className="text-gray-300 text-xs mt-1 mb-4">
              On Selected Men's Collection
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center w-fit px-5 py-2 border border-amber-400 text-amber-400 text-xs font-bold rounded hover:bg-amber-400 hover:text-black transition duration-300"
            >
              SHOP NOW &rarr;
            </Link>
          </div>
        </div>

        {/* PC / Desktop View: Split Layout (2/3 Image + 1/3 Content) */}
        <div className="hidden md:grid md:grid-cols-3 items-center w-full min-h-[220px]">
          {/* Image Container (Takes 2 Columns out of 3) */}
          <div className="col-span-2 relative w-full h-full min-h-[220px] overflow-hidden">
            <Image
              src="/discount-img.png" // file extension check kore niyo
              alt="Discount Offer"
              fill
              className="object-cover object-left hover:scale-105 transition duration-700"
              priority
            />
            {/* Subtle Gradient Transition into Content Area */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-950/80" />
          </div>

          {/* Text & Button Container (Takes 1 Column) */}
          <div className="col-span-1 p-6 md:p-8 flex flex-col justify-center border-l border-neutral-800/50 bg-neutral-950">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              LIMITED TIME
            </span>
            <h2 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none mb-2">
              UP TO 40% OFF
            </h2>
            <p className="text-gray-400 text-xs lg:text-sm mb-6">
              On Selected Men's Collection
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
              <Link
                href="/collections"
                className="px-5 py-2.5 border border-amber-400/80 text-amber-400 text-xs font-bold tracking-wider rounded hover:bg-amber-400 hover:text-black transition duration-300 uppercase shadow-lg shadow-amber-400/10"
              >
                SHOP NOW &rarr;
              </Link>
              <div className="pl-4 border-l border-amber-500/50 text-right">
                <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                  PREMIUM QUALITY
                </p>
                <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                  MEN'S WEAR
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
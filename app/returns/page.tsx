import React from "react";
import Link from "next/link";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      {/* Header Banner */}
      <section className="relative py-16 xl:py-24 2xl:py-28 px-4 md:px-8 xl:px-12 bg-neutral-950 border-b border-neutral-800 text-center">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <span className="text-amber-400 text-xs sm:text-sm xl:text-base font-bold uppercase tracking-[0.3em] mb-3 block">
            HASSLE-FREE POLICY
          </span>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight mb-4 xl:mb-6">
            RETURNS & <span className="text-amber-400">EXCHANGES</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base xl:text-lg 2xl:text-xl font-light max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Your satisfaction is our top priority. Learn about our simple 7-day return and exchange guidelines below.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 xl:py-24 px-4 md:px-8 xl:px-12 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        
        {/* Step-by-step Process Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-16 xl:mb-20">
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md hover:border-amber-400/50 transition">
            <div className="w-10 h-10 bg-amber-400 text-black font-black rounded-sm flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h3 className="text-white text-base xl:text-lg font-bold uppercase mb-2">Check Eligibility</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Items must be unworn, unwashed, with all original tags attached within 7 days of delivery.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md hover:border-amber-400/50 transition">
            <div className="w-10 h-10 bg-amber-400 text-black font-black rounded-sm flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h3 className="text-white text-base xl:text-lg font-bold uppercase mb-2">Contact Support</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Reach out to our team via email or phone with your order number and photo of the issue.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md hover:border-amber-400/50 transition">
            <div className="w-10 h-10 bg-amber-400 text-black font-black rounded-sm flex items-center justify-center text-lg mb-4">
              3
            </div>
            <h3 className="text-white text-base xl:text-lg font-bold uppercase mb-2">Fast Replacement</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Once verified, we will arrange a smooth exchange or process your refund promptly.
            </p>
          </div>
        </div>

        {/* Policy Details Accordion/Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          
          {/* Section 1: Conditions */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-8 xl:p-10 rounded-md">
            <h2 className="text-xl xl:text-2xl font-black uppercase text-amber-400 mb-4 flex items-center gap-2">
              <span>•</span> Return & Exchange Conditions
            </h2>
            <ul className="space-y-3 text-gray-300 text-xs sm:text-sm xl:text-base font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Returns and exchanges are accepted within <strong>7 days</strong> from the delivery date.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>The item must be unused, in its original packaging, and with all brand tags intact.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Size exchanges are allowed subject to stock availability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>If an item is received damaged, defective, or incorrect, delivery charges for return will be covered by Kings Society.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Non-Returnable Items */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-8 xl:p-10 rounded-md">
            <h2 className="text-xl xl:text-2xl font-black uppercase text-amber-400 mb-4 flex items-center gap-2">
              <span>•</span> Non-Returnable Items
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light mb-4">
              For hygiene and safety reasons, certain product categories are not eligible for returns or exchanges:
            </p>
            <ul className="space-y-3 text-gray-300 text-xs sm:text-sm xl:text-base font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Fragrances, perfumes, and body sprays once unsealed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Innerwear, socks, and intimate accessories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Items purchased during special clearance or flash sales.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Banner Callout */}
        <div className="mt-12 xl:mt-16 bg-neutral-950 border border-neutral-800 p-8 xl:p-12 rounded-md text-center flex flex-col items-center justify-center">
          <h3 className="text-white text-xl sm:text-2xl xl:text-3xl font-black uppercase mb-2">
            NEED HELP WITH A RETURN?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light max-w-xl mb-6">
            Our support team is always ready to guide you through the process.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-500 text-black text-xs sm:text-sm font-bold px-8 py-3.5 rounded-sm transition duration-300 uppercase tracking-wider"
            >
              CONTACT SUPPORT &rarr;
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
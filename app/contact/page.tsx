import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      {/* Header Banner */}
      <section className="relative py-16 xl:py-24 2xl:py-28 px-4 md:px-8 xl:px-12 bg-neutral-950 border-b border-neutral-800 text-center">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <span className="text-amber-400 text-xs sm:text-sm xl:text-base font-bold uppercase tracking-[0.3em] mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight mb-4 xl:mb-6">
            CONTACT <span className="text-amber-400">US</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base xl:text-lg 2xl:text-xl font-light max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Have a question about our collections, orders, or collaborations? Reach out to us and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main Content & Info Grid */}
      <section className="py-16 xl:py-24 px-4 md:px-8 xl:px-12 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          
          {/* Contact Info Cards (Left Column) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md flex items-start gap-4 hover:border-amber-400/50 transition duration-300">
              <div className="p-3 bg-neutral-950 border border-neutral-800 text-amber-400 rounded-sm shrink-0">
                {/* Email SVG Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-sm xl:text-base font-bold uppercase tracking-wider mb-1">Email Us</h3>
                <p className="text-gray-400 text-xs xl:text-sm font-light break-all">momtaz6593@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md flex items-start gap-4 hover:border-amber-400/50 transition duration-300">
              <div className="p-3 bg-neutral-950 border border-neutral-800 text-amber-400 rounded-sm shrink-0">
                {/* Phone SVG Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-sm xl:text-base font-bold uppercase tracking-wider mb-1">Call Us</h3>
                <p className="text-gray-400 text-xs xl:text-sm font-light">01765936817</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 xl:p-8 rounded-md flex items-start gap-4 hover:border-amber-400/50 transition duration-300">
              <div className="p-3 bg-neutral-950 border border-neutral-800 text-amber-400 rounded-sm shrink-0">
                {/* Location SVG Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-sm xl:text-base font-bold uppercase tracking-wider mb-1">Location</h3>
                <p className="text-gray-400 text-xs xl:text-sm font-light">Bangladesh</p>
              </div>
            </div>

          </div>

          {/* Contact Form / Info Banner (Right Column) */}
          <div className="lg:col-span-2 bg-neutral-900/60 border border-neutral-800/80 p-8 xl:p-12 rounded-md flex flex-col justify-between">
            <div>
              <span className="text-amber-400 text-xs xl:text-sm font-bold uppercase tracking-widest mb-2 block">
                SEND A MESSAGE
              </span>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black uppercase tracking-tight mb-4">
                WE&apos;D LOVE TO HEAR FROM YOU
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light leading-relaxed mb-8">
                Whether you have an inquiry about sizing, shipping, product availability, or custom streetwear collaborations, our support team is ready to assist you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-sm">
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Support Hours</p>
                  <p className="text-sm text-white font-medium">Saturday – Thursday (10 AM – 8 PM)</p>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-sm">
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Response Time</p>
                  <p className="text-sm text-white font-medium">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-gray-400">
                Explore our latest drops and upgrade your streetwear game today.
              </p>
              <Link
                href="/collections"
                className="bg-amber-400 hover:bg-amber-500 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-sm transition duration-300 uppercase tracking-wider shadow-lg"
              >
                SHOP COLLECTIONS &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
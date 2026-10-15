import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      {/* Hero Section */}
      <section className="relative py-16 xl:py-24 2xl:py-28 px-4 md:px-8 xl:px-12 bg-neutral-950 border-b border-neutral-800 text-center">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <span className="text-amber-400 text-xs sm:text-sm xl:text-base font-bold uppercase tracking-[0.3em] mb-3 block">
            OUR STORY & VISION
          </span>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight mb-4 xl:mb-6">
            ABOUT <span className="text-amber-400">KINGS SOCIETY</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base xl:text-lg 2xl:text-xl font-light max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Redefining modern streetwear and premium fashion for men and youth. Crafted with bold attitude, unmatched comfort, and timeless quality.
          </p>
        </div>
      </section>

      {/* Brand Mission Section */}
      <section className="py-16 xl:py-24 px-4 md:px-8 xl:px-12 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase tracking-tight mb-6">
              BUILT FOR THOSE WHO <br />
              <span className="text-amber-400">LEAD, NEVER FOLLOW</span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm xl:text-base 2xl:text-lg font-light leading-relaxed mb-4">
              Founded with a relentless passion for high-end streetwear, Kings Society is more than just a clothing brand—it&apos;s a lifestyle statement. We believe that what you wear is an extension of your ambition, confidence, and individuality.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm xl:text-base 2xl:text-lg font-light leading-relaxed mb-8">
              From precision-tailored shirts and tactical cargos to premium hoodies and signature accessories, every piece in our collection is designed to elevate your daily style with uncompromising quality.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/collections"
                className="bg-amber-400 hover:bg-amber-500 text-black text-xs sm:text-sm xl:text-base font-bold px-8 py-3.5 rounded-sm transition duration-300 uppercase tracking-wider shadow-lg"
              >
                EXPLORE COLLECTIONS &rarr;
              </Link>
            </div>
          </div>

          {/* Visual Brand Banner Box */}
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60 shadow-2xl flex items-center justify-center p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-neutral-900/40 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-amber-400 text-xl sm:text-2xl xl:text-3xl font-black uppercase tracking-widest mb-2">
                BETTER STYLE
              </h3>
              <p className="text-white text-lg sm:text-xl xl:text-2xl font-bold tracking-tight uppercase">
                BIGGER DREAMS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars Section */}
      <section className="py-16 xl:py-24 bg-neutral-950/60 border-t border-neutral-800/80 px-4 md:px-8 xl:px-12">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto text-center mb-12 xl:mb-16">
          <span className="text-amber-400 text-xs xl:text-sm font-bold uppercase tracking-[0.2em] mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight">
            THE PILLARS OF KINGS SOCIETY
          </h2>
        </div>

        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {/* Pillar 1 */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-8 xl:p-10 rounded-md">
            <div className="text-amber-400 text-2xl xl:text-3xl font-black mb-4">01</div>
            <h3 className="text-white text-lg xl:text-xl font-bold uppercase mb-3">Uncompromised Quality</h3>
            <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light leading-relaxed">
              We source premium fabrics and durable materials to ensure every stitch stands the test of time and comfort.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-8 xl:p-10 rounded-md">
            <div className="text-amber-400 text-2xl xl:text-3xl font-black mb-4">02</div>
            <h3 className="text-white text-lg xl:text-xl font-bold uppercase mb-3">Modern Streetwear</h3>
            <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light leading-relaxed">
              Merging urban aesthetics with contemporary luxury to deliver versatile fits for everyday confidence.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-8 xl:p-10 rounded-md">
            <div className="text-amber-400 text-2xl xl:text-3xl font-black mb-4">03</div>
            <h3 className="text-white text-lg xl:text-xl font-bold uppercase mb-3">Customer First</h3>
            <p className="text-gray-400 text-xs sm:text-sm xl:text-base font-light leading-relaxed">
              Your satisfaction and style evolution are at the core of everything we build, design, and deliver.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
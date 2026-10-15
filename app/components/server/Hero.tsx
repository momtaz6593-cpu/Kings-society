import Image from "next/image";
import Link from "next/link"; // Next.js এর Link ইমপোর্ট করা হলো

export default function Hero() {
  return (
    <section className="relative w-full aspect-[16/9] flex items-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Hero-img.png"
          alt="Kings Society Hero Banner"
          fill
          priority
          className="object-cover object-center brightness-95"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 flex justify-between items-center">
        {/* Left Text & Buttons Block */}
        <div className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-left">
          {/* Subheading Badge */}
          <p className="text-amber-400 text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg font-semibold tracking-[0.2em] uppercase mb-2 xl:mb-4">
            PREMIUM MEN'S & BOYS' FASHION
          </p>

          {/* Main Headline */}
          <h2 className="text-white text-2xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight uppercase leading-tight mb-3 xl:mb-6">
            DEFINE YOUR <br />
            <span>STANDARD</span>
          </h2>

          {/* Description Text */}
          <p className="text-gray-300 text-[11px] sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-light mb-6 xl:mb-10">
            Modern essentials. Built for presence.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 xl:space-x-6">
            {/* Primary Yellow Link */}
            <Link
              href="/men"
              className="bg-amber-400 hover:bg-amber-500 text-black text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold px-4 sm:px-6 xl:px-8 py-2 sm:py-2.5 xl:py-3.5 rounded transition duration-200 flex items-center space-x-1.5 xl:space-x-2 uppercase tracking-wide"
            >
              <span>SHOP MEN</span>
              <span>&rarr;</span>
            </Link>

            {/* Secondary Border Link */}
            <Link
              href="/boys"
              className="border border-amber-400/80 hover:border-amber-400 text-amber-400 hover:bg-amber-400/10 text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-lg font-semibold px-4 sm:px-6 xl:px-8 py-2 sm:py-2.5 xl:py-3.5 rounded transition duration-200 flex items-center space-x-1.5 xl:space-x-2 uppercase tracking-wide"
            >
              <span>SHOP BOYS</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
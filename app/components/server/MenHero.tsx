import Image from "next/image";
import Link from "next/link";

export default function MenHero() {
  return (
    <section className="relative w-full aspect-[16/9] flex items-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Men-hero-img.png" // public ফোল্ডারে তোমার ইমেজ ফাইলটি রাখবে
          alt="Kings Society Men's Collection Hero Banner"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Text & Action Block */}
        <div className="max-w-xl text-left">
          {/* Subheading Badge */}
          <p className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            MEN'S COLLECTION
          </p>

          {/* Main Headline */}
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-none mb-3">
            STYLE BUILT <br />
            FOR REAL LIFE
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-[11px] sm:text-sm md:text-base font-light mb-6">
            Premium quality. Modern fits. Everyday confidence.
          </p>

          {/* Action Button */}
          <div className="flex items-center">
            <Link
              href="/collections"
              className="border border-amber-400/90 hover:bg-amber-400 hover:text-black text-amber-400 text-[10px] sm:text-xs md:text-sm font-bold px-5 sm:px-7 py-2 sm:py-2.5 rounded-sm transition duration-300 flex items-center space-x-2 uppercase tracking-wider"
            >
              <span>SHOP NOW</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
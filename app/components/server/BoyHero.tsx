import Image from "next/image";
import Link from "next/link";

export default function BoysHero() {
  return (
    <section className="relative w-full aspect-[16/9] flex items-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Boy-Hero-img.png" // public/ folder-e ei name-e image-ta rakhbe
          alt="Kings Society Boys Collection Hero Banner"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Text & Action Block */}
        <div className="max-w-xl text-left">
          {/* Subheading Badge */}
          <p className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            BOYS COLLECTION
          </p>

          {/* Main Headline */}
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-3">
            STYLE BUILT <br />
            FOR YOUNG DREAMS
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-[11px] sm:text-sm md:text-base font-light mb-6">
            Trendy. Comfortable. Always You.
          </p>

          {/* Filled Action Button */}
          <div className="flex items-center">
            <Link
              href="#products"
              className="bg-amber-400 hover:bg-amber-500 text-black text-[10px] sm:text-xs md:text-sm font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm transition duration-300 flex items-center space-x-2 uppercase tracking-wider shadow-lg"
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
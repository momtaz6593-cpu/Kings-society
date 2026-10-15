import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="w-full my-10 md:my-16 xl:my-20 2xl:my-24 px-4 md:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto relative overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#111217] to-black border border-amber-500/30 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 xl:p-16 2xl:p-20 gap-6 shadow-2xl">
        
        {/* Subtle Luxury Glow Effect */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 xl:w-80 2xl:w-96 h-60 xl:h-80 2xl:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Text Section */}
        <div className="z-10 text-center md:text-left">
          <span className="text-amber-400 font-bold tracking-widest text-xs xl:text-sm 2xl:text-base uppercase bg-amber-400/10 px-3 xl:px-4 py-1 xl:py-1.5 rounded-full border border-amber-400/20">
            LIMITED DROP
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mt-3 xl:mt-4 tracking-tight">
            UP TO <span className="text-amber-400">40% OFF</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base xl:text-lg 2xl:text-xl font-light mt-2 xl:mt-3">
            Selected styles. Limited time only.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="z-10 shrink-0">
          <Link
            href="/collections"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm sm:text-base xl:text-lg 2xl:text-xl px-7 xl:px-10 py-3.5 xl:py-4.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-400/20 inline-flex items-center gap-2 xl:gap-3"
          >
            <span>SHOP THE DROP</span>
            <span className="text-lg xl:text-2xl">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="w-full my-10 md:my-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-xl bg-gradient-to-r from-black via-[#111217] to-black border border-amber-500/30 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6 shadow-2xl">
        
        {/* Subtle Luxury Glow Effect */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Text Section */}
        <div className="z-10 text-center md:text-left">
          <span className="text-amber-400 font-bold tracking-widest text-xs uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            LIMITED DROP
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            UP TO <span className="text-amber-400">40% OFF</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base font-light mt-2">
            Selected styles. Limited time only.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="z-10 shrink-0">
          <Link
            href="/collections"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-400/20 inline-flex items-center gap-2"
          >
            <span>SHOP THE DROP</span>
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
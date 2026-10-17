import Link from "next/link";
import NewSeasonSlider from "@/app/components/client/NewSeasonSlider";

const products = [
  {
    id: 1,
    name: "Crown Essential Tee",
    title: "Crown Essential Tee",
    subtitle: "Oversized Fit • 100% Cotton",
    description: "Premium cotton black t-shirt designed for everyday style and maximum comfort.",
    price: "$29.00",
    image: "/black-T-shirt-2.png",
  },
  {
    id: 2,
    name: "Linen Casual Shirt",
    title: "Linen Casual Shirt",
    subtitle: "Breathable • Premium Linen",
    description: "Sharp and formal white casual shirt suitable for all modern occasions.",
    price: "$49.00",
    image: "/white-shirt-2.png",
  },
  {
    id: 3,
    name: "Cargo Pants",
    title: "Cargo Pants",
    subtitle: "Relaxed Fit • Utility Style",
    description: "Durable and flexible streetwear cargo pants tailored for a modern fit.",
    price: "$59.00",
    image: "/pant-2.png",
  },
  {
    id: 4,
    name: "Windbreaker Jacket",
    title: "Windbreaker Jacket",
    subtitle: "Lightweight • Water Resistant",
    description: "Heavyweight weather-resistant jacket designed for supreme warmth and style.",
    price: "$79.00",
    image: "/jacket-2.png",
  },
];

export default function NewSeason() {
  return (
    <section className="w-full bg-[#0b0c10] text-white py-10 md:py-16 xl:py-20 2xl:py-24 px-4 md:px-12 border-b border-gray-800">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
        
        {/* ১. বাম পাশের টাইটেল ও বাটন সেকশন */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between lg:block">
              <div>
                <span className="text-amber-500 font-semibold text-xs xl:text-sm tracking-widest uppercase">
                  NEW COLLECTION
                </span>
                <h2 className="text-2xl md:text-5xl xl:text-6xl font-serif font-bold tracking-wide mt-1 mb-2 xl:mb-4">
                  NEW SEASON
                </h2>
              </div>

              {/* মোবাইলের ছোট বাটন */}
              <Link
                href="/collections"
                className="lg:hidden border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black px-3 py-1.5 rounded text-xs font-semibold transition duration-300 flex items-center gap-1 whitespace-nowrap"
              >
                VIEW ALL ➔
              </Link>
            </div>

            <p className="text-gray-400 text-sm xl:text-base mt-1 mb-6 xl:mb-10">
              Fresh drops. Timeless pieces.
            </p>
          </div>

          {/* পিসির বড় বাটন */}
          <Link
            href="/collections"
            className="hidden lg:inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs xl:text-sm tracking-wider px-6 xl:px-8 py-3.5 xl:py-4 rounded transition duration-300 w-fit"
          >
            VIEW ALL PRODUCTS ➔
          </Link>
        </div>

        {/* ২. ডান পাশের স্লাইডার ও প্রোডাক্ট গ্রিড */}
        <div className="w-full lg:w-2/3">
          <NewSeasonSlider products={products} />
        </div>

      </div>
    </section>
  );
}
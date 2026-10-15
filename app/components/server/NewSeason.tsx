import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Crown Essential Tee",
    subtitle: "Oversized Fit • 100% Cotton",
    price: "$29.00",
    image: "/black-T-shirt-2.png", // public ফোল্ডারের ইমেজ পাথ
    href: "/products/crown-essential-tee",
  },
  {
    id: 2,
    title: "Linen Casual Shirt",
    subtitle: "Breathable • Premium Linen",
    price: "$49.00",
    image: "/white-shirt-2.png",
    href: "/products/linen-casual-shirt",
  },
  {
    id: 3,
    title: "Cargo Pants",
    subtitle: "Relaxed Fit • Utility Style",
    price: "$59.00",
    image: "/pant-2.png",
    href: "/products/cargo-pants",
  },
  {
    id: 4,
    title: "Windbreaker Jacket",
    subtitle: "Lightweight • Water Resistant",
    price: "$79.00",
    image: "/jacket-2.png",
    href: "/products/windbreaker-jacket",
  },
];

export default function NewSeason() {
  return (
    <section className="w-full bg-[#0b0c10] text-white py-10 md:py-16 xl:py-20 2xl:py-24 px-4 md:px-12 border-b border-gray-800">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
        
        {/* ১. বাম পাশের টাইটেল ও বাটন সেকশন */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            {/* মোবাইল ভিউ হেডার: টাইটেল বামে এবং VIEW ALL ➔ বাটন ডানে */}
            <div className="flex items-center justify-between lg:block">
              <div>
                <span className="text-amber-500 font-semibold text-xs xl:text-sm 2xl:text-base tracking-widest uppercase">
                  NEW COLLECTION
                </span>
                <h2 className="text-2xl md:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold tracking-wide mt-1 mb-2 xl:mb-4">
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

            <p className="text-gray-400 text-sm xl:text-base 2xl:text-lg mt-1 mb-6 xl:mb-10">
              Fresh drops. Timeless pieces.
            </p>
          </div>

          {/* ল্যাপটপ/পিসির বড় বাটন */}
          <Link
            href="/collections"
            className="hidden lg:inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs xl:text-sm 2xl:text-base tracking-wider px-6 xl:px-8 py-3.5 xl:py-4 rounded transition duration-300 w-fit"
          >
            VIEW ALL PRODUCTS ➔
          </Link>
        </div>

        {/* ২. ডান পাশের প্রোডাক্ট গ্রিড (পিসিতে ৪টি, মোবাইলে ২টি) */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 xl:gap-6">
          {products.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-[#12141c] border border-gray-800/80 hover:border-gray-700 rounded-lg p-2.5 md:p-3 xl:p-4 flex flex-col justify-between group transition duration-300"
            >
              {/* প্রোডাক্ট ইমেজ বক্স - বড় স্ক্রিনে হাইট বাড়ানো হয়েছে */}
              <div className="relative w-full h-40 md:h-52 xl:h-64 2xl:h-80 bg-[#181a24] rounded-md overflow-hidden flex items-center justify-center mb-3 xl:mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* প্রোডাক্ট ইনফরমেশন */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xs md:text-sm xl:text-base 2xl:text-lg font-bold text-gray-200 line-clamp-1 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-[10px] xl:text-xs 2xl:text-sm text-gray-400 font-light mt-0.5 xl:mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-white mt-2 xl:mt-3">
                  {item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
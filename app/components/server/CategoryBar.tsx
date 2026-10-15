import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "T-SHIRTS",
    subtitle: "Everyday comfort",
    image: "/Black-T-shirt.png",
    href: "/collections/t-shirts",
  },
  {
    id: 2,
    title: "SHIRTS",
    subtitle: "Sharp & versatile",
    image: "/white-shirt.png",
    href: "/collections/shirts",
  },
  {
    id: 3,
    title: "PANTS",
    subtitle: "Move with confidence",
    image: "/black-pant.png",
    href: "/collections/pants",
  },
  {
    id: 4,
    title: "OUTERWEAR",
    subtitle: "All season ready",
    image: "/jacket.png",
    href: "/collections/outerwear",
  },
];

export default function CategoryBar() {
  return (
    <div className="w-full bg-[#0b0c10] border-t border-b border-gray-800 py-4 md:py-6 xl:py-8 2xl:py-10 px-4 md:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-3 md:gap-6 xl:gap-10 text-white">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 xl:space-x-4 min-w-[65px] md:min-w-0 cursor-pointer group opacity-90 hover:opacity-100 transition duration-300"
          >
            {/* Chobir Box: Mobile e Gol (rounded-full) and PC te Square (md:rounded-md) */}
            <div className="w-12 h-12 md:w-14 md:h-14 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-gray-900 border border-gray-800 rounded-full md:rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center relative transition duration-300">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="text-center md:text-left">
              <h3 className="text-[10px] md:text-sm xl:text-base 2xl:text-lg font-bold tracking-wider uppercase text-gray-200 whitespace-nowrap">
                {item.title}
              </h3>
              <p className="hidden md:block text-[10px] xl:text-xs 2xl:text-sm text-gray-400 font-light whitespace-nowrap mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
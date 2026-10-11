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
    <div className="w-full bg-[#0b0c10] border-t border-b border-gray-800 py-4 md:py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-3 md:gap-6 text-white">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 min-w-[65px] md:min-w-0 cursor-pointer group opacity-90 hover:opacity-100 transition duration-300"
          >
            {/* Chobir Box: Mobile e Gol (rounded-full) and PC te Square (md:rounded-md) */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900 border border-gray-800 rounded-full md:rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="text-center md:text-left">
              <h3 className="text-[10px] md:text-sm font-bold tracking-wider uppercase text-gray-200 whitespace-nowrap">
                {item.title}
              </h3>
              <p className="hidden md:block text-[10px] text-gray-400 font-light whitespace-nowrap">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
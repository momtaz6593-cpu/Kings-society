import Link from "next/link";
import CategoryCarousel from "../client/CategoryCarousel";
import CategoryCard from "../client/CategoryCard";
import { BOYS_DATA } from "@/Data"; // central data file from @/Data

const boysCategoryConfig = [
  { id: "shirts", title: "SHIRTS", subtitle: "Cool & Casual Fits" },
  { id: "pants", title: "PANTS", subtitle: "Durable & Stylish" },
  { id: "sneakers", title: "SNEAKERS", subtitle: "Ready For Action" },
  { id: "jackets", title: "JACKETS", subtitle: "Trendy Outerwear" },
  { id: "accessories", title: "ACCESSORIES", subtitle: "Everyday Essentials" },
  { id: "hoodies", title: "HOODIES", subtitle: "Cozy & Warm" },
];

export default function BoyShopByC() {
  // Map configuration with centralized BOYS_DATA
  const categories = boysCategoryConfig.map((item) => {
    // Fallback if specific category data is missing
    const categoryProducts = (BOYS_DATA && BOYS_DATA[item.id]) || [];
    const defaultImage = categoryProducts[0]?.image || "/placeholder.png";

    return {
      ...item,
      image: defaultImage,
      href: `/boys/${item.id}`,
    };
  });

  return (
    <section className="w-full bg-[#0b0c10] py-12 xl:py-16 2xl:py-20 px-4 md:px-8 xl:px-12 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-6 xl:mb-8">
          <div>
            <h2 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-extrabold uppercase tracking-widest">
              SHOP BY CATEGORY
            </h2>
            <p className="text-gray-400 text-xs xl:text-sm 2xl:text-base mt-1">
              Find the perfect outfit for boys.
            </p>
          </div>

          <Link
            href="/collections"
            className="text-amber-400 hover:text-amber-300 text-xs xl:text-sm 2xl:text-base font-semibold flex items-center space-x-1 transition"
          >
            <span>View All</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Client Carousel Wrapper */}
        <CategoryCarousel>
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              href={item.href}
            />
          ))}
        </CategoryCarousel>
      </div>
    </section>
  );
}
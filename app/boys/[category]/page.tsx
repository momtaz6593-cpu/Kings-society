import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOYS_DATA } from "@/Data"; // Central Data folder
import AddToCartButton from "@/app/components/client/AddToCartButton";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function BoysCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const currentCategory = category.toLowerCase();

  // Retrieve products for boys category from central data
  const products = BOYS_DATA ? BOYS_DATA[currentCategory] : null;

  if (!products) {
    notFound();
  }

  return (
    <main className="w-full bg-[#0b0c10] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <Link href="/boys" className="hover:text-amber-400">Boys</Link>
          <span>/</span>
          <span className="text-amber-400 font-bold">{currentCategory}</span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-800 pb-4 mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest">
            BOYS {currentCategory}
          </h1>
          <p className="text-gray-400 text-xs mt-1">
            Explore our collection of trendy boys' {currentCategory}.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="group bg-neutral-900/60 border border-neutral-800/80 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm line-clamp-1 group-hover:text-amber-400 transition">
                    {product.name}
                  </h3>
                  <p className="text-neutral-400 text-[10px] sm:text-[11px] mt-1 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <p className="text-amber-400 font-bold text-xs sm:text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
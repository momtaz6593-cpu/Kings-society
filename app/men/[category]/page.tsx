import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEN_DATA } from "@/Data"; // Central Data folder
import AddToCartButton from "@/app/components/client/AddToCartButton";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}
export default async function MenCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const currentCategory = category.toLowerCase();
  // Retrieve products for category from central data
  const products = MEN_DATA[currentCategory];
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
          <Link href="/men" className="hover:text-amber-400">Men</Link>
          <span>/</span>
          <span className="text-amber-400 font-bold">{currentCategory}</span>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-800 pb-4 mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest">
            MEN'S {currentCategory}
          </h1>
          <p className="text-gray-400 text-xs mt-1">
            Showing {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-neutral-900/60 border border-neutral-800 rounded-md overflow-hidden hover:border-amber-400/50 transition duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-white font-semibold text-sm line-clamp-1 group-hover:text-amber-400 transition">
                    {product.name}
                  </h3>
                  <p className="text-amber-400 font-bold text-sm mt-2">
                    {product.price}
                  </p>
                </div>

                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
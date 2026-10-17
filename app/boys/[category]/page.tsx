import Link from "next/link";
import { notFound } from "next/navigation";
import { BOYS_DATA } from "@/Data"; // Central Data folder
import ProductCard from "@/app/components/client/ProductCard"; // 👈 গ্লোবাল ও কমন ক্লায়েন্ট প্রোডাক্ট কার্ড

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function BoysCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const currentCategory = category.toLowerCase();

  // Retrieve products for boys category from central data (Server Side)
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
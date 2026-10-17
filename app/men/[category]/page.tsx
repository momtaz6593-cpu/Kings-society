import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEN_DATA } from "@/Data"; // Central Data folder
import ProductCard from "@/app/components/client/ProductCard"; // 👈 শুধু এই ক্লায়েন্ট কার্ডটি ব্যবহার করো

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function MenCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const currentCategory = category.toLowerCase();
  
  // Retrieve products for category from central data (Server Side)
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

        {/* Products Grid - Server Component rendering optimized client cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
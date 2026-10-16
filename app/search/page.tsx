import React from "react";
import Link from "next/link";
import { ALL_PRODUCTS } from "@/Data"; // তোমার Data বা index ফাইলের সঠিক পাথ অনুযায়ী ইমপোর্ট চেক করে নিও
import SearchResultsGrid from "@/app/components/client/SearchResultsGrid";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q?.trim().toLowerCase() || "";

  // 🔍 Tag, Name, Description ও Category-র সাথে স্মার্ট সার্চ ম্যাচিং
  const filteredProducts = query
    ? ALL_PRODUCTS.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        const tagMatch = product.tags?.some((tag) =>
          tag.toLowerCase().includes(query)
        );

        return nameMatch || descMatch || tagMatch;
      })
    : [];

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white py-12 xl:py-20 px-4 md:px-8 xl:px-12">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        
        {/* Search Header */}
        <div className="border-b border-neutral-800 pb-6 mb-8 xl:mb-12">
          <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2 block">
            SEARCH RESULTS
          </span>
          <h1 className="text-2xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight">
            {query ? (
              <>
                RESULTS FOR: <span className="text-amber-400">&quot;{resolvedParams.q}&quot;</span>
              </>
            ) : (
              "SEARCH OUR PRODUCTS"
            )}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm font-light mt-2">
            {query
              ? `Found ${filteredProducts.length} item(s) matching your request.`
              : "Please enter a search term in the navbar search bar."}
          </p>
        </div>

        {/* Results Grid / Client Component with Modal */}
        {filteredProducts.length > 0 ? (
          <SearchResultsGrid products={filteredProducts} />
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-neutral-950/50 border border-neutral-800/80 rounded-md">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-gray-300 mb-2">
              NO PRODUCTS FOUND
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find anything matching &quot;{resolvedParams.q}&quot;. Try searching with different keywords like &quot;shirt&quot;, &quot;cargo&quot;, &quot;black&quot;, or &quot;hoodie&quot;.
            </p>
            <Link
              href="/collections"
              className="bg-amber-400 hover:bg-amber-500 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-sm transition uppercase tracking-wider inline-block"
            >
              BROWSE ALL COLLECTIONS &rarr;
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
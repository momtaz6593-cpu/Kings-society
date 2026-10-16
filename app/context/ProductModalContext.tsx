"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/Data";
import ProductModal from "@/app/components/client/ProductModal";

interface ProductModalContextType {
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(undefined);

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <ProductModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* গ্লোবাল মোডাল যা পুরো সাইটের যেকোনো পেজে কাজ করবে */}
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </ProductModalContext.Provider>
  );
}

export function useProductModal() {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error("useProductModal must be used within a ProductModalProvider");
  }
  return context;
}
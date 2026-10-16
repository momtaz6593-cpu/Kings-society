"use client";

import React from "react";
import { Product } from "@/Data";
import { useProductModal } from "@/app/context/ProductModalContext";

interface ClickableProductCardProps {
  product: Product;
  children: React.ReactNode; // সার্ভার থেকে আসা সুন্দর ডিজাইনের কার্ডের এইচটিএমএল/JSX
}

export default function ClickableProductCard({ product, children }: ClickableProductCardProps) {
  const { openModal } = useProductModal();

  return (
    <div 
      onClick={() => openModal(product)} 
      className="cursor-pointer group h-full flex flex-col justify-between"
    >
      {children}
    </div>
  );
}
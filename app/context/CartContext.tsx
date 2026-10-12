"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/Data/shirts";

export interface CartItem extends Product {
  quantity: number;
  addedAt?: string;
}

export interface SaleRecord {
  id: string;
  productId: string;
  name: string;
  price: string;
  image: string;
  description: string;
  quantity: number;
  addedAt: string; // Date & Time
  timestamp: number;
}

interface CartContextType {
  cart: CartItem[];
  saleHistory: SaleRecord[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  clearSaleHistory: () => void;
  totalCount: number;
  subtotal: number;
  formattedSubtotal: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper to convert price string (e.g. "$45.00", "৳ ২,৪৫০", "৳ 1,150", "59") to number
export function parsePriceToNumber(priceStr: string): number {
  if (!priceStr) return 0;
  const bengaliToEnglish: Record<string, string> = {
    "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4",
    "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9",
  };
  let cleaned = priceStr.replace(/[০-৯]/g, (digit) => bengaliToEnglish[digit] || digit);
  cleaned = cleaned.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

// Helper to format number into USD currency ($45.00)
export function formatPriceUSD(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

const CART_STORAGE_KEY = "kings_society_cart_items";
const SALE_STORAGE_KEY = "kings_society_sale_records";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [saleHistory, setSaleHistory] = useState<SaleRecord[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Helper to format date & time nicely in international format
  const getCurrentFormattedDate = () => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Load from localStorage after mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      const savedSale = localStorage.getItem(SALE_STORAGE_KEY);
      if (savedSale) {
        setSaleHistory(JSON.parse(savedSale));
      }
    } catch (e) {
      console.error("Failed to load data from localStorage", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    }
  }, [cart, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(SALE_STORAGE_KEY, JSON.stringify(saleHistory));
      } catch (e) {
        console.error("Failed to save sale history to localStorage", e);
      }
    }
  }, [saleHistory, isHydrated]);

  const addToCart = (product: Product) => {
    const formattedDate = getCurrentFormattedDate();
    const timestamp = Date.now();

    // 1. Update Cart (Navbar Badge & /cart page)
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, addedAt: formattedDate }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, addedAt: formattedDate }];
    });

    // 2. Update Sale History (/sale page record with date & quantity)
    setSaleHistory((prev) => {
      const existingIndex = prev.findIndex((item) => item.productId === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
          addedAt: formattedDate,
          timestamp,
        };
        return updated;
      }
      return [
        {
          id: `sale-${product.id}-${timestamp}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          quantity: 1,
          addedAt: formattedDate,
          timestamp,
        },
        ...prev,
      ];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    setSaleHistory((prev) =>
      prev.filter((item) => item.productId !== productId && item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
    setSaleHistory((prev) =>
      prev.map((item) =>
        item.productId === productId || item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setSaleHistory([]);
  };

  const clearSaleHistory = () => {
    setSaleHistory([]);
  };

  const totalCount = isHydrated ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const subtotal = cart.reduce((sum, item) => {
    const unitPrice = parsePriceToNumber(item.price);
    return sum + unitPrice * item.quantity;
  }, 0);

  const formattedSubtotal = formatPriceUSD(subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        saleHistory,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        clearSaleHistory,
        totalCount,
        subtotal,
        formattedSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

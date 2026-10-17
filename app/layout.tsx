import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/server/Navbar";
import Footer from "./components/server/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ১. মেটাডেটা অপটিমাইজেশন (গুগল সার্চে র‍্যাঙ্ক পাওয়ার জন্য)
export const metadata: Metadata = {
  title: {
    default: "Kings Society | Premium Men's Apparel",
    template: "%s | Kings Society",
  },
  description: "High-end luxury streetwear & clothing for men. Discover premium tees, shirts, pants, and jackets.",
  keywords: ["Mens Fashion", "Luxury Streetwear", "Premium Apparel", "Kings Society", "Clothing Store"],
  authors: [{ name: "Kings Society" }],
  openGraph: {
    title: "Kings Society | Premium Men's Apparel",
    description: "High-end luxury streetwear & clothing for men.",
    url: "https://yourdomain.com",
    siteName: "Kings Society",
    images: [
      {
        url: "/og-image.jpg", // public ফোল্ডারে ১২০০x৬৩০ সাইজের ব্যানার ফাইল থাকবে
        width: 1200,
        height: 630,
        alt: "Kings Society Apparel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ২. স্ট্রাকচার্ড ডেটা (JSON-LD Schema) - গুগলকে ই-কমার্স স্টোর হিসেবে চেনানোর জন্য
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  "name": "Kings Society",
  "url": "https://yourdomain.com",
  "description": "High-end luxury streetwear & clothing for men.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white min-h-screen flex flex-col`}
        >
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
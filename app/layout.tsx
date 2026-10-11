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

export const metadata: Metadata = {
  title: "Kings Society | Premium Men's Apparel",
  description: "High-end luxury streetwear & clothing for men.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white min-h-screen flex flex-col`}>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer/>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
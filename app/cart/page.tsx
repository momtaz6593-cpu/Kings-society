import { Metadata } from "next";
import CartView from "../components/client/CartView";

export const metadata: Metadata = {
  title: "Shopping Cart | Kings Society",
  description: "Review and manage your luxury streetwear shopping cart items.",
};

export default function CartPage() {
  return (
    <main className="w-full bg-[#0b0c10] min-h-screen py-6 md:py-10">
      <CartView />
    </main>
  );
}
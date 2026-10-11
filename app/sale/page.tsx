import { Metadata } from "next";
import SaleView from "../components/client/SaleView";

export const metadata: Metadata = {
  title: "My Purchases & Sale Records | Kings Society",
  description: "View all your purchased and added items with date and quantity breakdown.",
};

export default function SalePage() {
  return (
    <main className="w-full bg-[#0b0c10] min-h-screen py-6 md:py-10">
      <SaleView />
    </main>
  );
}
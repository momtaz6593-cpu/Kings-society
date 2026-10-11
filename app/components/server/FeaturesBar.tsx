import React from "react";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      subtitle: "For orders over $50",
    },
    {
      icon: ShieldCheck,
      title: "SECURE PAYMENTS",
      subtitle: "100% safe & secure",
    },
    {
      icon: RotateCcw,
      title: "EASY RETURNS",
      subtitle: "Within 7 days",
    },
    {
      icon: Headphones,
      title: "24/7 SUPPORT",
      subtitle: "We're here to help",
    },
  ];

  return (
    <div className="w-full bg-[#08090c] border-y border-neutral-800/80 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-start sm:justify-center gap-4 text-white"
            >
              <div className="text-gray-300 flex-shrink-0">
                <Icon className="w-7 h-7 stroke-[1.5]" />
              </div>

              <div className="flex flex-col">
                <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-200">
                  {feature.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
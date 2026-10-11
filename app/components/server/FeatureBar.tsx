import { ShieldCheck, Truck, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Premium Quality",
    subtitle: "Crafted to last",
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast & Reliable Shipping",
    subtitle: "Worldwide delivery",
  },
  {
    id: 3,
    icon: RefreshCw,
    title: "Easy Returns",
    subtitle: "Hassle-free process",
  },
  {
    id: 4,
    icon: Lock,
    title: "Secure Payments",
    subtitle: "Your data is safe",
  },
];

export default function FeatureBar() {
  return (
    <section className="w-full bg-[#0b0c10] text-white py-6 md:py-8 px-4 md:px-12 border-b border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center">
        {features.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center gap-3.5 md:gap-4 justify-start sm:justify-center"
            >
              {/* আইকন কন্টেইনার (গোল্ডেন গ্লো ও বর্ডার সহ) */}
              <div className="p-2.5 rounded-lg bg-[#12141c] border border-amber-500/20 text-amber-400 shrink-0">
                <IconComponent className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div className="flex flex-col">
                <h4 className="text-xs md:text-sm font-bold text-gray-200 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[10px] md:text-xs text-gray-400 font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import backImg from "@/public/Everyday-img.png"; // public ফোল্ডারের ইমেজ পাথ

export default function EverydayUniform() {
  return (
    <section className="w-full bg-[#0b0c10] text-white border-b border-gray-800 py-6 md:py-12 px-4 md:px-12">
      {/* মোবাইল ও পিসি—সব ডিভাইসেই ফিক্সড ১৬:৯ আসপেক্ট রেশিও */}
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden border border-gray-800 relative bg-[#12141c] aspect-[16/9]">
        
        {/* ১. ব্যাকগ্রাউন্ড পিকচার */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backImg}
            alt="Everyday Uniform Background"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
          
          {/* ওভারলে গ্রাডিয়েন্ট (লেখা যেন সবসময় স্পষ্ট পড়া যায়) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/80 md:via-[#0b0c10]/60 to-transparent" />
        </div>

        {/* ২. টেক্সট কন্টেন্ট */}
        <div className="relative z-10 h-full p-4 sm:p-6 md:p-12 flex flex-col justify-center items-start max-w-[75%] sm:max-w-md md:max-w-xl">
          
          {/* সাব-টাইটেল */}
          <span className="text-amber-500 font-semibold text-[9px] sm:text-xs md:text-sm tracking-widest uppercase mb-1 md:mb-2">
            STYLE MEETS COMFORT
          </span>

          {/* প্রধান শিরোনাম */}
          <h2 className="text-lg sm:text-3xl md:text-5xl font-serif font-bold tracking-wide leading-tight mb-1.5 md:mb-3 text-white">
            THE EVERYDAY <br /> UNIFORM
          </h2>

          {/* বিবরণী */}
          <p className="text-gray-300 text-[9px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed mb-2.5 md:mb-6 font-light max-w-xs md:max-w-sm line-clamp-2 sm:line-clamp-none">
            Clean cuts. Premium fabrics. Versatile pieces for every part of your day.
          </p>

          {/* বাটন */}
          <Link
            href="/collections"
            className="border border-amber-500/80 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold text-[9px] sm:text-xs md:text-sm tracking-wider px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded transition duration-300 flex items-center gap-1.5 md:gap-2 group"
          >
            EXPLORE COLLECTION 
            <span className="group-hover:translate-x-1 transition-transform duration-300">➔</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
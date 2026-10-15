import Image from "next/image";
import Link from "next/link";
import { Home, Store, User } from "lucide-react";
import FooterCartIcon from "../client/FooterCartIcon";

export default function Footer() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP & MAIN FOOTER                                  */}
      {/* ========================================================= */}
      <footer className="w-full bg-[#0b0c10] text-gray-400 text-sm xl:text-base 2xl:text-lg border-t border-gray-800 pt-12 xl:pt-16 2xl:pt-20 pb-24 md:pb-12 xl:pb-16">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-4 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12 pb-10 xl:pb-14 border-b border-gray-800">
            {/* Column 1: Brand Info */}
            <div className="space-y-3 xl:space-y-4">
              <div className="flex items-center space-x-3 xl:space-x-4">
                <Image
                  src="/KIngs-society.png"
                  alt="Kings Society Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover h-10 w-10 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
                />
                <span className="text-xl xl:text-2xl 2xl:text-3xl font-bold tracking-widest text-white uppercase">
                  KINGS SOCIETY
                </span>
              </div>
              <p className="text-xs xl:text-sm 2xl:text-base text-gray-400 font-light leading-relaxed">
                More Than Just Clothes.<br />It&apos;s a lifestyle.
              </p>
            </div>

            {/* Column 2: Shop Links */}
            <div>
              <h3 className="text-xs xl:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider mb-4 xl:mb-6">
                SHOP
              </h3>
              <ul className="space-y-2 xl:space-y-3 text-xs xl:text-sm 2xl:text-base">
                <li><Link href="/men" className="hover:text-amber-400 transition">Men</Link></li>
                <li><Link href="/boys" className="hover:text-amber-400 transition">Boys</Link></li>
                <li><Link href="/collections" className="hover:text-amber-400 transition">All Collections</Link></li>
                <li><Link href="/sale" className="hover:text-amber-400 transition">Sale</Link></li>
              </ul>
            </div>

            {/* Column 3: Support Links */}
            <div>
              <h3 className="text-xs xl:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider mb-4 xl:mb-6">
                SUPPORT
              </h3>
              <ul className="space-y-2 xl:space-y-3 text-xs xl:text-sm 2xl:text-base">
                <li><Link href="/contact" className="hover:text-amber-400 transition">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-amber-400 transition">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-amber-400 transition">Returns & Exchanges</Link></li>
              </ul>
            </div>

            {/* Column 4: Social Icons (Pure SVG - Zero Packages) */}
            <div>
              <h3 className="text-xs xl:text-sm 2xl:text-base font-bold text-white uppercase tracking-wider mb-4 xl:mb-6">
                FOLLOW US
              </h3>
              <div className="flex items-center space-x-4 xl:space-x-6 text-gray-400">
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition" aria-label="Instagram">
                  <svg className="w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition" aria-label="Facebook">
                  <svg className="w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition" aria-label="YouTube">
                  <svg className="w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition" aria-label="TikTok">
                  <svg className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 fill-current" viewBox="0 0 448 512">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a93.63 93.63 0 1 0 51.52 83.21V0h68.85a141.13 141.13 0 0 0 102.63 103.22z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition" aria-label="X (Twitter)">
                  <svg className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 fill-current" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4l99.7 131.8L389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 xl:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs xl:text-sm 2xl:text-base text-gray-500 gap-3">
            <p>© 2026 Kings Society. All rights reserved.</p>
            <div className="flex space-x-6 xl:space-x-8">
              <Link href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 2. MOBILE BOTTOM NAVIGATION                               */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b0c10]/95 backdrop-blur-md border-t border-gray-800 z-50 py-2 px-6">
        <div className="flex justify-between items-center text-center">
          <Link href="/" className="flex flex-col items-center text-amber-400 hover:text-amber-300 transition">
            <Home className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </Link>

          <Link href="/collections" className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition">
            <Store className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Shop</span>
          </Link>

          <Link href="/account" className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition">
            <User className="w-5 h-5" />
            <span className="text-[10px] mt-1 font-medium">Account</span>
          </Link>

          <FooterCartIcon />
        </div>
      </div>
    </>
  );
}
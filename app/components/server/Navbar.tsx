import Link from "next/link";
import MobileMenu from "../client/MobileMenu";
import SearchTrigger from "../client/SearchTrigger";
import UserAuth from "../client/UserAuth"; // 👈 নতুন ইমপোর্ট
import CartIcon from "../client/CartIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black text-[11px] font-bold py-1 px-4 text-center tracking-widest uppercase flex justify-between items-center">
        <span className="hidden md:inline">Better Style • Bigger Dreams</span>
        <p className="mx-auto md:mx-0">Free Shipping on Orders Over $75</p>
        <span className="hidden md:inline">Kings Society</span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu + Brand Logo */}
        <div className="flex items-center gap-3">
          <MobileMenu />
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-wider text-amber-400 uppercase font-serif">
              KINGS<span className="text-white font-sans font-light">SOCIETY</span>
            </span>
          </Link>
        </div>

        {/* Middle: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-300">
          <Link href="/" className="hover:text-amber-400 transition duration-200">
            HOME
          </Link>
          <Link href="/men" className="hover:text-amber-400 transition duration-200">
            MEN
          </Link>
          <Link href="/boys" className="hover:text-amber-400 transition duration-200">
            BOYS
          </Link>
          <Link href="/collections" className="hover:text-amber-400 transition duration-200">
            COLLECTIONS
          </Link>
          <Link href="/sale" className="text-amber-400 hover:text-amber-300 transition duration-200 font-bold">
            SALE
          </Link>
        </nav>

        {/* Right: Search, Account & Cart */}
        <div className="flex items-center gap-4">
          <SearchTrigger />

          {/* User Profile / Auth Section */}
          <UserAuth /> {/* 👈 এখানে শুধু UserAuth বসবে */}

          {/* Shopping Cart Icon */}
          <CartIcon />
        </div>

      </div>
    </header>
  );
}
"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function UserAuth() {
  const { isSignedIn, isLoaded, user } = useUser();

  // Skeleton pulse until Clerk auth state is loaded
  if (!isLoaded) {
    return <div className="w-8 h-8 rounded-full bg-neutral-800 animate-pulse" />;
  }

  return (
    <div className="flex items-center">
      {isSignedIn ? (
        /* If signed in, show user profile image linking directly to custom /account page */
        <Link
          href="/account"
          className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-400/60 hover:border-amber-400 transition block group"
          title="View Account"
        >
          <img
            src={user?.imageUrl || "/avatar-placeholder.png"}
            alt={user?.fullName || "User Profile"}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>
      ) : (
        /* Show sign-in button if guest */
        <SignInButton mode="modal">
          <button className="text-neutral-300 hover:text-amber-400 text-xs font-semibold uppercase tracking-wider transition cursor-pointer">
            Sign In
          </button>
        </SignInButton>
      )}
    </div>
  );
}
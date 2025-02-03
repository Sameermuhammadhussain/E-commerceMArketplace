'use client';

import Arrival from "@/app/components/arrival";
import Blog from "@/app/components/blog";
import Follow from "@/app/components/follow";
import Hero from "@/app/components/hero";
import Pick from "@/app/components/pick";
import Side from "@/app/components/side";
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-[#FBEBB5] py-4 px-6 flex justify-between items-center md:px-20">
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-5">
          <Link href="/account">
            <User size={28} className="hover:text-gray-600 cursor-pointer" />
          </Link>
          <Link href="/">
            <Search size={28} className="hover:text-gray-600 cursor-pointer" />
          </Link>
          <Link href="/checkout">
            <Heart size={28} className="hover:text-gray-600 cursor-pointer" />
          </Link>
          <Link href="/cart">
            <ShoppingCart size={28} className="hover:text-gray-600 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#FBEBB5] text-center py-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/shop" className="block py-2">Shop</Link>
          <Link href="/blog" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}

      <Hero />
      <Side />
      <Pick />
      <Arrival />
      <Blog />
      <Follow />
    </>
  );
}

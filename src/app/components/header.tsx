// components/Header.tsx
"use client";

import { BadgeDollarSignIcon, ShoppingCart, User, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Your static suggestions list; you can modify or fetch these from an API
  const suggestionsData = ["sofa", "chair", "table", "bed"];

  // Update filtered suggestions based on the search input
  useEffect(() => {
    if (search.trim() !== "") {
      const filtered = suggestionsData.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestionsData);
    }
  }, [search]);

  // Handle form submission for the search bar
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/products?query=${encodeURIComponent(search)}`);
    setShowSuggestions(false);
  };

  // Handle clicking a suggestion from the dropdown
  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    router.push(`/products?query=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  return (
    <header>
      {/* Navbar */}
      <div className="w-full bg-[#FBEBB5] py-4 px-6 md:px-20 flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          <Link href="/" className="text-gray-800 hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-gray-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition">
            Contact
          </Link>
        </nav>

        {/* Search Bar with Suggestions (Desktop Only) */}
        <div className="relative hidden md:block">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border rounded-lg px-3 py-2 shadow-md w-64"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                // Delay hiding so that a click on a suggestion is registered
                setTimeout(() => {
                  setShowSuggestions(false);
                }, 100);
              }}
              className="flex-grow px-2 border-none outline-none bg-transparent"
            />
            <button type="submit" className="text-gray-800 hover:text-gray-600 transition">
              <Search size={20} />
            </button>
          </form>
          {showSuggestions && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-5">
          <Link href="/account" className="text-gray-800 hover:text-gray-600 transition">
            <User size={28} />
          </Link>
          <Link href="/checkout" className="text-gray-800 hover:text-gray-600 transition">
            <BadgeDollarSignIcon size={28} />
          </Link>
          <Link href="/cart" className="text-gray-800 hover:text-gray-600 transition">
            <ShoppingCart size={28} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-gray-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#FBEBB5] text-center py-4">
          <Link href="/" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/shop" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

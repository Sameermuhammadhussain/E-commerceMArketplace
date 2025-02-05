"use client";

import {
  ShoppingCart,
  Search,
  AlignRight,
  Home,
  Store,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Memoize the suggestions data so it remains stable between renders.
  const suggestionsData = useMemo(() => ["sofa", "chair", "table", "bed"], []);

  useEffect(() => {
    if (search.trim() !== "") {
      const filtered = suggestionsData.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestionsData);
    }
  }, [search, suggestionsData]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/products?query=${encodeURIComponent(search)}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    router.push(`/products?query=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  return (
    <header className="w-full bg-[#FBEBB5] py-4 px-6 md:px-20 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-gray-800 hover:text-gray-600 transition">
          <Home size={28} />
        </Link>
        <Link href="/shop" className="text-gray-800 hover:text-gray-600 transition">
          <Store size={28} />
        </Link>
        <Link href="/cart" className="text-gray-800 hover:text-gray-600 transition">
          <ShoppingCart size={28} />
        </Link>
      </div>

      <div className="relative hidden md:block w-64">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border rounded-lg px-3 py-2 shadow-md w-full"
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
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
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

      <button
        className="md:hidden text-gray-800 hover:text-gray-600 transition ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AlignRight size={28} />
      </button>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#FBEBB5] shadow-lg z-50 flex flex-col py-4 px-6 transition-transform duration-300 transform translate-x-0">
          <button
            className="text-gray-800 self-end mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
          <Link href="/account" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            <strong>Account</strong>
          </Link>
          <Link href="/checkout" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            <strong>Checkout</strong>
          </Link>
          <Link href="/contact" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            <strong>Contact</strong>
          </Link>
          <Link href="/about" className="block py-2 text-gray-800 hover:text-gray-600 transition">
            <strong>About</strong>
          </Link>
        </div>
      )}
    </header>
  );
}

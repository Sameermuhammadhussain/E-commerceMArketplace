"use client";
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/app/lib/api";
import { useCart } from "@/app/context/CartContext"; // Import Cart Context

// Define Product Type
type Product = {
  id: string;
  category: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  quantity?: number; // Ensure quantity is included
};

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart(); // Ensure addToCart is used

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("Fetched Products:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id} // Ensure id is correctly fetched
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden"
              >
                <Image
                  src={product.imagePath}
                  alt={product.description || "Product Image"}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{product.category}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-900 font-bold">${product.price}</p>
                  <button
                    onClick={() => addToCart({ ...product, quantity: 1 })} // Ensure quantity is passed
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500"><strong>Check Your Internet</strong>
            <br />
            <i>Products Not Avalible</i></p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShopProducts;

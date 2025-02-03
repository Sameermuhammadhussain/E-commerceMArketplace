// ShopProducts.tsx
"use client";
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { fetchProducts } from "@/app/lib/api";

// Define Product Type
type Product = {
  id: string; // API returns _id, but we map it to id
  category: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
};

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

   <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <div
              key={product.id} // Use id as the unique key for each product
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden"
            >
              <Image
                src={product.imagePath} // Ensure the image path is correct
                alt={product.description || "Product Image"} // Add alt text for accessibility
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.category}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopProducts;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import { fetchProducts } from "@/app/lib/api";
import { useCart } from "@/app/context/CartContext";

type Product = {
  id: string;
  category: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  quantity: number;
};

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Fetch products from the API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log the error
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id} 
            className="border p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <Image
              src={product.imagePath}
              alt={product.category}
              width={300}
              height={300}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{product.category}</h2>
            <p className="text-gray-500">{product.description}</p>
            <div className="mt-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.discountPercentage && (
                <span className="text-red-500 ml-2">
                  {product.discountPercentage}% off
                </span>
              )}
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-700">Stock: {product.stockLevel}</span>
              <button
                onClick={() => handleAddToCart(product)} // Correct quantity update logic
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;

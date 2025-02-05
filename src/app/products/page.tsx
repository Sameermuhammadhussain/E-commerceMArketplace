"use client";

import Header from "../components/header";
import { useEffect, useState } from "react";
import { fetchProducts, Product } from "@/app/lib/api";
import ProductCard from "@/app/components/ProductCard";
import SearchBar from "@/app/components/SearchBar";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts(query)
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid response from API:", data);
          setProducts([]);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [query]);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    // Optionally update the URL here if needed.
  };

  // Select the first product from the list (if more than one)
  const selectedProduct = products.length > 0 ? products[0] : null;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>
      <SearchBar onSearch={handleSearch} />
      <Header />
      <h2 className="text-2xl font-bold my-4">
        Results for &quot;{query}&quot;
      </h2>
      {selectedProduct ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard key={selectedProduct._id} product={selectedProduct} />
        </div>
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;

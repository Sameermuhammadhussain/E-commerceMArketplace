"use client";

import { useEffect, useState } from "react";
import { fetchProducts, Product } from "@/app/lib/api";

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      // For demonstration, fetch all products and filter by id.
      // In production, consider creating an endpoint to fetch a single product by id.
      const products = await fetchProducts();
      const foundProduct = products.find((p: Product) => p._id === id) || null; // Ensure 'p' is typed as Product and check '_id' for matching
      setProduct(foundProduct);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.category}</h1>
      <p>{product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;

"use client";

import Image from "next/image";
import { Product } from "@/app/lib/api"; 

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden">
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
      </div>
    </div>
  );
};

export default ProductCard;

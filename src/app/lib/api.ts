// src/app/lib/api.ts

// Define the Product type and export it
export type Product = {
  category: string;
  _id: string;
  price: number;
  description: string;
  stockLevel: number;
  image: string;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
};

// Fetch products from the API with optional search query
export const fetchProducts = async (query: string = "") => {
  try {
    const queryStr = query
      ? `*[_type == "product" && name match "${query}*"]{category, _id, price, description, stockLevel, image, imagePath, discountPercentage, isFeaturedProduct}`
      : `*[_type == "product"]{category, _id, price, description, stockLevel, image, imagePath, discountPercentage, isFeaturedProduct}`;

    const url = `https://6qpjo4oq.api.sanity.io/v2025-01-18/data/query/production?query=${encodeURIComponent(queryStr)}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.result) {
      throw new Error("Invalid API response structure.");
    }

    return data.result;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array to prevent crashes
  }
};

// lib/api.ts

export type Product = {
  id: string;
  category: string;
  price: number;
  description: string;
  stockLevel: number;
  image: string;
  imagePath: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
};

export const fetchProducts = async (query: string = ""): Promise<Product[]> => {
  try {
    const queryStr = query
      ? `*[_type == 'product' && name match "${query}*"]{category, _id, price, description, stockLevel, image, imagePath, discountPercentage, isFeaturedProduct}`
      : `*[_type == 'product']{category, _id, price, description, stockLevel, image, imagePath, discountPercentage, isFeaturedProduct}`;

    const encodedQuery = encodeURIComponent(queryStr);
    const url = `https://6qpjo4oq.api.sanity.io/v2025-01-18/data/query/production?query=${encodedQuery}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const { result } = await response.json();
    console.log("Fetched products:", result);

    // Map _id to id for each product.
    return Array.isArray(result)
      ? result.map((item: any) => ({
          ...item,
          id: item._id,
        }))
      : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

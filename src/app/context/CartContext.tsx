"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Product Type
export type Product = {
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

// Cart Context Type
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};

// Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity if product already in cart
            : item
        );
      }
      // Add new product with quantity 1 if not in cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity drops below 1
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

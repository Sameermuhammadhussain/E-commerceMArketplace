"use client";
import { Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; 

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id} 
                  className="flex items-center py-4 border-b"
                >
                  <Image
                    src={item.imagePath}
                    alt={item.category}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 ml-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Total</h2>
              <p className="text-lg font-bold mb-4">${grandTotal.toFixed(2)}</p>
              <Link href="/checkout">
                <Button className="w-full h-16 rounded-[15px] text-xl border border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;

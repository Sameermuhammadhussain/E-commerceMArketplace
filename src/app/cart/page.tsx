"use client";
import { Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; // Import Cart Context

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart functions

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
            <div className="lg:w-2/3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  <Image src={item.imagePath} alt={item.category} width={100} height={100} />
                  <span className="text-gray-500 flex-1 ml-4">{item.category}</span>
                  <span className="text-gray-500">${item.price}</span>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
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
            <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Total</h2>
              <p className="text-lg font-bold">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </p>
              <Link href="/checkout">
                <Button className="w-full md:w-auto md:min-w-[318px] h-16 rounded-[15px] text-xl mx-auto block border border-black bg-white text-black hover:bg-black hover:text-white transition-colors">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;

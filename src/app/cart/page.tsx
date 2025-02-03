"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ imgSrc, name, price, quantity, subtotal }: { imgSrc: string; name: string; price: string; quantity: number; subtotal: string }) => {
  return (
    <div className="flex items-center py-8 border-b">
      <div className="grid grid-cols-4 flex-1 items-center">
        <div className="flex items-center gap-4">
          <div className="w-[106px] h-[106px] bg-[#FBEBB5] rounded-lg flex items-center justify-center">
            <Image src={imgSrc} alt={name} className="w-28" width={100} height={100} />
          </div>
          <span className="text-gray-500">{name}</span>
        </div>
        <div className="text-gray-500">{price}</div>
        <div>
          <div className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center">
            {quantity}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>{subtotal}</span>
          <button className="text-gray-500 hover:text-gray-700">
            <Trash2 className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
        <Image src="/blog.png" alt="Hero Image" fill style={{ objectFit: "cover" }} />
        <div className="text-center space-y-4 z-[1]">
          <Image src="/log.png" alt="Logo" className="mx-auto mb-4" width={100} height={100} />
          <h1 className="text-4xl md:text-5xl font-medium">Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="font-light">Cart</span>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-[#FFF9E6] p-4 grid grid-cols-4 font-medium mb-4">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            {/* Single Cart Item */}
            <CartItem
              imgSrc="/asgaard.png"
              name="Asgaard sofa"
              price="Rs. 250,000.00"
              quantity={1}
              subtotal="Rs. 250,000.00"
            />
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFF9E5] p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-8">Cart Totals</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Subtotal</span>
                  <span className="text-gray-500">Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-xl text-[#B88E2F]">Rs. 250,000.00</span>
                </div>
              </div>
              <Link href="/checkout">
              <Button className="w-full h-[59px] rounded-xl border border-black bg-white text-black hover:bg-black hover:text-white transition-colors text-xl">
               Check Out
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-500 text-lg">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-500 text-lg">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-500 text-lg">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

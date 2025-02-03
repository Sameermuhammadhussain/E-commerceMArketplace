import React from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import CheckoutForm from "@/app/components/checkout-form";

// Footer Section Component
const FooterSection = () => {
  return (
    <footer className="bg-[#FAF4F4] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-medium mb-4">Free Delivery</h3>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">90 Days Return</h3>
            <p className="text-gray-600">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function Check() {
  return (
    <>
      <div>
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <div className="w-full">
          <div className="h-[316px] w-full relative">
            <Image
              src={"/check.png"}
              alt="hero"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        {/* Checkout Form */}
        <CheckoutForm />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </>
  );
}

export default Check;

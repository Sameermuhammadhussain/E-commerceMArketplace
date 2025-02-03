import Header from "@/app/components/header";
import React from "react";
import Image from "next/image";



function Account() {
  return (
    <div>
      <Header />
      
      <div className="w-full">
        {/* Hero Image Section */}
        <div className="relative min-h-[250px] sm:min-h-[316px] w-full">
          <Image
            src="/account.png"
            alt="hero"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        </div>

        {/* Login/Register Container */}
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
            {/* Login Form */}
            <div className="flex-1 max-w-[500px] mx-auto lg:mx-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Log In</h2>
              
              <label className="block text-sm md:text-base mb-2">
                Username or email address
                <input
                  type="text"
                  className="w-full border-2 border-red-500 rounded-lg p-3 mt-2"
                />
              </label>

              <label className="block text-sm md:text-base mb-4">
                Password
                <input
                  type="password"
                  className="w-full border-2 border-red-500 rounded-lg p-3 mt-2"
                />
              </label>

              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                Log In
              </button>
              
              <p className="mt-4 text-sm md:text-base text-gray-600">
                <a href="#" className="hover:underline">Lost Your Password?</a>
              </p>
            </div>

            {/* Register Form */}
            <div className="flex-1 max-w-[500px] mx-auto lg:mx-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Register</h2>
              
              <label className="block text-sm md:text-base mb-4">
                Email address
                <input
                  type="email"
                  className="w-full border-2 border-red-500 rounded-lg p-3 mt-2"
                />
              </label>

              <p className="text-sm md:text-base text-gray-600 mb-6">
                A link to set a new password will be sent to your email address.
                <br className="hidden sm:block" />
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#FAF4F4] py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Free Delivery */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Free Delivery</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  For all orders over $50, consectetur adipim scing elit
                </p>
              </div>

              {/* 90 Days Return */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">90 Days Return</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  If goods have problems, consectetur adipim scing elit
                </p>
              </div>

              {/* Secure Payment */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Secure Payment</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  100% secure payment, consectetur adipim scing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
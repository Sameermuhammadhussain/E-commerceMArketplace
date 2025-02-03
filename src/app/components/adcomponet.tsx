"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const AdComponent = ({ discountProduct }: { discountProduct: any }) => {
  return (
    <div className="w-full px-6 py-4">
      <Card className="flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow-lg w-full">
        {/* Left Section: Discount Info */}
        <div className="mb-4 md:mb-0 md:w-1/2">
          <h2 className="text-xl font-bold">🔥 Exclusive Discount!</h2>
          {discountProduct ? (
            <p className="text-lg">
              Get <strong>{discountProduct.discountPercentage}%</strong> off on<i>{ " Asgaard Sofa "}</i>
              <strong>{discountProduct.category}</strong> now!
            </p>
          ) : (
            <p className="text-lg">Fetching discount...</p>
          )}
        </div>

        {/* Right Section: Image & Button */}
        {discountProduct && (
          <div className="flex items-center gap-4 md:w-1/2">
            <Image
              src={ "/asgaard.png"}
              alt={discountProduct.category || "Ad Image"}
              width={60}
              height={60}
              className="rounded-md"
            />
            
            {/* Link to SingleProduct Page */}
            <Link href="/singleProduct">
              <Button className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg hover:bg-gray-200">
                Grab Deal
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AdComponent;

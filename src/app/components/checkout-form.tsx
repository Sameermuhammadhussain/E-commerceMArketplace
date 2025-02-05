"use client";

import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function CheckoutForm() {
  const { cart } = useCart();

  // Calculate subtotal (for each product) and grand total
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Billing Details Section */}
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">Billing Details</h1>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input
                id="companyName"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select defaultValue="sri-lanka">
                <SelectTrigger className="h-[75px] rounded-[10px] border-[#9F9F9F]">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input
                id="city"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select defaultValue="western">
                <SelectTrigger className="h-[75px] rounded-[10px] border-[#9F9F9F]">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                  <SelectItem value="central">Central Province</SelectItem>
                  <SelectItem value="southern">Southern Province</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input
                id="zip"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                className="h-[75px] rounded-[10px] border-[#9F9F9F]"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="additional"
                placeholder="Additional Information"
                className="h-[75px] rounded-[10px] border-[#9F9F9F] text-[#9F9F9F]"
              />
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:pl-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

            {/* Header for Order Summary */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <span className="font-medium">Product</span>
              <span className="font-medium">Subtotal</span>
            </div>

            {/* List of Cart Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`item-${item.id}-${item.quantity}`}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imagePath}
                      alt={item.category}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <p className="font-medium">{item.category}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Totals */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">${grandTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold text-xl text-[#B88E2F]">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-6 border-t pt-4">
              <RadioGroup defaultValue="bank-transfer" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                </div>
                <p className="text-sm text-gray-500 pl-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash On Delivery</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Place Order Button */}
            <div className="mt-6">
              <Link href="./congragulations">
                <Button className="w-full h-16 rounded-[15px] text-xl border border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                  Place Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

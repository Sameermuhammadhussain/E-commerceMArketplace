"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import {
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Header from "@/app/components/header";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[316px] bg-gradient-to-r from-teal-600 to-blue-600 flex flex-col items-center justify-center text-white">
        <Image
          src="/blog.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="text-center space-y-4 absolute z-[1] px-4 sm:px-8">
          <Image src="/log.png" alt="Logo" className="mx-auto mb-4" width={100} height={100} />
          <h1 className="text-4xl md:text-5xl font-medium animate__animated animate__fadeIn">Contact</h1>
          <div className="flex items-center gap-2 text-sm justify-center animate__animated animate__fadeIn animate__delay-1s">
            <span className="font-medium">Home</span>
            <span className="text-gray-300">/</span>
            <span className="font-light">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Get In Touch Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-teal-600">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12 animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-teal-600" />
              <div>
                <h3 className="text-2xl font-medium mb-2 text-teal-600">Address</h3>
                <p className="text-black text-sm sm:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-8 h-8 text-teal-600" />
              <div>
                <h3 className="text-2xl font-medium mb-2 text-teal-600">Phone</h3>
                <p className="text-black text-sm sm:text-base">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-teal-600" />
              <div>
                <h3 className="text-2xl font-medium mb-2 text-teal-600">Working Time</h3>
                <p className="text-black text-sm sm:text-base">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your name</label>
                <Input
                  placeholder="Abc"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email address</label>
                <Input
                  type="email"
                  placeholder="Abc@def.com"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="This is an optional"
                  className="h-[75px] rounded-[10px] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Hi! I'd like to ask about"
                  className="min-h-[120px] rounded-[10px] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              <Button
                type="submit"
                className="h-12 px-12 rounded-xl border border-teal-600 bg-teal-600 text-white hover:bg-teal-700 transition-all"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-3xl font-medium mb-4 text-teal-600">Free Delivery</h3>
              <p className="text-gray-500 text-lg">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>
            <div className="text-center animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-3xl font-medium mb-4 text-teal-600">90 Days Return</h3>
              <p className="text-gray-500 text-lg">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
            <div className="text-center animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-3xl font-medium mb-4 text-teal-600">Secure Payment</h3>
              <p className="text-gray-500 text-lg">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react"; 
import { User, Calendar, Tag } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/header";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-200 flex items-center justify-center z-1">
        <Image src="/blog.png" alt="Hero Image" fill style={{ objectFit: 'cover' }} />
        <div className="text-center absolute z-[1]">
          <Image src="/log.png" alt="Logo" className="mx-auto mb-4" width={100} height={100} />
          <h1 className="text-4xl font-medium mb-4">Blog</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span>Home</span>
            <span>&gt;</span>
            <span className="font-light">Blog</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="mb-12">
              <Image src="/blog2.png" alt="Blog post image" className="w-full h-auto rounded-lg mb-4" width={650} height={100} />
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Admin</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> 14 Oct 2022</span>
                <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> Wood</span>
              </div>
              <h2 className="text-2xl font-medium mb-2">Going all-in with millennial design</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="#" className="text-black inline-block border-b border-black pb-1">Read more</a>
            </article>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
              <Button variant="outline" className="w-12 h-12 rounded-lg bg-[#FBEBB5] hover:bg-blue-300">1</Button>
              <Button variant="outline" className="w-12 h-12 rounded-lg hover:bg-blue-300">2</Button>
              <Button variant="outline" className="w-12 h-12 rounded-lg hover:bg-blue-300">3</Button>
              <Button variant="outline" className="px-4 h-12 rounded-lg hover:bg-gray-600">Next</Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow">
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>

            {/* Categories (Restored Section) */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Crafts</span> <span className="text-gray-500">2</span></li>
                <li className="flex justify-between"><span>Design</span> <span className="text-gray-500">8</span></li>
                <li className="flex justify-between"><span>Handmade</span> <span className="text-gray-500">7</span></li>
                <li className="flex justify-between"><span>Interior</span> <span className="text-gray-500">1</span></li>
                <li className="flex justify-between"><span>Wood</span> <span className="text-gray-500">6</span></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li className="flex space-x-4">
                  <Image src="/smallb.png" alt="Recent post" className="w-20 h-20 rounded-lg" width={100} height={100} />
                  <div>
                    <h4 className="font-medium">Going all-in with millennial design</h4>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF4F4] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div><h3 className="text-2xl font-medium mb-4">Free Delivery</h3><p className="text-gray-600">For all orders over $50...</p></div>
            <div><h3 className="text-2xl font-medium mb-4">90 Days Return</h3><p className="text-gray-600">If goods have problems...</p></div>
            <div><h3 className="text-2xl font-medium mb-4">Secure Payment</h3><p className="text-gray-600">100% secure payment...</p></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

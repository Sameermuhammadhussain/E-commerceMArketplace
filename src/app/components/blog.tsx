import React from "react";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <div className="w-full py-12 px-6">
      <div className="text-[28px] md:text-[36px] font-semibold text-center">
        Latest Blogs
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {[{ img: "/blog1.png", title: "Blog Post 1", excerpt: "Lorem ipsum..." },
          { img: "/blog2.png", title: "Blog Post 2", excerpt: "Lorem ipsum..." },
          { img: "/blog3.png", title: "Blog Post 3", excerpt: "Lorem ipsum..." }]
          .map((item, index) => (
            <div key={index} className="text-center">
              <Image src={item.img} alt={item.title} width={300} height={200} className="w-full" />
              <div className="text-[20px] font-semibold mt-3">{item.title}</div>
              <div className="text-[14px] mt-1">{item.excerpt}</div>
              <Link href="/" className="text-[18px] mt-2 inline-block">Read More</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;

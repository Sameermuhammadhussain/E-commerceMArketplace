import React from "react";
import Image from "next/image";

function Pick() {
  return (
    <div className="w-full py-12 px-6">
      <div className="text-[28px] md:text-[36px] font-semibold text-center">Top Picks For You</div>
      <div className="text-[#9F9F9F] text-[14px] md:text-[16px] font-semibold text-center mt-2">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[
          { img: "/pick1.png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
          { img: "/pick2.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
          { img: "/pick3.png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
          { img: "/pick4.png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <Image src={item.img} alt={item.name} width={300} height={300} className="w-full" />
            <div className="text-[16px] mt-3">{item.name}</div>
            <div className="text-[20px] md:text-[24px] font-semibold">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pick;

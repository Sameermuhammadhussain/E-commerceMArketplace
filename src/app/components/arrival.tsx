import React from "react";
import Image from "next/image";
import Link from "next/link";

function Arrival() {
  return (
    <div className="w-full h-auto flex justify-center gap-[60px] px-6 sm:px-20 bg-[#FFF9E5]">
      <div className="w-full sm:w-[750px] relative top-0">
        <Image src="/asgaard.png" alt="Asgaard Sofa" layout="responsive" width={750} height={650} />
      </div>
      <div className="mt-6 sm:mt-[280px] text-center sm:text-left">
        <div className="text-[24px] font-semibold">New Arrivals</div>
        <div className="text-[48px] font-bold">Asgaard sofa</div>
        <Link href="./shop">
        <button className="text-[20px] w-[235px] h-[64px] font-semibold mt-4 border-2 flex items-center justify-center border-black hover:bg-black hover:text-white transition-all">
          Order Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Arrival;

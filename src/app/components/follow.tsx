import React from "react";
import Image from "next/image";
import Link from "next/link";

function Follow() {
  return (
    <div className="w-full bg-[#FBEBB5] py-12 px-6 mt-12">
      <div className="w-full h-[450px] relative z-[-1]">
        <Image
          src={"/follow.png"}
          alt="hero"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-[15px] px-6 py-[125px] md:px-[20px] z-[1]">
        <div className="font-bold text-[60px] w-[454px] text-center">Our Instagram</div>
        <div className="text-[20px] text-center">Follow our store on Instagram</div>
        <Link href="www.instagram.com/sameerahmed5686" target="_blank">
        <button className="w-[200px] h-[64px] rounded-[50px] bg-[#FAF4F4] text-[20px] font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          Follow Us
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Follow;

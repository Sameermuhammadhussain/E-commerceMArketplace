import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-auto bg-[#FBEBB5] flex flex-col md:flex-row items-center p-6 md:px-20">
      <div className="md:w-1/2 text-center md:text-left text-[30px] sm:text-[40px] md:text-[66px] font-semibold leading-[40px] sm:leading-[50px] md:leading-[90px]">
        Rocket Single Seater
        <div className="mt-3">
          <Link href="/shop" className="font-semibold text-[24px]">
            Shop Now
          </Link>
          <div className="w-[120px] border-b-[3px] border-black mt-2 mx-auto md:mx-0"></div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/sofa.png"
          alt="Hero"
          width={800}
          height={800}
          className="w-[90%] md:w-[80%] h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;

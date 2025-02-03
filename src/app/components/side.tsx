import React from "react";
import Image from "next/image";
import Link from "next/link";

function Side() {
  return (
    <div className="w-full bg-[#FAF4F4] py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-center items-center relative">
        {/* <Image
          src="/sidetable.png"
          alt="Side Table"
          width={300}
          height={300}
          className="absolute left-0 md:left-[10%] w-[60%] md:w-[40%]"
        />
        <Image
          src="/sidesofa.png"
          alt="Side Sofa"
          width={300}
          height={300}
          className="absolute right-0 md:right-[10%] w-[60%] md:w-[40%]"
        /> */}
      </div>

      <div className="mt-[250px] flex flex-col md:flex-row justify-between items-center md:px-[150px]">
        <div className="text-center md:text-left">
          <div className="text-[28px] md:text-[36px] font-semibold">Side Table</div>
          <div className="mt-2">
            <Link href="/" className="font-semibold text-[20px] md:text-[24px]">View More</Link>
          </div>
          <div className="w-[120px] border-b-[3px] border-black mt-2 mx-auto md:mx-0"></div>
        </div>

        <div className="text-center md:text-left mt-6 md:mt-0">
          <div className="text-[28px] md:text-[36px] font-semibold">Side Sofa</div>
          <div className="mt-2">
            <Link href="/" className="font-semibold text-[20px] md:text-[24px]">View More</Link>
          </div>
          <div className="w-[120px] border-b-[3px] border-black mt-2 mx-auto md:mx-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Side;

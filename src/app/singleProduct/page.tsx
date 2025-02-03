import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Header from "@/app/components/header";
import Link from "next/link";

const SingleProduct = () => {
  return (
    <>
      <div>
        <Header />
        <div className="mx-[135px] my-[80px]">
          <div className="w-[363px] h-[21px] text-gray-500 text-14px">
            Home &nbsp; / &nbsp; Shop &nbsp; / &nbsp;
            <span className="text-black font-normal">Asgaard sofa</span>
          </div>
        </div>

        <section className="flex gap-[16px] mx-[135px] my-[80px]">
          <div className="flex flex-col gap-[16px]">
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
              <Image src="/bsofa.png" alt="image" width={121} height={114} />
            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
              <Image src="/plant.png" alt="image" width={121} height={114} />
            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
              <Image src="/cusion.png" alt="image" width={121} height={114} />
            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
              <Image src="/sofatable.png" alt="image" width={121} height={114} />
            </div>
          </div>

          <div className="w-[500px] h-[600px] relative bg-[#FFF9E5] rounded-[4px] flex justify-center items-center">
            <Image src="/asgaard.png" alt="image" width={446} height={315} />
          </div>

          <div className="w-[500px] h-[600px] ml-[60px]">
            <div className="text-[24px] font-semibold tracking-[1px]">Asgaard sofa</div>
            <div className="text-[24px] font-normal tracking-[1px]">Rs. 250,000.00</div>
            <div className="flex gap-1 mt-[16px]">
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#bebebe" color="#bebebe" />
              <div className="text-gray-500 relative bottom-[5px] left-[5px] text-[16px]">
                5 Customer Reviews
              </div>
            </div>

            <div className="text-[14px] mt-[10px] w-[373px] h-[63px] text-justify">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </div>

            <div className="mt-[24px] border-t-[1px] border-t-gray-400 w-[390px]" />
            {/* Colours */}
            <div className="text-[14px] mr-[8px] mt-[20px] text-[#9F9F9F]">Colours:</div>
            <div className="flex gap-[10px] w-[455px] h-[20px] border-3 items-center mt-[10px]">
              <div className="rounded-full h-[20px] w-[20px] bg-[#816DFA] cursor-pointer" />
              <div className="rounded-full h-[20px] w-[20px] bg-black cursor-pointer" />
              <div className="rounded-full h-[20px] w-[20px] bg-[#CDBA7B] cursor-pointer" />
            </div>
            {/* Size */}
            <div className="text-[14px] text-[#9F9F9F] mt-[20px]">Size:</div>
            <div className="mt-[10px] w-[296px] h-[32px] flex gap-[16px] items-center text-center">
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-[#FBEBB5] pt-[3px] bg-[#FBEBB5] cursor-pointer transition ease-in-out delay-50 font-semibold">
                L
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#FAF4F4] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer transition ease-in-out delay-50 font-semibold">
                XL
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#FAF4F4] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer font-semibold">
                XS
              </div>
            </div>

            {/* 1 2 3 , buy now, heart */}
            <div className="mt-[24px] text-[24px] font-semibold w-[350px] h-[50px] gap-[16px] flex justify-center items-center">
              {/* 1 2 + */}
              <div className="rounded-[10px] flex border-2 border-gray-400">
                <div className="w-[40px] h-[44px] text-[30px] flex items-center justify-center pb-[35px] font-bold">-</div>
                <div className="w-[80px] h-[44px] flex items-center justify-center">1</div>
                <div className="w-[41px] h-[44px] text-black text-[30px] flex items-center justify-center pb-[8px] rounded-tr-[3px]">+</div>
              </div>
              {/* Buy now */}
              <Link href={'cart'}>
              <button  className="w-[180px] h-[50px] bg-[#FAF4F4] border-2 border-black text-[16px] text-center rounded-[10px]">
              
                Add To Cart
                
              </button>
              </Link>
            </div>

            {/* Free delivery */}
            <div className="mt-[40px] h-[90px] w-[400px] rounded-t-[4px] flex gap-[16px] items-center">
              <div className="w-[100] h-[40px] ml-[12px] mt-[10px] text-[#9F9F9F]">
                SKU: SS001
                <br />
                Category: Sofas
                <br />
                Tags: Sofa, Chair, Home, Shop
              </div>
            </div>
          </div>
        </section>

        <div className="h-[650px] w-full px-[160px]">
          <div className="font-semibold text-center mt-[180px] text-[18px]">
            Description &nbsp; &nbsp;
            <span className="text-[#9F9F9F]">
              &nbsp; &nbsp; Additional Information
            </span>
            &nbsp; &nbsp; <span className="text-[#9F9F9F]">Reviews [5]</span>
          </div>
          <div className="text-[16px] text-[#9F9F9F] mt-[25px]">
            Embodying the raw, wayward spirit of rock roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of
            Marshall, unplugs the chords, and takes the show on the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering...
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

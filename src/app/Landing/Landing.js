'use client'
 import Image from "next/image";
 import { Assets } from "@/Assets/page";
import Link from "next/link";
export default function Landing() {
  return (
    
    <div>
    <div className="flex justify-center sm:pt-[46px]  gap-11">
      <div className='bg-[#6ec6ad] h-[2px] ml-3 w-10 md:w-16 mt-[20px] sm:mt-[36px]'></div>
      <p className="text-[#6ec6ad] text-[30px] sm:text-[50px]">Qovex</p>
      <div className='bg-[#6ec6ad] h-[2px] w-10 md:w-16 mt-[24px] sm:mt-[36px]'></div>
    </div>
    <div>
      <p className="text-black text-[20px] sm:text-[40px] lg:text-[60px] font-medium flex justify-center">DIGITAL MARKETING AGENCY</p>
      <p className=" text-[12px] sm:text-[15px] text-[#666666] flex justify-center text-center pt-[5px] sm:pt-0">We are not just a digital agency — we are your strategic growth team. At Qovex,  we specialise in turning <br className="hidden md:block"/> ideas into scalable, ROI-focused digital experiences.
      </p>
    </div>
    <div className="flex justify-center pt-8 gap-6">
      <Link href="/Contact" className="py-3 px-3 sm:px-9 hover:bg-[#111722] flex bg-[#6ec6ad] rounded-xl text-white cursor-pointer duration-500 text-[12px] sm:text-[20px]">
         <p className="px-[40px]">Let&apos;s Talk</p>
          </Link>
      <a href="#" className="py-3 px-3 sm:px-9 rounded-xl border-2 cursor-pointer hover:bg-[#111722] hover:text-white duration-500 text-[12px] sm:text-[20px] text-black">Explore Our Work</a>
    </div>
    </div>
  )
}

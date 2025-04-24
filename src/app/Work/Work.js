import Image from "next/image";
import { Assets } from "@/Assets/page";
export default function Work() {
  return (
    <div className="pt-6 px-3  sm:pl-6">
      <div className="pt-20 px-10 border-2 border-[#ececec] rounded-xl  pb-10">
        <p className=" text-[35px] sm:text-[50px] text-black">Why Choose Qovex?</p>
        {/* Section1 */}
        <div className="flex flex-col sm:flex-row justify-between pb-16 border-b border-b-[#646464]">
          <p className="text-[#787878] pt-3">
          We deliver excellence, we have a team of experts with rigorous experience <br className="hidden md:block"/> in field who strive to provide the best services in launching and building brands.

          </p>
          <div className="border-2 rounded-xl p-3 inline-flex h-12 mt-5  cursor-pointer hover:bg-[#74c8b0] group gap-4 w-[140px]">
            <p className="text-[15px] text-black group-hover:text-white duration-700 ">
              Show More
            </p>
      <p className="text-black text-[15px] group-hover:text-white transition">&gt;</p>

          </div>
        </div>
        {/* Section2 */}
        <div className="pb-6 border-b border-b-[#646464] flex flex-col xl:flex-row items-center xl:justify-between">
            <div className="pt-16">
                <p className="text-[15px] inline border rounded-full p-3 text-black">SEO Optimization</p>
                <p className=" pt-10 sm:pt-20 font-semibold text-[20px] sm:text-[30px] text-black"> 📈 TechCorp – SEO Strategy
                </p>
                <p className="pt-3 text-[#c3bdbd] text-[12px] text-center sm:text-[15px] "> Increased organic traffic by 50% with comprehensive keyword <br className="hiden md:block"/> targeting and technical SEO.
                </p>
            </div>
            <div className="pt-10">
            <Image src={Assets.image1} className="rounded-xl w-full lg:w-[50vw] max-w-[450px]" alt="SEO optimization"/>
            </div>
        </div>

        {/* Section3 */}
        <div className="flex border-b flex-col xl:flex-row border-b-[#646464] justify-center items-center xl:justify-between pb-10">
        <div className="pt-10">
            <Image src={Assets.image5} className="rounded-xl w-full" alt="SEO optimization"/>
            </div>
            <div className=" py-10">
                <p className="p-3 border rounded-full text-[15px] inline text-black">Social Media Management</p>
                <p className=" pt-6 sm:pt-20 text-[20px] sm:text-[30px] text-black">📲 FashionWave – Social Revamp</p>
                <p className="text-[#c3bdbd] text-[12px] sm:text-[15px] pt-6"> 75% boost in audience interaction through creative reels and influencer-led campaigns.</p>
            </div>
            
        </div>
        {/* Section4 */}

        <div className="flex flex-col items-center xl:justify-between xl:flex-row">
            <div className="py-10 ">
            <p className="p-3 border rounded-full text-[15px] inline text-black">Brand Strategy</p>
            <p className=" pt-6 sm:pt-20 text-[20px] sm:text-[30px] text-black">🏠 UrbanNest – Brand Identity </p>
            <p className="text-[#c3bdbd] text-[12px] sm:text-[15px] pt-6"> Complete identity overhaul that improved recall and engagement by 60%.</p>
            </div>
            <div className="pt-10">
            <Image src={Assets.image7} className="rounded-xl w-full" alt="SEO optimization"/>
            </div>
        </div>

      </div>
    </div>
  );
}

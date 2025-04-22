import Image from "next/image";
import { Assets } from "@/Assets/page";
export default function Work() {
  return (
    <div className="pt-6 px-3  sm:pl-6">
      <div className="pt-20 px-10 border-2 border-[#ececec] rounded-xl  pb-10">
        <p className=" text-[35px] sm:text-[50px] text-black">Our Work</p>
        {/* Section1 */}
        <div className="flex flex-col sm:flex-row justify-between pb-16 border-b border-b-[#646464]">
          <p className="text-[#787878] pt-3">
            Our work combines creativity and data-driven strategies to deliver{" "}
            <br className="hidden sm:block" /> impactful digital marketing
            compaigns that drive growth.
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
                <p className=" pt-10 sm:pt-20 font-semibold text-[20px] sm:text-[30px] text-black">TechCorp's Traffic Soars With SEO <br className="hidden xl:block "/> Optimization</p>
                <p className="pt-3 text-[#c1c1c1] text-[12px] sm:text-[15px] ">Boosted organic traffic by 50% for TechCorp through carefully targeted keyword <br className="hidden sm:block"/> strategies and comprehensive on-page optimization , driving significant growth  <br className="hidden sm:block"/>  in search engine visibility.</p>
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
                <p className=" pt-6 sm:pt-20 text-[20px] sm:text-[30px] text-black">Fashionwave's Engagement Soars With <br className="hidden sm:block"/> Creative Compaigns</p>
                <p className="text-[#d0d0d0] text-[12px] sm:text-[15px] pt-6">Increased follower engagement for FashionWave by 75% through the implementation <br className="hidden sm:block"/> of creative content strategies and interactive social media compaigns , significantly <br /> enhancing brand interaction and costumer connection across all platforms.</p>
            </div>
            
        </div>
        {/* Section4 */}

        <div className="flex flex-col items-center xl:justify-between xl:flex-row">
            <div className="py-10 ">
            <p className="p-3 border rounded-full text-[15px] inline text-black">Brand Strategy</p>
            <p className=" pt-6 sm:pt-20 text-[20px] sm:text-[30px] text-black">UrbanNest's Brand Revamp Boosts <br className="hidden sm:block"/> Recognition </p>
            <p className="text-[#cfcfcf] text-[12px] sm:text-[15px] pt-6">Revamped UrbanNest's brand identity, leading to a 60% increase in costumer <br className="hidden sm:block"/> recognition and loyality. The refreshed image strengthened market presence and <br className="hidden sm:block"/> deepened connections with the target audience</p>
            <p></p>
            </div>
            <div className="pt-10">
            <Image src={Assets.image7} className="rounded-xl w-full" alt="SEO optimization"/>
            </div>
        </div>

      </div>
    </div>
  );
}

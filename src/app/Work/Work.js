import Image from "next/image";
import { Assets } from "@/Assets/page";
export default function Work() {
  return (
    <div className="pt-6 px-1 sm:px-3  sm:pl-6">
      <div className=" pt-7 sm:pt-20 px-3 sm:px-10 border-2 border-[#ececec] rounded-xl  pb-10">
        <p className=" text-[29px] sm:text-[50px] text-black">Why Choose Qovex?</p>
        {/* Section1 */}
        <div className="flex flex-col sm:flex-row justify-between pb-16 border-b border-b-[#646464]">
          <p className="text-[#787878] pt-3">
          We deliver excellence, we have a team of experts with rigorous experience <br className="hidden lg:block"/> in field who strive to provide the best services in launching and building brands.

          </p>
          <div className="border-2 rounded-xl p-3 inline-flex justify-center h-12 mt-5  cursor-pointer hover:bg-[#111722] group gap-4 w-[140px]">
            <p className="text-[15px] text-black group-hover:text-white duration-700 ">
              Show More
            </p>
      <p className="text-black text-[15px] group-hover:text-white transition">&gt;</p>

          </div>
        </div>
        {/* Section2 */}

        {/* Section 2 */}
<div className="flex justify-center ">
  <div className="bg-[#F4F4F4] flex flex-col xl:flex-row items-center justify-between border-b border-b-[#646464] border-l-4 border-l-[#6EC6AD] rounded-3xl mt-[20px] sm:mt-[86px] w-full max-w-[1500px] overflow-hidden">

    {/* Text Section */}
    <div className="flex flex-col items-center xl:items-start text-center xl:text-left p-6 sm:p-12">
      <p className="text-[15px] border rounded-full p-3 text-black inline-block">
        SEO Optimization
      </p>
      <p className="pt-10 sm:pt-20 font-semibold text-[20px] sm:text-[30px] text-black">
        📈 TechCorp – SEO Strategy
      </p>
      <p className="pt-3 text-[#C3BDBD] text-[12px] sm:text-[15px] leading-relaxed">
        Increased organic traffic by 50% with comprehensive keyword 
        <br className="hidden md:block" /> targeting and technical SEO.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full xl:w-auto pt-6 xl:pt-0 flex justify-center">
      <Image
        src={Assets.image3}
        alt="SEO optimization"
        className="rounded-2xl w-full max-w-[450px] object-cover h-[300px] sm:h-[400px] xl:h-[500px]"
      />
    </div>

  </div>
</div>

{/* Section 3 */}
<div className="flex justify-center ">
  <div className="bg-[#F4F4F4] flex flex-col xl:flex-row-reverse items-center justify-between border-b border-b-[#646464] border-r-4 border-r-[#6EC6AD] rounded-3xl mt-[20px] sm:mt-[86px] w-full max-w-[1500px] overflow-hidden">

    {/* Text Section */}
    <div className="flex flex-col items-center xl:items-start text-center xl:text-left p-6 sm:p-12">
      <p className="text-[15px] border rounded-full p-3 text-black inline-block">
        SEO Optimization
      </p>
      <p className="pt-10 sm:pt-20 font-semibold text-[20px] sm:text-[30px] text-black">
        📈 TechCorp – SEO Strategy
      </p>
      <p className="pt-3 text-[#C3BDBD] text-[12px] sm:text-[15px] leading-relaxed">
        Increased organic traffic by 50% with comprehensive keyword 
        <br className="hidden md:block" /> targeting and technical SEO.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full xl:w-auto pt-6 xl:pt-0 flex justify-center">
      <Image
        src={Assets.image1}
        alt="SEO optimization"
        className="rounded-2xl w-full max-w-[450px] object-cover h-[300px] sm:h-[400px] xl:h-[500px]"
      />
    </div>

  </div>
</div>

{/* Section 4 */}
<div className="flex justify-center  ">
  <div className="bg-[#F4F4F4] flex flex-col xl:flex-row items-center justify-between border-b border-b-[#646464] border-l-4 border-l-[#6EC6AD] rounded-3xl mt-[20px] sm:mt-[86px] w-full max-w-[1500px] overflow-hidden">

    {/* Text Section */}
    <div className="flex flex-col items-center xl:items-start text-center xl:text-left p-6 sm:p-12">
      <p className="text-[15px] border rounded-full p-3 text-black inline-block">
        SEO Optimization
      </p>
      <p className="pt-10 sm:pt-20 font-semibold text-[20px] sm:text-[30px] text-black">
        📈 TechCorp – SEO Strategy
      </p>
      <p className="pt-3 text-[#C3BDBD] text-[12px] sm:text-[15px] leading-relaxed">
        Increased organic traffic by 50% with comprehensive keyword 
        <br className="hidden md:block" /> targeting and technical SEO.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full xl:w-auto pt-6 xl:pt-0 flex justify-center">
      <Image
        src={Assets.image4}
        alt="SEO optimization"
        className="rounded-2xl w-full max-w-[450px] object-cover h-[300px] sm:h-[400px] xl:h-[500px]"
      />
    </div>

  </div>
</div>


      </div>
    </div>
  );
}

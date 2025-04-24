import { Assets } from "@/Assets/page";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
      
      <div className=' pt-6  '>
    <div className='pt-6 bg-[#013619] px-12 rounded-lg'>
      <div className='bg-white py-10 rounded-lg '>
        <p className='capitalize text-[20px] sm:text-[40px] text-center flex justify-center text-black'>Let’s Launch Something <br className="hidden md:block"/> Powerful Together</p>
        <p className='text-[#848484] flex justify-center text-[15px]  text-center pt-3'>Ready to launch your digital marketing project? Let us craft strategies <br className='hidden sm:block'/> that drive results and growth.</p>
            
        <div className='flex justify-center pt-10'>
          <Link href="/Contact">
        <div className='py-3 pl-6 pr-10 b g-[#74c8b0] rounded-lg inline-flex gap-3 cursor-pointer bg-[#74c8b0] hover:bg-[#013619] transition duration-500'>
                <Image src={Assets.Mail2} alt="Let's talk" className="w-[30px] h-[20px] "/>
        <p className='text-white text-[15px]'>Lets &apos; Talk</p>
        </div>
          </Link>
        </div>
      </div>

        <div className=' py-10 sm:py-20 flex flex-col lg:flex-row  lg:justify-around'>
            <div>
              <Image src={Assets.Logo} alt="Logo" className="w-36"/>
                <p className=' text-[15px] sm:text-[20px] text-[#93b29c] pt-6'>Specializes in innovative digital marketing strategies, blending <br className='hidden xl:block'/> creativity and data-driven insights to elevate your brand&apos;s online <br className='hidden xl:block'/> presence and driven measurable growth.</p>
            </div>
            <div className='flex pt-6 lg:pt-0 gap-[20px] md:gap-[150px]'>
                <ul className='text-[#93b29c] '>
                    <li className='text-[15px] sm:text-[20px] text-white'>MENU</li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white '><Link href="/">Home</Link></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Service</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Our Work</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Project</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><Link href="/AboutUs">About Us</Link></li>
                </ul>

                <ul className='text-[#93b29c] '>
                    <li className='text-[15px] sm:text-[20px] text-white'>SERVICES</li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Web & App Development</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Social Media Marketing</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Email Marketing</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">SEO</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="#">Creative & Content</a></li>
                    
                </ul>

                <ul className='text-[#93b29c] '>
                    <li className='text-[15px] sm:text-[20px] text-white'>SOCIAL MEDIA</li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="https://www.instagram.com/qovexstudio" target="_blank">Instagram</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="https://www.linkedin.com/company/qovex-studio/" target="_blank">Linkedin</a></li>
                    <li className=' text-[12px] sm:text-[15px] pt-6 hover:text-white'><a href="https://www.facebook.com/qovexstudio" target="_blank">Facebook</a></li>
                    
                </ul>
            </div>
        </div>

        
        
        <div className='py-6 md:px-16 flex justify-between border-t-2 border-t-[#749582] pt-10'>
            <p className='text-[#93b29c] text-[12px] md:text-[15px]'>&copy;2025Qovex.All Rights Reserved.</p>

            <div className='flex gap-[10px]'>
            <p className='text-[#93b29c] text-[12px] md:text-[15px]'>Terms & Conditions</p>
            <div className='bg-[#93b29c] h-[10px] w-[1px] mt-2'></div>
            <p className='text-[#93b29c] text-[12px] md:text-[15px]'>Privacy Policy</p>
            </div>
        </div>

    </div>
    </div>
  )
}

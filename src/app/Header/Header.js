'use client'
import { Assets } from "@/Assets/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(prev => !prev);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };
  

  // Handle overflow when menu is toggled
  useEffect (()=>{
    document.addEventListener('mousedown', closeMenu);
    return()=>{
      document.removeEventListener('mousedown', closeMenu)
    }
  })

  // Reset on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setIsVisible(false);
        document.body.style.overflowY = 'auto';
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='flex justify-between'>
      {/* Mobile burger icon */}
      <div className="mt-[25px] sm:hidden block" onClick={toggleMenu}>
        <Image src={Assets.Burgur} alt="menu" className="h-10 w-10  ml-5 mt-[5px]" />
      </div>

      {/* Logo for mobile */}
      <div className="mt-[-27px] md:hidden block">
  <Link href="/">
    <Image src={Assets.Logo} alt="Qovex" className="w-20 h-20 mt-10" />
  </Link>
</div>


      {/* Desktop navbar */}
      <ul className='p-9 gap-5 text-[14px] hidden sm:flex'>
        <div className="mt-[-27px]">
          <Link href="/"><Image src={Assets.Logo} alt="Qovex" className="w-20 h-20" /></Link>
        </div>
        <div className="w-[2px] h-[20px] bg-[#70c7ae] "></div>
        <li><Link href="/" className="hover:border-b-2 text-black hover:border-b-[#6ec6ad] transition pb-2 hover:text-[#6ec6ad]">Home</Link></li>
        <li><Link href="/" className="hover:border-b-2 text-black hover:border-b-[#6ec6ad] transition pb-2 hover:text-[#6ec6ad]">Our Work</Link></li>
        <li><Link href="/" className="hover:border-b-2 text-black hover:border-b-[#6ec6ad] transition pb-2 hover:text-[#6ec6ad]">Project</Link></li>
        <li><Link href="/" className="hover:border-b-2 text-black hover:border-b-[#6ec6ad] transition pb-2 hover:text-[#6ec6ad]">Service</Link></li>
        <li><Link href="/AboutUs" passHref className="hover:border-b-2 text-black hover:border-b-[#6ec6ad] transition pb-2 hover:text-[#6ec6ad]">About us</Link></li>
      </ul>

      {/* Mobile menu drawer */}
      {isVisible && (
        <div className="fixed left-0 top-0 w-[80vw] h-full bg-white z-50 flex flex-col pt-10 px-6 shadow-xl">
          {/* Top Row with Close Icon */}
          <div className="flex justify-between items-center">
            <div></div>
            <Image
              src={Assets.Cross}
              alt="Close"
              className="h-6 w-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="flex flex-col gap-6 mt-10 text-[16px] text-gray-800 font-medium">
            <li onClick={toggleMenu}><Link href="/">Home</Link></li>
            <li onClick={toggleMenu}><Link href="/">Our Work</Link></li>
            <li onClick={toggleMenu}><Link href="/">Project</Link></li>
            <li onClick={toggleMenu}><Link href="/">Service</Link></li>
            <li onClick={toggleMenu}><Link href="/AboutUs">About Us</Link></li>
          </ul>
        </div>
      )}

      {/* Let's Talk button */}
      <div className="pt-7 pr-6">
        <Link href="/Contact" className='border-2 text-black duration-200 transition-shadow cursor-pointer rounded-lg h-10 flex gap-2 hover:bg-[#111722] group'>
          <span  className='px-3 py-[10px] h-1 text-[12px] text-black group-hover:text-white'>
            Let&apos;s Talk
          </span>
          <Image src={Assets.Mail} alt="Let's talk" className="w-[30px] h-[15px] ml-[-10px] mt-3 group-hover:hidden" />
          <Image src={Assets.LightArrow} alt="Light-Arrow" className="hidden group-hover:block w-[30px] ml-[-10px] mt-3 h-[15px]"/>
        </Link>
      </div>
    </div>
  );
}
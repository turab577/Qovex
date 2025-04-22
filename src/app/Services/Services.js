import Image from "next/image";
import { Assets } from "@/Assets/page";
export default function Services() {

    const cards = [ 
      {
        Id: 0,
        title: "Web and app development",
        content: "We develop digital assets, such as websites, microsites, and mobile apps, for your business.",
      },
      {
        Id: 1,
        title: "Social Media Marketing",
        content: "We help you to promote your brand on Facebook, Twitter, Instagram with best social strategies.",
      },
      {
        Id: 2,
        title: "Email Marketing",
        content: "We help you to build your lists and send them newsletters regularly or simply an email blast.",
      },
      {
        Id: 3,
        title: "Search Engine Marketing",
        content: "We are specially partnering with Google to help your websites appear on the top within minutes.",
      },
      {
        Id: 4,
        title: "Creative and Content",
        content: "We think outside the box to create content that matters to your audience & business growth.",
      },
      {
        Id: 5,
        title: "Digital Advertising & PPC",
        content: "We make your digital media buying and PPC easier by partnering with a lot of publishers.",
      },
    ];
  
    return (
      <div className="pt-16 ">
        <div className="text-2xl bg-[#013818] rounded-2xl px-6 sm:px-16 pt-16 pb-20 shadow-lg">
  <p className="text-[30px] md:text-[50px] text-white font-bold tracking-wide flex ">
    Our Services
  </p>
  <div className="flex flex-col lg:flex-row sm:justify-between pr-10 pb-10">
    <p className="text-[#63977a] pt-3 text-[15px] md:text-[20px] leading-relaxed">
      Our digital marketing service boosts your presence with SEO, 
      <br className="hidden md:block" />
      social marketing, and targeted ads.
    </p>
    <div className="md:p-3 border-2 gap-4 border-white cursor-pointer rounded-2xl h-10 sm:h-12 mt-3 lg:mt-0 inline-flex hover:bg-[#63977a] transition-colors duration-300 w-[195px]">
      <p className="text-white text-[12px] pl-10 sm:pl-0 md:text-[15px] inline-block pt-3 sm:pt-0 ">
        Schedule Discussion
      </p>
      <p className="text-white text-[15px]">&gt;</p>
    </div>
  </div>

  {/* Dynamically render the services using map */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cards.map((card) => ( 
      <div key={card.Id} className="bg-[#02461f] rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="bg-[#ead4b1] p-3 inline-block rounded-lg">
          <Image src={Assets.Copy} alt="Services" className="h-6 w-6"/>
        </div>
        <h3 className="text-xl font-semibold text-white  py-4">
          {card.title}
        </h3>
        <p className="text-[#628870] text-[15px] mb-6">
          {card.content}
        </p>
        <p className="text-[#628870] text-[15px] mb-10">
          What is included in this service?
        </p>
        <div className="border-2 inline-flex gap-4 border-white rounded-2xl  p-3 hover:bg-[#63977a] cursor-pointer transition-colors duration-300 group">
  <p className="text-[17px] text-[#aed8c6] group-hover:text-white">
    Schedule Discussion
  </p>
  <p className="text-white text-[15px] mt-[1px]">&gt;</p>

 
</div>

      </div>
    ))}
  </div>
</div>

      </div>
    );
  }
  
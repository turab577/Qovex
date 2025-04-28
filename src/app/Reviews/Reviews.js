'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Assets } from '@/Assets/page';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Reviews() {
  const Clients = [
    {
      id: 0,
      image: Assets.Person1,
      name: "Robert Fox",
      Rank: "Ceo of UrbanNest's",
      Comment:
        "Qovex transformed our digital presence. Smart strategy, clear results.",
    },
    {
      id: 1,
      image: Assets.Person2,
      name: "Leslie Alexander",
      Rank: "Manager FashionWave's",
      Comment:
        "“They don’t just execute — they understand the brand. That’s rare.”",
    },
    {
      id: 2,
      image: Assets.Person3,
      name: "Emily Davis",
      Rank: "Founder of StyleCore",
      Comment:
        "Qovex scaled our startup with aggressive SEO and clever PPC. 100% recommended.",
    },
    {
      id: 3,
      image: Assets.Person4,
      name: "Michael Chen",
      Rank: "CTO of CloudNest",
      Comment:
        "They revamped our SEO game and online strategy. ",
    },
    {
      id: 4,
      image: Assets.Person5,
      name: "Sophia Moore",
      Rank: "Head of Digital at FreshFlow",
      Comment:
        "Great experience! They know the digital landscape and deliver results that matter.",
    },
    {
      id: 5,
      image: Assets.Person6,
      name: "Daniel Kim",
      Rank: "Marketing Head at GreenLeaf",
      Comment:
        "Excellent communication and outstanding strategy. Helped us scale effectively.",
    },
    {
      id: 6,
      image: Assets.Person7,
      name: "Amelia Thompson",
      Rank: "Brand Manager at EcoGlow",
      Comment:
        "They’re our go-to team now. SEO, ads, content — nailed it all.",
    },
    {
      id: 7,
      image: Assets.Person8,
      name: "Liam Carter",
      Rank: "Operations at NexaTech",
      Comment:
        "Professional, skilled, and strategic. Highly recommended for digital growth.",
    },
    {
      id: 8,
      image: Assets.Person1,
      name: "Isabella Green",
      Rank: "Director at MindPixel",
      Comment:
        "Very impressed by their creative approach and effective marketing campaigns.",
    },
    {
      id: 9,
      image: Assets.Person2,
      name: "Lucas Bennett",
      Rank: "Entrepreneur",
      Comment:
        "Their personalized approach made all the difference for my startup launch.",
    },
  ];

  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  // 👇 Group clients into 5 slide sets
  const chunkedClients = Array.from({ length: 5 }, (_, i) =>
    Clients.slice(i * 2, i * 2 + 2)
  );

  return (
    <div className=" pt-1.5 px-1 sm:pt-16 sm:px-6">
      <div className=" py-7 sm:py-16 border-2 border-[#dfdfdd] rounded-xl px-2 sm:px-20">
        <p className="text-[25px] sm:text-[50px] text-center text-black">What Clients Says</p>
        <p className="text-[15px] sm:text-[20px] text-[#a0a0a0] text-center">
          Our clients&apos; feedback speaks volumes. Discover their stories of success, collaboration,
          <br /> and the impactful results we&apos;ve delivered together.
        </p>

        <div className=" pt-5 sm:pt-20">
        <Swiper
  modules={[Navigation]}
  loop={true}
  spaceBetween={30}
  navigation={false}
  slidesPerView={1} // Default
  breakpoints={{
    640: {
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 2, // tablets
    },
    1024: {
      slidesPerView: 2, // desktops
    },
  }}
  onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
  onBeforeInit={(swiper) => {
    swiperRef.current = swiper;
  }}
  className="w-full cursor-grab active:cursor-grabbing"
>
  {Clients.map((client) => (
    <SwiperSlide key={client.id}>
      <div className="border border-[#dfdfdd] p-6 rounded-xl h-full">
        <div className="flex gap-4">
          <Image src={client.image} alt="Clients" className="h-20 w-20 rounded-xl" />
          <div>
            <div className="font-semibold text-lg md:text-xl text-black">{client.name}</div>
            <div className="text-[#c6c6c6] sm:pt-2">{client.Rank}</div>
          </div>
        </div>
        <div className="pt-1 sm:pt-6 text-[12px] sm:text-[15px] text-[#444]">
          {client.Comment}
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          {/* Bottom Controls */}
          <div className="flex justify-center items-center gap-6 pt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="px-4 py-2 border cursor-pointer bg-[#74c8b0] hover:bg-[#111722] border-[#00000028] duration-500 text-[white] transition rounded-xl"
            >
              {"<"}
            </button>
            
            
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="px-4 py-2 border cursor-pointer bg-[#74c8b0] hover:bg-[#111722] border-[#00000028] duration-500 text-[white]  rounded-xl transition"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

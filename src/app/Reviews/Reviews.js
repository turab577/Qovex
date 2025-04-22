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
        "The digital marketing team transformed our online presence, delivering exceptional results with their SEO and their targeted ads. Highly recommended their professional approach",
    },
    {
      id: 1,
      image: Assets.Person2,
      name: "Leslie Alexander",
      Rank: "Manager FashionWave's",
      Comment:
        "We've seen incredible growth thanks to their tailored digital marketing strategies. The team expertise in SEO and social media has been invaluable.",
    },
    {
      id: 2,
      image: Assets.Person3,
      name: "Emily Davis",
      Rank: "Founder of StyleCore",
      Comment:
        "Amazing collaboration. Their team was on point with strategy and delivery. Results spoke for themselves!",
    },
    {
      id: 3,
      image: Assets.Person4,
      name: "Michael Chen",
      Rank: "CTO of CloudNest",
      Comment:
        "They revamped our SEO game and online strategy. Visibility and engagement shot up within weeks.",
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
    <div className="pt-16 px-6">
      <div className="py-16 border-2 border-[#dfdfdd] rounded-xl px-6 sm:px-20">
        <p className="text-[25px] sm:text-[50px] text-center text-black">What Client Says</p>
        <p className="text-[15px] sm:text-[20px] text-[#a0a0a0] text-center">
          Our clients' feedback speaks volumes. Discover their stories of success, collaboration,
          <br /> and the impactful results we've delivered together.
        </p>

        <div className="pt-20">
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={1} // Always show 1 slide per view
            spaceBetween={30}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {chunkedClients.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {group.map((client) => (
                    <div
                      key={client.id}
                      className="border border-[#dfdfdd] p-6 rounded-xl"
                    >
                      <div className="flex gap-4">
                        <Image src={client.image} alt="Clients" className="h-16 w-16 rounded-xl" />
                        <div>
                          <div className="font-semibold text-lg md:text-xl text-black">{client.name}</div>
                          <div className="text-[#c6c6c6] sm:pt-2">{client.Rank}</div>
                        </div>
                      </div>
                      <div className="pt-1 sm:pt-6 text-[12px] sm:text-[15px] text-[#444]">
                        {client.Comment}
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Controls */}
          <div className="flex justify-center items-center gap-6 pt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="px-4 py-2 border cursor-pointer bg-[#74c8b0] hover:bg-[#03331abe] border-[#00000028] duration-500 text-[white] transition rounded-xl"
            >
              {"<"}
            </button>
            <span className="text-gray-500 text-sm">
              {currentSlide} / {chunkedClients.length}
            </span>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="px-4 py-2 border cursor-pointer bg-[#74c8b0] hover:bg-[#03331abe] border-[#00000028] duration-500 text-[white]  rounded-xl transition"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

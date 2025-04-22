'use client';

import { Assets } from "@/Assets/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";

export default function Team() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const teamMembers = [
    { image: Assets.Person1, name: "Liam Johnson", role: "Creative Director" },
    { image: Assets.Person2, name: "James Lee", role: "Marketing Manager" },
    { image: Assets.Person3, name: "Ava Patel", role: "Lead Designer" },
    { image: Assets.Person4, name: "Sophia Turner", role: "Full Stack Developer" },
    { image: Assets.Person5, name: "Olivia Smith", role: "SEO Specialist" },
    { image: Assets.Person6, name: "Ethan Garcia", role: "Content Strategist" },
    { image: Assets.Person7, name: "Emma Brown", role: "UI/UX Designer" },
    { image: Assets.Person8, name: "Lina May", role: "Project Manager" },
  ];

  // Split into 2 groups for 2 SwiperSlides
  const groupSize = teamMembers.length / 2;
  const groupedMembers = [teamMembers.slice(0, groupSize), teamMembers.slice(groupSize)];

  return (
    <div className="relative pl-10 pr-6 pt-10">
      <div>
        <p className="text-[30px] sm:text-[50px] font-semibold text-black ">Meet Our Team</p>
        <p className="pt-6 text-[#848582]">
          Meet our team of passionate digital marketing experts, dedicated to <br />
          crafting innovative solutions that fuel success.
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end items-center gap-4 mb-4 pr-4">
        <button
          ref={prevRef}
          className="text-xl bg-[#6ec6ad] px-2 rounded cursor-pointer hover:bg-[#03331abe] text-white transition"
        >
          {'<'}
        </button>
        <span className="text-sm text-gray-600">
          {currentSlide} / {groupedMembers.length}
        </span>
        <button
          ref={nextRef}
          className="text-xl bg-[#6ec6ad] px-2 rounded text-white cursor-pointer hover:bg-[#03331abe] transition"
        >
          {'>'}
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        loop={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {groupedMembers.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.map((member, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-[260px] object-cover"
                  />
                  <div className="pt-4 pb-6">
                    <p className="text-[16px] font-semibold text-black">{member.name}</p>
                    <p className="text-[14px] text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

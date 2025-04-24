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
    { image: Assets.Qaim, name: "Qaim Raza Khan", role: "Creative Director"},
    { image: Assets.Sarmast, name: "Sarmast Faiz", role: "Content Writer" },
    { image: Assets.Ahsan, name: "Ahsan", role: "Full Stack Developer" },
    { image: Assets.Zain, name: "Zain Ul Abidin", role: "SEO Specialist" },
    { image: Assets.Sibte, name: "Sibte Hassan", role: "Graphic Designer" },
    { image: Assets.Person7, name: "Emma Brown", role: "UI/UX Designer" },
    { image: Assets.Person8, name: "Lina May", role: "Project Manager" },
  ];

  return (
    <div className="relative  pl-1 pr-1 sm:pl-10 sm:pr-6 pt-10">
      <div>
        <p className="text-[30px] sm:text-[50px] font-semibold text-black ">👩‍💻 Meet Our Expert Team</p>
        <p className="pt-6 text-[#848582]">
          Our people are our superpower.
          From developers and designers to marketing strategists <br className="hidden md:block" /> and SEO gurus — Qovex is built on collaboration, creativity, and client-first culture.
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
          {currentSlide} / {teamMembers.length}
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
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-md text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={900}
                className="w-full h-[260px] object-cover"
              />
              <div className="pt-4 pb-6">
                <p className="text-[16px] font-semibold text-black">{member.name}</p>
                <p className="text-[14px] text-gray-500">{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

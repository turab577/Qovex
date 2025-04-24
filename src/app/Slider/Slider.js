'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Assets } from '@/Assets/page';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  const images = [
    Assets.image1,
    Assets.image2,
    Assets.image3,
    Assets.image4,
    Assets.image5,
    Assets.image6,
    Assets.image7,
  ];

  return (
    <div className=" px-1 sm:px-6 pt-16">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full max-h-[700px] mx-auto rounded-xl overflow-hidden"
      >
        {images.map((img, index) => (
  <SwiperSlide key={index}>
    <Image
      src={img}
      alt={`Slide ${index + 1}`}
      width={1200}
      height={600}
      className="object-cover w-full h-auto"
    />
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
}

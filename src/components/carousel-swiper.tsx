"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/(main)/_components/slider.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { IProduct } from "@/@types/IProduct";

const CarouselSwiper = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="z-50">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={100}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {products.map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-black bg-white rounded-4xl overflow-hidden"
          >
            <div className="h-full w-full flex justify-center items-center flex-col">
              {item.title}
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler flex flex-row items-center">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft size={5} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselSwiper;

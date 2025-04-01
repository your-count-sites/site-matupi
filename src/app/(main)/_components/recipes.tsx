"use client";

import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { BackgroundRecipes } from "../../../../public/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

const Recipes = () => {
  return (
    <section className="w-full relative py-32 ">
      <Image
        src={BackgroundRecipes}
        fill
        className="absolute object-cover -z-10"
        alt="Receitas"
      />
      <div className="mt-32 ">
        <div className="w-full">
          <h1 className="text-white text-[3em] max-w-[800px] font-bold">
            Conheça as receitas mais{" "}
            <span className="text-red-800">queijuuuuudas</span> para alegrar o
            seu dia
          </h1>
          <Swiper
            slidesPerView={5 / 1.2}
            slidesPerGroupSkip={2}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            className="offset-container-recipe swiper-no-padding pr-4"
          >
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>1</span>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center border bg-gray-400 py-52 shadow-lg rounded-xl ">
              <span>R</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recipes;

const SlideButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute top-24 left-[20px] bg-white border p-3 rounded-full"
      >
        left
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-24 right-[20px] border bg-white p-3 rounded-full"
      >
        right
      </button>
    </div>
  );
};

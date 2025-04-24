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
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { IconPhoto } from "@tabler/icons-react";

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
        {products ? (
          products.map((item, index) => (
            <SwiperSlide
              key={index}
              className="text-black bg-white rounded-4xl overflow-hidden "
            >
              <div className=" w-full h-full flex items-center justify-center flex-col">
                <div className="flex flex-col gap-8 items-center">
                  <div className="w-[300px] h-[250px] flex flex-col items-center justify-center">
                    {item.mainImage ? (
                      <Image
                        src={urlFor(item.mainImage).url()}
                        width={600}
                        height={50}
                        alt="manteiga"
                      />
                    ) : (
                      <IconPhoto />
                    )}
                  </div>

                  <h1 className="">{item.title}</h1>

                  <Link
                    href={`/produtos/${item.slug}`}
                    className="border-2 p-3 rounded-lg text-red-500 border-red-500 px-10 hover:bg-red-500 hover:text-white"
                  >
                    Ver produto
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <span className="text-white">Não foi encontrado nenhum produto</span>
        )}

        <div className="slider-controler flex flex-row items-center mt-14">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselSwiper;

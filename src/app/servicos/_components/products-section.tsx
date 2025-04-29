import { IProduct } from "@/@types/IProduct";
import CarouselSwiper from "@/components/carousel-swiper";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { Cheeses, Queijo } from "../../../../public/assets";

const ProductsSection = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="w-full overflow-hidden relative bg-[#f30808] py-20">
      <Image
        src={Cheeses}
        className="absolute lg:w-[250px] w-[100px] right-8 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <Image
        src={Queijo}
        className="absolute lg:w-[150px] w-[60px] lg:right-50 left-10 top-4 z-20 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <Container>
        <div className="w-full flex flex-col items-center justify-center"></div>
        <h1 className="text-center text-white font-semibold text-[3em] py-10">
          Explore os produtos Matupi
        </h1>
      </Container>
      <CarouselSwiper products={products} />
    </section>
  );
};

export default ProductsSection;

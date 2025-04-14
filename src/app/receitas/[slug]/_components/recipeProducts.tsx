import CarouselSwiper from "@/components/carousel-swiper";
import { getProducts } from "@/sanity/querys/products";
import Image from "next/image";
import React from "react";
import { WaveRed, WaveYellow } from "../../../../../public/assets";
import Container from "@/components/container";

const RecipeProducts = async () => {
  const products = await getProducts();

  return (
    <section className="w-full bg-[#f30808] mt-[200px] py-24 relative">
      <Image
        src={WaveRed}
        className="absolute -top-14  w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Container>
        <h1 className="text-white font-bold text-[3em] max-w-[600px] leading-tight">
          Confira os produtos Matupi utilizados nessa receita
        </h1>
      </Container>
      <CarouselSwiper products={products} />
    </section>
  );
};

export default RecipeProducts;

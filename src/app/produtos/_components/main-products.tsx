import Image from "next/image";
import React, { Suspense } from "react";
import { Cheeses, Tomato, WaveRed } from "../../../../public/assets";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { getRecipes } from "@/sanity/querys/recipes";
import Link from "next/link";
import Container from "@/components/container";
import { IProduct } from "@/@types/IProduct";
import { getProducts } from "@/sanity/querys/products";
import CarouselSwiper from "@/components/carousel-swiper";

const MainProducts = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <section className="w-full overflow-hidden relative py-20 bg-[#F30808]">
      <Image
        src={Tomato}
        className="absolute -top-2 lg:w-[250px] w-[100px] left-8 "
        alt="Tomate e folhas"
        quality={100}
        loading="lazy"
      />
      <Image
        src={Cheeses}
        className="absolute lg:w-[250px] w-[100px] right-8 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />
      <Container>
        <h1 className="text-white text-center lg:text-[2.5em] text-[1.5em] font-semibold">
          Veja os principais produtos Matupi
        </h1>

        <p className="text-3xl text-zinc-100 text-center mt-1">Escolha o seu</p>
      </Container>
      <Suspense
        fallback={<div className="text-white text-4xl">loading...</div>}
      >
        <CarouselSwiper products={products} />
      </Suspense>
    </section>
  );
};

export default MainProducts;

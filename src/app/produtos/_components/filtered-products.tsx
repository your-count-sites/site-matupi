"use client";
import Image from "next/image";
import React from "react";
import { WaveWhite } from "../../../../public/assets";
import Container from "@/components/container";
import {
  getFilteredRecipesByCategory,
  getRecipes,
} from "@/sanity/querys/recipes";
import Link from "next/link";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import GetFilteredRecipes from "./get-filtered-products";
import { Button } from "@/components/ui/button";

const FilteredProducts = () => {
  const [category, setCategory] = React.useState("queijos");

  return (
    <section className="w-full py-20  relative">
      <Image
        src={WaveWhite}
        className="absolute lg:-top-10 -top-3 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-[#f30808] font-normal lg:text-[2em] text-[1.5em] max-w-[600px]">
            Guia de compras. Compre aqui
          </h1>

          <div className="flex w-full justify-center items-center space-x-2 mb-4">
            <Button
              variant={category === "queijos" ? "default" : "outline"}
              onClick={() => setCategory("queijos")}
            >
              Queijos
            </Button>
            <Button
              variant={category === "manteigas" ? "default" : "outline"}
              onClick={() => setCategory("manteigas")}
            >
              Manteigas
            </Button>
            <Button
              variant={category === "requeijoes" ? "default" : "outline"}
              onClick={() => setCategory("requeijoes")}
            >
              Requeijões
            </Button>
            <Button
              variant={category === "doces" ? "default" : "outline"}
              onClick={() => setCategory("doces")}
            >
              Doces
            </Button>
          </div>
        </div>
      </Container>

      <GetFilteredRecipes category={category} />
    </section>
  );
};

export default FilteredProducts;

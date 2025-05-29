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
import GetFilteredRecipes from "./get-filtered-recipes";
import { Button } from "@/components/ui/button";

const FilteredRecipes = () => {
  // const categories = ["Lanches", "Doces", "Churrasco", "Fitness"];

  const [category, setCategory] = React.useState("salgadas");

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
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[#f30808] font-normal lg:text-[2em] text-[1.5em] max-w-[600px]">
            Encontre o prato perfeito para você
          </h1>

          <div className="flex w-full space-x-2 mb-4">
            <Button
              variant={category === "salgadas" ? "default" : "outline"}
              onClick={() => setCategory("salgadas")}
            >
              Salgadas
            </Button>
            <Button
              variant={category === "doces" ? "default" : "outline"}
              onClick={() => setCategory("doces")}
            >
              Doces
            </Button>
            <Button
              variant={category === "fitness" ? "default" : "outline"}
              onClick={() => setCategory("fitness")}
            >
              Fitness
            </Button>
            <Button
              variant={category === "churrasco" ? "default" : "outline"}
              onClick={() => setCategory("churrasco")}
            >
              Churrasco
            </Button>
          </div>
        </div>
      </Container>

      <GetFilteredRecipes category={category} />
    </section>
  );
};

export default FilteredRecipes;

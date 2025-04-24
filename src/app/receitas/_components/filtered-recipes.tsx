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
    <section className="w-full py-20 overflow-hidden relative">
      <Image
        src={WaveWhite}
        className="absolute -top-10 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-[#f30808] font-normal lg:text-[2em] text-[1.5em] max-w-[600px]">
            Encontre o prato perfeito para você
          </h1>
          {/* 
          <div className="flex flex-row gap-5">
            {categories.map((category, index) => (
              <button
                key={index}
                className="p-2 border shadow-md rounded-md lg:text-sm text-xs hover:-translate-y-1 transition-all ease-in-out duration-300 bg-white text-[#f30808] font-semibold  hover:bg-[#f30808] hover:text-white cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div> */}

          <div className="flex space-x-2 mb-4">
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

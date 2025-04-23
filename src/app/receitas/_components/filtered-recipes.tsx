import Image from "next/image";
import React from "react";
import { WaveWhite } from "../../../../public/assets";
import Container from "@/components/container";
import { getRecipes } from "@/sanity/querys/recipes";
import Link from "next/link";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

const FilteredRecipes = async () => {
  const recipes: IRecipe[] = await getRecipes();

  const cards = recipes.map((card, index) => (
    <Link href={`/receitas/${card.slug}`} className="cursor-pointer">
      <Card key={index} card={card} index={index} />
    </Link>
  ));
  const categories = ["Lanches", "Doces", "Churrasco", "Fitness"];

  return (
    <section className="w-full py-20 relative">
      <Image
        src={WaveWhite}
        className="absolute -top-10 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-[#f30808] font-normal text-[2em] max-w-[600px]">
            Encontre o prato perfeito para você
          </h1>

          <div className="flex flex-row gap-5">
            {categories.map((category, index) => (
              <button className="p-2 border shadow-md rounded-md text-sm hover:-translate-y-1 transition-all ease-in-out duration-300 bg-white text-[#f30808] font-semibold  hover:bg-[#f30808] hover:text-white cursor-pointer">
                {category}
              </button>
            ))}
          </div>
        </div>
      </Container>

      <Carousel items={cards} />
    </section>
  );
};

export default FilteredRecipes;

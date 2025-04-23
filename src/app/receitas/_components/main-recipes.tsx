import Image from "next/image";
import React from "react";
import { WaveRed } from "../../../../public/assets";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { getRecipes } from "@/sanity/querys/recipes";
import Link from "next/link";

const MainRecipes = async () => {
  const recipes: IRecipe[] = await getRecipes();

  const cards = recipes.map((card, index) => (
    <Link href={`/receitas/${card.slug}`} className="cursor-pointer">
      <Card key={index} card={card} index={index} />
    </Link>
  ));

  return (
    <section className="w-full relative py-20 bg-[#F30808]">
      <Image
        src={WaveRed}
        className="absolute -top-10 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />

      <Carousel items={cards} />
    </section>
  );
};

export default MainRecipes;

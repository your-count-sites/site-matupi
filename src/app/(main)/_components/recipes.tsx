import Image from "next/image";
import React from "react";
import { Cheeses, Queijo, Tomato, WaveRed } from "../../../../public/assets";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { getRecipes } from "@/sanity/querys/recipes";
import Link from "next/link";
import Container from "@/components/container";

const Recipes = async () => {
  const recipes: IRecipe[] = await getRecipes();

  const cards = recipes.map((card, index) => (
    <Link href={`/receitas/${card.slug}`} className="cursor-pointer">
      <Card key={index} card={card} index={index} />
    </Link>
  ));
  return (
    <section className="w-full relative py-26 mt-[100px] bg-[#F30808]">
      <Image
        src={WaveRed}
        className="absolute -top-10 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Image
        src={Tomato}
        className="absolute -top-2 w-[250px] left-8 "
        alt="Tomate e folhas"
        quality={100}
        loading="lazy"
      />
      <Image
        src={Cheeses}
        className="absolute w-[250px] right-8 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <Image
        src={Queijo}
        className="absolute w-[150px] right-50 bottom-5 z-20 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <div className="mt-10 ">
        <div className="w-full flex flex-col justify-center">
          <Container>
            <div className="w-full flex flex-col items-center justify-center gap-3 ">
              <h1 className="text-white text-center text-[4em]  font-bold">
                As melhores receitas{" "}
                <span className="text-[#FFF484]">Matupi!</span>
              </h1>

              <p className="text-gray-200 text-2xl font-medium text-center max-w-[800px]">
                Na Matupi, queremos te inspirar todos os dias! Por isso,
                reunimos receitas irresistíveis feitas com o carinho e a
                qualidade dos nossos produtos.
              </p>
            </div>
          </Container>

          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Recipes;

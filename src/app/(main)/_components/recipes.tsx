import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { Background1 } from "../../../../public/assets";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { getRecipes } from "@/sanity/querys/recipes";
import Link from "next/link";

const Recipes = async () => {
  const recipes: IRecipe[] = await getRecipes();

  const cards = recipes.map((card, index) => (
    <Link href={`/receitas/${card.slug}`} className="cursor-pointer">
      <Card key={index} card={card} index={index} />
    </Link>
  ));
  return (
    <section className="w-full relative py-32 mt-[100px]">
      <Image
        src={Background1}
        fill
        className="absolute object-cover -z-10"
        alt="Receitas"
        quality={100}
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

// const recipes = [
//   { title: "X-Caboquinho" },
//   { title: "Misto Quente Italiano" },
//   { title: "Ciabatta Royalle" },
//   { title: "Pão de queijo recheado" },
//   { title: "Queijo Coalho Empanado" },
//   { title: "Bruschetta de abacate com queijo Minas" },
//   { title: "Escondidinho de carne desfiada gratinada" },
// ];

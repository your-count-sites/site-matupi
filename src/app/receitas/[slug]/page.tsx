import { getSingleRecipe } from "@/sanity/querys/recipes";
import React from "react";
import HeroRecipe from "./_components/hero";
import { Process } from "./_components/process";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import RecipeProducts from "./_components/recipeProducts";

type Params = Promise<{
  slug: string;
}>;

const RecipeSinglePage = async (props: { params: Params }) => {
  const { slug } = await props.params;

  const recipe: IRecipe = await getSingleRecipe(slug);

  return (
    <>
      <HeroRecipe recipe={recipe} />
      <Process recipe={recipe} />
      <RecipeProducts />
    </>
  );
};

export default RecipeSinglePage;

import { getSingleRecipe } from "@/sanity/querys/recipes";
import React from "react";
import HeroRecipe from "./_components/hero";
import { Process } from "./_components/process";

type Params = Promise<{
  slug: string;
}>;

const RecipeSinglePage = async (props: { params: Params }) => {
  const { slug } = await props.params;

  const recipe: IRecipe = await getSingleRecipe(slug);

  console.log(recipe);

  return (
    <>
      <HeroRecipe recipe={recipe} />
      <Process recipe={recipe} />
    </>
  );
};

export default RecipeSinglePage;

import React from "react";
import HeroRecipes from "./_components/hero-recipes";
import MainRecipes from "./_components/main-recipes";
import FilteredRecipes from "./_components/filtered-recipes";

export default function Recipes() {
  return (
    <>
      <HeroRecipes />
      <MainRecipes />
      <FilteredRecipes />
    </>
  );
}

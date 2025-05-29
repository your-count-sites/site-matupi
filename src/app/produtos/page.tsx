import React from "react";
import HeroProducts from "./_components/hero-products";
import MainProducts from "./_components/main-products";
import FilteredProducts from "./_components/filtered-products";
import MainRecipes from "../receitas/_components/main-recipes";

const ProductsPage = () => {
  return (
    <div>
      <HeroProducts />
      <MainProducts />
      <FilteredProducts />
      <MainRecipes />
    </div>
  );
};

export default ProductsPage;

import React from "react";
import HeroProducts from "./_components/hero-products";
import MainProducts from "./_components/main-products";
import FilteredProducts from "./_components/filtered-products";

const ProductsPage = () => {
  return (
    <div>
      <HeroProducts />
      <MainProducts />
      <FilteredProducts />
    </div>
  );
};

export default ProductsPage;

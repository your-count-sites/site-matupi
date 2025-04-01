import Hero from "./_components/hero";
import Products from "./_components/products";
import Recipes from "./_components/recipes";
import Services from "./_components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Recipes />
      <Products />
      <Services />
    </>
  );
}

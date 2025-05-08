import ContactUs from "./_components/contact-us";
import ContentsSection from "./_components/contents";
import Hero from "./_components/hero";
import HistorySection from "./_components/history";
import Products from "./_components/products";
import Recipes from "./_components/recipes";

export default function Home() {
  return (
    <>
      <Hero />
      <Recipes />
      <Products />
      {/* <ContentsSection /> */}
      <HistorySection />
      <ContactUs />
    </>
  );
}

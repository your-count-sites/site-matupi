import React, { useState } from "react";

import HeroServicePage from "./_components/hero-service-page";
import BusinessSection from "./_components/business-section";
import ContactForm from "./_components/contact-form";
import { getProducts } from "@/sanity/querys/products";
import { IProduct } from "@/@types/IProduct";
import ProductsSection from "./_components/products-section";

const Servicos = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <>
      <HeroServicePage />
      <BusinessSection />
      <ContactForm />
      <ProductsSection products={products} />
    </>
  );
};
export default Servicos;

import React from "react";
import HeroProduct from "./_components/hero-product";
import { getSingleProduct } from "@/sanity/querys/products";
import { IProduct } from "@/@types/IProduct";
import Definitions from "./_components/definitions";

type Params = Promise<{
  slug: string;
}>;

const Product = async (props: { params: Params }) => {
  const { slug } = await props.params;

  const product: IProduct = await getSingleProduct(slug);

  console.log(product);

  return (
    <>
      <HeroProduct {...product} />
      <Definitions {...product} />
    </>
  );
};

export default Product;

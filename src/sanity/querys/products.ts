import { groq } from "next-sanity";
import { client } from "../lib/client";

const options = { next: { revalidate: 10 } };

export async function getProducts() {
  const query = groq`*[_type == "product"]{title, slug,  "slug": slug.current, mainImage} `;

  const data = client.fetch(query, {}, options);

  return data;
}

export async function getSingleProduct(slug: string) {
  const query = groq`*[_type == "product" && slug.current == '${slug}']{title, slug,  "slug": slug.current, nutritionFacts, ingredients, mainImage, warnings, conservation}[0]`;

  const data = client.fetch(query, {}, options);

  return data;
}

import { groq } from "next-sanity";
import { client } from "../lib/client";

const options = { next: { revalidate: 10 } };

export async function getRecipes() {
  const query = groq`*[_type == "recipe"] {title, slug,  "slug": slug.current, mainImage,  "category": category->title, prepTime, difficult}`;

  const data = client.fetch(query, {}, options);

  return data;
}

export async function getSingleRecipe(slug: string) {
  const query = groq`*[_type == "recipe" && slug.current == '${slug}']{
  title, 
  slug, 
  "slug": slug.current, 
  "category": category->title, 
  mainImage,
  prepTime,
  difficult, 
  description, 
  ingredients,
  instructions,
  servings,
  products[]->{title}}[0]`;

  const data = client.fetch(query, {}, options);

  return data;
}

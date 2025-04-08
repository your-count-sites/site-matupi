import { groq } from "next-sanity";
import { client } from "../lib/client";

const options = { next: { revalidate: 10 } };

export async function getProducts() {
  const query = groq`*[_type == "product"] `;

  const data = client.fetch(query, {}, options);

  return data;
}

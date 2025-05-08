"use client";

import { IProduct } from "@/@types/IProduct";
import CarouselSwiper from "@/components/carousel-swiper";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { getFilteredProductsByCategory } from "@/sanity/querys/products";
import { getFilteredRecipesByCategory } from "@/sanity/querys/recipes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function GetFilteredProducts({
  category,
}: {
  category: string;
}) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<IProduct[]>({
    queryKey: ["filteredProducts", category],
    queryFn: () => getFilteredProductsByCategory(category || "queijos"),
    staleTime: 60 * 1000,
    placeholderData: [],
  });

  console.log("recipes", products);

  // return <div>carousel </div>;

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="mb-4 text-blue-500">Carregando receitas...</div>
        {/* Você pode adicionar um skeleton loader aqui */}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4">
        <div className="mb-4 text-red-500">Erro: {error.message}</div>
      </div>
    );
  }

  // Agora temos certeza que recipes está definido (ou é array vazio)
  if (products!.length === 0) {
    return (
      <div className="p-4">
        <div className="mb-4">Nenhuma receita encontrada nesta categoria.</div>
      </div>
    );
  }

  // Mapeamento seguro agora que temos dados

  return (
    <div className="">
      <CarouselSwiper products={products || []} />
    </div>
  );
}

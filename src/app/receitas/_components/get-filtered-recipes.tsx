"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { getFilteredRecipesByCategory } from "@/sanity/querys/recipes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function GetFilteredRecipes({ category }: { category: string }) {
  const {
    data: recipes,
    isLoading,
    isError,
    error,
  } = useQuery<IRecipe[]>({
    queryKey: ["filteredRecipes", category],
    queryFn: () => getFilteredRecipesByCategory(category || "salgadas"),
    staleTime: 60 * 1000,
    placeholderData: [],
  });

  console.log("recipes", recipes);

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
  if (recipes!.length === 0) {
    return (
      <div className="p-4">
        <div className="mb-4">Nenhuma receita encontrada nesta categoria.</div>
      </div>
    );
  }

  // Mapeamento seguro agora que temos dados
  const cards = recipes!.map((card, index) => (
    <Link
      key={card._id} // Use _id em vez do índice para keys mais estáveis
      href={`/receitas/${card.slug}`}
      className="cursor-pointer"
    >
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="p-4">
      <Carousel items={cards} />
    </div>
  );
}

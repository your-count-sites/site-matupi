import Container from "@/components/container";
import {
  CircleAlert,
  CircleCheck,
  Clock,
  Flame,
  ForkKnife,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { EasyIcon } from "../../../../../public/assets";

const HeroRecipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <section className="w-full overflow-hidden mt-20">
      <Container>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-8 max-w-[500px]">
            <span className="px-8 py-2 bg-red-500 text-white rounded-full w-fit font-bold text-lg">
              {recipe.category}
            </span>
            <h1 className="text-[3.2em] font-medium font-(family-name:--font-sora) text-red-600 ">
              {recipe.title}
            </h1>

            <div className="flex flex-row gap-8 items-center">
              <span className="flex flex-row gap-2">
                <Clock color="red" />
                {recipe.prepTime}
              </span>

              <span className="flex flex-row gap-2">
                <ForkKnife color="red" />
                {recipe.servings}
              </span>
              <span className="flex flex-row gap-2 items-center">
                <DifficultyIcon difficult={recipe.difficult} />
                {recipe.difficult}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const DifficultyIcon = ({ difficult }: { difficult: string }) => {
  const getIcon = () => {
    switch (difficult.toLowerCase().trim()) {
      case "fácil":
        return <Image src={EasyIcon} alt="easy" width={60} />;
      case "médio":
        return <CircleAlert className="text-yellow-500" size={24} />;
      case "difícil":
        return <Flame className="text-red-500" size={24} />;
      default:
        return <CircleAlert className="text-gray-500" size={24} />;
    }
  };

  return <div>{getIcon()}</div>;
};

export default HeroRecipe;

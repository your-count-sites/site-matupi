import Container from "@/components/container";
import React from "react";

const HeroRecipes = () => {
  return (
    <div className="w-full overflow-hidden py-32">
      <Container>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-3 ">
            <span className="text-zinc-500 text-lg">Receitas</span>
            <h1 className="text-[3.5em] font-normal text-[#f30808] max-w-[600px]">
              Mergulhe nas Receitas Matupi
            </h1>
            <p className="text-lg text-zinc-600 max-w-[600px]"></p>
          </div>

          <div className="w-[400px] h-[400px] bg-[#f30808] rounded-full absolute right-0 top-0 opacity-10"></div>
        </div>
      </Container>
    </div>
  );
};

export default HeroRecipes;

import Container from "@/components/container";
import React from "react";
import { WaveRed, WaveRedUpsideDown } from "../../../../public/assets";
import Image from "next/image";

const HeroProducts = () => {
  return (
    <div className="w-full overflow-hidden py-32 relative">
      <Container>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-3 ">
            <span className="text-zinc-500 text-lg">Produtos</span>
            <h1 className="text-[3.5em] font-normal text-[#f30808] max-w-[600px]">
              Leve a Matupi para a sua casa
            </h1>
            <p className="text-lg text-zinc-600 max-w-[600px]"></p>
          </div>

          <div className="w-[400px] h-[400px] bg-[#f30808] rounded-full absolute right-0 top-0 opacity-10"></div>
        </div>
      </Container>
      <Image
        src={WaveRed}
        className="absolute -bottom-2 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
    </div>
  );
};

export default HeroProducts;
